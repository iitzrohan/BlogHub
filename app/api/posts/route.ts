import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req: Request) => {
  const POST_PER_PAGE = 4;

  const { searchParams } = new URL(req.url ?? "");
  const pageString = searchParams.get("page");
  const page = pageString ? parseInt(pageString) || 1 : 1;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);
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
