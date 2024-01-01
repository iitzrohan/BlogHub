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

const Menu = async () => {
  const popularPosts = await getData("popular");
  const recommendedPosts = await getData("recommended");

  return (
    // Container
    <div className="w-1/4 mt-14 hidden lg:block">
      {/* Subtitle */}
      <h2 className="text-softTextColor text-base font-normal">
        {"What's hot"}
      </h2>
      {/* Title */}
      <h1 className="text-3xl">Most Popular</h1>
      {popularPosts.posts?.map((item: Item) => (
        <MenuPosts key={item._id} item={item} withImage={false} />
      ))}
      {/* Subtitle */}
      <h2 className="text-softTextColor text-base font-normal">
        Chosen by the editor
      </h2>
      {/* Title */}
      <h1 className="text-3xl">Editors Pick</h1>
      {recommendedPosts.posts?.map((item: Item) => (
        <MenuPosts key={item._id} item={item} withImage={true} />
      ))}
    </div>
  );
};

export default Menu;
