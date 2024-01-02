import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req: Request) => {
  const POST_PER_PAGE = 4;
  const POST_PER_PAGE_POPULAR = 6;
  const { searchParams } = new URL(req.url ?? "");
  const pageString = searchParams.get("page");
  const page = pageString ? parseInt(pageString) || 1 : 1;
  const isPopular = searchParams.get("popular") === "true"; // Check for 'popular' query parameter

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
