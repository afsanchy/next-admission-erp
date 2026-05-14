export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-primary-800 mb-6">Welcome</h1>
      <p className="text-xl text-slate-600 mb-8">
        Welcome to the RTM-AKTU Computer Science Department enrollment portal.
      </p>
      <a
        href="/enrollment"
        className="
          inline-block
          bg-primary-800 hover:bg-primary-900
          text-white font-bold text-lg
          px-8 py-4 rounded-lg
          transition-all duration-300
          hover:-translate-y-1
        "
      >
        Start Enrollment <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
}
