import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Icons } from "./ui/Icons";
import { siteConfig } from "@/config/Site";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./Mode-toggle";
import Authlinks from "./Authlinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      <div className="hidden lg:flex flex-1 gap-2">
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
      <Link
        href="/"
        className="flex-1 text-left lg:text-center text-2xl md:text-3xl xl:text-4xl font-bold"
      >
        <div className="bg-black inline rounded-md text-white">
          <span className="px-1">Blog</span>
          <span className="bg-[#FF9900] text-black rounded-md px-2">Hub</span>
        </div>
      </Link>
      <div className="flex flex-1 gap-4 xl:gap-5 text-lg xl:text-xl justify-end sm:justify-between items-center">
        <ModeToggle />
        <Link className="hidden sm:block" href="/">
          Homepage
        </Link>
        <Link className="hidden sm:block" href="/about">
          About
        </Link>
        <Link className="hidden sm:block" href="/contact">
          Contact
        </Link>
        <Authlinks />
      </div>
    </div>
  );
};

export default Navbar;
