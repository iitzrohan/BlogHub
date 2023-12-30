import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

type MenuPostsProps = {
  withImage: boolean;
};

const MenuPosts = ({ withImage }: MenuPostsProps) => {
  return (
    // Items
    <div className="flex flex-col gap-8 mt-8 mb-14">
      {/* Item */}
      <Link href="/" className="flex items-center gap-5">
        {/* Image Container */}
        {withImage && (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}

        {/* Text Container */}
        <div className="flex flex-col gap-1">
          {/* Post Title */}
          <h3 className="text-lg font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            officiis!
          </h3>
          {/* Detail */}
          <div className="text-xs">
            {/* Username */}
            <span>John Doe</span>
            {/* Date */}
            <span className="text-gray-500"> - 12.28.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {/* Image Container */}
        {withImage && (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}

        {/* Text Container */}
        <div className="flex flex-col gap-1">
          {/* Post Title */}
          <h3 className="text-lg font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            officiis!
          </h3>
          {/* Detail */}
          <div className="text-xs">
            {/* Username */}
            <span>John Doe</span>
            {/* Date */}
            <span className="text-gray-500"> - 12.28.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {/* Image Container */}
        {withImage && (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}

        {/* Text Container */}
        <div className="flex flex-col gap-1">
          {/* Post Title */}
          <h3 className="text-lg font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            officiis!
          </h3>
          {/* Detail */}
          <div className="text-xs">
            {/* Username */}
            <span>John Doe</span>
            {/* Date */}
            <span className="text-gray-500"> - 12.28.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {/* Image Container */}
        {withImage && (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}

        {/* Text Container */}
        <div className="flex flex-col gap-1">
          {/* Post Title */}
          <h3 className="text-lg font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            officiis!
          </h3>
          {/* Detail */}
          <div className="text-xs">
            {/* Username */}
            <span>John Doe</span>
            {/* Date */}
            <span className="text-gray-500"> - 12.28.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
