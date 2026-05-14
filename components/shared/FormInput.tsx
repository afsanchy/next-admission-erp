'use client';

interface FormInputProps {
  label: string;
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  step?: string;
  min?: string | number;
  max?: string | number;
}

export default function FormInput({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  step,
  min,
  max,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id || name} className="text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id || name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        step={step}
        min={min}
        max={max}
        className="px-3 py-3 border border-slate-300 rounded-lg font-light focus:border-primary-800 focus:ring-2 focus:ring-primary-800/20 transition-all"
      />
    </div>
  );
}
