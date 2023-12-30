import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Featured = () => {
  return (
    // Container
    <div className="mt-7">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light">
        <b>Hey, Rohan here!</b> Discover my stories and creative ideas.
      </h1>
      {/* Post Container */}
      <div className="mt-14 flex items-center gap-12">
        {/* Img Container */}
        <div className="hidden lg:block flex-1 h-[500px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        {/* Text Container */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Post Title */}
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
            sunt.
          </h1>
          {/* Post Description */}
          <p className="text-xl font-light text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus
            in tempore aspernatur, commodi laudantium. Vero officiis
            consequuntur libero doloribus! Nisi beatae aspernatur minus. Unde
            repellendus eveniet quia officiis ab.
          </p>
          <Button className="w-max">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
