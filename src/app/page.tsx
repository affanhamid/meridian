"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookOpen, PenLine, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description:
      "Comprehensive explanations for every MRCS Part A topic, written by surgeons who passed.",
  },
  {
    icon: PenLine,
    title: "Question Bank",
    description:
      "SBA questions modelled on the real exam, with detailed explanations for every answer.",
  },
  {
    icon: BarChart3,
    title: "Exam Readiness",
    description:
      "Track your progress across all topics and know exactly when you're ready to sit the exam.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center px-6 pb-32 pt-28 md:pb-40 md:pt-36">
        {/* Subtle dot pattern behind hero */}
        <div className="bg-dot-pattern pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative flex max-w-2xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-[#737373]">
              Free &amp; open for IMG doctors
            </span>
          </div>

          <h1 className="font-display text-5xl leading-[1.1] tracking-tight text-[#1A1A1A] md:text-7xl">
            Pass your MRCS.
            <br />
            <span className="italic">First time.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[#737373] md:text-lg">
            Free topic explanations and a question bank built for IMG doctors
            preparing for the MRCS Part A.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/topics"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#333] hover:shadow-lg"
            >
              Browse Topics
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/questions"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#F5F5F0]"
            >
              Try a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-center text-3xl tracking-tight text-[#1A1A1A] md:text-4xl">
            Everything you need to pass
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-1 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-transparent p-8 transition-colors hover:border-border hover:bg-white"
              >
                <feature.icon
                  className="h-5 w-5 text-[#A3A3A3] transition-colors group-hover:text-[#1A1A1A]"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 text-[15px] font-semibold text-[#1A1A1A]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#737373]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex-1" />
      <Footer />
    </div>
  );
}
