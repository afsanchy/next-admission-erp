## 🎯 PHASE 1 Setup Instructions
## Enrollment Form Migration Complete

> Your existing HTML/CSS/JS form has been successfully converted to Next.js + React with 100% design preservation.

---

## ✅ Pre-Flight Checklist

Before you start working with the new project:

- [ ] Node.js 18+ installed (`node --version` to check)
- [ ] npm or yarn available
- [ ] Terminal/Command Prompt ready
- [ ] Code editor (VS Code recommended)
- [ ] Git installed (optional, but recommended)

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Open Terminal

```bash
# Windows PowerShell or Command Prompt
# macOS/Linux Terminal

# Navigate to project directory
cd h:\Project_2@0\next-admission-erp
# or on macOS/Linux:
cd /path/to/Project_2@0/next-admission-erp
```

### Step 2: Install Dependencies

```bash
npm install

# Wait for completion (2-3 minutes)
# You'll see: npm notice added 200+ packages
```

### Step 3: Start Development Server

```bash
npm run dev

# Output should show:
# ▲ Next.js 15.0.0
# - Local: http://localhost:3000
# ✓ Ready in 1.23s
```

### Step 4: Open in Browser

```
http://localhost:3000
```

**Expected Page**:
- Header with "CSE Department | RTM-AKTU"
- Navigation bar
- Welcome message
- "Start Enrollment" button

### Step 5: View the Form

Click "Start Enrollment" or go to:
```
http://localhost:3000/enrollment
```

**Expected Result**:
- Full enrollment form appears
- All 6 sections visible
- Photo upload box on right
- Submit button at bottom

---

## 📝 First-Time Setup Tasks

### 1. Copy Your Original Assets

If you have original images/favicon:

```bash
# From your old project:
copy images/logo.png → public/images/logo.png
copy images/test image.avif → public/images/test%20image.avif
copy favicon.png → public/favicon.png
```

### 2. Verify Design Matches

- [ ] Check colors match original
- [ ] Check fonts match original
- [ ] Check spacing looks correct
- [ ] Check all sections display

### 3. Test Form Fields

- [ ] Type in each input field
- [ ] Try uploading a photo
- [ ] Toggle technical section
- [ ] Try selecting options

---

## 🔧 VS Code Setup (Recommended)

### Install Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - Publisher: dsznajder
   - Adds React code snippets

2. **Tailwind CSS IntelliSense**
   - Publisher: bradlc
   - Autocomplete for Tailwind classes

3. **Thunder Client** (Optional)
   - For API testing later (Phase 2)

### Settings (Optional)

Create `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    800: '#003399',  // ← Change these
    900: '#002266',
  },
  accent: '#e63946',  // ← Or this
}
```

Then use in components:
```tsx
className="bg-primary-800"  // Updates everywhere!
```

### Change Program Options

Edit `lib/constants.ts`:

```ts
export const PROGRAMS = [
  { value: 'BSc in CSC', label: 'BSc in Computer Science' },
  { value: 'MSc in CSC', label: 'MSc in Computer Science' },
  { value: 'PhD in CSC', label: 'PhD in Computer Science' },  // Add new
];
```

### Add New Form Field

1. **Update constants** (`lib/constants.ts`):
```ts
export const INITIAL_FORM_DATA = {
  // ... existing
  newField: '',  // Add here
};
```

2. **Use in component**:
```tsx
<FormInput
  label="New Field"
  name="newField"
  value={formData.newField}
  onChange={(value) => handleChange('newField', value)}
/>
```

---

## 🐛 Common Issues & Solutions

### Issue: "Module not found" error

```
Error: Cannot find module 'react'
```

**Solution**:
```bash
# Delete node_modules and package-lock.json
rm -r node_modules
rm package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 in use

```
Error: listen EADDRINUSE :::3000
```

**Solution - Option 1**: Use different port
```bash
npm run dev -- -p 3001
# Visit http://localhost:3001
```

**Solution - Option 2**: Kill process on port 3000
```bash
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :3000
kill -9 <PID>
```

### Issue: CORS error (Phase 2 only)

```
Access to XMLHttpRequest blocked by CORS
```

**Solution**: Check API route CORS headers (Phase 2)

### Issue: Styles not loading

```bash
# Clear Next.js cache
rm -rf .next

# Restart server
npm run dev
```

---

## 📦 Production Build

### Test Production Build Locally

```bash
# Create optimized build
npm run build

# Output shows:
# Route (kind)              Size
# /enrollment               3.2 kB
# /                         2.1 kB

# Run production build
npm start

# Visit http://localhost:3000
```

### Deploy to Vercel (Free)

**Option 1: Automatic (Recommended)**
1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! 🎉

**Option 2: Manual**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Follow prompts
```

---

## 📁 Project Structure Reference

### When You Need to...

**Add a component**:
```
components/shared/   ← New reusable component
components/form/     ← New form section
```

