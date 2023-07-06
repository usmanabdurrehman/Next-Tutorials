"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { getQueryClient } from "./pokemons/getQueryClient";

const queryClient = getQueryClient();

export default function TanstackQueryWrapper({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
