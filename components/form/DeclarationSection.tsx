'use client';

interface DeclarationSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function DeclarationSection({
  formData,
  setFormData,
}: DeclarationSectionProps) {
  const handleChange = (checked: boolean) => {
    setFormData((prev: any) => ({ ...prev, declaration: checked }));
  };

  return (
    <section className="mb-10">
      <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="declaration"
            checked={formData.declaration}
            onChange={(e) => handleChange(e.target.checked)}
            required
            className="w-5 h-5 mt-1 cursor-pointer flex-shrink-0"
          />
          <span className="text-base text-slate-700">
            I confirm that all information provided is accurate and true to the best of my
            knowledge.
          </span>
        </label>
      </div>
    </section>
  );
}
