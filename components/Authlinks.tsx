"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Authlinks = () => {
  const [open, setOpen] = useState(false);
  // temporary
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link className="hidden sm:block" href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className="hidden sm:block" href="/login">
            Write
          </Link>
          <span className="cursor-pointer">Logout</span>
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
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/login">Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Authlinks;
