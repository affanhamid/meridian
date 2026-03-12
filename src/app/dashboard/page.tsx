"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ClipboardList,
  Target,
  Flame,
  Calendar,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: ClipboardList,
    value: "142",
    label: "Questions Answered",
  },
  { icon: Target, value: "71%", label: "Average Score" },
  { icon: Flame, value: "12", label: "Day Streak" },
  { icon: Calendar, value: "47", label: "Days to Exam" },
];

const topicPerformance = [
  {
    category: "Anatomy",
    topics: [
      { name: "Nerve Supply of Hand", level: "green" as const },
      { name: "Femoral Triangle", level: "amber" as const },
      { name: "Brachial Plexus", level: "red" as const },
      { name: "Inguinal Canal", level: "green" as const },
    ],
  },
  {
    category: "Physiology",
    topics: [
      { name: "Cardiac Output", level: "green" as const },
      { name: "Acid-Base Balance", level: "amber" as const },
      { name: "Beta-Blockers", level: "red" as const },
    ],
  },
  {
    category: "Pathology",
    topics: [
      { name: "Wound Healing", level: "amber" as const },
      { name: "Inflammation", level: "green" as const },
      { name: "Neoplasia", level: "red" as const },
    ],
  },
];

const levelStyles = {
  green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  red: "bg-red-50 text-red-700 border-red-200",
};

const sessions = [
  { date: "10 Mar 2026", type: "Practice", score: "8/10", time: "12 min" },
  { date: "8 Mar 2026", type: "Timed Exam", score: "32/40", time: "45 min" },
  { date: "6 Mar 2026", type: "Topic Review", score: "5/5", time: "6 min" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="font-display text-3xl tracking-tight text-[#1A1A1A]">
            Welcome back, Dr. Ahmed
          </h1>
          <p className="mt-1 text-[14px] text-[#A3A3A3]">
            Your MRCS Part A preparation overview
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-white p-5"
            >
              <stat.icon
                className="h-4 w-4 text-[#A3A3A3]"
                strokeWidth={1.5}
              />
              <p className="mt-3 text-2xl font-semibold text-[#1A1A1A]">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[12px] text-[#A3A3A3]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Topic Performance */}
        <div className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A3A3A3]">
            Topic Performance
          </h2>
          <div className="rounded-xl border border-border bg-white p-6">
            <div className="space-y-6">
              {topicPerformance.map((group) => (
                <div key={group.category}>
                  <p className="mb-2.5 text-[13px] font-medium text-[#1A1A1A]">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.topics.map((topic) => (
                      <span
                        key={topic.name}
                        className={`rounded-lg border px-3 py-1.5 text-[12px] font-medium ${levelStyles[topic.level]}`}
                      >
                        {topic.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Readiness */}
        <div className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A3A3A3]">
            Exam Readiness
          </h2>
          <div className="rounded-xl border border-border bg-white p-8 text-center">
            <p className="font-display text-6xl text-[#1A1A1A]">64%</p>
            <div className="mx-auto mt-4 h-1.5 max-w-xs overflow-hidden rounded-full bg-[#E8E8E3]">
              <div className="h-full w-[64%] rounded-full bg-[#1A1A1A]" />
            </div>
            <span className="mt-4 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Likely to Pass
            </span>
            <p className="mt-3 text-[13px] text-[#A3A3A3]">
              Weakest area: Brachial Plexus — consider focused revision
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A3A3A3]">
            Recent Activity
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-white">
            {sessions.map((s, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-5 py-3.5 ${i < sessions.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-24 text-[13px] text-[#A3A3A3]">
                    {s.date}
                  </span>
                  <span className="rounded-md bg-[#F5F5F0] px-2 py-0.5 text-[11px] font-medium text-[#737373]">
                    {s.type}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[13px] font-medium text-[#1A1A1A]">
                    {s.score}
                  </span>
                  <span className="text-[12px] text-[#A3A3A3]">{s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/topics"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
          >
            Continue Studying
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/questions"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#F5F5F0]"
          >
            Practice Questions
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
