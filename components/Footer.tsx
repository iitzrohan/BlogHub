import React from "react";
import { Icons } from "./Icons";
import { siteConfig } from "@/config/Site";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    // Container
    <div className="mt-12 py-5 px-0 flex items-center justify-between flex-col md:flex-row text-softTextColor">
      {/* Info */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Logotext */}
        <div className="text-xl md:text-2xl xl:text-3xl font-bold">
          <div className="bg-black inline rounded-md text-white">
            <span className="px-1">Blog</span>
            <span className="bg-[#FF9900] text-black rounded-md px-2">Hub</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-light">
          {
            "BlogHub is your gateway to a world of technology exploration. It's a platform sharing experiences, insights, and tips, inviting others to join in the quest for efficient coding and tech exploration."
          }
        </p>
        {/* Icons */}
        <div className="flex gap-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Icons.gitHub className="h-5 w-5" />
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Icons.twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
      {/* Links */}
      <div className="flex-1 flex gap-10 lg:gap-24 justify-between md:justify-end w-full md:w-auto text-sm sm:text-base">
        {/* List */}
        <div className="flex flex-col gap-2 font-light">
          {/* Listtitle */}
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-2 font-light">
          {/* Listtitle */}
          <span className="font-bold">Social</span>
          <Link href={siteConfig.links.github}>Github</Link>
          <Link href={siteConfig.links.twitter}>Twitter</Link>
          <Link href={siteConfig.links.linkedin}>Linkedin</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
