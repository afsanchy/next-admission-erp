'use client';

import { useRef } from 'react';

interface PhotoUploadProps {
  previewUrl: string;
  onImageSelect: (file: File) => void;
}

export default function PhotoUpload({ previewUrl, onImageSelect }: PhotoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="text-center">
      <label className="block text-sm font-bold text-slate-800 mb-3">
        Passport Size Photo
      </label>
      <div
        onClick={handleClick}
        className={`
          w-32 h-44 mx-auto border-2 border-dashed rounded-lg cursor-pointer
          flex flex-col items-center justify-center transition-all
          ${
            previewUrl
              ? `border-primary-800 bg-cover bg-center`
              : 'border-slate-300 bg-slate-100 hover:border-primary-800 hover:bg-slate-200'
          }
        `}
        style={previewUrl ? { backgroundImage: `url(${previewUrl})` } : {}}
      >
        {!previewUrl && (
          <>
            <i className="fas fa-user-circle text-3xl text-slate-400 mb-2"></i>
            <span className="text-xs font-semibold text-slate-600 px-2">Click to upload</span>
          </>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}
