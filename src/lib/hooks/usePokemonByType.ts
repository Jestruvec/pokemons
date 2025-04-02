import { useState, useEffect } from "react";
import axios from "axios";
import { pokemonApiUrl, pokemonTypes } from "@/lib/constants/constants";
import { PokemonType } from "../types/Pokemon";
import { useDispatch } from "react-redux";
import { setPokemonsByType } from "@/lib/store/slices/pokemonDetailSlice";

export const usePokemonByType = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonsByTypes = async () => {
      setLoading(true);
      setError(null);

      try {
        const responses = await Promise.all(
          pokemonTypes.map(async (type: PokemonType) => {
            const response = await axios.get(`${pokemonApiUrl}/type/${type}`);
            return response.data;
          })
        );

        dispatch(setPokemonsByType(responses));
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al obtener los Pokémon por tipo"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonsByTypes();
  }, [dispatch]);

  return { loading, error };
};
