import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePokemonDetail } from "@/lib/hooks";
import { CommonDescription, PokemonType } from "@/lib/types";
import { TypeChip, ErrorMessage, PokeLoader } from "@/components";
import { addPokemonDetail } from "@/lib/store/slices/pokemonDetailSlice";

interface ComponentProps {
  pokemon: CommonDescription;
  selectedTypes: PokemonType[];
}

export const PokemonCard = ({ pokemon, selectedTypes }: ComponentProps) => {
  const dispatch = useDispatch();
  const { pokemonDetail, error, loading } = usePokemonDetail(pokemon.url);

  useEffect(() => {
    if (pokemonDetail) {
      dispatch(addPokemonDetail(pokemonDetail));
    }
  }, [pokemonDetail, dispatch]);

  if (
    loading ||
    !pokemonDetail?.types.some((e) => selectedTypes.includes(e.type.name))
  ) {
    return (
      <div className="w-40">
        <PokeLoader />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (pokemonDetail) {
    return (
      <div className="flex flex-col w-40 h-50 items-center justify-between border rounded-md shadow-md border-gray-400 p-2 cursor-pointer">
        <h3 className="font-bold text-center">{pokemonDetail.name}</h3>
        <img
          className="w-24 h-2w-24 hover:scale-120 transform transition-all ease-in-out duration-200"
          src={pokemonDetail.sprites.front_default!}
          alt={pokemon.name}
        />

        <div className="flex gap-1">
          {pokemonDetail.types.map((type, index) => {
            return (
              <TypeChip
                key={index}
                label={type.type.name}
                type={type.type.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
};
