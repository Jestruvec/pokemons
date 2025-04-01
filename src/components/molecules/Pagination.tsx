import { useMemo } from "react";
import { paginationSizes } from "@/lib/constants/constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CustomButton, CustomSelect } from "@/components";

interface ComponentProps {
  pageNum: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
  onChangePage: (page: number) => void;
  onChangePageSize: (size: number) => void;
}

export const PaginationControls = ({
  pageNum,
  pageSize,
  hasNextPage,
  hasPrevPage,
  totalPages,
  onChangePage,
  onChangePageSize,
  onNextPage,
  onPrevPage,
}: ComponentProps) => {
  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => ({
      label: String(i + 1),
      value: i + 1,
    }));
  }, [totalPages]);

  const pageSizes = useMemo(() => {
    return paginationSizes.map((size) => ({
      label: String(size),
      value: size,
    }));
  }, []);

  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex gap-2 items-center">
        <CustomButton
          onClick={onPrevPage}
          icon={FaArrowLeft}
          disabled={!hasPrevPage}
        />
        <CustomButton
          onClick={onNextPage}
          icon={FaArrowRight}
          disabled={!hasNextPage}
        />

        <span className="text-sm md:text-base">Pagina</span>

        <CustomSelect
          id="page-select"
          options={pages}
          value={pageNum}
          setValue={(e) => onChangePage(Number(e))}
        />

        <span className="text-sm md:text-base">{`de ${totalPages}`}</span>
      </div>

      <CustomSelect
        id="page-select"
        options={pageSizes}
        value={pageSize}
        setValue={(e) => onChangePageSize(Number(e))}
      />
    </div>
  );
};
