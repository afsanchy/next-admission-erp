// Theme & Configuration Constants
export const COLORS = {
  primary: '#003399',
  primaryDark: '#002266',
  accent: '#e63946',
  bgLight: '#f8f9fa',
  textDark: '#2d3436',
  textMuted: '#636e72',
};

export const PROGRAMS = [
  { value: 'BSc in CSC', label: 'BSc in Computer Science' },
  { value: 'MSc in CSC', label: 'MSc in Computer Science' },
];

export const GENDERS = ['Male', 'Female', 'Other'];

export const SHIFTS = ['Day', 'Evening'];

export const PROGRAMMING_LANGUAGES = [
  { value: 'C', label: 'C' },
  { value: 'C++', label: 'C++' },
  { value: 'Java', label: 'Java' },
  { value: 'Python', label: 'Python' },
];

export const FORM_SECTIONS = [
  { id: 'personal', title: 'Personal Information', icon: 'fa-user' },
  { id: 'academic', title: 'Academic Information', icon: 'fa-graduation-cap' },
  { id: 'program', title: 'Program Selection', icon: 'fa-book' },
  { id: 'guardian', title: 'Guardian Information', icon: 'fa-users' },
  { id: 'technical', title: 'Technical Background', icon: 'fa-code' },
  { id: 'declaration', title: 'Declaration', icon: null },
];

// Initial form state structure
export const INITIAL_FORM_DATA = {
  // Personal Information
  fullName: '',
  dob: '',
  gender: '',
  email: '',
  phone: '',
  address: '',

  // Academic Information
  sscGpa: '',
  sscYear: '',
  hscGpa: '',
  hscYear: '',

  // Program Selection
  program: '',
  shift: '',

  // Guardian Information
  fatherName: '',
  fatherOcc: '',
  motherName: '',
  motherOcc: '',
  guardianPhone: '',
  income: '',

  // Technical Background
  studiedProgramming: 'No',
  languages: [] as string[],
  otherLang: '',
  whyCse: '',
  careerGoal: '',
  contest: 'No',

  // Declaration
  declaration: false,
};
