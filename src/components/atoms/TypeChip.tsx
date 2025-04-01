import { PokemonType } from "@/lib/types";

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
  const getColor = (): string => {
    switch (type) {
      case "normal":
        return "bg-gray-400"; // Gris
      case "grass":
        return "bg-green-500"; // Verde
      case "fire":
        return "bg-red-500"; // Rojo
      case "water":
        return "bg-blue-500"; // Azul
      case "bug":
        return "bg-green-700"; // Verde oscuro
      case "electric":
        return "bg-yellow-500"; // Amarillo
      case "rock":
        return "bg-gray-600"; // Gris oscuro
      case "ghost":
        return "bg-purple-600"; // Púrpura
      case "poison":
        return "bg-purple-400"; // Púrpura claro
      case "psychic":
        return "bg-pink-500"; // Rosa
      case "fighting":
        return "bg-red-700"; // Rojo oscuro
      case "ground":
        return "bg-yellow-700"; // Amarillo oscuro
      case "dragon":
        return "bg-indigo-600"; // Índigo
      case "flying":
        return "bg-amber-500"; // Índigo
      default:
        return "bg-gray-200"; // Por defecto, gris claro
    }
  };

  return (
    <div
      className={`rounded-full  hover:scale-105 transform ease-in-out duration-200 flex justify-center text-white font-bold border-gray-400 shadow-md p-1 text-sm ${getColor()} ${width} ${
        onClick && "cursor-pointer"
      } ${!selected && "opacity-50"}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
