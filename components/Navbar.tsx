import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { siteConfig } from "@/config/Site";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./Mode-toggle";
import Authlinks from "./Authlinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      <div className="flex flex-1 gap-2">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.gitHub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.twitter className="h-3 w-3 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
      </div>
      <div className="flex-1 text-center text-4xl font-bold">
        <div className="bg-black inline-block rounded-md text-white py-0.5">
          <span className="px-1">Blog</span>
          <span className="bg-[#FF9900] text-black rounded-md px-2">Hub</span>
        </div>
      </div>
      <div className="flex flex-1 gap-2 text-xl justify-between items-center">
        <ModeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Authlinks />
      </div>
    </div>
  );
};

export default Navbar;
