# Architecture Guide
## RTM-AKTU Admission ERP - Phase 1

---

## 🏗️ Design Principles

### 1. **Atomic Component Structure**
Every component has a single responsibility and is composable.

```
┌─────────────────────────────────────┐
│     ATOMS (Shared)                  │
│  ├─ FormInput                       │
│  ├─ RadioGroup                      │
│  ├─ CheckboxGroup                   │
│  └─ PhotoUpload                     │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     MOLECULES (Form Sections)       │
│  ├─ PersonalInfoSection             │
│  ├─ AcademicInfoSection             │
│  ├─ ProgramSelectionSection         │
│  └─ TechnicalBackgroundSection      │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     ORGANISM (Container)            │
│  └─ EnrollmentFormContainer         │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     TEMPLATE (Page)                 │
│  └─ enrollment/page.tsx             │
└─────────────────────────────────────┘
```

### 2. **Single Source of Truth**
- Form state lives in `useEnrollmentForm` hook
- All child components receive data and callbacks
- No prop drilling: parent passes only what's needed

### 3. **Separation of Concerns**
```
app/               → Next.js pages & routing
components/        → React components
  ├─ layout/      → Page layout structure
  ├─ form/        → Business domain (enrollment form)
  └─ shared/      → Reusable UI components
hooks/             → Custom React hooks
lib/               → Constants, utilities, types
styles/            → Global CSS
```

### 4. **Scalability First**
Each component is designed to scale without major refactoring:
- ✅ Easy to add new fields
- ✅ Easy to add new sections
- ✅ Easy to add validation
- ✅ Easy to integrate with backend
- ✅ Easy to add TypeScript types

---

## 🔄 Data Flow

### Form State Lifecycle

```
┌──────────────────────────────────┐
│  EnrollmentPage                  │
│  (calls useEnrollmentForm hook)  │
└──────────────┬───────────────────┘
               │
               ▼ passes formData & setFormData
┌──────────────────────────────────┐
│  EnrollmentFormContainer         │
│  (orchestrates all sections)     │
└──────────────┬───────────────────┘
               │
    ┌──────────┼──────────┬─────────────┐
    │          │          │             │
    ▼          ▼          ▼             ▼
┌─────┐  ┌─────┐  ┌─────┐  ┌──────────┐
│ Personal │Academic │Program │Guardian etc. │
└─────┘  └─────┘  └─────┘  └──────────┘
    │          │          │             │
    └──────────┼──────────┴─────────────┘
               │
               ▼
        setFormData(field, value)
               │
               ▼
        formData updated
               │
               ▼
        Re-render affected components
```

### Form Submission Flow

```
┌──────────────────────────────────────┐
│  User clicks Submit                  │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│  handleSubmit in useEnrollmentForm   │
│  1. Prevent default                  │
│  2. Set isSubmitting = true          │
│  3. Log/Send formData                │
│  4. Reset form                       │
└──────────────┬───────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
    ▼                     ▼
Phase 1:            Phase 2+:
Console log         API POST to
                    /api/enrollment
```

---

## 🗂️ Why This Structure?

### Layout Components
**Purpose**: Structural consistency across all pages
- `Header.tsx` - Branding, logo, title
- `Navigation.tsx` - Main navigation, active states
- `Footer.tsx` - Copyright, social links

**Scalability**: Easy to add new nav links, update branding

---

### Shared Form Components
**Purpose**: Reusable UI building blocks

| Component | Use Case | Why Separate? |
|-----------|----------|---------------|
| `FormInput` | Text, email, tel, date, number | Consistent styling + focus states |
| `RadioGroup` | Single choice selection | Custom styling + accessibility |
| `CheckboxGroup` | Multi-select | Handle array state |
| `FormSelect` | Dropdown options | Consistent with other inputs |
| `FormTextarea` | Long text | Resize handling |
| `FileInput` | File uploads | Custom styling |
| `PhotoUpload` | Image preview + upload | Specialized component |

**Scalability**: 
- Add new input type? Create new component using same pattern
- Change styling? Update one component, affects all usages
- Add validation? Add to component, all instances updated

---

### Form Section Components
**Purpose**: Group related fields with business logic

| Section | Fields | Conditional Logic |
|---------|--------|-------------------|
| Personal | Name, DOB, gender, email, phone, address | None |
| Academic | GPA, year, certificates | None |
| Program | Program selection, shift preference | None |
| Guardian | Parent info, phone, income | None |
| Technical | Programming experience, languages, motivation | Show/hide language selection |
| Declaration | Checkbox confirmation | None |

**Why separate sections?**
1. Logical grouping (business domain)
2. Easy to reuse in different forms
3. Easier testing
4. Better maintainability
5. Clear visual separation

