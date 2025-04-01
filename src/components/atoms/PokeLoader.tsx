import { pokeloader } from "@/assets/images";

export const PokeLoader = () => {
  return (
    <div className="rounded-md bg-gray-800/50 flex items-center justify-center">
      <img src={pokeloader} alt="poke-loader" className="w-40" />
    </div>
  );
};
