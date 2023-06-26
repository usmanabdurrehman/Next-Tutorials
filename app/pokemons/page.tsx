import axios from "axios";
import React, { Suspense } from "react";
import PokemonWrapper from "./PokemonWrapper";
import LocalLoader from "./LocalLoader";

export default function Pokemons() {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "12px 0" }}>
        <h2
          style={{ fontWeight: "bold !important", fontSize: "28px !important" }}
        >
          Pokemon List
        </h2>
      </div>
      <Suspense fallback={<LocalLoader />}>
        <PokemonWrapper />
      </Suspense>
    </div>
  );
}
