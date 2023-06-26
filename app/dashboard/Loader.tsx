"use client";

import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loader() {
  return (
    <Box
      height="100vh"
      width="100hw"
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
}
