'use client';

interface FormTextareaProps {
  label: string;
  id?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}

export default function FormTextarea({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
}: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id || name} className="text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={rows}
        className="px-3 py-3 border border-slate-300 rounded-lg font-light focus:border-primary-800 focus:ring-2 focus:ring-primary-800/20 transition-all resize-none"
      />
    </div>
  );
}
