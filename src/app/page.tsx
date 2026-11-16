import Link from "next/link";
import Image from "next/image";
import {
 ArrowRight,
 Check,
 Users,
 Search,
 LayoutDashboard,
 Scale,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import FaqSectionEnhanced from "@/components/FaqSectionEnhanced";
import SectorsInteractiveSection from "@/components/SectorsInteractiveSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import HowItWorksSection from "@/components/HowItWorksSection";
import WaysToHireSection from "@/components/WaysToHireSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamShowcase from "@/components/TeamShowcase";
import WhatYouGetRows from "@/components/WhatYouGetRows";
import PricingSection from "@/components/PricingSection";
import HeroSection from "@/components/HeroSection";
import AnimatedStatsSection from "@/components/AnimatedStatsSection";
import {
 STATS,
 WORKFLOW_STEPS,
 CORE_BENEFITS,
 COMPARISON_DATA,
 TEAM_MEMBERS,
 TESTIMONIALS,
 SECTORS,
 FAQS,
 COMPANY_CONTACT,
} from "@/data/siteData";

const benefitIcons = [Users, Search, LayoutDashboard, Scale];

const proofPoints = [
 "From £1,495 per role",
 "Fee fixed before outreach",
 "UK-wide senior search",
];

export default function HomePage() {
 return (
 <div>
 {/* ================= HERO (AWESOME AI VISUAL & METRICS) ================= */}
 <HeroSection />

 {/* ================= SECTOR STRIP ================= */}
 <section className="border-y border-line bg-surface">
 <div className="wrap py-4 flex flex-wrap items-center gap-x-7 gap-y-2">
 <span className="text-[13px] font-semibold text-ink">
 Searching across
 </span>
 {[
 "Legal & compliance",
 "SaaS & technology",
 "Professional services",
 "Finance",
 "Operations",
 "Executive leadership",
 ].map((sector) => (
 <span key={sector} className="text-[13px] text-muted">
 {sector}
 </span>
 ))}
 </div>
 </section>

 {/* ================= ANIMATED STATS COUNTERS ================= */}
 <AnimatedStatsSection />

 {/* ================= MODEL ================= */}
 <section className="wrap section">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 {/* Left Visual with Floating Badges */}
 <div className="lg:col-span-6">
 <Reveal>
 <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl border border-line bg-ink group">
 <Image
 src="/images/campaign-creators-gMsnXqILjp4-unsplash-scaled-copy.webp"
 alt="A hiring team reviewing candidates together"
 fill
 sizes="(max-width: 1024px) 100vw, 50vw"
 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />

 {/* Floating Bottom Left Badge */}
 <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-paper/90 backdrop-blur-md border border-line shadow-lg flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="w-9 h-9 rounded-xl bg-accent text-paper flex items-center justify-center font-bold text-sm shadow-xs">
 £
 </div>
 <div>
 <p className="text-[10px] uppercase font-bold tracking-wider text-accent-deep">
 Commercial Clarity
 </p>
 <p className="text-xs font-bold text-ink">
 Pre-agreed locked fee from £1,495
 </p>
 </div>
 </div>
 <span className="text-xs font-bold text-accent-deep bg-accent-soft px-2.5 py-1 rounded-full border border-accent/20 shrink-0">
 SLA Protected
 </span>
 </div>
 </div>
 </Reveal>
 </div>

 {/* Right Side Editorial Copy & Polish */}
 <div className="lg:col-span-6">
 <span className="tag">The Model</span>
 <h2 className="h2 mt-4 text-ink">A flat fee, not a salary cut.</h2>
 <p className="lead mt-4 text-muted leading-relaxed">
 Traditional agencies charge 20%-30% of candidate salary, however
 straightforward the search. A senior hire can carry a five-figure
 invoice before they have even started.
 </p>
 <p className="body-text mt-3 text-muted leading-relaxed">
 HST agrees one flat fee before the search begins. You know the
 exact cost from day one, and our advice on pay stays objective
 because the invoice never moves with the offer.
 </p>

 <div className="mt-6 space-y-3 pt-6 border-t border-line">
 {[
 {
 title: "Fee confirmed in writing before outreach",
 desc: "Clear upfront engagement order. No surprise invoices.",
 },
 {
 title: "Zero incentive to inflate candidate salaries",
 desc: "We negotiate objectively in your favour, never to bump commission.",
 },
 {
 title: "Full search, video screening & shortlist included",
 desc: "Dedicated senior recruiter handling direct headhunt.",
 },
 {
 title: "Contractual Section 6 SLA guarantee",
 desc: "8-Week placement shield and full cash refund guarantee.",
 },
 ].map((item) => (
 <div key={item.title} className="flex items-start gap-3">
 <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
 <Check className="w-3.5 h-3.5 stroke-[2.5]" />
 </span>
 <div>
 <h4 className="text-sm font-bold text-ink">{item.title}</h4>
 <p className="text-xs text-muted mt-0.5">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>

 <div className="mt-8 flex flex-wrap items-center gap-4">
 <Link href="/fixed-fee" className="btn btn-ink">
 Read about fixed-fee hiring
 </Link>
 <Link href="/pricing" className="btn btn-line">
 Calculate your fee
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* ================= HOW IT WORKS (STANDALONE ADVANCED COMPONENT) ================= */}
 <HowItWorksSection />

 {/* ================= WHAT YOU GET (HORIZONTAL FEATURE ROWS) ================= */}
 <WhatYouGetRows />

 {/* ================= CALCULATOR ================= */}
 <section className="wrap section-tight">
 <Reveal>
 <SavingsCalculator />
 </Reveal>
 </section>

 {/* ================= PRICING & TIERS ================= */}
 <PricingSection />

 {/* ================= COMPARISON (ENHANCED WAYS TO HIRE) ================= */}
 <WaysToHireSection />

 {/* ================= SECTORS (INTERACTIVE & DETAILED) ================= */}
 <SectorsInteractiveSection />

 {/* ================= TESTIMONIALS SLIDER ================= */}
 <section className="bg-surface border-y border-line">
 <div className="wrap section">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
 <div className="max-w-[560px]">
 <span className="tag">Client Reviews</span>
 <h2 className="h2 mt-4">See how leaders find working with us.</h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Direct feedback from UK Law Firm Practice Directors, Operations Leaders, and Accountancy Principals.
 </p>
 </div>
 <div className="flex items-center gap-2">
 <span className="text-xs font-semibold text-muted">
 Automatic presentation · Hover to pause
 </span>
 </div>
 </div>

 <TestimonialSlider />
 </div>
 </section>

 {/* ================= TEAM (AWESOME INTERACTIVE SHOWCASE) ================= */}
 <TeamShowcase />

 {/* ================= FAQ (SEARCHABLE & CATEGORIZED) ================= */}
 <FaqSectionEnhanced />

 {/* ================= CTA & INQUIRY FORM ================= */}
 <section className="wrap pb-16 sm:pb-24">
 <div className="rounded-3xl bg-ink text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 <div className="lg:col-span-6">
 <span className="inline-flex rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent">
 Discovery & Scoping
 </span>
 <h2 className="h2 mt-4 max-w-[16ch] text-white">
 See what a fixed fee search looks like for your next hire.
 </h2>
 <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-white/70">
 30 minutes, zero obligation. We’ll scope the role, benchmark the market, and confirm your fixed fee in writing within 24 hours.
 </p>

 <div className="mt-8 space-y-3 text-sm text-white/80">
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>One flat fee agreed upfront - never percentage-based</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>8-week placement guarantee & 14-day refund protection</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>Direct contact with Ian, Sean, or Millie</span>
 </div>
 </div>

 <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50 space-y-1">
 <p>{COMPANY_CONTACT.address}</p>
 <p>Email: {COMPANY_CONTACT.email} · Phone: {COMPANY_CONTACT.phone}</p>
 </div>
 </div>

 <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
 <h3 className="font-display text-lg font-bold text-white mb-4">
 Request a Free Fixed-Fee Review
 </h3>
 <ContactInquiryForm defaultRequirement="one-off" />
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
