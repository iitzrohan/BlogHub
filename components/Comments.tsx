import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Comments = () => {
  const status = "authenticated";
  return (
    // Container
    <div className="mt-12">
      {/* Title */}
      <h1 className="text-[#626262] mb-8">Comments</h1>
      {status === "authenticated" ? (
        // Write
        <div className="flex items-center justify-between gap-8">
          {/* Input */}
          <Input placeholder="Write your comment" />
          {/* Button */}
          <Button type="submit" className="">
            Send
          </Button>
        </div>
      ) : (
        <Link href="/">Sign in to comment</Link>
      )}
      {/* Comments */}
      <div className="mt-12">
        {/* Comment */}
        <div className="mb-12">
          {/* User */}
          <div className="flex items-center gap-5 mb-5">
            {/* UserImageContainer */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* UserTextContainer */}
            <div className="flex flex-col gap-1 text-softTextColor">
              {/* Username */}
              <span className="text-xl font-medium">John Doe</span>
              {/* Date */}
              <span>29.12.2023</span>
            </div>
          </div>
          {/* Description */}
          <p className="text-lg font-light text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            consequuntur animi voluptatem adipisci nemo accusantium! Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Itaque, quisquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
