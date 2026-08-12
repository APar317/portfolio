"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Education", href: "/education" },
    { name: "Projects", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-xl tracking-tight text-slate-100 hover:text-sky-400 transition-colors"
          onClick={closeMenu}
        >
          AS.
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-sky-400 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <ul className="flex flex-col py-4 px-6 space-y-4 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="block hover:text-sky-400 transition-colors w-full"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
