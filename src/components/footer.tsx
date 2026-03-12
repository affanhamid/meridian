import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0B1120]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400">
          &copy; 2026 Meridian. MRCS exam preparation for IMG doctors.
        </p>
        <div className="flex gap-6">
          <Link
            href="/topics"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Topics
          </Link>
          <Link
            href="/questions"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Questions
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
}
