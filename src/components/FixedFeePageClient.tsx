"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowRight,
 Check,
 Minus,
 ShieldCheck,
 HelpCircle,
 PhoneCall,
 Lock,
 Clock,
 RotateCcw,
 Scale,
 CheckCircle2,
 TrendingDown,
 Building2,
 Users,
 ChevronDown,
 Plus,
 FileCheck2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SavingsCalculator from "@/components/SavingsCalculator";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import { FAQS } from "@/data/siteData";

const FIXED_FEE_INCLUDES = [
 "One flat fee agreed in writing before search outreach begins",
 "End-to-end passive headhunting across UK professional networks",
 "Dedicated senior partner handling (Ian, Sean, or Millie)",
 "Full candidate pre-screen video interviews delivered within 5 days",
 "Transparent candidate pipeline reporting with salary benchmarks",
 "Notice period coaching and proactive counter-offer defense",
 "8-Week free replacement guarantee under identical mandate scope",
 "Section 6.2 written 14-day 100% cash refund guarantee",
];

const RAAS_INCLUDES = [
 "Predictable flat monthly subscription retainer from £1,500/month",
 "Dedicated embedded talent acquisition capacity managing all live vacancies",
 "Continuous proactive candidate pipelining (never start from zero)",
 "Quarterly hiring reviews that scale capacity up or down dynamically",
 "Full employer value proposition & job description calibration",
 "Zero per-placement commission invoices - saving up to 80% on annual fees",
 "Continuous replacement guarantee active throughout retainer term",
 "Flexible 3-month initial term rolling on 30-day notice thereafter",
];

const CONTINGENT_ISSUES = [
 {
 title: "Commission Escalators",
 desc: "20%-30% of salary, rising automatically if offer negotiations go up - rewarding the recruiter for pushing packages higher.",
 },
 {
 title: "The Agency Race",
 desc: "Multiple agencies racing each other to flip job board CVs, resulting in spammy outreach and candidate fatigue.",
 },
 {
 title: "Junior Resourcer Handoffs",
 desc: "A senior director wins the pitch, but an inexperienced junior resourcer is assigned to filter your critical brief.",
 },
 {
 title: "Disguised Rebate Clauses",
 desc: "Rarely any true cash refund; failed hires are trapped in restrictive credit notes with unreasonable replacement caveats.",
 },
];

const HST_ADVANTAGES = [
 {
 title: "100% Locked Flat Fee",
 desc: "Confirmed in writing before outreach begins; never increases regardless of candidate final package.",
 },
 {
 title: "Objective Pay Benchmarking",
 desc: "Because our fee never rises with the offer, our salary advice remains 100% honest and aligned with your budget.",
 },
 {
 title: "Direct Passive Headhunting",
 desc: "We confidentially approach currently employed practitioners who never look at job boards or recruitment portals.",
 },
 {
 title: "Section 6 Cash Refund SLA",
 desc: "If no placement is made and agreed SLAs were unfulfilled, receive a 100% cash refund within 14 business days.",
 },
];

const SLA_PILLARS = [
 {
 icon: Lock,
 number: "01",
 title: "Pre-Agreed Fixed Fee",
 desc: "Your fee is locked in writing in your formal Engagement Order before any outreach begins. Zero commission escalators.",
 },
 {
 icon: Clock,
 number: "02",
 title: "12-Week Active Search",
 desc: "Committed 12-week exclusive search window, with first vetted candidate video profiles delivered within 5 business days.",
 },
 {
 icon: ShieldCheck,
 number: "03",
 title: "8-Week Replacement Shield",
 desc: "Section 6.5 protection: If a placed candidate leaves within 8 weeks, HST conducts one free replacement search of identical scope.",
 },
 {
 icon: RotateCcw,
 number: "04",
 title: "14-Day Cash Refund SLA",
 desc: "If no hire is made and agreed SLAs are unfulfilled, receive a 100% cash refund within 14 business days. No credit note traps.",
 },
];

