import { useState, useEffect } from "react";
import axios from "axios";
import { PokemonDetail } from "@/lib/types/Pokemon";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const usePokemonDetail = (url: string, name: string) => {
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemonDetails.pokemonDetails
  );

  const [pokemonDetail, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<PokemonDetail>(url);
        setPokemon(response.data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al obtener la información del Pokémon"
        );
      } finally {
        setLoading(false);
      }
    };

    const findDetail = pokemonDetails.find((detail) => detail.name === name);

    if (!findDetail) {
      fetchPokemon();
    } else {
      setPokemon(findDetail);
      setLoading(false);
    }
  }, [url, name, pokemonDetails]);

  return { pokemonDetail, error, loading };
};
