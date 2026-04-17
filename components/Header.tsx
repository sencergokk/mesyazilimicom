"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Özellikler", href: "/#ozellikler" },
  { label: "Modüller", href: "/#moduller" },
  { label: "Sektörler", href: "/#sektorler" },
  { label: "Şehirler", href: "/#sehirler" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/#sss" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-heading text-lg">
              <span className="font-bold text-white">MES</span>
              <span className="text-slate-400 font-normal ml-0.5">
                Yazılımı
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#iletisim"
              className="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg px-4 py-2 transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              İletişim
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base text-slate-400 hover:text-white transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: navLinks.length * 0.05,
                  duration: 0.2,
                }}
              >
                <Link
                  href="#iletisim"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg px-4 py-3 transition-transform duration-200 hover:scale-[1.02]"
                >
                  İletişim
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
