'use client';

import PersonalInfoSection from '@/components/form/PersonalInfoSection';
import AcademicInfoSection from '@/components/form/AcademicInfoSection';
import ProgramSelectionSection from '@/components/form/ProgramSelectionSection';
import GuardianInfoSection from '@/components/form/GuardianInfoSection';
import TechnicalBackgroundSection from '@/components/form/TechnicalBackgroundSection';
import DeclarationSection from '@/components/form/DeclarationSection';
import PhotoUpload from '@/components/shared/PhotoUpload';

interface EnrollmentFormContainerProps {
  formData: any;
  setFormData: (data: any) => void;
  photoPreview: string;
  handlePhotoSelect: (file: File) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

export default function EnrollmentFormContainer({
  formData,
  setFormData,
  photoPreview,
  handlePhotoSelect,
  handleSubmit,
  isSubmitting,
}: EnrollmentFormContainerProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Form Header with Photo Upload */}
      <div className="mb-8 pb-8 border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-primary-800 mb-2">
              Student Enrollment Form
            </h2>
            <p className="text-lg text-slate-600">
              Join the future of technology at RTM-AKTU
            </p>
          </div>
          <div className="md:col-span-1">
            <PhotoUpload previewUrl={photoPreview} onImageSelect={handlePhotoSelect} />
          </div>
        </div>
      </div>

      {/* Form Sections */}
      <PersonalInfoSection formData={formData} setFormData={setFormData} />
      <AcademicInfoSection formData={formData} setFormData={setFormData} />
      <ProgramSelectionSection formData={formData} setFormData={setFormData} />
      <GuardianInfoSection formData={formData} setFormData={setFormData} />
      <TechnicalBackgroundSection formData={formData} setFormData={setFormData} />
      <DeclarationSection formData={formData} setFormData={setFormData} />

      {/* Submit Button */}
      <div className="mt-10 text-center pt-8 border-t border-slate-200">
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            inline-flex items-center gap-3
            bg-primary-800 hover:bg-primary-900
            text-white font-bold text-lg
            px-10 py-4 rounded-lg
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
            disabled:opacity-50 disabled:cursor-not-allowed
            active:scale-95
          "
        >
          <span>{isSubmitting ? 'Submitting...' : 'Submit Enrollment Application'}</span>
          <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
        </button>
      </div>
    </form>
  );
}
