interface ComponentProps {
  id: string;
  label?: string;
  value: string | number;
  setValue: (value: string | number) => void;
  options: Option[];
}

interface Option {
  label: string;
  value: string | number;
}

export const CustomSelect = ({
  id,
  label,
  value,
  setValue,
  options,
}: ComponentProps) => {
  return (
    <div className="flex items-center gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        className="border rounded-md p-1 border-gray-400"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
