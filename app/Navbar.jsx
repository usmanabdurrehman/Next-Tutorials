"use client";

import React from "react";

import { Button, Flex, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <Flex justifyContent={"space-between"}>
      <Flex gap={2}>
        <Button onClick={() => router.replace("/home/settings")}>
          Go to settings
        </Button>
        <Button onClick={() => router.replace("/home/analytics")}>
          Go to analytics
        </Button>
        <Button onClick={() => router.replace("/home/profile")}>
          Go to profile
        </Button>
      </Flex>
      <Flex gap={2}>
        <Button onClick={() => router.prefetch("/home/analytics")}>
          Prefetch Analytics
        </Button>
      </Flex>
      <Flex gap={2}>
        <IconButton icon={<RepeatIcon />} onClick={() => router.refresh()} />
        <IconButton icon={<ArrowBackIcon />} onClick={() => router.back()} />
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={() => router.forward()}
        />
      </Flex>
    </Flex>
  );
}
