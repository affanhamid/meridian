"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "142", label: "Questions Answered", icon: "📝" },
  { value: "71%", label: "Average Score", icon: "📊" },
  { value: "12", label: "Day Streak", icon: "🔥" },
  { value: "47", label: "Days to Exam", icon: "📅" },
];

const topicPerformance = [
  {
    category: "Anatomy",
    topics: [
      { name: "Nerve Supply of Hand", level: "green" },
      { name: "Femoral Triangle", level: "amber" },
      { name: "Brachial Plexus", level: "red" },
      { name: "Inguinal Canal", level: "green" },
    ],
  },
  {
    category: "Physiology",
    topics: [
      { name: "Cardiac Output", level: "green" },
      { name: "Acid-Base Balance", level: "amber" },
      { name: "Beta-Blockers", level: "red" },
    ],
  },
  {
    category: "Pathology",
    topics: [
      { name: "Wound Healing", level: "amber" },
      { name: "Inflammation", level: "green" },
      { name: "Neoplasia", level: "red" },
    ],
  },
];

const levelStyles: Record<string, string> = {
  green: "bg-green-500/20 text-green-400 border border-green-500/30",
  amber: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  red: "bg-red-500/20 text-red-400 border border-red-500/30",
};

const recentActivity = [
  { date: "10 Mar 2026", type: "Practice", score: "8/10", duration: "12 min" },
  {
    date: "8 Mar 2026",
    type: "Timed Exam",
    score: "32/40",
    duration: "45 min",
  },
  {
    date: "6 Mar 2026",
    type: "Topic Review",
    score: "5/5",
    duration: "6 min",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0F172A]">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome back, Dr. Ahmed
          </h1>
          <p className="mt-1 text-slate-400">
            Here&apos;s your MRCS Part A preparation overview
          </p>
        </div>

        {/* Stats Row */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-[#1E293B] border-0">
              <CardContent className="p-6">
                <span className="text-lg">{stat.icon}</span>
                <p className="mt-2 text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Topic Performance Heatmap */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Topic Performance
          </h2>
          <Card className="bg-[#1E293B] border-0">
            <CardContent className="p-6 space-y-6">
              {topicPerformance.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-400">
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {group.topics.map((topic) => (
                      <div
                        key={topic.name}
                        className={`rounded-lg px-3 py-2 text-sm font-medium ${levelStyles[topic.level]}`}
                      >
                        {topic.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Exam Readiness Score */}
        <div className="mb-8">
          <Card className="bg-[#1E293B] border-0">
            <CardContent className="flex flex-col items-center p-8">
              <p className="text-6xl font-bold text-[#2563EB]">64%</p>
              <p className="mt-2 text-lg font-medium text-white">
                Exam Readiness Score
              </p>
              <div className="mt-4 w-full max-w-md">
                <Progress value={64} />
              </div>
              <div className="mt-4">
                <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                  Likely to Pass
                </Badge>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Weakest area: Brachial Plexus — consider focused revision
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Recent Activity
          </h2>
          <Card className="bg-[#1E293B] border-0">
            <CardContent className="p-0">
              {recentActivity.map((activity, index) => (
                <div key={activity.date}>
                  <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-400 min-w-[100px]">
                        {activity.date}
                      </span>
                      <Badge variant="secondary">{activity.type}</Badge>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-medium text-white">
                        {activity.score}
                      </span>
                      <span className="text-sm text-slate-400">
                        {activity.duration}
                      </span>
                    </div>
                  </div>
                  {index < recentActivity.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/topics" className={buttonVariants({ size: "lg", className: "bg-[#2563EB] hover:bg-[#2563EB]/90" })}>
            Continue Studying
          </Link>
          <Link href="/questions" className={buttonVariants({ size: "lg", variant: "outline" })}>
            Practice Questions
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
