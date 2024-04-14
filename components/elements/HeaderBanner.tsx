"use client";

import React from "react";
import IconCancelItemDetail from "../ui/IconCancelItemDetail";
import { useRouter } from "next/navigation";

const HeaderBanner = () => {
  const handleCloseBtn = (e: any) => {
    router.push("/");
  };

  const router = useRouter();

  return (
    <>
      <article className="fixed inset-0 z-50 flex items-center justify-end w-full h-10 bg-black/80 mix-blend-normal">
        <button className="absolute mb-1 mr-2" onClick={handleCloseBtn}>
          <IconCancelItemDetail />
        </button>
      </article>
    </>
  );
};

export default HeaderBanner;
