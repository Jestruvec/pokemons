import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { usePokemons } from "@/lib/hooks";
import { PokemonCard } from "./PokemonCard";
import { ErrorMessage, EmptySection } from "@/components";
import { PokemonType } from "@/lib/types/Pokemon";

interface ComponentProps {
  searchQuery: string;
  selectedTypes: PokemonType[];
  pageNum: number;
  pageSize: number;
}

export const PokemonList = ({
  searchQuery,
  selectedTypes,
  pageNum,
  pageSize,
}: ComponentProps) => {
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemonDetails.pokemonDetails
  );
  const { pokemons, error } = usePokemons();

  const pokemonsFiltered = useMemo(() => {
    const start = (pageNum - 1) * pageSize;
    const end = start + pageSize;

    return pokemons
      .filter((pokemon) => {
        const detail = pokemonDetails.find((e) => e.name === pokemon.name);
        const searchCoincidences = pokemon.name
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase());

        return detail
          ? searchCoincidences &&
              detail.types.some((type) =>
                selectedTypes.includes(type.type.name)
              )
          : searchCoincidences;
      })
      .slice(start, end);
  }, [searchQuery, pageNum, pageSize, pokemons, pokemonDetails, selectedTypes]);

  if (error) {
    return (
      <div className="h-105 md:h-125 lg:h-115 xl:h-145">
        <ErrorMessage error={error} />
      </div>
    );
  }

  return (
    <div className="flex h-105 md:h-125 lg:h-115 xl:h-145 gap-4 p-2 flex-wrap justify-center overflow-auto custom-scrollbar">
      {pokemonsFiltered.length ? (
        pokemonsFiltered.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              selectedTypes={selectedTypes}
            />
          );
        })
      ) : (
        <EmptySection message="No se encontraron resultados de búsqueda y filtrado" />
      )}
    </div>
  );
};
