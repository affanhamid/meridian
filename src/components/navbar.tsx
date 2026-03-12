"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-[#0F172A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0F172A]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="h-7 w-7 text-[#2563EB]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L12 22" />
            <path d="M2 12L22 12" />
            <path d="M12 2C15 6 15 18 12 22" />
            <path d="M12 2C9 6 9 18 12 22" />
          </svg>
          <span className="text-xl font-bold text-white">Meridian</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/topics"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Topics
          </Link>
          <Link
            href="/questions"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Questions
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Dashboard
          </Link>
          <Button variant="secondary" size="sm">
            Sign in
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/topics"
              className="text-sm font-medium text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Topics
            </Link>
            <Link
              href="/questions"
              className="text-sm font-medium text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Questions
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </Link>
            <Button variant="secondary" size="sm" className="w-fit">
              Sign in
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
