import React from "react";
import MenuPosts from "./MenuPosts";

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

type Comment = {
  _id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  user: {
    _id: string;
    name: string;
    email: string;
    image: string;
  };
  post: {
    _id: string;
    createdAt: string;
    slug: string;
    title: string;
    desc: string;
    img: string;
    views: number;
    userEmail: string;
  };
};

const getData = async (category: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?${category}=true`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

const getComments = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments?recent=true`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

const Menu = async () => {
  const popularPosts = await getData("popular");
  const comments = await getComments();

  return (
    // Container
    <div className="w-1/4 mt-14 hidden lg:block">
      {/* Title */}
      <h1 className="text-xl xl:text-3xl border-b border-gray-600 dark:border-gray-400 w-max py-2">
        TRENDING NOW
      </h1>
      {popularPosts.posts?.map((item: Item) => (
        <MenuPosts key={item._id} item={item} />
      ))}

      {/* Title */}
      <h1 className="text-xl xl:text-3xl border-b border-gray-600 dark:border-gray-400 w-max py-2">
        RECENT COMMENTS
      </h1>

      {comments?.map((comment: Comment) => (
        <MenuPosts key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Menu;
