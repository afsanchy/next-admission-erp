'use client';

import FormSection from '@/components/shared/FormSection';
import FormSelect from '@/components/shared/FormSelect';
import RadioGroup from '@/components/shared/RadioGroup';
import { PROGRAMS, SHIFTS } from '@/lib/constants';

interface ProgramSelectionSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function ProgramSelectionSection({
  formData,
  setFormData,
}: ProgramSelectionSectionProps) {
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <FormSection title="Program Selection" icon="fa-book">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="Program Applying For"
          name="program"
          value={formData.program}
          onChange={(value) => handleChange('program', value)}
          options={PROGRAMS}
          required
        />

        <RadioGroup
          label="Preferred Shift"
          name="shift"
          value={formData.shift}
          onChange={(value) => handleChange('shift', value)}
          options={SHIFTS}
          required
        />
      </div>
    </FormSection>
  );
}
