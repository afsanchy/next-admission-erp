'use client';

import { useState } from 'react';
import { INITIAL_FORM_DATA } from '@/lib/constants';

export interface FormData {
  fullName: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  sscGpa: string;
  sscYear: string;
  hscGpa: string;
  hscYear: string;
  program: string;
  shift: string;
  fatherName: string;
  fatherOcc: string;
  motherName: string;
  motherOcc: string;
  guardianPhone: string;
  income: string;
  studiedProgramming: string;
  languages: string[];
  otherLang: string;
  whyCse: string;
  careerGoal: string;
  contest: string;
  declaration: boolean;
}

export function useEnrollmentForm() {
  const [formData, setFormData] = useState<typeof INITIAL_FORM_DATA>(INITIAL_FORM_DATA);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Phase 1: Client-side only - just log form data
    console.log('Form Data:', {
      ...formData,
      photoPreview,
    });

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message (you can replace this with a toast notification later)
    alert('Form submitted successfully! (Phase 1 - Client-side only)');

    // Reset form
    setFormData(INITIAL_FORM_DATA);
    setPhotoPreview('');
    setIsSubmitting(false);
  };

  const handlePhotoSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return {
    formData,
    setFormData,
    photoPreview,
    setPhotoPreview,
    handleSubmit,
    handlePhotoSelect,
    isSubmitting,
  };
}
