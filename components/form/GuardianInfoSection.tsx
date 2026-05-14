'use client';

import FormSection from '@/components/shared/FormSection';
import FormInput from '@/components/shared/FormInput';

interface GuardianInfoSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function GuardianInfoSection({
  formData,
  setFormData,
}: GuardianInfoSectionProps) {
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <FormSection title="Guardian Information" icon="fa-users">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Father's Name"
          name="fatherName"
          value={formData.fatherName}
          onChange={(value) => handleChange('fatherName', value)}
          placeholder="Enter father's name"
          required
        />

        <FormInput
          label="Father's Occupation"
          name="fatherOcc"
          value={formData.fatherOcc}
          onChange={(value) => handleChange('fatherOcc', value)}
          placeholder="Enter occupation"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Mother's Name"
          name="motherName"
          value={formData.motherName}
          onChange={(value) => handleChange('motherName', value)}
          placeholder="Enter mother's name"
          required
        />

        <FormInput
          label="Mother's Occupation"
          name="motherOcc"
          value={formData.motherOcc}
          onChange={(value) => handleChange('motherOcc', value)}
          placeholder="Enter occupation"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Guardian Phone Number"
          name="guardianPhone"
          type="tel"
          value={formData.guardianPhone}
          onChange={(value) => handleChange('guardianPhone', value)}
          placeholder="Guardian's contact number"
          required
        />

        <FormInput
          label="Annual Family Income (Optional)"
          name="income"
          type="number"
          value={formData.income}
          onChange={(value) => handleChange('income', value)}
          placeholder="Annual income in BDT"
        />
      </div>
    </FormSection>
  );
}
