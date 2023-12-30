import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import React from "react";

const BlogPage = () => {
  return (
    // Container
    <div>
      {/* Title */}
      <h1 className="bg-orange-400 text-white py-1 px-2 text-center">
        Style Blog
      </h1>
      {/* Content */}
      <div className="flex gap-12 ">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
