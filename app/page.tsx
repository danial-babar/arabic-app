"use client";
import React, { useEffect, useState } from "react";
import Index from "@/pages/Index";
type Props = {};

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);
  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <Index />
    </div>
  );
};

export default Page;
