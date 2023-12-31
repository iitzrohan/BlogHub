import Image from "next/image";
import Link from "next/link";
import React from "react";

type Item = {
  _id: string;
  createdAt: string;
  slug: String;
  title: string;
  desc: string;
  img: string;
  userEmail: String;
  user: {
    _id: string;
    name: string;
    email: string;
    image: string;
  };
};

const Card = ({ key, item }: { key: string; item: Item }) => {
  return (
    // Container
    <div className="mb-12 flex items-center gap-12" key={key}>
      {/* Image Container */}
      {item?.img && (
        <div className="flex-1 h-[350px] relative hidden xl:block">
          <Image
            src={item.img}
            alt=""
            fill
            className="object-cover hidden xl:block"
          />
        </div>
      )}
      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Detail */}
        <div>
          {/* Date */}
          <span className="text-softTextColor">
            {item.createdAt.slice(0, 10)}
          </span>
        </div>
        {/* Title */}
        <Link href={`/posts/${item.slug}`}>
          <h1 className="text-2xl font-bold">{item.title}</h1>
        </Link>
        {/* Description */}
        <p className="text-lg font-light text-softTextColor">
          {item.desc.slice(0, 60)}
        </p>
        <Link
          href={`/posts/${item.slug}`}
          className="text-lg font-light text-softTextColor border-b border-red-700 border-solid w-max py-0.5"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
