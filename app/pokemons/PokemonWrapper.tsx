import React from "react";
import { Pokemons } from "./Pokemons";
import { Pokemon } from "./types";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const getData = async () => {
  const data: Pokemon[] = [];
  const pokemonNames = ["pikachu", "jigglypuff", "marill", "clefairy"];
  for (let i = 0; i < pokemonNames.length; i++) {
    const name = pokemonNames[i];

    const res: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonDetail = await res.json();
    await sleep(500);
    const pokemon: Pokemon = {
      id: pokemonDetail?.id,
      name: pokemonDetail?.name,
      image: pokemonDetail?.sprites?.other?.dream_world?.front_default,
      types: pokemonDetail?.types?.map(({ type }: any) => type?.name),
      stats: pokemonDetail?.stats?.map((stat: any) => ({
        baseStat: stat?.base_stat,
        name: stat?.stat?.name,
      })),
    };
    data.push(pokemon);
  }
  return data;
};

export default async function PokemonWrapper() {
  const pokemons = await getData();
  return <Pokemons pokemons={pokemons} />;
}
