'use client';

interface CheckboxGroupProps {
  label: string;
  name: string;
  values: string[];
  onChange: (values: string[]) => void;
  options: Array<{ value: string; label: string }>;
}

export default function CheckboxGroup({
  label,
  name,
  values,
  onChange,
  options,
}: CheckboxGroupProps) {
  const handleCheck = (optionValue: string) => {
    if (values.includes(optionValue)) {
      onChange(values.filter((v) => v !== optionValue));
    } else {
      onChange([...values, optionValue]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-semibold text-slate-800">{label}</label>
      <div className="flex flex-wrap gap-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={() => handleCheck(option.value)}
              className="w-4 h-4 cursor-pointer"
            />
            <span className="text-base text-slate-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
