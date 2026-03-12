"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-[#FAFAF8]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1A1A1A]">
            <span className="text-xs font-bold text-white">M</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#1A1A1A]">
            Meridian
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/topics"
            className="text-[13px] text-[#737373] transition-colors hover:text-[#1A1A1A]"
          >
            Topics
          </Link>
          <Link
            href="/questions"
            className="text-[13px] text-[#737373] transition-colors hover:text-[#1A1A1A]"
          >
            Questions
          </Link>
          <Link
            href="/dashboard"
            className="text-[13px] text-[#737373] transition-colors hover:text-[#1A1A1A]"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="rounded-full border border-[#1A1A1A] px-4 py-1.5 text-[13px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-[#1A1A1A]" />
          ) : (
            <Menu className="h-5 w-5 text-[#1A1A1A]" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/topics"
              className="text-sm text-[#737373] hover:text-[#1A1A1A]"
              onClick={() => setMobileOpen(false)}
            >
              Topics
            </Link>
            <Link
              href="/questions"
              className="text-sm text-[#737373] hover:text-[#1A1A1A]"
              onClick={() => setMobileOpen(false)}
            >
              Questions
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-[#737373] hover:text-[#1A1A1A]"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="w-fit rounded-full border border-[#1A1A1A] px-4 py-1.5 text-sm font-medium text-[#1A1A1A]"
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
