import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const CategoryList = () => {
  return (
    // Container
    <div>
      {/* Title */}
      <h1 className="my-12">Popular Categories</h1>
      {/* Categories */}
      <div className="flex flex-wrap justify-between gap-5">
        {/* Category */}
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-36 h-20 rounded justify-center bg-[#57c4ff31]"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-36 h-20 rounded justify-center bg-[#da85c731]"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-36 h-20 rounded justify-center bg-[#7fb88133]"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          food
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-36 h-20 rounded justify-center bg-[#ff795736]"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          travel
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-36 h-20 rounded justify-center bg-[#ffb04f45]"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          culture
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-36 h-20 rounded justify-center bg-[#5e4fff31]"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
