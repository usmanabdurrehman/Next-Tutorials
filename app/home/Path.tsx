"use client";

import React from "react";

import { usePathname, useSearchParams, useParams } from "next/navigation";

export default function Path() {
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const params = useParams();

  // console.log({ params, pathname });
  return null;
}
