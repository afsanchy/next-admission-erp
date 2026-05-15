'use client';

import { useState } from 'react';
import { INITIAL_FORM_DATA } from '@/lib/constants';
import { supabase } from '@/lib/supabase';

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Map form data to database column names
      const applicationData = {
        full_name: formData.fullName,
        dob: formData.dob,
        gender: formData.gender,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        ssc_gpa: formData.sscGpa,
        ssc_year: formData.sscYear,
        hsc_gpa: formData.hscGpa,
        hsc_year: formData.hscYear,
        program: formData.program,
        shift: formData.shift,
        father_name: formData.fatherName,
        father_occupation: formData.fatherOcc,
        mother_name: formData.motherName,
        mother_occupation: formData.motherOcc,
        guardian_phone: formData.guardianPhone,
        family_income: formData.income,
        programming_experience: formData.studiedProgramming,
        programming_languages: formData.languages.join(', '),
        other_languages: formData.otherLang,
        why_cse: formData.whyCse,
        career_goal: formData.careerGoal,
        competition_experience: formData.contest,
        declaration_accepted: formData.declaration,
      };

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('applications')
        .insert([applicationData])
        .select();

      if (error) {
        setErrorMessage(error.message || 'An error occurred while submitting your application.');
      } else if (data && data.length > 0) {
        setIsSuccess(true);
        // Reset form
        setFormData(INITIAL_FORM_DATA);
        setPhotoPreview('');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    isSuccess,
    setIsSuccess,
    errorMessage,
    setErrorMessage,
  };
}
