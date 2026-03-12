import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ConvexClientProvider } from "@/components/convex-provider";
import "./globals.css";
import "./markdown-theme.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meridian — MRCS Exam Prep",
  description:
    "Pass your MRCS. First time. Free topic explanations and a question bank built for IMG doctors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
