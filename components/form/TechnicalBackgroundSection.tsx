'use client';

import { useState } from 'react';
import FormSection from '@/components/shared/FormSection';
import RadioGroup from '@/components/shared/RadioGroup';
import CheckboxGroup from '@/components/shared/CheckboxGroup';
import FormTextarea from '@/components/shared/FormTextarea';
import FormInput from '@/components/shared/FormInput';
import { PROGRAMMING_LANGUAGES } from '@/lib/constants';

interface TechnicalBackgroundSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function TechnicalBackgroundSection({
  formData,
  setFormData,
}: TechnicalBackgroundSectionProps) {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(
    formData.studiedProgramming === 'Yes'
  );

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleProgrammingChange = (value: string) => {
    handleChange('studiedProgramming', value);
    setShowTechnicalDetails(value === 'Yes');
  };

  return (
    <FormSection title="Technical Background" icon="fa-code">
      <RadioGroup
        label="Have you studied programming before?"
        name="studiedProgramming"
        value={formData.studiedProgramming}
        onChange={handleProgrammingChange}
        options={['Yes', 'No']}
      />

      {showTechnicalDetails && (
        <div className="bg-slate-100 p-6 rounded-lg border-l-4 border-primary-800 space-y-6">
          <CheckboxGroup
            label="Select languages you know:"
            name="languages"
            values={formData.languages}
            onChange={(values) => handleChange('languages', values)}
            options={PROGRAMMING_LANGUAGES.map((lang) => ({
              value: lang.value,
              label: lang.label,
            }))}
          />

          <div className="flex items-end gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="othersLanguage"
                checked={formData.languages.includes('Others')}
                onChange={(e) => {
                  if (e.target.checked) {
                    handleChange('languages', [...formData.languages, 'Others']);
                  } else {
                    handleChange(
                      'languages',
                      formData.languages.filter((l: string) => l !== 'Others')
                    );
                  }
                }}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-base text-slate-700">Others:</span>
            </label>
            <FormInput
              label=""
              name="otherLang"
              value={formData.otherLang}
              onChange={(value) => handleChange('otherLang', value)}
              placeholder="Specify languages"
            />
          </div>
        </div>
      )}

      <FormTextarea
        label="Why do you want to study CSE?"
        name="whyCse"
        value={formData.whyCse}
        onChange={(value) => handleChange('whyCse', value)}
        placeholder="Tell us your motivation"
        rows={3}
        required
      />

      <FormTextarea
        label="Career Goal"
        name="careerGoal"
        value={formData.careerGoal}
        onChange={(value) => handleChange('careerGoal', value)}
        placeholder="What is your career plan?"
        rows={3}
        required
      />

      <RadioGroup
        label="Have you participated in any programming contest?"
        name="contest"
        value={formData.contest}
        onChange={(value) => handleChange('contest', value)}
        options={['Yes', 'No']}
      />
    </FormSection>
  );
}
