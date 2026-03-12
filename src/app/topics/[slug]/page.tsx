"use client";

import { use, useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { MarkdownRenderer } from "@affanhamid/markdown-renderer";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { categoryColors } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const topic = useQuery(api.topics.getTopicBySlug, { slug });
  const [markdown, setMarkdown] = useState<string | null>(null);

  useEffect(() => {
    if (topic?.contentPath) {
      fetch(`/content/topics/${topic.contentPath}`)
        .then((res) => res.text())
        .then(setMarkdown)
        .catch(() => setMarkdown(""));
    }
  }, [topic?.contentPath]);

  // Loading state
  if (topic === undefined) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl px-6 py-10">
          <div className="animate-pulse">
            <div className="mb-10 flex items-center gap-1.5">
              <div className="h-4 w-12 rounded bg-[#F5F5F0]" />
              <div className="h-4 w-16 rounded bg-[#F5F5F0]" />
              <div className="h-4 w-32 rounded bg-[#F5F5F0]" />
            </div>
            <div className="h-6 w-20 rounded bg-[#F5F5F0]" />
            <div className="mt-3 h-10 w-2/3 rounded bg-[#F5F5F0]" />
            <div className="mt-10 space-y-4">
              <div className="h-4 w-full rounded bg-[#F5F5F0]" />
              <div className="h-4 w-full rounded bg-[#F5F5F0]" />
              <div className="h-4 w-5/6 rounded bg-[#F5F5F0]" />
              <div className="h-4 w-full rounded bg-[#F5F5F0]" />
              <div className="h-4 w-3/4 rounded bg-[#F5F5F0]" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Not found
  if (topic === null) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-display text-3xl text-[#1A1A1A]">
              Topic not found
            </h1>
            <p className="mt-2 text-sm text-[#737373]">
              This topic doesn&apos;t exist yet.
            </p>
            <Link
              href="/topics"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-2.5 text-sm font-medium text-white"
            >
              Browse Topics
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-1.5 text-[13px]">
          <Link
            href="/topics"
            className="text-[#A3A3A3] transition-colors hover:text-[#1A1A1A]"
          >
            Topics
          </Link>
          <ChevronRight className="h-3 w-3 text-[#D4D4D4]" />
          <span className="capitalize text-[#A3A3A3]">{topic.category}</span>
          <ChevronRight className="h-3 w-3 text-[#D4D4D4]" />
          <span className="text-[#1A1A1A]">{topic.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span
                className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-medium capitalize ${categoryColors[topic.category] ?? ""}`}
              >
                {topic.category}
              </span>
              <h1 className="font-display mt-3 text-4xl tracking-tight text-[#1A1A1A]">
                {topic.title}
              </h1>
            </div>

            {/* Markdown content */}
            {markdown === null ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 w-full rounded bg-[#F5F5F0]" />
                <div className="h-4 w-full rounded bg-[#F5F5F0]" />
                <div className="h-4 w-5/6 rounded bg-[#F5F5F0]" />
                <div className="h-4 w-full rounded bg-[#F5F5F0]" />
                <div className="h-4 w-3/4 rounded bg-[#F5F5F0]" />
              </div>
            ) : (
              <MarkdownRenderer
                markdown={markdown}
                className="meridian-content"
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-sm font-semibold text-[#1A1A1A]">
                Practice Questions
              </h3>
              <p className="mt-1 text-[13px] text-[#737373]">
                Test your knowledge on this topic.
              </p>
              <Link
                href="/questions"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#333]"
              >
                Start Practice
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