**Add a page**:
```
app/newpage/page.tsx  ← New page at /newpage
```

**Add a hook**:
```
hooks/useNewHook.ts   ← Custom React hook
```

**Add static files**:
```
public/               ← Images, favicon, etc.
```

**Change theme**:
```
lib/constants.ts      ← Colors, programs, data
tailwind.config.js    ← Tailwind configuration
styles/globals.css    ← Global CSS
```

---

## 🔄 Development Workflow

### Day-to-Day Commands

```bash
# Start development (do this every time)
npm run dev

# Press CTRL+C to stop

# Check for errors/lint (when done coding)
npm run lint

# Create production build (before deploying)
npm run build

# Run production locally (for testing)
npm start
```

### File Editing Workflow

1. **Make changes** to component file
2. **Save file** (auto-format if set up)
3. **Check browser** (hot reload auto-refreshes)
4. **See changes immediately** ✨

### Adding Features

1. Create component file
2. Add to component folder
3. Import where needed
4. Test in browser
5. Commit to git

---

## 🧪 Testing Your Form

### Manual Testing Checklist

**Test Flow** (takes 5 minutes):

1. Open http://localhost:3000/enrollment
2. Upload a photo
   - [ ] Click photo box
   - [ ] Select image file
   - [ ] Image appears in preview

3. Fill Personal Info
   - [ ] Type all fields
   - [ ] Select date
   - [ ] Select gender (radio)

4. Fill Academic Info
   - [ ] Enter GPA numbers
   - [ ] Enter years
   - [ ] Note: File uploads handled in Phase 2

5. Fill Program Section
   - [ ] Select program from dropdown
   - [ ] Select shift (radio)

6. Fill Guardian Info
   - [ ] Enter all parent info
   - [ ] Leave income blank (optional)

7. Fill Technical Section
   - [ ] Select "Yes" for programming
   - [ ] Check language checkboxes
   - [ ] Check "Others" and fill text
   - [ ] Fill motivations

8. Check Declaration
   - [ ] Click declaration checkbox

9. Click Submit
   - [ ] Should see button loading state
   - [ ] Check browser console (F12)
   - [ ] Should see form data logged
   - [ ] Should see success alert

---

## 📚 Learning Resources

### For Next.js Beginners
- [Next.js Official Tutorial](https://nextjs.org/learn)
- [Next.js Documentation](https://nextjs.org/docs)

### For React Learners
- [React Official Guide](https://react.dev)
- [React Hooks Documentation](https://react.dev/reference/react/hooks)

### For Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### For This Project
- [README.md](./README.md) - Overview
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Design decisions
- [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) - Component APIs
- [SCALING_GUIDE.md](./SCALING_GUIDE.md) - Future phases

---

## 💡 Pro Tips

### Tip 1: Use Hot Reload
- Change any file and save
- Browser auto-refreshes
- Your changes appear instantly
- No need to restart server

### Tip 2: Check Console for Errors
- Open browser console: `F12`
- Look for red error messages
- Most issues are caught here

### Tip 3: Test on Mobile
```bash
# Find your computer IP
ipconfig getifaddr en0  # macOS
hostname -I             # Linux
ipconfig                # Windows

# On mobile, visit:
http://<your-ip>:3000
```

### Tip 4: Use Git for Version Control
```bash
git init
git add .
git commit -m "Phase 1 complete"
git remote add origin <your-repo-url>
git push -u origin main
```

### Tip 5: Use GitHub for Deployment
- Free GitHub hosting
- Automatic Vercel deployment
- CI/CD pipeline included

---

## ✅ Ready to Go!

You now have:
- ✅ Clean Next.js project structure
- ✅ All form components built
- ✅ Working form with state management
- ✅ 100% design preserved
- ✅ Responsive on all devices
- ✅ Comprehensive documentation
- ✅ Free deployment ready

**Next Steps**:
1. Run `npm install` and `npm run dev`
2. Test the form locally
3. When ready: Deploy to Vercel
4. When ready: Start Phase 2 (Backend)

---

## 🆘 Need Help?

### Check These First
1. [README.md](./README.md) - Project overview
2. [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) - Component reference
3. [ARCHITECTURE.md](./ARCHITECTURE.md) - Design explanations

### Common Questions

**Q: Why do images not show?**  
A: Fallback image in header. Add images to `public/images/` for Phase 2.

**Q: Can I change colors?**  
A: Yes! Edit `lib/constants.ts` and `tailwind.config.js`.

**Q: How do I deploy?**  
A: Push to GitHub, connect to Vercel. Takes 2 minutes.

**Q: When do I add backend?**  
A: See [SCALING_GUIDE.md](./SCALING_GUIDE.md) for Phase 2 instructions.

---

## 🎉 You're All Set!

**Time to get started:**

```bash
cd next-admission-erp
npm install
npm run dev

# Visit http://localhost:3000
```

Happy coding! 🚀
