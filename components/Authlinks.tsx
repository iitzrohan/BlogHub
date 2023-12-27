import Link from "next/link";
import React from "react";

const Authlinks = () => {
  // temporary
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/login">Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
    </>
  );
};

export default Authlinks;
