import React from "react";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";

const Menu = () => {
  return (
    <div className="w-1/4 mt-14">
      {/* Subtitle */}
      <h2 className="text-gray-500 text-base font-normal">{"What's hot"}</h2>
      {/* Title */}
      <h1 className="text-3xl">Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* Subtitle */}
      <h2 className="text-gray-500 text-base font-normal">Discover by topic</h2>
      {/* Title */}
      <h1 className="text-3xl">Categories</h1>
      <MenuCategories />
      {/* Subtitle */}
      <h2 className="text-gray-500 text-base font-normal">
        Chosen by the editor
      </h2>
      {/* Title */}
      <h1 className="text-3xl">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
