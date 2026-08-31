


import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Resume", "/resume"],
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky left-0 right-0 top-0 z-50 overflow-hidden border-b border-white/10 bg-[#11161d]/95 text-white shadow-lg backdrop-blur">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500 text-sm font-bold text-slate-900">
              A
            </span>
            <span className="truncate font-semibold text-slate-200">
              {profile.displayName}
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 sm:hidden"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          <nav className="hidden items-center gap-6 text-sm sm:flex lg:gap-8">
            {navItems.map(([label, path]) => (
              <Link
                key={path}
                className="whitespace-nowrap text-slate-300 transition hover:text-white"
                to={path}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {isOpen && (
          <nav className="mt-4 grid gap-2 border-t border-white/10 pt-4 text-sm sm:hidden">
            {navItems.map(([label, path]) => (
              <Link
                key={path}
                className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
                to={path}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
