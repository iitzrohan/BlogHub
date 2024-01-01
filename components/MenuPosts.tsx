import React, { Key, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

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
const MenuPosts = ({
  key,
  item,
  withImage,
}: {
  key: Key;
  item: Item;
  withImage: boolean;
}) => {
  return (
    // Items
    <div className="flex flex-col gap-8 mt-8 mb-14" key={key}>
      {/* Item */}
      <Link href={`/posts/${item.slug}`} className="flex items-center gap-5">
        {/* Image Container */}
        {withImage && (
          <Avatar>
            <AvatarImage src={item.user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}

        {/* Text Container */}
        <div className="flex flex-col gap-1">
          {/* Post Title */}
          <h3 className="text-lg font-medium text-softTextColor">
            {item.title}
          </h3>
          {/* Detail */}
          <div className="text-xs">
            {/* Username */}
            <span>{item.user.name}</span>
            {/* Date */}
            <span className="text-gray-500">
              {" "}
              - {item.createdAt.slice(0, 10)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
