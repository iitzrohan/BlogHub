import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    // Container
    <div>
      {/* InfoContainer */}
      <div className="flex items-center gap-12">
        {/* Text Container */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl mb-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
            nam?
          </h1>
          {/* User */}
          <div className="flex items-center gap-5">
            {/* UserImageContainer */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* UserTextContainer */}
            <div className="flex flex-col gap-1 text-[#626262]">
              {/* Username */}
              <span className="text-xl font-medium">John Doe</span>
              {/* Date */}
              <span>29.12.2023</span>
            </div>
          </div>
        </div>
        {/* Image Container */}
        <div className="flex-1 h-[350px] relative hidden lg:block">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>
      {/* Content */}
      <div className="flex gap-12">
        {/* Post */}
        <div className="w-full lg:w-3/4 mt-14">
          {/* Description */}
          <div className="[&>p]:text-lg sm:[&>p]:text-xl [&>p]:font-light [&>p]:mb-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt
              architecto culpa dolorem asperiores, aperiam quo natus eius
              dolorum molestias labore ea rerum ex reprehenderit soluta.
              Molestiae hic alias ullam ratione ad similique, totam vero facere,
              ut beatae modi quis.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt
              architecto culpa dolorem asperiores, aperiam quo natus eius
              dolorum molestias labore ea rerum ex reprehenderit soluta.
              Molestiae hic alias ullam ratione ad similique, totam vero facere,
              ut beatae modi quis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt
              architecto culpa dolorem asperiores, aperiam quo natus eius
              dolorum molestias labore ea rerum ex reprehenderit soluta.
              Molestiae hic alias ullam ratione ad similique, totam vero facere,
              ut beatae modi quis.
            </p>
          </div>
          {/* Comment */}
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
