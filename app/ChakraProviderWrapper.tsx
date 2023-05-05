"use client";

import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function ChakraProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider>
      <Box p={4}>{children}</Box>
    </ChakraProvider>
  );
}
