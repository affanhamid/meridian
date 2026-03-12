"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { syllabusTree, categoryColors } from "@/lib/data";
import { Search, ChevronRight } from "lucide-react";

export default function TopicsPage() {
  const topics = useQuery(api.topics.getAllTopics);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    Anatomy: true,
    Physiology: true,
    Pathology: true,
  });

  const fuse = useMemo(
    () =>
      topics
        ? new Fuse(topics, { keys: ["title", "description"], threshold: 0.4 })
        : null,
    [topics]
  );

  const filteredTopics =
    !topics ? [] : search && fuse ? fuse.search(search).map((r) => r.item) : topics;

  const toggleCategory = (category: string) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-56">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#A3A3A3]">
            Syllabus
          </p>

          <div className="flex flex-col gap-0.5">
            {syllabusTree.map((cat) => (
              <div key={cat.category}>
                <button
                  onClick={() => toggleCategory(cat.category)}
                  className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-[13px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#F5F5F0]"
                >
                  <ChevronRight
                    className={`h-3 w-3 text-[#A3A3A3] transition-transform ${expanded[cat.category] ? "rotate-90" : ""}`}
                  />
                  {cat.category}
                </button>

                {expanded[cat.category] && (
                  <div className="ml-3 flex flex-col border-l border-border pl-3">
                    {cat.subtopics.map((sub) =>
                      sub.slug ? (
                        <Link
                          key={sub.name}
                          href={`/topics/${sub.slug}`}
                          className="rounded-md px-2 py-1 text-[13px] text-[#737373] transition-colors hover:bg-[#F5F5F0] hover:text-[#1A1A1A]"
                        >
                          {sub.name}
                        </Link>
                      ) : (
                        <span
                          key={sub.name}
                          className="px-2 py-1 text-[13px] text-[#D4D4D4]"
                        >
                          {sub.name}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A3A3A3]" />
            <input
              type="text"
              placeholder="Search topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/10"
            />
          </div>

          {topics === undefined ? (
            // Loading skeleton
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-xl border border-border bg-white p-5"
                >
                  <div className="h-4 w-16 rounded bg-[#F5F5F0]" />
                  <div className="mt-3 h-5 w-3/4 rounded bg-[#F5F5F0]" />
                  <div className="mt-2 h-4 w-full rounded bg-[#F5F5F0]" />
                </div>
              ))}
            </div>
          ) : filteredTopics.length === 0 ? (
            <p className="text-center text-sm text-[#A3A3A3]">
              No topics found.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {filteredTopics.map((topic) => (
                <Link key={topic.slug} href={`/topics/${topic.slug}`}>
                  <div className="group rounded-xl border border-border bg-white p-5 transition-all hover:border-[#C4C4C4] hover:shadow-sm">
                    <span
                      className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-medium capitalize ${categoryColors[topic.category] ?? ""}`}
                    >
                      {topic.category}
                    </span>
                    <h3 className="mt-3 text-[15px] font-semibold text-[#1A1A1A]">
                      {topic.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#737373]">
                      {topic.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
