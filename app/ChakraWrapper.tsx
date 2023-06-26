"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function ChakraWrapper({ children }: any) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
