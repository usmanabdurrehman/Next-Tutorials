import React from "react";
import { Pokemons } from "./Pokemons";
import { dehydrate } from "@tanstack/query-core";
import { getPokemons } from "./getPokemons";
import Hydrate from "../Hydrate";
import { getQueryClient } from "./getQueryClient";

export default async function PokemonWrapper() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(["GET_POKEMONS"], getPokemons);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <Pokemons />
    </Hydrate>
  );
}
