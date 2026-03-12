"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Check, X, ArrowRight, RotateCcw, Clock } from "lucide-react";

const letters = ["A", "B", "C", "D", "E"];

export default function QuestionsPage() {
  const allQuestions = useQuery(api.questions.getAllQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(Date.now());

  // Loading state
  if (allQuestions === undefined) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-6 py-10">
          <div className="mx-auto max-w-2xl">
            <div className="animate-pulse">
              <div className="mb-10">
                <div className="mb-2 flex justify-between">
                  <div className="h-4 w-24 rounded bg-[#F5F5F0]" />
                  <div className="h-4 w-8 rounded bg-[#F5F5F0]" />
                </div>
                <div className="h-1 rounded-full bg-[#E8E8E3]" />
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-[#F5F5F0]" />
                <div className="h-4 w-5/6 rounded bg-[#F5F5F0]" />
                <div className="h-4 w-4/5 rounded bg-[#F5F5F0]" />
              </div>
              <div className="mt-8 space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-14 rounded-xl bg-[#F5F5F0]" />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // No questions
  if (allQuestions.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-display text-3xl text-[#1A1A1A]">
              No questions yet
            </h1>
            <p className="mt-2 text-sm text-[#737373]">
              Questions are being added. Check back soon.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const questions = allQuestions;
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Strip "A: ", "B: " etc. prefixes from options for display
  const displayOptions = question.options.map((opt) =>
    opt.replace(/^[A-E]:\s*/, "")
  );

  function handleSubmit() {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);
    setAnswers((prev) => [...prev, selectedAnswer]);
  }

  function handleNext() {
    if (currentQuestion + 1 >= questions.length) {
      setIsComplete(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setAnswers([]);
    setIsComplete(false);
  }

  if (isComplete) {
    const score = answers.filter(
      (ans, i) => ans === questions[i].correctIndex
    ).length;
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;

    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-6 py-16">
          <div className="w-full max-w-md text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F5F5F0]">
              <span className="font-display text-3xl text-[#1A1A1A]">
                {pct}%
              </span>
            </div>

            <h1 className="font-display text-3xl text-[#1A1A1A]">
              Quiz Complete
            </h1>
            <p className="mt-2 text-sm text-[#737373]">
              You scored{" "}
              <span className="font-semibold text-[#1A1A1A]">{score}</span> out
              of <span className="font-semibold text-[#1A1A1A]">{total}</span>
            </p>

            <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#A3A3A3]">
              <Clock className="h-3 w-3" />
              {mins}m {secs}s
            </div>

            <p className="mt-6 text-[14px] text-[#737373]">
              {score === total
                ? "Excellent. You have a strong command of these topics."
                : score >= 2
                  ? "Good effort. Review the topics you missed."
                  : "Keep studying. Revisit the topics to build your foundation."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/topics"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#F5F5F0]"
              >
                Review Topics
              </Link>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Try Again
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-10">
        <div className="mx-auto max-w-2xl">
          {/* Progress */}
          <div className="mb-10">
            <div className="mb-2 flex items-center justify-between text-[13px] text-[#A3A3A3]">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-[#E8E8E3]">
              <div
                className="h-full rounded-full bg-[#1A1A1A] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <p className="text-[15px] leading-[1.8] text-[#404040]">
              {question.stem}
            </p>
          </div>

          {/* Options */}
          <div className="mb-8 flex flex-col gap-2">
            {displayOptions.map((option, index) => {
              let classes =
                "flex items-start gap-3 rounded-xl border px-4 py-3.5 transition-all cursor-pointer";

              if (!isSubmitted) {
                classes +=
                  selectedAnswer === index
                    ? " border-[#1A1A1A] bg-[#F5F5F0]"
                    : " border-border bg-white hover:border-[#C4C4C4]";
              } else if (index === question.correctIndex) {
                classes += " border-emerald-200 bg-emerald-50";
              } else if (
                index === selectedAnswer &&
                selectedAnswer !== question.correctIndex
              ) {
                classes += " border-red-200 bg-red-50";
              } else {
                classes += " border-border bg-white opacity-50";
              }

              return (
                <button
                  key={index}
                  className={classes}
                  onClick={() => !isSubmitted && setSelectedAnswer(index)}
                  disabled={isSubmitted}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[12px] font-semibold ${
                      isSubmitted && index === question.correctIndex
                        ? "bg-emerald-100 text-emerald-700"
                        : isSubmitted &&
                            index === selectedAnswer &&
                            selectedAnswer !== question.correctIndex
                          ? "bg-red-100 text-red-700"
                          : selectedAnswer === index && !isSubmitted
                            ? "bg-[#1A1A1A] text-white"
                            : "bg-[#F5F5F0] text-[#737373]"
                    }`}
                  >
                    {isSubmitted && index === question.correctIndex ? (
                      <Check className="h-3 w-3" />
                    ) : isSubmitted &&
                      index === selectedAnswer &&
                      selectedAnswer !== question.correctIndex ? (
                      <X className="h-3 w-3" />
                    ) : (
                      letters[index]
                    )}
                  </span>
                  <span className="text-left text-[14px] text-[#404040]">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Actions */}
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full rounded-xl bg-[#1A1A1A] py-3 text-sm font-medium text-white transition-colors hover:bg-[#333] disabled:cursor-not-allowed disabled:opacity-30"
            >
              Submit Answer
            </button>
          ) : (
            <>
              {/* Explanation */}
              <div className="mb-6 rounded-xl border border-border bg-[#F5F5F0] p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#A3A3A3]">
                  Explanation
                </p>
                <p className="text-[14px] leading-relaxed text-[#404040]">
                  {question.explanation}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
              >
                {currentQuestion + 1 >= questions.length
                  ? "See Results"
                  : "Next Question"}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
