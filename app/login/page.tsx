"use client";

import { Icons } from "@/components/ui/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    // Container
    <div className="flex items-center justify-center mt-15">
      {/* Wrapper */}
      <div className="bg-softBg py-40 px-16 sm:px-24 md:px-32 lg:px-40 flex flex-col gap-20 rounded-xl">
        {/* SocialButton */}
        <Button
          variant="outline"
          className="p-5 font-bold cursor-pointer flex items-center justify-center"
          onClick={() => signIn("google")}
        >
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.google className="h-4 w-4" />
          </div>
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          className="p-5 font-bold cursor-pointer flex items-center justify-center"
          onClick={() => signIn("github")}
        >
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.gitHub className="h-4 w-4" />
          </div>
          Sign in with Github
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
