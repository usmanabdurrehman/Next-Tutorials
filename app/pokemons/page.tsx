import axios from "axios";
import React, { Suspense } from "react";
import PokemonWrapper from "./PokemonWrapper";
import Loader from "./Loader";

export default function Pokemons() {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "12px 0" }}>Pokemon List</div>
      <Suspense fallback={<Loader />}>
        <PokemonWrapper />
      </Suspense>
    </div>
  );
}
