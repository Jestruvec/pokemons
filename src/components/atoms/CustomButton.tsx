import { createElement } from "react";
import { IconType } from "react-icons";

interface ComponentProps {
  icon?: IconType;
  label?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const CustomButton = ({
  icon,
  label,
  disabled,
  onClick,
}: ComponentProps) => {
  return (
    <button
      className={`border p-2 rounded-md shadow-md border-gray-400 ${
        disabled ? "opacity-50" : "cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label && <span>{label}</span>}
      {icon && createElement(icon)} {/* Renderizando el icono correctamente */}
    </button>
  );
};
