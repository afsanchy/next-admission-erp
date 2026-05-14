'use client';

interface FormSelectProps {
  label: string;
  id?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
  placeholder?: string;
}

export default function FormSelect({
  label,
  id,
  name,
  value,
  onChange,
  options,
  required = false,
  placeholder = 'Select an option',
}: FormSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id || name} className="text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={id || name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="px-3 py-3 border border-slate-300 rounded-lg font-light focus:border-primary-800 focus:ring-2 focus:ring-primary-800/20 transition-all cursor-pointer"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
