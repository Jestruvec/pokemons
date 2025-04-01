import { pikachu_sad } from "@/assets/images";

interface ComponentProps {
  error: string;
}

export const ErrorMessage = ({ error }: ComponentProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img src={pikachu_sad} alt="pikachu-sad" />
      <span className="text-red-500">
        Lo sentimos, ha ocurrido el siguiente error:
      </span>
      <span>{error}</span>
    </div>
  );
};
