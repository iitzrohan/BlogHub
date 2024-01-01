import React from "react";
import Card from "./Card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Item = {
  _id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  userEmail: string;
  user: {
    _id: string;
    name: string;
    email: string;
    image: string;
  };
};

const getData = async (page: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

const CardList = async ({ page }: { page: number }) => {
  const { posts, count, POST_PER_PAGE } = await getData(page);

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const totalPages = Math.ceil(count / POST_PER_PAGE);

  const MAX_VISIBLE_PAGES = 5;

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  let displayedPages: number[] = [];
  if (totalPages <= MAX_VISIBLE_PAGES) {
    displayedPages = pageNumbers; // Show all pages if total pages are less than or equal to max visible
  } else {
    const firstPages = pageNumbers.slice(0, 2); // Get the first two pages
    const lastPages = pageNumbers.slice(-2); // Get the last two pages
    displayedPages = [...firstPages, -1, ...lastPages]; // Combine first, ellipsis, and last pages
  }

  return (
    // Container
    <div className="w-full lg:w-3/4">
      {/* Title */}
      <h1 className="my-12 font-bold">Recent Posts</h1>
      {/* Posts */}
      <div>
        {/* post */}
        <div>
          {posts?.map((item: Item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
      <Pagination>
        <PaginationContent className="gap-8">
          {hasPrev && <PaginationPrevious href={`/?page=${page - 1}`} />}
          {displayedPages.map((pageNumber, index) => (
            <React.Fragment key={index}>
              {pageNumber === -1 ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href={`/?page=${pageNumber}`}
                  isActive={pageNumber === page}
                >
                  {pageNumber}
                </PaginationLink>
              )}
            </React.Fragment>
          ))}
          {hasNext && <PaginationNext href={`/?page=${page + 1}`} />}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CardList;
