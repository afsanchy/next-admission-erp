'use client';

import { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  icon?: string;
  children: ReactNode;
}

export default function FormSection({ title, icon, children }: FormSectionProps) {
  return (
    <section className="mb-10">
      <h3 className="flex items-center gap-3 text-xl font-bold text-primary-800 mb-6">
        {icon && <i className={`fas ${icon}`}></i>}
        <span>{title}</span>
        <div className="flex-1 h-px bg-slate-200"></div>
      </h3>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