const IMPACT_METRICS = [
 {
 numericValue: 1495,
 prefix: "£",
 suffix: "",
 label: "Starting Flat Fee",
 subtext: "Typically ~6% effective rate per placement",
 },
 {
 numericValue: 5,
 prefix: "",
 suffix: " Days",
 label: "Vetted Shortlist Speed",
 subtext: "Pre-screened video interviews to your inbox",
 },
 {
 numericValue: 8,
 prefix: "",
 suffix: " Weeks",
 label: "Placement Guarantee",
 subtext: "Contractual Section 6 free replacement",
 },
 {
 numericValue: 80,
 prefix: "Up to ",
 suffix: "%",
 label: "Budget Retained",
 subtext: "Zero commission penalties on candidate pay",
 },
];

export default function FixedFeePageClient() {
 const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
 const [pricingModelTab, setPricingModelTab] = useState<"assured" | "talentflow">("assured");

 const fixedFeeFaqs = FAQS.filter(
 (f) => f.category === "fixed-fee" || f.category === "talentflow"
 );

 return (
 <div className="overflow-hidden">
 {/* ================= HERO SECTION ================= */}
 <section className="relative wrap pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
 {/* Ambient Top Glow */}
 <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="lg:col-span-7"
 >
 {/* Pill Tag */}
 <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent-deep shadow-2xs">
 
 <span>Commercial Clarity · UK-Wide Search</span>
 </div>

 <h1 className="mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-[clamp(38px,5vw,66px)] text-ink">
 Recruitment.{" "}
 <span className="relative inline-block text-accent-deep">
 Fixed.
 <motion.span
 initial={{ width: 0 }}
 animate={{ width: "100%" }}
 transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
 className="absolute bottom-1 left-0 h-[4px] bg-accent rounded-full"
 />
 </span>
 </h1>

 <p className="mt-5 lead text-muted leading-relaxed max-w-[50ch]">
 Because hiring top-tier specialists shouldn&apos;t cost more just because they earn more. HST agrees one flat fee in writing before outreach begins - zero percentage surprises, zero salary penalties.
 </p>

 <p className="mt-3 body-text text-muted leading-relaxed max-w-[52ch]">
 Traditional agencies take 20%-30% of candidate salary, creating an inherent incentive to inflate pay negotiations. Our locked fee keeps our advice completely objective, protecting your company&apos;s bottom line.
 </p>

 {/* Quick Feature Badges */}
 <div className="mt-8 flex flex-wrap items-center gap-2.5">
 {[
 "From £1,495 flat fee",
 "8-Week replacement guarantee",
 "14-Day cash refund SLA",
 "Direct senior partner search",
 ].map((pill) => (
 <span
 key={pill}
 className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-surface border border-line text-ink"
 >
 <Check className="w-3 h-3 text-accent stroke-[3]" />
 <span>{pill}</span>
 </span>
 ))}
 </div>

 {/* Action Buttons */}
 <div className="mt-9 flex flex-wrap items-center gap-4">
 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
 <a href="#calculator" className="btn btn-ink">
 <span>Calculate Fee Savings</span>
 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
 </a>
 </motion.div>
 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
 <Link href="/contact" className="btn btn-line">
 <span>Book Free Hiring Review</span>
 </Link>
 </motion.div>
 </div>
 </motion.div>

 {/* Hero Visual Card with Layered Badges */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
 className="lg:col-span-5"
 >
 <div className="relative aspect-[4/4.8] sm:aspect-[4/4.2] lg:aspect-[4/4.8] overflow-hidden rounded-3xl shadow-2xl border border-line bg-ink group">
 <Image
 src="/images/laptop2.png"
 alt="HST fixed fee recruitment reporting and candidate shortlist platform"
 fill
 priority
 sizes="(max-width: 1024px) 100vw, 42vw"
 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none" />

 {/* Top Floating Badge */}
 <motion.div
 initial={{ opacity: 0, y: -10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="absolute top-5 left-5 right-5 p-3.5 rounded-2xl bg-paper/95 backdrop-blur-md border border-line shadow-lg flex items-center justify-between"
 >
 <div className="flex items-center gap-2.5">
 <div className="w-8 h-8 rounded-xl bg-accent-soft text-accent-deep flex items-center justify-center font-bold text-xs">
 <Lock className="w-4 h-4 text-accent-deep" />
 </div>
 <div>
 <p className="text-[10px] font-bold uppercase tracking-wider text-accent-deep">
 Contractual Lock
 </p>
 <p className="text-xs font-bold text-ink">
 Locked Fee from £1,495
 </p>
 </div>
 </div>
 <span className="text-[11px] font-bold text-accent-deep bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
 Zero Escalators
 </span>
 </motion.div>

 {/* Bottom Floating Stats Box */}
 <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-paper/95 backdrop-blur-md border border-line shadow-lg">
 <div className="flex items-center justify-between">
 <div>
 <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
 Guaranteed Delivery
 </span>
 <p className="font-display text-xl font-black text-ink mt-0.5">
 Section 6 SLA Protection
 </p>
 </div>
 <span className="text-xs font-bold text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 100% Cash Refund SLA
 </span>
 </div>
 <p className="text-[11px] text-muted mt-2 border-t border-line/60 pt-2 leading-relaxed">
 8-Week placement shield and 14-day cash refund if SLAs are unmet.
 </p>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 {/* ================= ANIMATED STATS SECTION ================= */}
 <section className="border-y border-line bg-surface-soft/60 py-10 sm:py-12">
 <div className="wrap">
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-line">
 {IMPACT_METRICS.map((stat, idx) => (
 <motion.div
 key={stat.label}
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-20px" }}
 transition={{ duration: 0.5, delay: idx * 0.08 }}
 className={`flex flex-col justify-center ${
 idx === 0
 ? "lg:pr-8"
 : idx === IMPACT_METRICS.length - 1
 ? "lg:pl-8"
 : "lg:px-8"
 }`}
 >
 <div className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-none">
 <AnimatedCounter
 value={stat.numericValue}
 prefix={stat.prefix}
 suffix={stat.suffix}
 duration={1.8 + idx * 0.15}
 />
 </div>
 <h4 className="font-display text-sm sm:text-base font-bold text-ink mt-2.5">
 {stat.label}
 </h4>
 <p className="text-xs text-muted mt-1 leading-relaxed">
 {stat.subtext}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* ================= SAVINGS CALCULATOR SECTION ================= */}
 <section id="calculator" className="wrap section scroll-mt-20">
 <div className="max-w-[620px] mb-10">
 <span className="tag">Interactive Cost Model</span>
 <h2 className="h2 mt-4 text-ink">
 See the exact savings on your next placement.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Drag the sliders below to benchmark traditional 20%-30% contingent agency invoices against HST&apos;s pre-agreed fixed fee.
 </p>
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 >
 <SavingsCalculator />
 </motion.div>
 </section>

 {/* ================= TWO ENGAGEMENT MODELS ================= */}
 <section id="models" className="wrap section-tight scroll-mt-20">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-line">
 <div className="max-w-[640px]">
 <span className="tag">Engagement Models</span>
 <h2 className="h2 mt-4 text-ink">
 Two transparent ways to hire with HST.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Whether hiring for one strategic vacancy or replacing costly agency spend with an embedded annual talent acquisition partner:
 </p>
 </div>

 <div className="flex items-center gap-1.5 p-1 bg-surface border border-line rounded-2xl shrink-0">
 <button
 type="button"
 onClick={() => setPricingModelTab("assured")}
 className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
 pricingModelTab === "assured"
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface-2"
 }`}
 >
 One-off Hires
 </button>
 <button
 type="button"
 onClick={() => setPricingModelTab("talentflow")}
 className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
 pricingModelTab === "talentflow"
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface-2"
 }`}
 >
 Volume / RaaS
 </button>
 </div>
 </div>

 {/* 2 Big Cards Grid */}
 <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
 {/* Card 1: HST Assured (Fixed Fee) */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 whileHover={{ y: -6 }}
 transition={{ duration: 0.4 }}
 className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative border ${
 pricingModelTab === "assured"
 ? "bg-paper text-ink border-accent ring-2 ring-accent/30 shadow-xl"
 : "bg-paper text-ink border-line shadow-xs"
 }`}
 >
 <div>
 <div className="flex items-center justify-between">
 <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-accent-soft text-accent-deep border border-accent/20">
 One-Off / Critical Hires
 </span>
 <span className="text-xs font-mono font-bold text-muted">
 Option 01
 </span>
 </div>

 <h3 className="font-display text-3xl font-extrabold mt-5 text-ink tracking-tight">
 HST Assured (Fixed Fee)
 </h3>
 <p className="text-xs font-bold uppercase tracking-wider text-accent-deep mt-1">
 Per Vacancy Executive Search Mandate
 </p>

 <p className="mt-4 text-sm text-muted leading-relaxed">
 Bespoke headhunting for specific, critical vacancies (fee-earners, solicitors, directors, and senior specialists). Pay once - agreed in writing before outreach begins.
 </p>

 {/* Price Block */}
 <div className="mt-7 pt-6 border-t border-line">
 <span className="text-xs uppercase tracking-wider text-muted font-bold block">
 Locked Commercial Investment:
 </span>
 <div className="flex items-baseline gap-2 mt-1">
 <span className="font-display text-5xl font-black text-ink tracking-tight">
 From £1,495
 </span>
 <span className="text-xs text-muted font-semibold">
 + VAT · (~6% effective rate)
 </span>
 </div>
 <p className="text-xs text-accent-deep font-semibold mt-1">
 Confirmed in writing within 24 hours of your scoping call.
 </p>
 </div>

 {/* Deliverables */}
 <ul className="mt-7 space-y-2.5">
 {FIXED_FEE_INCLUDES.map((item) => (
 <li key={item} className="flex items-start gap-2.5 text-xs text-ink/85 leading-relaxed">
 <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="mt-9 pt-6 border-t border-line">
 <Link href="/contact" className="btn btn-ink w-full justify-center">
 <span>Scope a Fixed Fee Role</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </motion.div>

 {/* Card 2: Talent Flow (RaaS Subscription) */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 whileHover={{ y: -6 }}
 transition={{ duration: 0.4, delay: 0.1 }}
 className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative border ${
 pricingModelTab === "talentflow"
 ? "bg-gradient-to-b from-[#0b1d15] via-[#091823] to-[#071320] text-white shadow-2xl ring-2 ring-accent border-accent/40"
 : "bg-ink border-white/10 text-white shadow-xl"
 }`}
 >
 <div>
 <div className="flex items-center justify-between">
 <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/10 text-accent border border-white/15">
 Continuous Hiring (3+ Roles / Year)
 </span>
 <span className="text-xs font-mono font-bold text-white/50">
 Option 02
 </span>
 </div>

 <h3 className="font-display text-3xl font-extrabold mt-5 text-white tracking-tight">
 Talent Flow (RaaS)
 </h3>
 <p className="text-xs font-bold uppercase tracking-wider text-accent mt-1">
 Recruitment-as-a-Service Subscription
 </p>

 <p className="mt-4 text-sm text-white/75 leading-relaxed">
 An embedded talent acquisition infrastructure acting directly under your brand. Pipelining passive specialists continuously so you never start from scratch when a role opens.
 </p>

 {/* Price Block */}
 <div className="mt-7 pt-6 border-t border-white/15">
 <span className="text-xs uppercase tracking-wider text-white/50 font-bold block">
 Predictable Retainer Tier:
 </span>
 <div className="flex items-baseline gap-2 mt-1">
 <span className="font-display text-5xl font-black text-white tracking-tight">
 From £1,500
 </span>
 <span className="text-xs text-white/60 font-semibold">
 + VAT / month
 </span>
 </div>
 <p className="text-xs text-accent font-semibold mt-1">
 Zero per-placement commission invoices. Flexible quarterly capacity reviews.
 </p>
 </div>

 {/* Deliverables */}
 <ul className="mt-7 space-y-2.5">
 {RAAS_INCLUDES.map((item) => (
 <li key={item} className="flex items-start gap-2.5 text-xs text-white/85 leading-relaxed">
 <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="mt-9 pt-6 border-t border-white/15">
 <Link href="/contact" className="btn btn-accent w-full justify-center shadow-md">
 <span>Discuss Talent Flow Retainer</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </motion.div>
 </div>
 </section>

 {/* ================= CONTINGENT VS FIXED COMPARISON ================= */}
 <section className="bg-surface border-y border-line">
 <div className="wrap section">
 <div className="max-w-[620px] mb-12">
 <span className="tag">Why Switch</span>
 <h2 className="h2 mt-4 text-ink">
 Contingent recruitment vs. HST fixed fee.
 </h2>
 <p className="mt-3 text-muted text-[16px] leading-relaxed">
 When agencies work on contingent commission, their incentives are financially misaligned with yours. Here is how HST removes the friction:
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
 {/* Left: Traditional Agency Model */}
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="card p-7 sm:p-9 bg-paper border border-line shadow-xs flex flex-col justify-between"
 >
 <div>
 <div className="flex items-center justify-between pb-4 border-b border-line">
 <h3 className="font-display text-xl font-bold text-ink">
 Traditional Contingent Agency
 </h3>
 <span className="text-xs text-rose-600 font-bold bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
 Conflicting Incentives
 </span>
 </div>

 <div className="mt-6 space-y-5">
 {CONTINGENT_ISSUES.map((item) => (
 <div key={item.title} className="flex items-start gap-3">
 <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 font-bold text-xs border border-rose-200 mt-0.5">
 ✕
 </span>
 <div>
 <h4 className="text-sm font-bold text-ink">{item.title}</h4>
 <p className="text-xs text-muted mt-1 leading-relaxed">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="mt-8 pt-5 border-t border-line text-xs text-rose-600 font-semibold flex items-center gap-2">
 <Minus className="w-4 h-4 shrink-0" />
 <span>Final invoice unknown until candidate offer is accepted.</span>
 </div>
 </motion.div>

 {/* Right: HST Fixed Fee Partnership */}
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="card p-7 sm:p-9 bg-accent-soft/70 border-accent/40 shadow-md flex flex-col justify-between"
 >
 <div>
 <div className="flex items-center justify-between pb-4 border-b border-accent/20">
 <h3 className="font-display text-xl font-bold text-ink">
 HST Fixed Fee Partnership
 </h3>
 <span className="text-xs text-accent-deep font-bold bg-white px-3 py-1 rounded-full border border-accent/20 shadow-2xs">
 100% Commercial Alignment
 </span>
 </div>

 <div className="mt-6 space-y-5">
 {HST_ADVANTAGES.map((item) => (
 <div key={item.title} className="flex items-start gap-3">
 <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-paper font-bold text-xs shadow-xs mt-0.5">
 ✓
 </span>
 <div>
 <h4 className="text-sm font-bold text-ink">{item.title}</h4>
 <p className="text-xs text-ink/80 mt-1 leading-relaxed">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="mt-8 pt-5 border-t border-accent/20 text-xs text-accent-deep font-bold flex items-center gap-2">
 <Check className="w-4 h-4 shrink-0 stroke-[3]" />
 <span>Protected by contractual Section 6 SLA and written cash guarantee.</span>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* ================= 4 SLA PILLARS OF SECTION 6 ================= */}
 <section className="wrap section">
 <div className="max-w-[620px] mb-12">
 <span className="tag">Contractual Guarantees</span>
 <h2 className="h2 mt-4 text-ink">
 How HST&apos;s Service Level Agreements protect you.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Every Fixed Fee and Talent Flow assignment is governed by written SLAs under England &amp; Wales commercial law:
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {SLA_PILLARS.map((pillar, idx) => {
 const Icon = pillar.icon;
 return (
 <motion.div
 key={pillar.title}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.45, delay: idx * 0.08 }}
 whileHover={{ y: -5 }}
 className="card p-6 bg-paper border border-line shadow-xs hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
 >
 <div>
 <div className="flex items-center justify-between mb-4">
 <div className="h-11 w-11 rounded-xl bg-accent-soft text-accent-deep flex items-center justify-center border border-accent/20">
 <Icon className="w-5 h-5" />
 </div>
 <span className="text-xs font-mono font-bold text-muted">
 {pillar.number}
 </span>
 </div>

 <h4 className="font-display text-base font-bold text-ink mb-2">
 {pillar.title}
 </h4>
 <p className="text-xs text-muted leading-relaxed">
 {pillar.desc}
 </p>
 </div>

 <div className="mt-5 pt-3 border-t border-line text-[11px] font-bold text-accent-deep flex items-center gap-1.5">
 <ShieldCheck className="w-3.5 h-3.5" />
 <span>SLA Clause Verified</span>
 </div>
 </motion.div>
 );
 })}
 </div>
 </section>

 {/* ================= CLIENT PROOF & TESTIMONIAL SLIDER ================= */}
 <section className="bg-surface border-y border-line">
 <div className="wrap section">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
 <div className="max-w-[560px]">
 <span className="tag">Partner Trust</span>
 <h2 className="h2 mt-4 text-ink">
 Trusted by Law Practices &amp; Growing Businesses.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 See how UK Practice Directors and Operations Leaders describe partnering exclusively with HST.
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

 {/* ================= CATEGORIZED FAQS ================= */}
 <section className="wrap section">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
 <div className="lg:col-span-4">
 <div className="lg:sticky lg:top-28">
 <span className="tag">Fixed Fee &amp; Talent Flow FAQs</span>
 <h2 className="h2 mt-4 text-ink">
 Clear answers on fees, terms &amp; guarantees.
 </h2>
 <p className="mt-3 text-[15px] leading-relaxed text-muted">
 Everything you need to know about our upfront locked pricing, 8-week replacement guarantee, and 14-day cash refund commitment.
 </p>

 <div className="mt-8 p-5 rounded-2xl bg-surface border border-line">
 <span className="text-xs font-bold text-accent-deep uppercase tracking-wider block">
 Have a specific vacancy?
 </span>
 <p className="text-xs text-muted mt-1 leading-relaxed">
 Ian, Sean, or Millie can provide live UK salary benchmarks and confirm your locked fee in under 30 minutes.
 </p>
 <Link
 href="/contact"
 className="btn btn-ink text-xs font-bold mt-4 justify-center w-full"
 >
 Book Discovery Call
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>
 </div>

 {/* Interactive Accordion */}
 <div className="lg:col-span-8 divide-y divide-line border-y border-line">
 {fixedFeeFaqs.map((faq, i) => {
 const isOpen = openFaqIndex === i;
 return (
 <div key={faq.q} className="group">
 <h3>
 <button
 type="button"
 aria-expanded={isOpen}
 onClick={() => setOpenFaqIndex(isOpen ? null : i)}
 className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200"
 >
 <div className="flex items-center gap-3.5">
 <span className="font-mono text-xs font-bold text-accent-deep shrink-0">
 {String(i + 1).padStart(2, "0")}
 </span>
 <h4
 className={`font-display text-[16px] sm:text-[18px] font-bold leading-snug tracking-[-0.02em] transition-colors duration-200 ${
 isOpen
 ? "text-accent-deep"
 : "text-ink group-hover:text-accent-deep"
 }`}
 >
 {faq.q}
 </h4>
 </div>

 <motion.span
 className="shrink-0 text-accent flex items-center justify-center w-8 h-8 rounded-full bg-surface group-hover:bg-accent-soft transition-colors"
 animate={{ rotate: isOpen ? 180 : 0 }}
 transition={{ duration: 0.25 }}
 >
 {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
 </motion.span>
 </button>
 </h3>

 <AnimatePresence initial={false}>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{
 opacity: 1,
 height: "auto",
 transition: {
 height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
 opacity: { duration: 0.22, delay: 0.05 },
 },
 }}
 exit={{
 opacity: 0,
 height: 0,
 transition: {
 height: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
 opacity: { duration: 0.12 },
 },
 }}
 className="overflow-hidden"
 >
 <div className="pb-6 pl-9 pr-6 text-[15px] leading-relaxed text-muted border-l-2 border-accent/40 ml-2 mt-1">
 {faq.a}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* ================= CLOSING CTA WITH INLINE FORM ================= */}
 <section className="wrap pb-16 sm:pb-24">
 <div className="rounded-3xl bg-ink text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
 {/* Ambient Glow */}
 <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 <div className="lg:col-span-6">
 <span className="inline-flex rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent">
 Discovery &amp; Scoping
 </span>
 <h2 className="h2 mt-4 text-white">
 Know your exact recruitment cost before search begins.
 </h2>
 <p className="mt-4 text-[15px] leading-relaxed text-white/70 max-w-[44ch]">
 A free 30-minute scoping review calibrated to your role, seniority, and salary benchmarks. Your fixed fee is confirmed in writing within 24 hours.
 </p>

 <div className="mt-8 space-y-3 text-sm text-white/80">
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>100% written fee confirmation upfront</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>8-Week placement shield and free replacement</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>14-Day cash refund if agreed SLAs are unfulfilled</span>
 </div>
 </div>

 <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50 space-y-1">
 <p>Preston Office · 01772 289900 · hello@hst-hiring.co.uk</p>
 <p>All contracts governed under the laws of England and Wales.</p>
 </div>
 </div>

 <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
 <h3 className="font-display text-lg font-bold text-white mb-4">
 Scope Your Fixed Fee Role
 </h3>
 <ContactInquiryForm defaultRequirement="one-off" />
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
