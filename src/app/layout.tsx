import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight text-slate-100 hover:text-sky-400 transition-colors">
              AS.
            </Link>
            <ul className="flex items-center space-x-6 text-sm font-medium text-slate-400">
              <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link href="/experience" className="hover:text-sky-400 transition-colors">Experience</Link></li>
              <li><Link href="/tech-stack" className="hover:text-sky-400 transition-colors">Tech Stack</Link></li>
              <li><Link href="/education" className="hover:text-sky-400 transition-colors">Education</Link></li>
              <li><Link href="/projects" className="hover:text-sky-400 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </nav>
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
