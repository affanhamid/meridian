"use client";

import { use } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { topics } from "@/lib/data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";

const categoryBadgeClasses: Record<string, string> = {
  Anatomy: "bg-blue-500/20 text-blue-400",
  Physiology: "bg-green-500/20 text-green-400",
  Pathology: "bg-amber-500/20 text-amber-400",
};

export default function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/topics" className="hover:text-white transition-colors">
            Topics
          </Link>
          <span>&gt;</span>
          <span>{topic.category}</span>
          <span>&gt;</span>
          <span className="text-white">{topic.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          {/* Left Column */}
          <div>
            {/* Title + Badge */}
            <div className="flex items-start gap-4 mb-8">
              <h1 className="text-3xl font-bold">{topic.title}</h1>
              <Badge
                className={`${categoryBadgeClasses[topic.category]} border-none shrink-0 mt-1`}
              >
                {topic.category}
              </Badge>
            </div>

            {/* Explanation */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
              {topic.explanation.map((paragraph, i) => (
                <p key={i} className="text-slate-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Clinical Context */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Clinical Context</h2>
              <p className="text-slate-300">{topic.clinicalContext}</p>
            </section>

            {/* High-Yield Points */}
            <section className="mb-8">
              <div className="border-l-4 border-[#2563EB] bg-blue-500/5 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-4">
                  High-Yield Points
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {topic.highYieldPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Exam Traps */}
            <section className="mb-8">
              <div className="border-l-4 border-amber-500 bg-amber-500/5 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-4">Exam Traps</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {topic.examTraps.map((trap, i) => (
                    <li key={i}>{trap}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Further Reading */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
              <ul className="space-y-3">
                {topic.furtherReading.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2563EB] hover:underline inline-flex items-center gap-1"
                    >
                      {link.title} <span>&rarr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Practice Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">
                  Test your knowledge on this topic
                </p>
                <Link href="/questions" className={buttonVariants({ className: "w-full" })}>
                  Start Practice &rarr;
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
