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
  isSuccess: boolean;
  setIsSuccess: (success: boolean) => void;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
}

export default function EnrollmentFormContainer({
  formData,
  setFormData,
  photoPreview,
  handlePhotoSelect,
  handleSubmit,
  isSubmitting,
  isSuccess,
  setIsSuccess,
  errorMessage,
  setErrorMessage,
}: EnrollmentFormContainerProps) {
  // Success Screen
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fas fa-check text-4xl text-green-600"></i>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-primary-900 mb-4">
            Application submitted successfully
          </h1>

          {/* Subtext */}
          <p className="text-xl text-slate-600 mb-8">
            We will contact you soon
          </p>

          {/* Details */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left">
            <p className="text-sm text-slate-700 mb-2">
              <span className="font-semibold">Your application has been received and saved.</span>
            </p>
            <p className="text-sm text-slate-600">
              Our admission team will review your submission and contact you within 5-7 business days.
            </p>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => setIsSuccess(false)}
            className="
              inline-flex items-center gap-2
              bg-primary-800 hover:bg-primary-900
              text-white font-semibold
              px-8 py-3 rounded-lg
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              active:scale-95
            "
          >
            <i className="fas fa-arrow-left"></i>
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  // Error Display
  if (errorMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full text-center">
          {/* Error Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <i className="fas fa-exclamation text-4xl text-red-600"></i>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Something went wrong
          </h1>

          <p className="text-slate-600 mb-8">
            {errorMessage}
          </p>

          {/* Retry Button */}
          <button
            onClick={() => setErrorMessage('')}
            className="
              inline-flex items-center gap-2
              bg-primary-800 hover:bg-primary-900
              text-white font-semibold
              px-8 py-3 rounded-lg
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              active:scale-95
            "
          >
            <i className="fas fa-redo"></i>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Form Display
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
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0
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
