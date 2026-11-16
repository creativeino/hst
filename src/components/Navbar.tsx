"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Calculator,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_CONTACT } from "@/data/siteData";
import AppointmentScheduler from "@/components/AppointmentScheduler";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Fixed Fee", href: "/fixed-fee" },
  { name: "Candidates", href: "/candidates" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* ================= TOP UTILITY STRIP ================= */}
      <div className="bg-ink text-white border-b border-ink-2/80 text-[11px] sm:text-xs py-2 px-3 sm:px-4">
        <div className="wrap flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
            <p className="truncate text-[11px] sm:text-xs text-white/90">
              <span className="hidden sm:inline text-white/70">UK Legal &amp; Professional Recruitment : </span>
              <strong className="text-accent font-semibold tracking-wide">
                Pre-Agreed Flat Fees
              </strong>
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-white/80 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-accent" />
              <span className="font-mono text-[11px] sm:text-xs">{COMPANY_CONTACT.phone}</span>
            </a>
            <span className="hidden sm:inline h-3 w-px bg-white/20" />
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-accent" />
              <span className="font-medium text-[11px] sm:text-xs">{COMPANY_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVIGATION BAR ================= */}
      <header
        id="top"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-paper/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(11,26,19,0.08)] border-b border-line py-2.5 sm:py-3"
            : "bg-paper border-b border-line py-3.5 sm:py-4"
        }`}
      >
        <div className="wrap">
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group select-none"
              onClick={() => setIsOpen(false)}
              aria-label="HST Hiring home"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-accent-soft border border-accent/40 p-1 sm:p-1.5 shadow-2xs group-hover:border-accent transition-all duration-200">
                <Image
                  src="/images/HST-Logomark.png"
                  alt="HST Logo"
                  width={30}
                  height={30}
                  className="h-6 sm:h-7 w-auto object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] sm:text-[20px] font-display font-bold tracking-tight text-ink leading-tight">
                  HST<span className="text-accent ml-0.5 font-bold">Hiring</span>
                </span>
                <span className="text-[9px] sm:text-[9.5px] uppercase tracking-wider font-bold text-muted -mt-0.5">
                  Preston and UK-Wide
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface border border-line"
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {navLinks.map((link, idx) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                const isHovered = hoveredIdx === idx;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className={`relative px-4 py-1.5 rounded-full text-[14.5px] font-medium transition-colors duration-150 z-10 ${
                      isActive
                        ? "text-accent-deep font-semibold"
                        : "text-ink/80 hover:text-ink"
                    }`}
                  >
                    {isHovered && (
                      <motion.span
                        layoutId="navHoverPill"
                        className="absolute inset-0 rounded-full bg-paper border border-line shadow-2xs -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}

                    {isActive && !isHovered && (
                      <motion.span
                        layoutId="navActiveDot"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-deep -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}

                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/pricing#calculator"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[13.5px] font-medium text-ink/85 hover:text-ink bg-surface hover:bg-surface-2 border border-line transition-all shadow-2xs"
              >
                <Calculator className="w-3.5 h-3.5 text-accent-deep group-hover:rotate-12 transition-transform duration-200" />
                <span>Savings Calculator</span>
              </Link>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                type="button"
                className="btn btn-accent text-[13.5px] font-semibold px-4 py-2 shadow-sm cursor-pointer group"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Scoping Call</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-surface border border-line hover:bg-surface-2 text-ink flex items-center justify-center transition-colors shrink-0"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-accent-deep" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden border-t border-line bg-paper/98 backdrop-blur-xl overflow-hidden shadow-lg"
            >
              <nav className="wrap py-4 flex flex-col space-y-1">
                {navLinks.map((link, idx) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03, duration: 0.18 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-[15px] font-medium transition-all ${
                          isActive
                            ? "bg-accent-soft text-accent-deep font-semibold border border-accent/20"
                            : "text-ink/80 hover:text-ink hover:bg-surface"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-deep" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-muted/40" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="mt-4 pt-4 border-t border-line flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/pricing#calculator"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-line bg-surface text-ink text-xs font-semibold shadow-2xs hover:bg-surface-2 transition-colors"
                    >
                      <Calculator className="w-3.5 h-3.5 text-accent-deep" />
                      <span>Calculator</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        setIsBookingModalOpen(true);
                      }}
                      className="btn btn-accent py-2.5 px-3 text-xs font-semibold justify-center shadow-xs inline-flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Call</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted pt-2 px-1">
                    <a href={`tel:${COMPANY_CONTACT.phone}`} className="hover:text-ink transition-colors font-mono">
                      {COMPANY_CONTACT.phone}
                    </a>
                    <span>:</span>
                    <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-ink transition-colors">
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Direct Action Consultation Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingModalOpen(false)}
              className="fixed inset-0 bg-ink/70 backdrop-blur-sm transition-opacity"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-paper rounded-t-3xl sm:rounded-3xl shadow-2xl border border-line overflow-y-auto z-10 flex flex-col"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-paper/95 backdrop-blur-md border-b border-line">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted">
                    Quick Consultation Booking
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-surface text-muted hover:text-ink transition-colors border border-line"
                  aria-label="Close booking modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <AppointmentScheduler
                  defaultMeetingType="client-scoping"
                  title="Schedule Your 20-Minute Strategy Call"
                  subtitle="Meet with Ian Partington or Sean McAuley to benchmark role salaries and discuss pre-agreed fixed-fee terms."
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
