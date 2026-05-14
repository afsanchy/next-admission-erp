'use client';

interface FileInputProps {
  label: string;
  id?: string;
  name: string;
  accept?: string;
  onChange: (file: File | null) => void;
  required?: boolean;
  helperText?: string;
}

export default function FileInput({
  label,
  id,
  name,
  accept,
  onChange,
  required = false,
  helperText,
}: FileInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id || name} className="text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id || name}
        type="file"
        name={name}
        accept={accept}
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        required={required}
        className="px-3 py-3 border border-slate-300 rounded-lg text-sm cursor-pointer focus:border-primary-800 focus:ring-2 focus:ring-primary-800/20"
      />
      {helperText && <p className="text-xs text-slate-500">{helperText}</p>}
    </div>
  );
}
