"use client";

import { Hydrate as HydrationBoundary } from "@tanstack/react-query";
import React from "react";

export default function Hydrate(props: any) {
  return <HydrationBoundary {...props} />;
}
