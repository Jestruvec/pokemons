import { useEffect, useMemo, useState } from "react";
import { FaSync } from "react-icons/fa";
import {
  CustomButton,
  ErrorMessage,
  PaginationControls,
  PokemonList,
  Searchbar,
  TypeChipList,
} from "@/components";
import { PokemonType } from "@/lib/types";
import { pokemonTypes } from "@/lib/constants";
import { usePokemonByType } from "@/lib/hooks";

export const Home = () => {
  const { error, fetchPokemonsByType } = usePokemonByType();
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] =
    useState<PokemonType[]>(pokemonTypes);
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / pageSize);
  }, [totalItems, pageSize]);

  useEffect(() => {
    const getTotalItems = async () => {
      const promises = selectedTypes.map((type) => fetchPokemonsByType(type));
      const response = await Promise.all(promises);
      const allPokemons = response.flatMap((e) => e.pokemon);
      const uniquePokemons = Array.from(
        new Map(allPokemons.map((item) => [item.pokemon.name, item])).values()
      );
      const searchCoincidences = uniquePokemons.filter((pokemon) => {
        return pokemon.pokemon.name
          .toLowerCase()
          .includes(searchQuery.toLocaleLowerCase());
      });

      setTotalItems(searchCoincidences.length);
    };

    getTotalItems();
  }, [selectedTypes, fetchPokemonsByType, searchQuery]);

  const handleSearch = (inputValue: string) => {
    goToPage(1);
    setSearchQuery(inputValue);
  };

  const goToNextPage = () => {
    setPageNum((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setPageNum((prev) => prev - 1);
  };

  const goToPage = (page: number) => {
    setPageNum(page);
  };

  const changePageSize = (size: number) => {
    goToPage(1);
    setPageSize(size);
  };

  const handleTypeSelection = (type: PokemonType) => {
    goToPage(1);

    setSelectedTypes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(type)) {
        newSet.delete(type);
      } else {
        newSet.add(type);
      }
      return Array.from(newSet);
    });
  };

  const resetTypesFilter = () => {
    goToPage(1);
    setSelectedTypes(pokemonTypes);
  };

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="relative grid grid-cols-12 gap-4 p-2">
      <div className="hidden lg:block col-span-2"></div>

      <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
        <div className="flex justify-center">
          <Searchbar value={searchQuery} setValue={handleSearch} />
        </div>

        <div className="flex gap-2 justify-center">
          <h2 className="text-xl font-bold">Filtrar por tipo</h2>
          <CustomButton icon={FaSync} onClick={resetTypesFilter} />
        </div>

        <TypeChipList
          selectedTypes={selectedTypes}
          onTypeSelect={handleTypeSelection}
        />

        <PokemonList
          pageNum={pageNum}
          pageSize={pageSize}
          searchQuery={searchQuery}
          selectedTypes={selectedTypes}
        />

        <PaginationControls
          pageNum={pageNum}
          pageSize={pageSize}
          totalPages={totalPages}
          hasNextPage={pageNum < totalPages}
          hasPrevPage={pageNum > 1}
          onNextPage={goToNextPage}
          onPrevPage={goToPrevPage}
          onChangePage={goToPage}
          onChangePageSize={changePageSize}
        />
      </div>

      <div className="hidden lg:block col-span-2"></div>
    </div>
  );
};
