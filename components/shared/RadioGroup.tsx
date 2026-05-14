'use client';

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}

export default function RadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex flex-wrap gap-6">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              className="w-4 h-4 cursor-pointer"
            />
            <span className="text-base text-slate-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
