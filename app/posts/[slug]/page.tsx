import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const getData = async (slug: string) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`;
  const res = await fetch(apiUrl, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const item = await getData(slug);

  return (
    // Container
    <div>
      {/* InfoContainer */}
      <div className="flex items-center gap-12">
        {/* Text Container */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl mb-12">
            {item.title}
          </h1>
          {/* User */}
          <div className="flex items-center gap-5">
            {/* UserImageContainer */}
            {item?.user?.image && (
              <Avatar>
                <AvatarImage src={item.user.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            )}
            {/* UserTextContainer */}
            <div className="flex flex-col gap-1 text-softTextColor">
              {/* Username */}
              <span className="text-xl font-medium">{item?.user.name}</span>
              {/* Date */}
              <span>29.12.2023</span>
            </div>
          </div>
        </div>
        {/* Image Container */}
        {item?.img && (
          <div className="flex-1 h-[350px] relative hidden lg:block">
            <Image src={item.img} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
      {/* Content */}
      <div className="flex gap-12">
        {/* Post */}
        <div className="w-full lg:w-3/4 mt-14">
          {/* Description */}
          <div
            className="[&>p]:text-lg sm:[&>p]:text-xl [&>p]:font-light [&>p]:mb-5"
            dangerouslySetInnerHTML={{ __html: item?.desc }}
          />
          {/* Comment */}
          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
