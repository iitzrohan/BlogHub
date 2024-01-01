"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileImage, ImageIcon, Plus, Video } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const storage = getStorage(app);

    const upload = async () => {
      if (file) {
        try {
          const name = new Date().getTime() + file.name;
          const storageRef = ref(storage, name);

          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              console.error("Error during upload:", error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                  setMedia(downloadURL);
                })
                .catch((error) => {
                  console.error("Error getting download URL:", error);
                });
            }
          );
        } catch (error) {
          console.error("Error during upload:", error);
        }
      }
    };

    upload(); // Trigger the upload function when 'file' changes
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    // Container
    <div className="flex flex-col relative">
      {/* Input */}
      <Input
        type="text"
        placeholder="Title"
        className="py-12 text-6xl border-none focus-visible:ring-offset-0 focus-visible:ring-0"
        onChange={(e) => setTitle(e.target.value)}
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
            <Input
              type="file"
              id="image"
              onChange={(e) => {
                const selectedFile = e.target.files && e.target.files[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
              className="hidden"
            />
            <Button variant="outline" size="icon">
              <label htmlFor="image">
                <FileImage />
              </label>
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
      <Button
        variant="default"
        className="absolute bottom-0 right-0"
        onClick={handleSubmit}
      >
        Publish
      </Button>
    </div>
  );
};

export default WritePage;
