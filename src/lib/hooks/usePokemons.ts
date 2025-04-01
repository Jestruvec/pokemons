import { useState, useEffect } from "react";
import axios from "axios";
import { CommonDescription, PokemonApiResponse } from "@/lib/types";

const apiUrl = import.meta.env.VITE_POKEMON_API;

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<CommonDescription[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<PokemonApiResponse>(
          `${apiUrl}/pokemon/`,
          {
            params: { limit: 2000, offset: 0 },
          }
        );

        setPokemons(response.data.results);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al obtener la información de los Pokémones"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return {
    pokemons,
    error,
    loading,
  };
};
