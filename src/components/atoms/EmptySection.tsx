interface ComponentProps {
  message?: string;
}

export const EmptySection = ({
  message = "Esta seccion se encuentra vacia",
}: ComponentProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <span className="text-sm font-bold">{message}</span>
    </div>
  );
};
