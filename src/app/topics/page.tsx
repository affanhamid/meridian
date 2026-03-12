"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { topics, syllabusTree } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categoryColors: Record<string, string> = {
  Anatomy: "bg-blue-500/20 text-blue-400",
  Physiology: "bg-green-500/20 text-green-400",
  Pathology: "bg-amber-500/20 text-amber-400",
};

export default function TopicsPage() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const fuse = useMemo(
    () => new Fuse(topics, { keys: ["title", "description"], threshold: 0.4 }),
    []
  );

  const filteredTopics = search
    ? fuse.search(search).map((r) => r.item)
    : topics;

  const toggleCategory = (category: string) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0F172A]">
      <Navbar />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-[280px]">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              MRCS Part A Syllabus
            </h2>

            <div className="flex flex-col gap-1">
              {syllabusTree.map((cat) => (
                <div key={cat.category}>
                  <button
                    onClick={() => toggleCategory(cat.category)}
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <span className="text-xs text-slate-400">
                      {expanded[cat.category] ? "▾" : "▸"}
                    </span>
                    {cat.category}
                  </button>

                  {expanded[cat.category] && (
                    <div className="ml-4 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                      {cat.subtopics.map((sub) =>
                        sub.slug ? (
                          <Link
                            key={sub.name}
                            href={`/topics/${sub.slug}`}
                            className="rounded-md px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {sub.name}
                          </Link>
                        ) : (
                          <span
                            key={sub.name}
                            className="cursor-default px-2 py-1.5 text-sm text-slate-500"
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
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-[#2563EB]"
            />
          </div>

          {filteredTopics.length === 0 ? (
            <p className="text-center text-sm text-slate-400">
              No topics found matching your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredTopics.map((topic) => (
                <Link key={topic.slug} href={`/topics/${topic.slug}`}>
                  <Card className="h-full border-white/10 bg-white/5 transition-colors hover:border-[#2563EB]/50">
                    <CardContent className="flex flex-col gap-3">
                      <Badge
                        className={`w-fit ${categoryColors[topic.category] ?? ""}`}
                      >
                        {topic.category}
                      </Badge>
                      <h3 className="text-base font-semibold text-white">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {topic.description}
                      </p>
                    </CardContent>
                  </Card>
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
