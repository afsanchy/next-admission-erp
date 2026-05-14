# Component Guide
## RTM-AKTU Admission ERP - Phase 1

Complete API documentation for all components.

---

## 🎯 Quick Reference

### Layout Components
- [Header](#header)
- [Navigation](#navigation)
- [Footer](#footer)

### Form Section Components
- [PersonalInfoSection](#personalinfosection)
- [AcademicInfoSection](#academicinfosection)
- [ProgramSelectionSection](#programselectionsection)
- [GuardianInfoSection](#guardianinfosection)
- [TechnicalBackgroundSection](#technicalbackgroundsection)
- [DeclarationSection](#declarationsection)

### Shared Components
- [FormInput](#forminput)
- [FormSelect](#formselect)
- [FormTextarea](#formtextarea)
- [RadioGroup](#radiogroup)
- [CheckboxGroup](#checkboxgroup)
- [FormSection](#formsection)
- [PhotoUpload](#photoupload)
- [FileInput](#fileinput)

### Containers
- [EnrollmentFormContainer](#enrollmentformcontainer)

### Hooks
- [useEnrollmentForm](#useenrollmentform)

---

## Layout Components

### Header

Displays the department logo, title, and subtitle.

#### Props
None - Renders fixed content

#### Usage
```tsx
import Header from '@/components/layout/Header';

export default function Layout() {
  return <Header />;
}
```

#### Features
- Responsive logo sizing
- Fallback if logo image not found
- Sticky positioning (in parent)
- Gradient background

---

### Navigation

Sticky navigation bar with active state highlighting.

#### Props
None - Detects current page with `usePathname()`

#### Usage
```tsx
import Navigation from '@/components/layout/Navigation';

export default function Layout() {
  return <Navigation />;
}
```

#### Navigation Links
```
- Home (/)
- Department (/department)
- Faculty (/faculty)
- Campus (/campus)
- Contact (/contact)
- Enroll (/enrollment) ← Active on form page
```

#### Features
- Active link styling
- Sticky positioning
- Mobile responsive
- FontAwesome icons

---

### Footer

Footer with copyright and social media links.

#### Props
None

#### Usage
```tsx
import Footer from '@/components/layout/Footer';

export default function Layout() {
  return <Footer />;
}
```

#### Features
- Social links (Facebook, Twitter, LinkedIn, GitHub)
- Copyright text
- Hover animations
- Mobile responsive

---

## Form Section Components

These components are used inside `EnrollmentFormContainer`.

### PersonalInfoSection

Handles personal information fields: name, DOB, gender, email, phone, address.

#### Props
```ts
interface PersonalInfoSectionProps {
  formData: any;           // Current form data object
  setFormData: (data: any) => void;  // Setter function
}
```

#### Fields
- Full Name (text, required)
- Date of Birth (date, required)
- Gender (radio: Male/Female/Other, required)
- Email (email, required)
- Phone (tel, required)
- Address (textarea, required)

#### Usage
```tsx
import PersonalInfoSection from '@/components/form/PersonalInfoSection';

export default function MyForm({ formData, setFormData }) {
  return (
    <PersonalInfoSection 
      formData={formData} 
      setFormData={setFormData} 
    />
  );
}
```

#### Internal Pattern
```tsx
const handleChange = (field, value) => {
  setFormData(prev => ({ ...prev, [field]: value }));
};
```

---

### AcademicInfoSection

Handles academic qualification fields: SSC/O-Level and HSC/A-Level information.

#### Props
```ts
interface AcademicInfoSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}
```

#### Fields
- SSC/O-Level GPA (number 0-5, required)
- SSC/O-Level Year (number YYYY, required)
- SSC/O-Level Certificate (PDF file, required)
- HSC/A-Level GPA (number 0-5, required)
- HSC/A-Level Year (number YYYY, required)
- HSC/A-Level Certificate (PDF file, required)

#### Usage
```tsx
<AcademicInfoSection formData={formData} setFormData={setFormData} />
```

---

### ProgramSelectionSection

Handles program choice and shift preference.

#### Props
```ts
interface ProgramSelectionSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}
```

#### Fields
- Program (select: BSc CSC / MSc CSC, required)
- Preferred Shift (radio: Day / Evening, required)

#### Usage
```tsx
<ProgramSelectionSection formData={formData} setFormData={setFormData} />
```

---

### GuardianInfoSection

Handles parent/guardian information.

#### Props
```ts
interface GuardianInfoSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}
```

#### Fields
- Father's Name (text, required)
- Father's Occupation (text, required)
- Mother's Name (text, required)
- Mother's Occupation (text, required)
- Guardian Phone (tel, required)
- Annual Family Income (number, optional)

#### Usage
```tsx
<GuardianInfoSection formData={formData} setFormData={setFormData} />
```

---

### TechnicalBackgroundSection

Handles programming background with conditional field visibility.

#### Props
```ts
interface TechnicalBackgroundSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}
```

#### Fields
- Studied Programming? (radio: Yes/No)
- **IF YES** - Languages Known (checkboxes: C, C++, Java, Python, Others)
- **IF YES** - Other Languages (text input)
- Why Study CSE? (textarea, required)
- Career Goal (textarea, required)
- Programming Contest? (radio: Yes/No)

#### Conditional Rendering
When "studied programming" changes:
```tsx
const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

const handleProgrammingChange = (value) => {
  handleChange('studiedProgramming', value);
  setShowTechnicalDetails(value === 'Yes');  // Toggle visibility
};
```

#### Usage
```tsx
<TechnicalBackgroundSection formData={formData} setFormData={setFormData} />
```

---

### DeclarationSection

Handles the declaration/confirmation checkbox.

#### Props
```ts
interface DeclarationSectionProps {
  formData: any;
  setFormData: (data: any) => void;
}
```

#### Fields
- Declaration (checkbox: "I confirm all information is accurate", required)

#### Styling
- Background: Light pink (`bg-rose-50`)
- Border: Rose color (`border-rose-200`)

#### Usage
```tsx
<DeclarationSection formData={formData} setFormData={setFormData} />
```

---

## Shared Components

### FormInput

Generic input field for text, email, tel, date, number types.

#### Props
```ts
interface FormInputProps {
  label: string;                    // Display label
  id?: string;                      // Optional HTML id
  name: string;                     // Form field name
  type?: string;                    // HTML input type (default: 'text')
  placeholder?: string;             // Placeholder text
  value: string | number;           // Current value
  onChange: (value: string) => void; // Change handler
  required?: boolean;               // Show required indicator
  step?: string;                    // Number step (for type='number')
  min?: string | number;            // Minimum value
  max?: string | number;            // Maximum value
}
```

#### Usage Examples

**Text Input**
```tsx
<FormInput
  label="Full Name"
  name="fullName"
  value={formData.fullName}
  onChange={(value) => handleChange('fullName', value)}
  placeholder="Enter your full name"
  required
/>
```

**Email Input**
```tsx
<FormInput
  label="Email Address"
  name="email"
  type="email"
  value={formData.email}
  onChange={(value) => handleChange('email', value)}
  required
/>
```

**Number Input**
```tsx
<FormInput
  label="GPA"
  name="gpa"
  type="number"
  step="0.01"
  min="0"
  max="5.0"
  value={formData.gpa}
  onChange={(value) => handleChange('gpa', value)}
  required
/>
```

**Date Input**
```tsx
<FormInput
  label="Date of Birth"
  name="dob"
  type="date"
  value={formData.dob}
  onChange={(value) => handleChange('dob', value)}
  required
/>
```

#### Styling
- Responsive padding
- Blue focus ring
- Smooth transitions
- Mobile-friendly touch targets

---

### FormSelect

Dropdown select component.

#### Props
```ts
interface FormSelectProps {
  label: string;
  id?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
  placeholder?: string;
}
```

#### Usage
```tsx
<FormSelect
  label="Program"
  name="program"
  value={formData.program}
  onChange={(value) => handleChange('program', value)}
  options={[
    { value: 'BSc in CSC', label: 'BSc in Computer Science' },
    { value: 'MSc in CSC', label: 'MSc in Computer Science' },
  ]}
  placeholder="Select a program"
  required
/>
```

#### From Constants
```tsx
import { PROGRAMS } from '@/lib/constants';

<FormSelect
  label="Program"
  name="program"
  value={formData.program}
  onChange={(value) => handleChange('program', value)}
  options={PROGRAMS}
  required
/>
```

---

### FormTextarea

Multi-line text input.

#### Props
```ts
interface FormTextareaProps {
  label: string;
  id?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}
```

#### Usage
```tsx
<FormTextarea
  label="Why do you want to study CSE?"
  name="whyCse"
  value={formData.whyCse}
  onChange={(value) => handleChange('whyCse', value)}
  placeholder="Tell us your motivation"
  rows={3}
  required
/>
```

#### Features
- Disabled resize for consistency
- Smooth focus states
- Responsive sizing

---

### RadioGroup

Radio button collection.

#### Props
```ts
interface RadioGroupProps {
  label: string;
  name: string;
  value: string;              // Currently selected value
  onChange: (value: string) => void;
  options: string[];          // Array of option labels
  required?: boolean;
}
```

#### Usage
```tsx
<RadioGroup
  label="Gender"
  name="gender"
  value={formData.gender}
  onChange={(value) => handleChange('gender', value)}
  options={['Male', 'Female', 'Other']}
  required
/>
```

**Output**:
- Only one option can be selected
- Returns the selected option value
- Accessible keyboard navigation

#### With Constants
```tsx
import { SHIFTS } from '@/lib/constants';  // ['Day', 'Evening']

<RadioGroup
  label="Preferred Shift"
  name="shift"
  value={formData.shift}
  onChange={(value) => handleChange('shift', value)}
  options={SHIFTS}
  required
/>
```

---

### CheckboxGroup

Multi-select checkbox collection.

#### Props
```ts
interface CheckboxGroupProps {
  label: string;
  name: string;
  values: string[];           // Array of selected values
  onChange: (values: string[]) => void;
  options: Array<{ value: string; label: string }>;
}
```

#### Usage
```tsx
<CheckboxGroup
  label="Select languages you know:"
  name="languages"
  values={formData.languages}
  onChange={(values) => handleChange('languages', values)}
  options={[
    { value: 'C', label: 'C' },
    { value: 'C++', label: 'C++' },
    { value: 'Java', label: 'Java' },
    { value: 'Python', label: 'Python' },
  ]}
/>
```

**Output**:
- Multiple options can be selected
- Returns array of selected values
- Accessible keyboard navigation

#### Behavior
```tsx
// When user clicks checkbox:
if (values.includes('C')) {
  // Remove if already selected
  onChange(values.filter(v => v !== 'C'));
} else {
  // Add if not selected
  onChange([...values, 'C']);
}
```

---

### FormSection

Wrapper component for form sections with title and optional icon.

#### Props
```ts
interface FormSectionProps {
  title: string;              // Section title
  icon?: string;              // FontAwesome icon class
  children: ReactNode;        // Section content
}
```

#### Usage
```tsx
<FormSection 
  title="Personal Information" 
  icon="fa-user"
>
  {/* Your form fields here */}
</FormSection>
```

#### Features
- Icon + title with divider line
- Consistent spacing
- Responsive layout
- Visual hierarchy

---

### PhotoUpload

Photo preview and upload component.

#### Props
```ts
interface PhotoUploadProps {
  previewUrl: string;                  // Current preview image URL
  onImageSelect: (file: File) => void; // Callback when image selected
}
```

#### Usage
```tsx
const [photoPreview, setPhotoPreview] = useState('');

const handlePhotoSelect = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    setPhotoPreview(e.target.result);
  };
  reader.readAsDataURL(file);
};

<PhotoUpload 
  previewUrl={photoPreview} 
  onImageSelect={handlePhotoSelect} 
/>
```

#### Features
- Click to upload
- Shows uploaded image as background
- Dashed border when empty
- Hover effects
- Fixed aspect ratio (4:5 - passport size)
- FileReader API integration

---

### FileInput

File upload input field.

#### Props
```ts
interface FileInputProps {
  label: string;
  id?: string;
  name: string;
  accept?: string;           // File type filter (e.g., '.pdf')
  onChange: (file: File | null) => void;
  required?: boolean;
  helperText?: string;       // Additional info text
}
```

#### Usage
```tsx
<FileInput
  label="Upload Certificate (PDF)"
  name="certificate"
  accept=".pdf"
  onChange={(file) => handleChange('certificate', file)}
  required
  helperText="Maximum file size: 10MB"
/>
```

---

### FormSection

Already documented above - wrapper for section grouping.

---

## Containers

### EnrollmentFormContainer

Main form orchestrator that brings together all sections.

#### Props
```ts
interface EnrollmentFormContainerProps {
  formData: any;
  setFormData: (data: any) => void;
  photoPreview: string;
  handlePhotoSelect: (file: File) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}
```

#### Usage
```tsx
import { useEnrollmentForm } from '@/hooks/useEnrollmentForm';
import EnrollmentFormContainer from '@/components/form/EnrollmentFormContainer';

export default function Page() {
  const { 
    formData, 
    setFormData, 
    photoPreview, 
    handlePhotoSelect, 
    handleSubmit, 
    isSubmitting 
  } = useEnrollmentForm();

  return (
    <EnrollmentFormContainer
      formData={formData}
      setFormData={setFormData}
      photoPreview={photoPreview}
      handlePhotoSelect={handlePhotoSelect}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
}
```

#### Sections Included (in order)
1. Form Header with Photo Upload
2. Personal Information
3. Academic Information
4. Program Selection
5. Guardian Information
6. Technical Background
7. Declaration
8. Submit Button

---

## Hooks

### useEnrollmentForm

Custom hook for managing enrollment form state and submission.

#### Returns
```ts
{
  formData: typeof INITIAL_FORM_DATA;     // Current form data
  setFormData: (data: any) => void;        // Update form data
  photoPreview: string;                    // Photo data URL
  setPhotoPreview: (url: string) => void; // Update preview
  handleSubmit: (e: FormEvent) => Promise<void>;  // Form submission
  handlePhotoSelect: (file: File) => void;        // Photo upload
  isSubmitting: boolean;                          // Loading state
}
```

#### Usage
```tsx
'use client';

import { useEnrollmentForm } from '@/hooks/useEnrollmentForm';

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
    // Use the values and handlers in your JSX
  );
}
```

#### Internal Logic

**Initial State**
```tsx
const [formData, setFormData] = useState(INITIAL_FORM_DATA);
const [photoPreview, setPhotoPreview] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
```

**Photo Selection**
```tsx
const handlePhotoSelect = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    setPhotoPreview(e.target.result);
  };
  reader.readAsDataURL(file);
};
```

**Form Submission**
```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  console.log('Form Data:', { ...formData, photoPreview });
  
  // Phase 2: POST to /api/enrollment
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  alert('Form submitted successfully!');
  setFormData(INITIAL_FORM_DATA);
  setPhotoPreview('');
  setIsSubmitting(false);
};
```

---

## 📝 Form Data Structure

```ts
interface FormData {
  // Personal
  fullName: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  address: string;

  // Academic
  sscGpa: string;
  sscYear: string;
  hscGpa: string;
  hscYear: string;

  // Program
  program: string;
  shift: string;

  // Guardian
  fatherName: string;
  fatherOcc: string;
  motherName: string;
  motherOcc: string;
  guardianPhone: string;
  income: string;

  // Technical
  studiedProgramming: string;  // 'Yes' | 'No'
  languages: string[];
  otherLang: string;
  whyCse: string;
  careerGoal: string;
  contest: string;  // 'Yes' | 'No'

  // Declaration
  declaration: boolean;
}
```

---

## 🎨 Styling System

All components use Tailwind CSS with custom theme colors from `tailwind.config.js`.

### Available Color Variables
```
primary-800  → #003399 (main brand color)
primary-900  → #002266 (darker)
accent       → #e63946 (red)
slate-*      → Grayscale
```

### Common Patterns
```tsx
// Focus state
focus:border-primary-800 focus:ring-2 focus:ring-primary-800/20

// Hover state
hover:bg-primary-900 hover:text-white

// Active state
active:scale-95

// Disabled state
disabled:opacity-50 disabled:cursor-not-allowed
```

---

## ✅ Accessibility

All components follow accessibility best practices:
- ✅ Proper `<label>` associations
- ✅ `required` attributes
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ ARIA attributes where needed

---

**Next**: See [ARCHITECTURE.md](./ARCHITECTURE.md) for design decisions
