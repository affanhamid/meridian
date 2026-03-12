"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { questions } from "@/lib/data";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const optionLetters = ["A", "B", "C", "D", "E"];

export default function QuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());

  const question = questions[currentQuestion];
  const progressValue = ((currentQuestion + 1) / questions.length) * 100;

  function handleSelectAnswer(index: number) {
    if (!isSubmitted) {
      setSelectedAnswer(index);
    }
  }

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
    setStartTime(Date.now());
  }

  function getOptionClasses(index: number) {
    const base =
      "flex items-start gap-4 rounded-lg border p-4 transition-all cursor-pointer";

    if (!isSubmitted) {
      if (selectedAnswer === index) {
        return `${base} border-[#2563EB] bg-[#2563EB]/10`;
      }
      return `${base} bg-[#1E293B] border-border hover:border-[#2563EB]/50`;
    }

    // After submission
    if (index === question.correctAnswer) {
      return `${base} border-green-500 bg-green-500/10 cursor-default`;
    }
    if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
      return `${base} border-red-500 bg-red-500/10 cursor-default`;
    }
    return `${base} bg-[#1E293B] border-border opacity-50 cursor-default`;
  }

  if (isComplete) {
    const score = answers.filter(
      (ans, i) => ans === questions[i].correctAnswer
    ).length;
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    let performanceMessage: string;
    if (score === total) {
      performanceMessage =
        "Excellent! You have a strong command of these topics.";
    } else if (score >= 2) {
      performanceMessage =
        "Good effort! Review the topics you missed to strengthen your knowledge.";
    } else {
      performanceMessage =
        "Keep studying! Revisit the topic pages to build a stronger foundation.";
    }

    return (
      <div className="flex min-h-screen flex-col bg-[#0F172A]">
        <Navbar />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <Card className="w-full max-w-lg border-border bg-[#1E293B] text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Quiz Complete!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-slate-300">
                You scored{" "}
                <span className="font-semibold text-white">{score}</span> out of{" "}
                <span className="font-semibold text-white">{total}</span>
              </p>

              <p className="text-5xl font-bold text-[#2563EB]">
                {percentage}%
              </p>

              <p className="text-sm text-slate-400">
                Time taken:{" "}
                <span className="text-white">
                  {minutes} {minutes === 1 ? "minute" : "minutes"} and {seconds}{" "}
                  {seconds === 1 ? "second" : "seconds"}
                </span>
              </p>

              <p className="text-slate-300">{performanceMessage}</p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center">
                <Link href="/topics" className={buttonVariants({ variant: "outline" })}>
                  Review Topics
                </Link>
                <Button
                  onClick={handleReset}
                  className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90"
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0F172A]">
      <Navbar />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progressValue)}%</span>
            </div>
            <Progress value={progressValue} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-border bg-[#1E293B]">
            <CardHeader>
              <CardTitle className="text-lg font-medium leading-relaxed text-white">
                {question.stem}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={getOptionClasses(index)}
                  onClick={() => handleSelectAnswer(index)}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0F172A] text-sm font-semibold text-[#2563EB]">
                    {optionLetters[index]}
                  </span>
                  <span className="pt-1 text-slate-200">{option}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Submit / Next Button */}
          {!isSubmitted ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full bg-[#2563EB] text-white hover:bg-[#2563EB]/90 disabled:opacity-50"
            >
              Submit Answer
            </Button>
          ) : (
            <>
              {/* Explanation */}
              <Card className="border-border bg-[#1E293B]">
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-white">
                    Explanation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-slate-300">
                    {question.explanation}
                  </p>
                </CardContent>
              </Card>

              <Button
                onClick={handleNext}
                className="w-full bg-[#2563EB] text-white hover:bg-[#2563EB]/90"
              >
                {currentQuestion + 1 >= questions.length
                  ? "See Results"
                  : "Next Question"}
              </Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
