"use client";
import { Icons } from "@/components/Icons";
import { Button } from "@nextui-org/react";
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
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 max-w-md w-full bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign In</h1>
        <div className="flex flex-col gap-4">
          <Button
            variant="ghost"
            color="secondary"
            className="flex items-center justify-center gap-2"
            onClick={() => signIn("google")}
          >
            <Icons.google className="h-4 w-4" />
            Sign in with Google
          </Button>
          <Button
            variant="ghost"
            color="secondary"
            className="flex items-center justify-center gap-2"
            onClick={() => signIn("github")}
          >
            <Icons.gitHub className="h-4 w-4" />
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
