"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  FileCheck2,
  UserSearch,
  ShieldCheck,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Scoping Call",
    timeline: "Under 45 Minutes",
    tagline: "Role, seniority, culture fit & salary benchmarking",
    description:
      "A focused, commercial scoping call to assess the brief, calibrate seniority expectations, and benchmark current UK legal and professional salaries. No sales fluff - just pure market insight.",
    deliverables: [
      "Live salary & compensation reality check",
      "Candidate profile & cultural matrix",
      "Immediate search feasibility assessment",
    ],
    icon: PhoneCall,
    image: "/images/headway-5QgIuuBxKwM-unsplash-1-scaled-copy.webp",
    highlightStat: "45 Mins",
    highlightLabel: "Average Discovery",
  },
  {
    step: "02",
    title: "Fixed Fee Agreed Upfront",
    timeline: "Within 24 Hours",
    tagline: "One flat fee confirmed in writing before search starts",
    description:
      "We provide a written proposal confirming your exact fixed fee (typically ~6% vs 20-30% agency standard). Once signed, the fee is locked in writing - it never rises with the offer.",
    deliverables: [
      "100% written fee guarantee",
      "Structured 8-week replacement guarantee",
      "14-day full cash refund commitment",
    ],
    icon: FileCheck2,
    image: "/images/laptop2.png",
    highlightStat: "Flat ~6%",
    highlightLabel: "Zero Salary Escalators",
  },
  {
    step: "03",
    title: "Targeted Search & Shortlist",
    timeline: "First Vetted CVs in 5 Days",
    tagline: "Proactive direct headhunting of passive sector specialists",
    description:
      "Rather than posting an ad and hoping for the best, we actively headhunt senior practitioners through our established UK network. Every candidate is interviewed and pre-screened before you see them.",
    deliverables: [
      "Direct outreach to passive, employed talent",
      "Full video-screening & assessment summary",
      "Structured candidate reports directly to inbox",
    ],
    icon: UserSearch,
    image: "/images/scott-graham-5fNmWej4tAA-unsplash-scaled-1.jpg",
    highlightStat: "5 Days",
    highlightLabel: "To First Shortlist",
  },
  {
    step: "04",
    title: "Offer, Placement & 8-Week Shield",
    timeline: "Full 8-Week Coverage",
    tagline: "Total protection through resignation, start date & probation",
    description:
      "From interview scheduling to offer management and resignation defense, we guide the process. Every hire is protected by our contractual 8-week replacement shield.",
    deliverables: [
      "Active resignation & counter-offer defense",
      "Contractual 8-week replacement guarantee",
      "Post-placement 90-day check-in cadence",
    ],
    icon: ShieldCheck,
    image: "/images/hero-executive-boardroom.jpg",
    highlightStat: "8 Weeks",
    highlightLabel: "Free Replacement SLA",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveStep(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (idx: number) => {
    const el = stepRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const current = STEPS[activeStep];

  return (
    <section id="how-it-works" className="wrap section scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-line">
        <div className="max-w-[620px]">
          <span className="tag">Delivery Architecture</span>
          <h2 className="h2 mt-4">How It Works: Built around certainty.</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">
            Four disciplined milestones. Clear scoping, locked pricing, active headhunting, and guaranteed placement protection.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/fixed-fee" className="btn btn-ink text-xs">
            Fee Comparison
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/contact" className="btn btn-accent text-xs">
            Book Discovery Call
          </Link>
        </div>
      </div>

      {/* Main Sticky Scrolling Layout */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
        {/* Left Column: Clean Editorial Steps */}
        <div className="lg:col-span-7 space-y-12 sm:space-y-16 lg:space-y-24 py-2">
          {STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const StepIcon = step.icon;

            return (
              <div
                key={step.step}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? "bg-paper border-accent/40 shadow-sm opacity-100"
                    : "bg-surface/50 border-line/60 opacity-70 hover:opacity-100"
                }`}
                onClick={() => scrollToStep(idx)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl transition-all duration-300 shrink-0 ${
                      isCurrent
                        ? "bg-accent text-paper shadow-md ring-4 ring-accent/20"
                        : "bg-surface-2 text-muted border border-line"
                    }`}
                  >
                    <StepIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold text-accent-deep tracking-widest uppercase">
                      Phase {step.step}
                    </span>
                    <p className="text-xs font-semibold text-muted flex items-center gap-1.5 mt-0.5">
                      <Clock className="h-3 w-3" />
                      <span>{step.timeline}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-deep mt-1">
                    {step.tagline}
                  </p>

                  <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-muted">
                    {step.description}
                  </p>

                  {/* Clean Bullet Checklist */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-line/60">
                    {step.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/80"
                      >
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile-Only Image Preview inside the active card */}
                  <div className="lg:hidden mt-5 pt-4 border-t border-line/60">
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-line">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                        <span className="text-xs font-bold text-white drop-shadow">
                          {step.highlightLabel}
                        </span>
                        <span className="text-xs font-bold text-accent drop-shadow">
                          {step.highlightStat}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Premium Sticky Showcase Window for Large Screens */}
        <div className="hidden lg:block lg:col-span-5 sticky top-28">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-line bg-ink text-white group">
            {/* Top Aspect Window with Real Image */}
            <div className="relative aspect-[4/3.2] w-full overflow-hidden bg-[#071320]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    sizes="42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Live Badge Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-bold text-accent shadow-sm">
                  Phase {current.step} Active
                </span>
              </div>

              {/* Floating Stat Metric Top Right */}
              <div className="absolute top-4 right-4 z-10 text-right">
                <span className="inline-block rounded-xl bg-accent px-3 py-1 text-xs font-black text-ink shadow-lg">
                  {current.highlightStat}
                </span>
              </div>

              {/* Overlaid Title on Image Bottom */}
              <div className="absolute bottom-4 left-5 right-5 z-10">
                <p className="text-[11px] font-bold uppercase tracking-wider text-accent drop-shadow">
                  {current.highlightLabel}
                </p>
                <h4 className="font-display text-xl font-black text-white mt-0.5 leading-snug drop-shadow-md">
                  {current.title}
                </h4>
              </div>
            </div>

            {/* Bottom Insight Card Section */}
            <div className="p-6 bg-[#0c1f17] border-t border-white/10 space-y-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.description}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs text-white/75 leading-relaxed line-clamp-2"
                >
                  {current.description}
                </motion.p>
              </AnimatePresence>

              {/* Interactive Step Navigator Dots */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {STEPS.map((s, idx) => (
                    <button
                      key={s.step}
                      onClick={() => scrollToStep(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeStep === idx
                          ? "w-8 bg-accent"
                          : "w-2 bg-white/25 hover:bg-white/50"
                      }`}
                      aria-label={`Jump to step ${idx + 1}`}
                    />
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:brightness-110"
                >
                  Book Discovery Call
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
