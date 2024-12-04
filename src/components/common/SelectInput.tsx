import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  error?: string;
  required?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-200 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-200
          transition-all duration-200"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SelectInput;
