"use client";

import React from "react";

import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

export default function LayoutSegment() {
  const selectedlayoutSegment = useSelectedLayoutSegment();
  const selectedlayoutSegments = useSelectedLayoutSegments();
  console.log({ selectedlayoutSegment, selectedlayoutSegments });
  return null;
}
