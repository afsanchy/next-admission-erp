'use client';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-800 to-primary-900 text-white text-center py-10 px-4 shadow-md">
      <h1 className="flex items-center justify-center gap-4 text-3xl md:text-4xl font-bold mb-3 tracking-tight">
        <img
          src="/images/logo.png"
          alt="RTM-AKTU Logo"
          className="h-16 md:h-20 w-auto bg-white p-2 rounded-lg border-2 border-white drop-shadow"
          onError={(e) => {
            // Fallback: show placeholder if image doesn't exist
            e.currentTarget.style.display = 'none';
          }}
        />
        <span>CSE Department | RTM-AKTU</span>
      </h1>
      <h3 className="text-lg md:text-xl font-light opacity-90">
        Next-Generation Computer Science
      </h3>
    </header>
  );
}
