import React from "react";

interface CheckboxInputProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  name,
  checked,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-cyan-500 border-slate-700 rounded 
            focus:ring-cyan-500 focus:ring-2 bg-slate-800/50"
        />
        <label
          htmlFor={name}
          className="ml-2 text-sm font-medium text-slate-200"
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CheckboxInput;
