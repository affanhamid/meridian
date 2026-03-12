import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#1A1A1A]">
            <span className="text-[9px] font-bold text-white">M</span>
          </div>
          <span className="text-xs text-[#A3A3A3]">
            &copy; 2026 Meridian
          </span>
        </div>
        <div className="flex gap-8">
          <Link
            href="/topics"
            className="text-xs text-[#A3A3A3] transition-colors hover:text-[#1A1A1A]"
          >
            Topics
          </Link>
          <Link
            href="/questions"
            className="text-xs text-[#A3A3A3] transition-colors hover:text-[#1A1A1A]"
          >
            Questions
          </Link>
          <Link
            href="/dashboard"
            className="text-xs text-[#A3A3A3] transition-colors hover:text-[#1A1A1A]"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
}
