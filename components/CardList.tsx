import React from "react";
import Card from "./Card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CardList = () => {
  return (
    // Container
    <div className="w-full lg:w-3/4">
      {/* Title */}
      <h1 className="my-12 font-bold">Recent Posts</h1>
      {/* Posts */}
      <div>
        {/* post */}
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationPrevious href="/" />
          <PaginationLink href="/" isActive>
            1
          </PaginationLink>
          <PaginationLink href="/">2</PaginationLink>
          <PaginationLink href="/">3</PaginationLink>
          <PaginationEllipsis />
          <PaginationNext href="/" />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CardList;
