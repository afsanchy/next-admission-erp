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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('🚀 STEP 1: Form submit handler called');
    setIsSubmitting(true);

    try {
      console.log('🚀 STEP 2: Building application data object');
      
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

      console.log('✅ STEP 2 COMPLETE: Data object ready');
      console.log('📋 DATA TO INSERT:', applicationData);

      console.log('🚀 STEP 3: Calling Supabase insert...');
      console.log('📍 Table: "applications"');
      console.log('🔗 Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('applications')
        .insert([applicationData])
        .select();

      console.log('✅ STEP 3 COMPLETE: Supabase responded');
      console.log('📊 Supabase Response:', { data, error });

      if (error) {
        console.error('❌ SUPABASE ERROR DETECTED');
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);
        console.error('Error Details:', JSON.stringify(error, null, 2));
        
        // Check for common errors
        if (error.code === '42501') {
          alert('❌ RLS BLOCKED: Row Level Security is preventing inserts.\n\nFix: Go to Supabase → Policies → Add INSERT policy for "applications" table.');
        } else if (error.code === '42P01') {
          alert('❌ TABLE NOT FOUND: The "applications" table does not exist in Supabase.\n\nFix: Create the table using SQL in Supabase dashboard.');
        } else if (error.code === '42703') {
          alert('❌ COLUMN NOT FOUND: One of the columns does not exist.\n\nError: ' + error.message);
        } else {
          alert(`❌ Supabase Error (${error.code}): ${error.message}`);
        }
      } else if (data && data.length > 0) {
        console.log('✅ SUCCESS: Row inserted into Supabase');
        console.log('🎉 Inserted Row:', data[0]);
        alert('✅ Form submitted successfully! Your application has been saved to Supabase.');

        // Reset form
        setFormData(INITIAL_FORM_DATA);
        setPhotoPreview('');
      } else {
        console.warn('⚠️  WARNING: No error but no data returned');
        console.log('Response:', { data, error });
        alert('⚠️  Form submitted but no confirmation. Check console.');
      }
    } catch (err) {
      console.error('❌ UNEXPECTED ERROR IN TRY/CATCH');
      console.error('Error Type:', err instanceof Error ? err.name : typeof err);
      console.error('Error Message:', err instanceof Error ? err.message : String(err));
      console.error('Full Error:', err);
      alert('❌ An unexpected error occurred. Check browser console (F12) for details.');
    } finally {
      console.log('🏁 STEP 4: Cleanup - setIsSubmitting(false)');
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
  };
}
