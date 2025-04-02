import { useState, useCallback } from "react";
import axios from "axios";
import { PokemonType } from "@/lib/types/Pokemon";
import { pokemonApiUrl } from "@/lib/constants/constants";

export const usePokemonByType = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonsByType = useCallback(async (type: PokemonType) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<any>(`${pokemonApiUrl}/type/${type}`);
      return response.data;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al obtener la información del Pokémon"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, fetchPokemonsByType };
};
