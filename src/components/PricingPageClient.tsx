"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowRight,
 Check,
 ShieldCheck,
 Lock,
 Clock,
 RotateCcw,
 CheckCircle2,
 TrendingDown,
 Building2,
 Users,
 Plus,
 Minus,
 Scale,
 Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SavingsCalculator from "@/components/SavingsCalculator";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import { FAQS } from "@/data/siteData";

const IMPACT_METRICS = [
 {
 numericValue: 1495,
 prefix: "£",
 suffix: "",
 label: "Starting Flat Rate",
 subtext: "Agreed in writing before outreach begins",
 },
 {
 numericValue: 6,
 prefix: "~",
 suffix: "%",
 label: "Effective Rate per Role",
 subtext: "vs 20%-30% contingent agency standard",
 },
 {
 numericValue: 8,
 prefix: "",
 suffix: " Weeks",
 label: "Placement Guarantee",
 subtext: "Free replacement under identical scope",
 },
 {
 numericValue: 80,
 prefix: "Up to ",
 suffix: "%",
 label: "Budget Saved Annually",
 subtext: "Retained cash for firm growth & salaries",
 },
];

const PLANS = [
 {
 id: "foundation",
 name: "Foundation Fixed Fee",
 badge: "Support & Junior Roles",
 price: "From £1,495",
 subprice: "+ VAT · Flat fee agreed upfront",
 idealFor: "Support, conveyancing assistants, fee-earners, and junior specialists (salaries up to £35k).",
 highlight: false,
 cta: "Scope a Foundation Role",
 features: [
 "Bespoke role scoping & salary benchmarking",
 "Confidential active network & candidate sourcing",
 "Thorough CV screening and video pre-interview",
 "Shortlist delivery within 5 business days",
 "Interview coordination & offer management",
 "8-Week free replacement guarantee",
 "Section 6.2 14-day cash refund protection",
 ],
 },
 {
 id: "professional",
 name: "Professional Fixed Fee",
 badge: "Most Popular · Senior & Fee-Earners",
 price: "From £2,500",
 subprice: "+ VAT · Typically ~6% effective role value",
 idealFor: "Senior fee-earners, solicitors, department heads, partners, and directors (£35k-£120k+).",
 highlight: true,
 cta: "Scope a Senior Role",
 features: [
 "Everything in Foundation, plus:",
 "Active headhunting of top-tier passive candidates",
 "Direct founder screening (Ian, Sean, or Millie)",
 "Notice period coaching and counter-offer defense",
 "Transparent candidate pipeline reporting",
 "Comprehensive candidate referencing & verification",
 "Section 6 SLA protection & cash refund commitment",
 ],
 },
 {
 id: "talentflow",
 name: "Talent Flow (RaaS)",
 badge: "Volume Hiring (3+ Roles / Year)",
 price: "From £1,500",
 subprice: "+ VAT / month flat subscription",
 idealFor: "Growing firms with ongoing hiring requirements wanting a dedicated embedded talent team.",
 highlight: false,
 cta: "Discuss Talent Flow Retainer",
 features: [
 "Dedicated embedded talent acquisition capacity",
 "Continuous proactive candidate pipelining",
 "Quarterly volume reviews that flex up or down",
 "Employer value proposition & job brief optimization",
 "Live market compensation benchmarking",
 "Continuous placement guarantee during active retainer",
 "Initial 3-month term with rolling 30-day notice",
 ],
 },
];

const FEATURE_COMPARISON = [
 {
 feature: "Commercial Model",
 foundation: "Fixed from £1,495",
 professional: "Fixed from £2,500 (~6%)",
 raas: "Monthly from £1,500",
 },
 {
 feature: "Search Methodology",
 foundation: "Active network & screening",
 professional: "Direct headhunting & market mapping",
 raas: "Embedded pipeline & proactive headhunting",
 },
 {
 feature: "Shortlist Delivery",
 foundation: "Typically 5 business days",
 professional: "Typically 5-7 business days",
 raas: "Continuous active pipeline",
 },
 {
 feature: "Senior Point of Contact",
 foundation: "Dedicated specialist",
 professional: "Firm partner (Ian, Sean, or Millie)",
 raas: "Dedicated embedded partner",
 },
 {
 feature: "Counter-Offer Defense",
 foundation: "Included",
 professional: "Senior coaching included",
 raas: "Included across all roles",
 },
 {
 feature: "Guarantee & SLA Protection",
 foundation: "8-Week replacement guarantee",
 professional: "8-Week replacement + 14-day refund",
 raas: "Continuous service guarantee",
 },
];

