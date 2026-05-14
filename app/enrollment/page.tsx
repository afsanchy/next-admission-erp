'use client';

import { useEnrollmentForm } from '@/hooks/useEnrollmentForm';
import EnrollmentFormContainer from '@/components/form/EnrollmentFormContainer';

export default function EnrollmentPage() {
  const {
    formData,
    setFormData,
    photoPreview,
    handlePhotoSelect,
    handleSubmit,
    isSubmitting,
  } = useEnrollmentForm();

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white rounded-xl shadow-card p-8 md:p-12">
        <EnrollmentFormContainer
          formData={formData}
          setFormData={setFormData}
          photoPreview={photoPreview}
          handlePhotoSelect={handlePhotoSelect}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
