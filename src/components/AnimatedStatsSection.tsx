"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS_DATA = [
  {
    numericValue: 1495,
    prefix: "£",
    suffix: "",
    label: "Flat Fee Starting Rate",
    subtext: "vs. 20%-30% typical agency commission",
    badge: "Transparent",
  },
  {
    numericValue: 5,
    prefix: "",
    suffix: " Days",
    label: "Average Shortlist Delivery",
    subtext: "Pre-screened candidates directly to inbox",
    badge: "Direct Headhunt",
  },
  {
    numericValue: 8,
    prefix: "",
    suffix: " Weeks",
    label: "Placement Guarantee Shield",
    subtext: "Contractual Section 6 free replacement SLA",
    badge: "Protected",
  },
  {
    numericValue: 80,
    prefix: "Up to ",
    suffix: "%",
    label: "Recruitment Budget Retained",
    subtext: "Zero commission penalty on candidate pay",
    badge: "Client Savings",
  },
];

export default function AnimatedStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll(".stat-item-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 32,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="border-y border-line bg-surface-soft/60 py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={stat.label}
              className="stat-item-card group relative p-6 rounded-2xl bg-paper border border-line shadow-2xs hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle card top accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-deep bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
                    {stat.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-muted/60">
                    0{idx + 1}
                  </span>
                </div>

                {/* Rolling Number */}
                <div className="font-display text-3xl sm:text-4xl lg:text-[40px] font-black text-ink tracking-tight leading-none group-hover:text-accent-deep transition-colors duration-200">
                  <AnimatedCounter
                    value={stat.numericValue}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1.8}
                  />
                </div>

                <h4 className="font-display font-bold text-sm sm:text-[15px] text-ink mt-3 leading-snug">
                  {stat.label}
                </h4>
              </div>

              <p className="text-xs text-muted mt-2 leading-relaxed pt-3 border-t border-line/60">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
