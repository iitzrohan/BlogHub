import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req: Request) => {
  const POST_PER_PAGE = 4;
  const POST_PER_PAGE_POPULAR = 6;
  const POST_PER_PAGE_RECOMMENDED = 6;
  const { searchParams } = new URL(req.url ?? "");
  const pageString = searchParams.get("page");
  const page = pageString ? parseInt(pageString) || 1 : 1;
  const isPopular = searchParams.get("popular") === "true"; // Check for 'popular' query parameter
  const isRecommended = searchParams.get("recommended") === "true"; // Check for 'recommended' query parameter

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  try {
    let posts;
    let count;

    if (isPopular) {
      // Logic for fetching popular posts
      [posts] = await prisma.$transaction([
        prisma.post.findMany({
          ...query,
          take: POST_PER_PAGE_POPULAR,
          orderBy: { views: "desc" },
          include: { user: true },
        }),
      ]);
    } else if (isRecommended) {
      // Logic for fetching recommended posts based on comments within the last month
      const currentDate = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

      const recommendedPosts = await prisma.post.findMany({
        ...query,
        where: {
          createdAt: {
            gte: oneMonthAgo.toISOString(),
            lte: currentDate.toISOString(),
          },
          comments: {
            some: {
              createdAt: {
                gte: oneMonthAgo.toISOString(),
                lte: currentDate.toISOString(),
              },
            },
          },
        },
        include: {
          user: true,
        },
      });

      const remainingCount =
        POST_PER_PAGE_RECOMMENDED - recommendedPosts.length;

      // Fetch additional posts without comments within the last month but within the month
      const additionalPosts = await prisma.post.findMany({
        ...query,
        where: {
          createdAt: {
            gte: oneMonthAgo.toISOString(),
            lte: currentDate.toISOString(),
          },
          NOT: {
            id: {
              in: recommendedPosts.map((post) => post.id),
            },
          },
        },
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "asc", // Order by oldest created within the month
        },
        take: remainingCount,
      });

      posts = [...recommendedPosts, ...additionalPosts];
    } else {
      // Logic for fetching regular posts
      [posts, count] = await prisma.$transaction([
        prisma.post.findMany({
          ...query,
          orderBy: { createdAt: "desc" },
        }),
        prisma.post.count(),
      ]);
    }

    return new NextResponse(JSON.stringify({ posts, count, POST_PER_PAGE }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// CREATE A POST
export const POST = async (req: Request) => {
  const session = await getAuthSession();

  if (!session || !session.user) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
