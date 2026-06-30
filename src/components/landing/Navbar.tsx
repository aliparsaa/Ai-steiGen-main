"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-black tracking-wider text-white">
            STEIGEN<span className="text-blue-500">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-white transition">صفحه اصلی</Link>
            <Link href="/#products" className="hover:text-white transition">تجهیزات پزشکی</Link>
            <Link href="/#cta" className="hover:text-white transition">مشاوره هوشمند</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="tel:+989120000000" 
            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700"
          >
            تماس با آرامیس
          </Link>
        </div>
      </div>
    </header>
  );
}
