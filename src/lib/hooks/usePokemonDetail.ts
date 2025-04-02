import { useState, useEffect } from "react";
import axios from "axios";
import { PokemonDetail } from "@/lib/types/Pokemon";

export const usePokemonDetail = (url: string) => {
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

    fetchPokemon();
  }, [url]);

  return { pokemonDetail, error, loading };
};
