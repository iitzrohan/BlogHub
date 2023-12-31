"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileImage, ImageIcon, Plus, Video } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    // Container
    <div className="flex flex-col relative">
      {/* Input */}
      <Input
        placeholder="Title"
        className="py-12 text-6xl border-none focus-visible:ring-offset-0 focus-visible:ring-0"
      />
      {/* Editor */}
      <div className="flex gap-5 relative flex-col">
        <Button
          variant="outline"
          size="icon"
          className="flex justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          <Plus className="h-4 w-4" />
        </Button>
        {open && (
          // Add
          <div className="flex absolute gap-5 left-16 z-50 w-full">
            <Button variant="outline" size="icon">
              <FileImage />
            </Button>
            <Button variant="outline" size="icon">
              <ImageIcon />
            </Button>
            <Button variant="outline" size="icon">
              <Video />
            </Button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell Your Story..."
          className="w-full h-[calc(100vh_-_275px)]"
        />
      </div>
      <Button variant="default" className="absolute bottom-0 right-0">
        Publish
      </Button>
    </div>
  );
};

export default WritePage;
