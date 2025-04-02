import { pokemonTypes } from "@/lib/constants/constants";
import { PokemonType } from "@/lib/types/Pokemon";
import { TypeChip } from "../atoms/TypeChip";

interface ComponentProps {
  selectedTypes: PokemonType[];
  onTypeSelect: (type: PokemonType) => void;
}

export const TypeChipList = ({
  selectedTypes,
  onTypeSelect,
}: ComponentProps) => {
  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {pokemonTypes.map((type, index) => {
        return (
          <TypeChip
            key={index}
            type={type}
            label={type}
            width="w-20"
            selected={selectedTypes.includes(type)}
            onClick={() => onTypeSelect(type)}
          />
        );
      })}
    </div>
  );
};
