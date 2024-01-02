import React, { Key } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

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

const MenuPosts = ({ item, comment }: { item?: Item; comment?: Comment }) => {
  return (
    // Items
    <Card key={item ? item._id : comment?._id} className="my-6">
      {/* Header */}
      {/* Image Container */}
      {comment && (
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={comment.user.image}
            />

            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {comment.user.name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {comment.createdAt.slice(0, 10)}
              </h5>
            </div>
          </div>
        </CardHeader>
      )}

      {/* Text Container */}
      {item && (
        <CardBody className="text-base text-default-400">
          <Link href={`/posts/${item.slug}`}>
            <p className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer">
              {item.title}
            </p>
          </Link>
        </CardBody>
      )}
      {comment && (
        <CardBody className="text-base text-default-400">
          <p className="truncate">{comment.desc.slice(0, 30)}...</p>
          <Link href={`/posts/${comment.post.slug}`}>
            <p className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer mt-6">
              {comment.post.title}
            </p>
          </Link>
        </CardBody>
      )}
      {/* Footer */}
      {item && (
        <CardFooter>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {item.user.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {item.createdAt.slice(0, 10)}
            </h5>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default MenuPosts;
