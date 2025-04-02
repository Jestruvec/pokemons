import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { removeSelectedPokemonDetail } from "@/lib/store/slices/pokemonDetailSlice";
import { TypeChip } from "../atoms/TypeChip";
import { GetColorByPokemonType } from "@/lib/helpers/GetColorByPokemonType";

export const PokemonDetailDialog = () => {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector(
    (state: RootState) => state.pokemonDetails.selectedPokemonDetail
  );

  const onClose = () => {
    dispatch(removeSelectedPokemonDetail());
  };

  if (!pokemonDetail) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-950/50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md shadow-lg w-96 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold">{`#${pokemonDetail.id} ${pokemonDetail.name}`}</h3>

        <div
          className={`flex flex-wrap justify-center ${GetColorByPokemonType(
            pokemonDetail.types[0].type.name
          )}`}
        >
          <img
            className="w-28"
            src={pokemonDetail.sprites.front_default}
            alt={pokemonDetail.name}
          />
        </div>

        <div className="flex gap-2">
          {pokemonDetail.types.map((type) => {
            return <TypeChip type={type.type.name} label={type.type.name} />;
          })}
        </div>

        <ul>
          <li>
            <span className="font-bold">Experiencia base: </span>
            <span>{pokemonDetail.base_experience}</span>
          </li>
          <li>
            <span className="font-bold">Altura: </span>
            <span>{pokemonDetail.height} ft</span>
          </li>
          <li>
            <span className="font-bold">Peso: </span>
            <span>{pokemonDetail.weight} lb</span>
          </li>
          <li>
            <span className="font-bold">Movimientos: </span>
            <ul className="h-24 overflow-auto">
              {pokemonDetail.moves.map((move) => {
                return (
                  <li className="border-b border-gray-400">
                    <span>{move.move.name}</span>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
