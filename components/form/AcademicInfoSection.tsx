'use client';

import FormSection from '@/components/shared/FormSection';
import FormInput from '@/components/shared/FormInput';
import FileInput from '@/components/shared/FileInput';

interface AcademicInfoSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function AcademicInfoSection({
  formData,
  setFormData,
}: AcademicInfoSectionProps) {
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <FormSection title="Academic Information" icon="fa-graduation-cap">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormInput
          label="SSC / O-Level GPA"
          name="sscGpa"
          type="number"
          value={formData.sscGpa}
          onChange={(value) => handleChange('sscGpa', value)}
          placeholder="0.00"
          step="0.01"
          min="0"
          max="5.0"
          required
        />

        <FormInput
          label="SSC / O-Level Year of Passing"
          name="sscYear"
          type="number"
          value={formData.sscYear}
          onChange={(value) => handleChange('sscYear', value)}
          placeholder="YYYY"
          min="2000"
          max="2026"
          required
        />

        <FileInput
          label="Upload SSC / O-Level Certificate (PDF)"
          name="sscCert"
          accept=".pdf"
          onChange={(file) => handleChange('sscCert', file)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormInput
          label="HSC / A-Level GPA"
          name="hscGpa"
          type="number"
          value={formData.hscGpa}
          onChange={(value) => handleChange('hscGpa', value)}
          placeholder="0.00"
          step="0.01"
          min="0"
          max="5.0"
          required
        />

        <FormInput
          label="HSC / A-Level Year of Passing"
          name="hscYear"
          type="number"
          value={formData.hscYear}
          onChange={(value) => handleChange('hscYear', value)}
          placeholder="YYYY"
          min="2000"
          max="2026"
          required
        />

        <FileInput
          label="Upload HSC / A-Level Certificate (PDF)"
          name="hscCert"
          accept=".pdf"
          onChange={(file) => handleChange('hscCert', file)}
        />
      </div>
    </FormSection>
  );
}
