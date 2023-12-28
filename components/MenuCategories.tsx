import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    // CategoryList
    <div className="mt-8 mb-14 flex flex-wrap gap-5">
      <Link
        href="/blog?cat=style"
        className="py-2 px-8 rounded-xl text-sm bg-[#789cff]"
      >
        Style
      </Link>
      <Link href="/blog" className="py-2 px-6 rounded-xl text-sm bg-[#ff7887]">
        Fashion
      </Link>
      <Link href="/blog" className="py-2 px-6 rounded-xl text-sm bg-[#7fb881]">
        Food
      </Link>
      <Link href="/blog" className="py-2 px-6 rounded-xl text-sm bg-[#ff7857]">
        Travel
      </Link>
      <Link href="/blog" className="py-2 px-6 rounded-xl text-sm bg-[#ffb14f]">
        Culture
      </Link>
      <Link href="/blog" className="py-2 px-6 rounded-xl text-sm bg-[#775aec]">
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
