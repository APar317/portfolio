import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apar Saran | Cloud & DevOps Engineer",
  description: "Portfolio of Apar Saran, Cloud & DevOps Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 selection:bg-sky-900/50">
        <Navbar />
        <main className="flex-1 pt-16 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col">
          {children}
        </main>
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-900 mt-auto">
          <p>Apar Saran(A7S-1721)</p>
        </footer>
      </body>
    </html>
  );
}