**Scalability**:
- New section? Copy existing pattern, add 20 lines of code
- Move field to different section? Just move the component
- Add validation to section? Localized change

---

### Form State Management
**Why `useEnrollmentForm` hook?**

```tsx
// Before: Scattered state
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
// ... 20+ more useState calls

// After: Centralized with custom hook
const { formData, setFormData, photoPreview, handleSubmit } = useEnrollmentForm();
```

**Benefits**:
- Single source of truth
- Easy to debug (all state in one place)
- Easy to persist to localStorage (Phase 2)
- Easy to submit to API (Phase 2)
- Reusable across multiple forms

---

## 🔌 How to Add Features

### Add New Form Field

**Step 1**: Add to `INITIAL_FORM_DATA` in `lib/constants.ts`
```ts
export const INITIAL_FORM_DATA = {
  // ... existing
  newField: '', // or [] or {} depending on type
};
```

**Step 2**: Use in component
```tsx
<FormInput
  label="New Field"
  name="newField"
  value={formData.newField}
  onChange={(value) => handleChange('newField', value)}
/>
```

That's it! ✨

### Add New Form Section

**Step 1**: Create `components/form/NewSection.tsx`
```tsx
import FormSection from '@/components/shared/FormSection';

export default function NewSection({ formData, setFormData }) {
  const handleChange = (field, value) => 
    setFormData(prev => ({ ...prev, [field]: value }));
  
  return (
    <FormSection title="New Section" icon="fa-icon">
      {/* Your fields here */}
    </FormSection>
  );
}
```

**Step 2**: Import in `EnrollmentFormContainer.tsx`
```tsx
import NewSection from '@/components/form/NewSection';

// Add to JSX
<NewSection formData={formData} setFormData={setFormData} />
```

**Step 3**: Add fields to `INITIAL_FORM_DATA`

Done! ✨

### Add Validation (Phase 2)

**Current**: HTML5 built-in validation (`required`, `type="email"`, etc.)

**Phase 2**: Add schema validation
```tsx
// lib/validation.ts
import { z } from 'zod';

export const enrollmentSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  // ... all fields
});
```

**Usage**:
```tsx
const result = enrollmentSchema.safeParse(formData);
if (!result.success) {
  // Show errors
}
```

---

## 🔮 Phase 2 Integration Points

### API Routes
```
app/api/enrollment/route.ts
  → POST /api/enrollment
  → Receives formData
  → Validates with Zod
  → Saves to Supabase
  → Returns confirmation
```

### File Upload
```
app/api/upload/route.ts
  → POST /api/upload
  → Receives file
  → Uploads to Supabase Storage
  → Returns file URL
  → Saves URL to database
```

### Current State Hook (Phase 2)
```tsx
// hooks/useEnrollmentForm.ts
const { formData, isLoading, error } = useEnrollmentForm();

// Automatically saves to database on blur
// Validates with Zod schema
// Shows error toast on validation fail
```

---

## 📊 Why No Redux/Zustand?

**Phase 1 Reality**: 
- Single form page
- No complex state interactions
- No global state needed

**Phase 2+ Reality**:
- Multiple pages (enrollment, admin, dashboard)
- User authentication state
- Cache management
- Real-time updates

**When to add Redux/Zustand**:
✅ Multiple pages need same data
✅ Complex state transformations
✅ Performance issues (unlikely before 100+ fields)
✅ Time travel debugging needed

**Current**: React hooks are perfect ✨

---

## 🎯 TypeScript Strategy

**Current**: Minimal TypeScript (allowed in tsconfig)
**Phase 2**: Gradually add types

```tsx
// Phase 1: Flexible
const [formData, setFormData] = useState({...});

// Phase 2: Add types
interface FormData {
  fullName: string;
  dob: string;
  // ... all fields
}

const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
```

**Why gradual?**
- Faster initial development
- Easier to refactor
- Type safety when needed
- No "types prevent shipping" problems

---

## 🚀 Performance Considerations

### Current
- Bundle: ~120KB gzipped ✅
- No unnecessary re-renders ✅
- No large dependencies ✅

### Potential Optimizations
- Code splitting (Phase 2+)
- Image optimization (next/image)
- Database query caching
- Response compression

### NOT needed now:
- Redux (too much boilerplate)
- GraphQL (API not yet built)
- React Query (no async data)
- Memoization (form is fast enough)

---

## ✅ Architecture Checklist

- [x] Atomic components
- [x] Single source of truth
- [x] Clear separation of concerns
- [x] Scalable folder structure
- [x] Reusable patterns
- [x] Phase 2 integration points clear
- [x] No premature optimization
- [x] AI-friendly code
- [x] Beginner-friendly patterns
- [x] Documentation

---

**Next**: See [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) for component APIs
