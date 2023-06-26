"use client";

import React from "react";
import {
  Badge,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Pokemon } from "./types";

const TYPE_COLOR_MAP: any = {
  normal: "gray",
  fire: "orange",
  grass: "green",
  poison: "purple",
  flying: "gray",
  water: "cyan",
  bug: "green",
  fairy: "pink",
  electric: "yellow",
  ground: "orange",
  dragon: "purple",
};

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card width={"400px"} boxShadow={"2xl"} position="relative">
      <CardBody>
        <Flex justifyContent={"center"}>
          <Image src={pokemon?.image} borderRadius="lg" />
        </Flex>
        <Stack mt="6" spacing="3">
          <Heading size="md">{pokemon?.name?.toUpperCase()}</Heading>
        </Stack>
        <Stack direction="row">
          {pokemon?.types?.map((type) => (
            <Badge
              color={`${TYPE_COLOR_MAP[type]}.500`}
              bg={`${TYPE_COLOR_MAP[type]}.300`}
              key={type}
            >
              {type}
            </Badge>
          ))}
        </Stack>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt={4}>
          {pokemon?.stats?.map(({ baseStat, name }) => (
            <GridItem key={name}>
              <Stack direction={"row"}>
                <Badge colorScheme={baseStat < 44 ? "red" : "green"}>
                  {baseStat}
                </Badge>
                <Badge colorScheme={"blackAlpha"}>{name}</Badge>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </CardBody>
    </Card>
  );
}

export function Pokemons({ pokemons }: { pokemons: Pokemon[] | undefined }) {
  return (
    <div>
      <Grid
        templateColumns={"repeat( auto-fill, minmax(400px, 1fr) )"}
        mt={4}
        gap={4}
      >
        {pokemons?.map((pokemon: Pokemon, index) => (
          <GridItem key={pokemon.id} w="100%">
            <PokemonCard pokemon={pokemon} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