const SLA_PILLARS = [
 {
 icon: Lock,
 title: "1. Pre-Agreed Fixed Fee",
 desc: "Your fee is locked in writing in your formal Engagement Order before any outreach begins. Zero commission escalators.",
 },
 {
 icon: Clock,
 title: "2. 12-Week Active Search",
 desc: "Committed 12-week exclusive search window, with first vetted candidate video profiles delivered within 5 business days.",
 },
 {
 icon: ShieldCheck,
 title: "3. 8-Week Placement Shield",
 desc: "Section 6.5 protection: If a placed candidate leaves within 8 weeks, HST conducts one free replacement search of identical scope.",
 },
 {
 icon: RotateCcw,
 title: "4. 14-Day Cash Refund SLA",
 desc: "If no hire is made and agreed SLAs are unfulfilled, receive a 100% cash refund within 14 business days. No credit note traps.",
 },
];

export default function PricingPageClient() {
 const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

 return (
 <div className="overflow-hidden">
 {/* ================= HERO SECTION ================= */}
 <section className="relative wrap pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
 {/* Ambient Glow */}
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
 
 <span>Transparent Commercial Economics · Zero Variable Invoices</span>
 </div>

 <h1 className="mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-[clamp(38px,5vw,66px)] text-ink">
 Pricing,{" "}
 <span className="relative inline-block text-accent-deep">
 plainly.
 <motion.span
 initial={{ width: 0 }}
 animate={{ width: "100%" }}
 transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
 className="absolute bottom-1 left-0 h-[4px] bg-accent rounded-full"
 />
 </span>
 </h1>

 <p className="mt-5 lead text-muted leading-relaxed max-w-[50ch]">
 Every search includes active headhunting, rigorous video screening, and proactive onboarding defense. One flat fee confirmed in writing before outreach starts.
 </p>

 <p className="mt-3 body-text text-muted leading-relaxed max-w-[52ch]">
 No 20%-30% salary cuts. No commission escalators. No billing surprises when you make an offer.
 </p>

 {/* Proof Pills */}
 <div className="mt-8 flex flex-wrap items-center gap-2.5">
 {[
 "From £1,495 flat fee",
 "Typically ~6% effective rate",
 "8-Week replacement guarantee",
 "14-Day cash refund SLA",
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

 {/* Action Row */}
 <div className="mt-9 flex flex-wrap items-center gap-4">
 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
 <a href="#calculator" className="btn btn-ink">
 <span>Calculate Fee Savings</span>
 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
 </a>
 </motion.div>
 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
 <a href="#plans" className="btn btn-line">
 <span>Explore Plan Tiers</span>
 </a>
 </motion.div>
 </div>
 </motion.div>

 {/* Right Visual Image with Layered Badges */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
 className="lg:col-span-5"
 >
 <div className="relative aspect-[4/4.8] sm:aspect-[4/4.2] lg:aspect-[4/4.8] overflow-hidden rounded-3xl shadow-2xl border border-line bg-ink group">
 <Image
 src="/images/campaign-creators-e6n7uoEnYbA-unsplash-scaled-1.jpg"
 alt="Executive recruitment pricing scoping and budget agreement"
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
 Pre-Agreed Cost
 </p>
 <p className="text-xs font-bold text-ink">
 Locked in Written Order
 </p>
 </div>
 </div>
 <span className="text-[11px] font-bold text-accent-deep bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
 Fixed
 </span>
 </motion.div>

 {/* Bottom Floating Stats Box */}
 <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-paper/95 backdrop-blur-md border border-line shadow-lg">
 <div className="flex items-center justify-between">
 <div>
 <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
 Commercial Security
 </span>
 <p className="font-display text-xl font-black text-ink mt-0.5">
 Section 6 Guarantee
 </p>
 </div>
 <span className="text-xs font-bold text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 14-Day Refund
 </span>
 </div>
 <p className="text-[11px] text-muted mt-2 border-t border-line/60 pt-2 leading-relaxed">
 8-Week placement shield and full cash refund commitment.
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
 <span className="tag">Interactive Investment Model</span>
 <h2 className="h2 mt-4 text-ink">
 Compare contingent agency fees vs. HST flat pricing.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Drag the sliders below to see your net cash retained per placement or across an entire year of hiring:
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

 {/* ================= THREE PLAN TIERS ================= */}
 <section id="plans" className="wrap section-tight scroll-mt-20">
 <div className="max-w-[600px] mb-12">
 <span className="tag">Engagement Options</span>
 <h2 className="h2 mt-4 text-ink">
 Transparent options for every hiring requirement.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 No percentages, no escalator clauses, no hidden admin fees. Every tier includes active headhunting and written SLA protection:
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
 {PLANS.map((plan, idx) => (
 <motion.div
 key={plan.name}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.45, delay: idx * 0.1 }}
 whileHover={{ y: -6 }}
 className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative border ${
 plan.highlight
 ? "bg-gradient-to-b from-[#0b1d15] via-[#091823] to-[#071320] text-white shadow-2xl ring-2 ring-accent border-accent/40"
 : "bg-paper text-ink border-line shadow-xs hover:border-accent/40 hover:shadow-lg"
 }`}
 >
 {plan.highlight && (
 <div className="absolute -top-3.5 left-8 bg-accent text-ink font-display font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
 ★ Most Popular for Law &amp; Tech
 </div>
 )}

 <div>
 <div className="flex items-center justify-between">
 <span
 className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${
 plan.highlight
 ? "bg-white/10 text-accent border border-white/15"
 : "bg-surface-2 text-accent-deep border border-accent/20"
 }`}
 >
 {plan.badge}
 </span>
 <span className="text-xs font-mono font-bold opacity-60">
 Tier 0{idx + 1}
 </span>
 </div>

 <h3 className={`font-display text-2xl sm:text-3xl font-extrabold mt-5 tracking-tight ${
 plan.highlight ? "text-white" : "text-ink"
 }`}>
 {plan.name}
 </h3>

 <p className={`mt-2 text-xs leading-relaxed ${
 plan.highlight ? "text-white/70" : "text-muted"
 }`}>
 {plan.idealFor}
 </p>

 {/* Price Display */}
 <div className={`mt-7 pt-6 border-t ${
 plan.highlight ? "border-white/15" : "border-line"
 }`}>
 <p className={`font-display text-4xl sm:text-5xl font-black tracking-tight leading-none ${
 plan.highlight ? "text-white" : "text-ink"
 }`}>
 {plan.price}
 </p>
 <p className={`text-xs mt-1.5 font-medium ${
 plan.highlight ? "text-accent" : "text-accent-deep"
 }`}>
 {plan.subprice}
 </p>
 </div>

 {/* Features List */}
 <ul className="mt-7 space-y-2.5">
 {plan.features.map((feat) => (
 <li
 key={feat}
 className={`flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed ${
 plan.highlight ? "text-white/85" : "text-ink/85"
 }`}
 >
 <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
 plan.highlight ? "text-accent" : "text-accent-deep"
 }`} />
 <span>{feat}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Bottom Action */}
 <div className={`mt-9 pt-6 border-t ${
 plan.highlight ? "border-white/15" : "border-line"
 }`}>
 <Link
 href="/contact"
 className={`btn w-full justify-center text-xs font-bold ${
 plan.highlight ? "btn-accent shadow-md" : "btn-ink"
 }`}
 >
 <span>{plan.cta}</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </motion.div>
 ))}
 </div>
 </section>

 {/* ================= DETAILED TABLE COMPARISON ================= */}
 <section className="bg-surface border-y border-line">
 <div className="wrap section">
 <div className="max-w-[620px] mb-10">
 <span className="tag">Side-by-Side</span>
 <h2 className="h2 mt-4 text-ink">
 Detailed plan deliverable breakdown.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Compare the scope of our three transparent hiring models side-by-side:
 </p>
 </div>

 <div className="card overflow-hidden shadow-xs border border-line bg-paper">
 <div className="overflow-x-auto">
 <table className="w-full min-w-[720px] border-collapse text-left text-xs sm:text-sm">
 <thead>
 <tr className="border-b border-line bg-surface-2/60">
 <th className="p-5 font-bold uppercase tracking-wider text-muted text-xs w-1/4">
 Deliverable Scope
 </th>
 <th className="p-5 font-bold text-ink w-1/4">
 Foundation Fixed Fee
 </th>
 <th className="p-5 font-bold text-ink bg-accent-soft/80 border-x border-line w-1/4">
 <div className="flex items-center justify-between">
 <span>Professional Fixed Fee</span>
 <span className="text-[10px] font-bold text-accent-deep bg-white px-2 py-0.5 rounded-full border border-accent/20">
 Recommended
 </span>
 </div>
 </th>
 <th className="p-5 font-bold text-ink w-1/4">
 Talent Flow (RaaS)
 </th>
 </tr>
 </thead>
 <tbody className="divide-y divide-line">
 {FEATURE_COMPARISON.map((row) => (
 <tr key={row.feature} className="hover:bg-surface/50 transition-colors">
 <td className="p-5 font-semibold text-ink">{row.feature}</td>
 <td className="p-5 text-muted">{row.foundation}</td>
 <td className="p-5 text-ink font-bold bg-accent-soft/40 border-x border-line">
 {row.professional}
 </td>
 <td className="p-5 text-muted">{row.raas}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </section>

 {/* ================= CONTRACTUAL SLA 4 PILLARS ================= */}
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
 <div className="h-11 w-11 rounded-xl bg-accent-soft text-accent-deep flex items-center justify-center mb-4 border border-accent/20">
 <Icon className="w-5 h-5" />
 </div>
 <h4 className="font-display text-base font-bold text-ink mb-2">
 {pillar.title}
 </h4>
 <p className="text-xs text-muted leading-relaxed">
 {pillar.desc}
 </p>
 </div>

 <div className="mt-6 pt-3 border-t border-line text-[11px] font-bold text-accent-deep flex items-center gap-1.5">
 <ShieldCheck className="w-3.5 h-3.5" />
 <span>SLA Clause Verified</span>
 </div>
 </motion.div>
 );
 })}
 </div>
 </section>

 {/* ================= CLIENT TRUST & REVIEWS ================= */}
 <section className="bg-surface border-y border-line">
 <div className="wrap section">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
 <div className="max-w-[560px]">
 <span className="tag">Partner Trust</span>
 <h2 className="h2 mt-4 text-ink">
 Trusted by Law Practices &amp; Growing Businesses.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Direct feedback from UK Managing Partners, Operations Directors, and Finance Leaders.
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

 {/* ================= PRICING FAQS ACCORDION ================= */}
 <section className="wrap section">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
 <div className="lg:col-span-4">
 <div className="lg:sticky lg:top-28">
 <span className="tag">Pricing FAQs</span>
 <h2 className="h2 mt-4 text-ink">
 Every commercial question, answered.
 </h2>
 <p className="mt-3 text-[15px] leading-relaxed text-muted">
 Transparent answers on payment schedules, guarantees, and what happens if a candidate turns down an offer.
 </p>

 <div className="mt-8 p-5 rounded-2xl bg-surface border border-line">
 <span className="text-xs font-bold text-accent-deep uppercase tracking-wider block">
 Need a bespoke package?
 </span>
 <p className="text-xs text-muted mt-1 leading-relaxed">
 Ian or Sean can assess multiple vacancies and confirm customized fixed-fee pricing within 24 hours.
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

 {/* Accordion */}
 <div className="lg:col-span-8 divide-y divide-line border-y border-line">
 {FAQS.slice(0, 7).map((faq, i) => {
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

 {/* ================= CLOSING CTA ================= */}
 <section className="wrap pb-16 sm:pb-24">
 <div className="rounded-3xl bg-ink text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 <div className="lg:col-span-6">
 <span className="inline-flex rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent">
 Discovery &amp; Scoping
 </span>
 <h2 className="h2 mt-4 text-white">
 Get an exact fixed-fee proposal for your next hire.
 </h2>
 <p className="mt-4 text-[15px] leading-relaxed text-white/70 max-w-[44ch]">
 Speak directly with Ian or Sean. We review your role specification and send an agreed written proposal within 24 hours.
 </p>

 <div className="mt-8 space-y-3 text-sm text-white/80">
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>100% written fee confirmation within 24 hours</span>
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
 Request a Fixed-Fee Proposal
 </h3>
 <ContactInquiryForm defaultRequirement="one-off" />
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
