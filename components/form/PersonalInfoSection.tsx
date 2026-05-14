'use client';

import FormSection from '@/components/shared/FormSection';
import FormInput from '@/components/shared/FormInput';
import RadioGroup from '@/components/shared/RadioGroup';
import FormTextarea from '@/components/shared/FormTextarea';

interface PersonalInfoSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function PersonalInfoSection({
  formData,
  setFormData,
}: PersonalInfoSectionProps) {
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <FormSection title="Personal Information" icon="fa-user">
      <FormInput
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={(value) => handleChange('fullName', value)}
        placeholder="Enter your full name"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={(value) => handleChange('dob', value)}
          required
        />

        <RadioGroup
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={(value) => handleChange('gender', value)}
          options={['Male', 'Female', 'Other']}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
          placeholder="example@mail.com"
          required
        />

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(value) => handleChange('phone', value)}
          placeholder="e.g. +880 1XXX-XXXXXX"
          required
        />
      </div>

      <FormTextarea
        label="Full Address"
        name="address"
        value={formData.address}
        onChange={(value) => handleChange('address', value)}
        placeholder="Enter your permanent address"
        rows={3}
        required
      />
    </FormSection>
  );
}
