import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    // Container
    <div className="mb-12 flex items-center gap-12">
      {/* Image Container */}
      <div className="flex-1 h-[350px] relative hidden xl:block">
        <Image
          src="/p1.jpeg"
          alt=""
          fill
          className="object-cover hidden xl:block"
        />
      </div>
      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Detail */}
        <div>
          {/* Date */}
          <span className="text-gray-500">28.12.2023 - </span>
          {/* Category */}
          <span className="text-red-700 font-medium">CULTURE</span>
        </div>
        {/* Title */}
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            impedit.
          </h1>
        </Link>
        {/* Description */}
        <p className="text-lg font-light text-[#626262]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          dolore deserunt sit, laboriosam iusto delectus! Eaque ratione
          consequatur illum ullam, necessitatibus mollitia, recusandae quaerat
          commodi consequuntur omnis officia enim odit!
        </p>
        <Link
          href="/"
          className="text-lg font-light text-[#626262] border-b border-red-700 border-solid w-max py-0.5"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
