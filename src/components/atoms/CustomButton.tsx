import { createElement } from "react";
import { IconType } from "react-icons";

interface ComponentProps {
  icon?: IconType;
  label?: string;
  disabled?: boolean;
  type?: "success" | "danger" | "warning" | "info";
  onClick: () => void;
}

export const CustomButton = ({
  icon,
  label,
  disabled,
  onClick,
  type,
}: ComponentProps) => {
  const getColor = () => {
    switch (type) {
      case "info":
        return "bg-blue-500";
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "danger":
        return "bg-red-500";
      default:
        return "";
    }
  };

  return (
    <button
      className={`border p-2 rounded-md shadow-md border-gray-400 ${
        disabled ? "opacity-50" : "cursor-pointer"
      } ${getColor()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label && (
        <span className={`font-bold ${type && "text-white"}`}>{label}</span>
      )}
      {icon && createElement(icon)}
    </button>
  );
};
