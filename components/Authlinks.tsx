"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Authlinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link className="hidden sm:block" href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className="hidden sm:block" href="/write">
            Write
          </Link>
          <span className="cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </>
      )}
      <div
        className="w-5 h-4 flex sm:hidden flex-col justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-0.5 bg-black dark:bg-white"></div>
        <div className="w-full h-0.5 bg-black dark:bg-white"></div>
        <div className="w-full h-0.5 bg-black dark:bg-white"></div>
      </div>
      {open && (
        <div className="absolute top-24 left-0 bg-white dark:bg-black h-[calc(100vh_-_100px)] w-full flex flex-col items-center justify-center gap-12 text-4xl">
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer" onClick={() => signOut()}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Authlinks;
