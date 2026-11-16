"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HeroSlide {
  id: string;
  tag: string;
  headline: string;
  accentWord: string;
  subheadline: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  statBadge: string;
  highlightStat: string;
  highlightLabel: string;
  proofPoints: string[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    tag: "Fixed Fee Recruitment · UK-Wide",
    headline: "The 30% agency fee",
    accentWord: "ends here.",
    subheadline:
      "Hire top-tier legal, technology, and commercial specialists for one transparent flat fee agreed in writing before outreach begins. No salary penalties, no invoice surprises.",
    image: "/images/hero-executive-boardroom.jpg",
    ctaText: "Book Free Hiring Review",
    ctaLink: "/contact",
    secondaryCtaText: "Compare Fixed Fee vs Agency",
    secondaryCtaLink: "/pricing",
    statBadge: "Section 6 SLA Protected",
    highlightStat: "From £1,495",
    highlightLabel: "Flat Pre-Agreed Fee",
    proofPoints: [
      "From £1,495 flat fee",
      "Zero commission escalators",
      "8-Week replacement guarantee",
      "UK Legal, Tech & Professional search",
    ],
  },
  {
    id: "slide-2",
    tag: "Legal 500 & Regional Practices",
    headline: "Senior fee-earner search,",
    accentWord: "completely fixed.",
    subheadline:
      "Commercial Property, Private Client, and Conveyancing specialists headhunted directly across the UK. Zero commission incentives to push salary offers higher.",
    image: "/images/scott-graham-5fNmWej4tAA-unsplash-scaled-1.jpg",
    ctaText: "Scope a Legal Role",
    ctaLink: "/contact",
    secondaryCtaText: "Explore Legal Sectors",
    secondaryCtaLink: "/#sectors",
    statBadge: "92% Skills Shortage Covered",
    highlightStat: "5 Days",
    highlightLabel: "Vetted Video Shortlist",
    proofPoints: [
      "Commercial Property & M&A Solicitors",
      "Private Client Senior Associates",
      "Heads of Conveyancing",
      "Full video screening before submission",
    ],
  },
  {
    id: "slide-3",
    tag: "Talent Flow · Recruitment as a Service",
    headline: "An embedded talent team,",
    accentWord: "without agency invoices.",
    subheadline:
      "Hiring 3+ specialists annually? Replace £40k+ in contingent agency commission with a dedicated, flat subscription retainer from £1,500/month.",
    image: "/images/campaign-creators-e6n7uoEnYbA-unsplash-scaled-1.jpg",
    ctaText: "Discuss Talent Flow Retainer",
    ctaLink: "/contact",
    secondaryCtaText: "Calculate Volume Savings",
    secondaryCtaLink: "/#pricing",
    statBadge: "Save up to 80% on Annual Fees",
    highlightStat: "From £1,500",
    highlightLabel: "Per Month RaaS Retainer",
    proofPoints: [
      "Dedicated embedded talent partner",
      "Continuous passive candidate pipelining",
      "Quarterly volume reviews that flex with you",
      "Rolling 30-day notice following 3-month term",
    ],
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slide = HERO_SLIDES[current];

  // GSAP Cinematic Parallax on Scroll
  useEffect(() => {
    const container = containerRef.current;
    const bgImage = bgImageRef.current;
    if (!container || !bgImage) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parallax = gsap.to(bgImage, {
      y: 120,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      parallax.kill();
    };
  }, []);

  // GSAP Slide Entry Animation Timeline
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const elements = content.querySelectorAll(".hero-anim-node");
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 28,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        overwrite: "auto",
      }
    );
  }, [current]);

  // Autoplay Slider Timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  const goToSlide = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(index);
  };

  const prevSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[620px] sm:min-h-[700px] lg:min-h-[740px] flex items-center justify-center overflow-hidden bg-[#06120c]"
    >
      {/* ================= GSAP PARALLAX BACKGROUND IMAGE ================= */}
      <div
        ref={bgImageRef}
        key={slide.id}
        className="absolute -top-[10%] left-0 right-0 -bottom-[10%] z-0 transition-opacity duration-700"
      >
        <Image
          src={slide.image}
          alt={slide.headline}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic Directional Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06120c]/95 via-[#06120c]/85 to-[#06120c]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06120c] via-transparent to-[#06120c]/50" />
      </div>

      {/* ================= LEFT-ALIGNED CONTENT WITH GSAP REVEALS ================= */}
      <div className="wrap relative z-10 text-left py-20 sm:py-24">
        <div ref={contentRef} className="max-w-3xl">
          {/* Top Tag Pill */}
          <div className="hero-anim-node inline-flex items-center gap-2 rounded-full bg-accent/15 backdrop-blur-md border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent shadow-sm">
            <span>{slide.tag}</span>
          </div>

          {/* Main Headline with Accent Glow */}
          <h1 className="hero-anim-node mt-4 font-display font-black leading-[1.02] tracking-[-0.04em] text-[clamp(36px,4.5vw,62px)] text-white drop-shadow-md">
            {slide.headline}{" "}
            <span className="relative inline-block text-accent">
              {slide.accentWord}
              <span className="absolute bottom-1 left-0 right-0 h-[3.5px] bg-accent rounded-full" />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="hero-anim-node mt-4 text-[16px] sm:text-[18px] leading-relaxed text-white/85 max-w-[46ch] font-normal">
            {slide.subheadline}
          </p>

          {/* Action Buttons */}
          <div className="hero-anim-node mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              href={slide.ctaLink}
              className="btn btn-accent text-[14px] font-bold px-6 py-3 shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={slide.secondaryCtaLink}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-[14px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{slide.secondaryCtaText}</span>
            </Link>
          </div>

          {/* Proof Points Checkmarks */}
          <ul className="hero-anim-node mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-white/15">
            {slide.proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-white/90"
              >
                <div className="h-3.5 w-3.5 rounded-full bg-accent text-ink flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= SLIDE CONTROLS & BOTTOM STATS ROW ================= */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-4xl">
          {/* Quick Highlight Metrics */}
          <div className="flex items-center gap-6">
            <div>
              <span className="font-display text-2xl font-black text-accent tracking-tight block">
                {slide.highlightStat}
              </span>
              <span className="text-[11px] font-medium text-white/70 block mt-0.5">
                {slide.highlightLabel}
              </span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <span className="font-display text-2xl font-black text-white tracking-tight block">
                8 Weeks
              </span>
              <span className="text-[11px] font-medium text-white/70 block mt-0.5">
                Placement Guarantee SLA
              </span>
            </div>
          </div>

          {/* Interactive Slide Controls (Arrows & Indicators) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 px-2">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    current === idx
                      ? "w-7 bg-accent"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
