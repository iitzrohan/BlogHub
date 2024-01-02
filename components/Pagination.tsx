"use client";
import { Pagination as NextUIPagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, total }: { page: number; total: number }) => {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <NextUIPagination
        total={total}
        page={page}
        color="primary"
        showControls
        onChange={(newPage: number) => router.push(`?page=${newPage}`)}
      />
    </div>
  );
};

export default Pagination;
