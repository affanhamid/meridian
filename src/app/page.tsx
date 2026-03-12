"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-28 md:py-36 text-center">
        {/* Decorative gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            Pass your MRCS. First time.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Free topic explanations and a question bank built for IMG doctors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/topics" className={cn(buttonVariants({ size: "lg" }), "bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8")}>
              Browse Topics
            </Link>
            <Link href="/questions" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-slate-600 text-slate-300 hover:bg-slate-800 px-8")}>
              Try a Question
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Everything you need to pass
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#1E293B] border-slate-700">
              <CardHeader>
                <div className="text-3xl mb-2">📚</div>
                <CardTitle className="text-white">Free Knowledge Base</CardTitle>
                <CardDescription className="text-slate-400">
                  Comprehensive explanations for every MRCS Part A topic, written by surgeons who passed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#1E293B] border-slate-700">
              <CardHeader>
                <div className="text-3xl mb-2">✍️</div>
                <CardTitle className="text-white">Question Bank</CardTitle>
                <CardDescription className="text-slate-400">
                  SBA questions modelled on the real exam, with detailed explanations for every answer.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#1E293B] border-slate-700">
              <CardHeader>
                <div className="text-3xl mb-2">📊</div>
                <CardTitle className="text-white">Exam Readiness Score</CardTitle>
                <CardDescription className="text-slate-400">
                  Track your progress across all topics and know exactly when you're ready to sit the exam.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Spacer to push footer down */}
      <div className="flex-1" />

      <Footer />
    </div>
  );
}
