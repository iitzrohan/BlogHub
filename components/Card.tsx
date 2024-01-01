import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";

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

const Card = ({ key, item }: { key: Key; item: Item }) => {
  const removeHTMLTags = (str: string) => {
    if (str === null || str === "") {
      return "";
    } else {
      // Remove HTML tags using regex
      return str.replace(/<[^>]*>/g, "");
    }
  };

  const getPreviewText = (str: string, maxLength: number) => {
    const textWithoutTags = str.replace(/<\s*\/?p\s*[^>]*>/g, " ");
    const textWithoutHTML = textWithoutTags.replace(/<[^>]+>/g, "");
    const words = textWithoutHTML.split(/\s+/);
    const truncatedWords = words.slice(0, maxLength);
    let truncatedText = truncatedWords.join(" ");
    truncatedText = truncatedText.replace(/[.,;:!?]*$/, "");
    if (words.length > maxLength) {
      truncatedText += "...";
    }
    return truncatedText;
  };

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
          {getPreviewText(item.desc, 40)}
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
