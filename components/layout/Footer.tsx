'use client';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-slate-500 text-center py-6 px-4 mt-10 text-sm">
      <p className="text-slate-600">© 2026 RTM-AKTU CSE Department</p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="#"
          aria-label="Facebook"
          className="text-slate-600 text-lg hover:text-white transition-colors duration-300 hover:-translate-y-1"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="text-slate-600 text-lg hover:text-white transition-colors duration-300 hover:-translate-y-1"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-slate-600 text-lg hover:text-white transition-colors duration-300 hover:-translate-y-1"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="#"
          aria-label="GitHub"
          className="text-slate-600 text-lg hover:text-white transition-colors duration-300 hover:-translate-y-1"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}
