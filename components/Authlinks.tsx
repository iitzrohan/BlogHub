"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Authlinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <NavbarItem>
          <Link className="hidden sm:block" href="/login">
            Login
          </Link>
        </NavbarItem>
      ) : (
        <>
          <NavbarItem>
            <Link className="hidden sm:block" href="/write">
              Write
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hidden sm:block"
              href="/"
              onClick={() => signOut()}
            >
              Logout
            </Link>
          </NavbarItem>
        </>
      )}
      <NavbarItem>
        <NavbarMenuToggle
          aria-label={open ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setOpen(!open)}
        />
      </NavbarItem>

      {open && (
        <NavbarMenu className="items-center justify-center gap-12">
          <NavbarMenuItem>
            <Link className="w-full" href="/" onClick={() => setOpen(!open)}>
              Homepage
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full"
              href="/about"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full"
              href="/contact"
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
          </NavbarMenuItem>
          {status === "unauthenticated" ? (
            <NavbarMenuItem>
              <Link href="/login" onClick={() => setOpen(!open)}>
                Login
              </Link>
            </NavbarMenuItem>
          ) : (
            <>
              <NavbarMenuItem>
                <Link href="/write" onClick={() => setOpen(!open)}>
                  Write
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link href="/" onClick={() => signOut()}>
                  Logout
                </Link>
              </NavbarMenuItem>
            </>
          )}
        </NavbarMenu>
      )}
    </>
  );
};

export default Authlinks;
