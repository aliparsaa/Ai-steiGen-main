"use client";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <div className="text-lg font-semibold tracking-wide">
          Steigen
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#docs" className="hover:text-white transition">
            Docs
          </a>
        </nav>

        <button className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200 transition">
          Get Started
        </button>

      </div>
    </header>
  );
}
