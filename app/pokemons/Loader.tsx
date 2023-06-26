"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Loader() {
  return (
    <Flex alignItems={"center"} justifyContent="center" height="600px">
      <img
        src={
          "https://cdn.dribbble.com/users/3680841/screenshots/6880658/pikachu_dribble_gif.gif"
        }
        height={150}
        width={150}
      />
    </Flex>
  );
}
