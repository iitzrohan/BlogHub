"use client";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import useSWR from "swr";
import { useSession } from "next-auth/react";

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

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    mutate();
  };
  return (
    // Container
    <div className="mt-12">
      {/* Title */}
      <h1 className="text-softTextColor mb-8">Comments</h1>
      {status === "authenticated" ? (
        // Write
        <div className="flex items-center justify-between gap-8">
          {/* Input */}
          <Input
            size="sm"
            isClearable
            placeholder="Write your comment"
            onChange={(e) => setDesc(e.target.value)}
          />
          {/* Button */}
          <Button color="primary" variant="ghost" onClick={handleSubmit}>
            Send
          </Button>
        </div>
      ) : (
        <Link href="/">Sign in to comment</Link>
      )}
      {/* Comments */}
      <div className="mt-12">
        {/* Comment */}
        {isLoading
          ? "loading"
          : data?.map((item: Item) => (
              <div className="mb-12" key={item._id}>
                {/* User */}
                <div className="flex items-center gap-5 mb-5">
                  {/* UserImageContainer */}
                  {item?.user?.image && (
                    <div className="flex gap-4 items-center">
                      <Avatar src={item.user.image} size="md" />
                    </div>
                  )}
                  {/* UserTextContainer */}
                  <div className="flex flex-col gap-1 text-softTextColor">
                    {/* Username */}
                    <span className="text-xl font-medium">
                      {item.user.name}
                    </span>
                    {/* Date */}
                    <span>{item.createdAt.slice(0, 10)}</span>
                  </div>
                </div>
                {/* Description */}
                <p className="text-lg font-light text-softTextColor">
                  {item.desc}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
