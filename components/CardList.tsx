import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

const CardList = () => {
  return (
    // Container
    <div className="w-3/4">
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
      <Pagination />
    </div>
  );
};

export default CardList;
