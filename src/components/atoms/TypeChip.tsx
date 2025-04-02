import { PokemonType } from "@/lib/types/Pokemon";
import { GetColorByPokemonType } from "@/lib/helpers/GetColorByPokemonType";

interface ComponentProps {
  label: string;
  type: PokemonType;
  selected?: boolean;
  width?: string;
  onClick?: () => void;
}

export const TypeChip = ({
  type,
  label,
  width,
  onClick,
  selected,
}: ComponentProps) => {
  return (
    <div
      className={`rounded-full  hover:scale-105 transform ease-in-out duration-200 flex justify-center text-white font-bold border-gray-400 shadow-md p-1 text-sm ${GetColorByPokemonType(
        type
      )} ${width} ${onClick && "cursor-pointer"} ${!selected && "opacity-50"}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
