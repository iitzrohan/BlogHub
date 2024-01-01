import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import prisma from "@/utils/connect";
import Link from "next/link";

const Featured = async () => {
  const firstPost = await prisma.post.findFirst({});

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
    <div className="mt-7">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light">
        <b>Hey, Rohan here!</b> Discover my stories and creative ideas.
      </h1>
      {/* Post Container */}
      {firstPost && (
        <div className="mt-14 flex items-center gap-12">
          {/* Img Container */}
          {firstPost.img && (
            <div className="hidden lg:block flex-1 h-[500px] relative">
              <Image src={firstPost.img} alt="" fill className="object-cover" />
            </div>
          )}
          {/* Text Container */}
          <div className="flex flex-1 flex-col gap-5">
            {/* Post Title */}
            <Link href={`/posts/${firstPost.slug}`}>
              <h1 className="text-4xl">{firstPost?.title}</h1>
            </Link>
            {/* Post Description */}
            <p className="text-xl font-light text-softTextColor">
              {getPreviewText(firstPost.desc, 60)}
            </p>
            {firstPost && (
              <Link
                href={`/posts/${firstPost.slug}`}
                className="flex justify-end"
              >
                <Button className="w-max">Read more</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
