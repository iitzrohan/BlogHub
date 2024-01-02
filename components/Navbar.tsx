import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { siteConfig } from "@/config/Site";
import { ThemeSwitcher } from "./Mode-toggle";
import Authlinks from "./Authlinks";
import { NavbarBrand } from "@nextui-org/react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Navbar = () => {
  return (
    <NextUINavbar
      className="[&_header]:max-w-none"
      shouldHideOnScroll
      isBordered
    >
      <NavbarContent className="hidden lg:flex">
        <NavbarItem className="mr-2">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Icons.gitHub className="h-5 w-5" />
          </Link>
        </NavbarItem>
        <NavbarItem className="ml-2">
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Icons.twitter className="h-5 w-5 fill-current" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarBrand className="justify-start lg:justify-center">
        <Link href="/" className="text-2xl md:text-3xl xl:text-4xl font-bold">
          <div className="bg-black inline rounded-md text-white">
            <span className="px-1">Blog</span>
            <span className="bg-[#FF9900] text-black rounded-md px-2">Hub</span>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent data-justify="end">
        <ThemeSwitcher />
        <NavbarItem className="hidden sm:flex">
          <Link href="/">Homepage</Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link href="/contact">Contact</Link>
        </NavbarItem>
        <Authlinks />
      </NavbarContent>
    </NextUINavbar>
  );
};

export default Navbar;
