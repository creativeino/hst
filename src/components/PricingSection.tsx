"use client";

import Link from "next/link";
import {
 ArrowRight,
 Check,
 ShieldCheck,
 FileCheck2,
 Clock,
 RotateCcw,
 Scale,
 Building2,
 Lock,
 Layers,
 CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const TWO_PRICING_MODELS = [
 {
 id: "assured",
 name: "HST Assured",
 subtitle: "Fixed Fee Recruitment (Per Vacancy)",
 badge: "One-Off / Critical Hires",
 priceHeadline: "From £1,495",
 priceSub: "+ VAT · Typically ~6% of role value (vs 20%-30% agency standard)",
 idealFor: "Firms hiring for specific, critical, or occasional roles (fee-earners, solicitors, directors, specialist tech & support).",
 highlight: true,
 campaignDuration: "12-Week Search Period · Exclusive Mandate",
 ctaText: "Scope an HST Assured Role",
 ctaLink: "/contact",
 deliverables: [
 "One flat fee agreed upfront in writing - never rises with the offer",
 "Direct proactive headhunting across UK legal, tech & professional networks",
 "Full video pre-screening & vetted candidate profiles delivered within 5 days",
 "Notice period coaching and proactive counter-offer defense",
 "8-Week replacement guarantee (one free replacement search of identical scope)",
 "Section 6.2 14-day 100% cash refund if agreed SLAs are unfulfilled",
 ],
 },
 {
 id: "talentflow",
 name: "Talent Flow",
 subtitle: "Recruitment as a Service (RaaS)",
 badge: "Multiple / Volume Hiring",
 priceHeadline: "From £1,500",
 priceSub: "+ VAT / month · Flat subscription retainer",
 idealFor: "Firms with consistent ongoing hiring needs (3+ hires per year) wanting an embedded dedicated talent team.",
 highlight: false,
 campaignDuration: "3-Month Initial Term · 30-Day Rolling Notice Thereafter",
 ctaText: "Discuss Talent Flow Retainer",
 ctaLink: "/contact",
 deliverables: [
 "Dedicated embedded talent acquisition capacity acting directly on your behalf",
 "Continuous curated candidate pipeline (never start from zero when a role opens)",
 "Quarterly hiring reviews that scale recruitment capacity up or down",
 "Full employer value proposition & job brief optimization",
 "Zero per-placement commission invoices - saving up to 80% on annual fees",
 "Continuous placement guarantee throughout active retainer duration",
 ],
 },
];

const HST_SLA_PILLARS = [
 {
 icon: Lock,
 title: "1. Pre-Agreed Fixed Fee",
 desc: "Fixed Fee is confirmed in writing in your Engagement Order before outreach begins. No salary percentage escalators.",
 },
 {
 icon: Clock,
 title: "2. 12-Week Active Search",
 desc: "A committed 12-week exclusive search campaign with first vetted video candidate profiles delivered within 5 days.",
 },
 {
 icon: ShieldCheck,
 title: "3. 8-Week Placement Guarantee",
 desc: "Section 6.5 protection: If a placed candidate leaves within 8 weeks, HST runs one free replacement search of identical scope.",
 },
 {
 icon: RotateCcw,
 title: "4. Section 6.2 Cash Refund SLA",
 desc: "If no placement is made and HST failed to meet agreed SLAs, receive a 100% cash refund within 10-14 days.",
 },
];

export default function PricingSection() {
 return (
 <section id="pricing" className="wrap section scroll-mt-20">
 {/* Header */}
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-line">
 <div className="max-w-[640px]">
 <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent-deep">
 
 <span>The Two HST Pricing Models</span>
 </div>
 <h2 className="h2 mt-4">Transparent Pricing. Zero Salary Percentages.</h2>
 <p className="mt-3 text-[16px] leading-relaxed text-muted">
 HST operates strictly on two transparent hiring models designed to replace the expensive 20%-30% contingent agency fee:
 </p>
 </div>

 <div className="flex items-center gap-3">
 <Link href="/fixed-fee" className="btn btn-line text-xs font-semibold">
 View Fixed Fee Terms
 </Link>
 <Link href="/contact" className="btn btn-accent text-xs font-bold">
 Scope Your Role
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>

 {/* Two Clean Pricing Cards (Split 50 / 50) */}
 <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
 {TWO_PRICING_MODELS.map((model, idx) => {
 const isAssured = model.id === "assured";

 return (
 <motion.div
 key={model.id}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.45, delay: idx * 0.1 }}
 whileHover={{ y: -5 }}
 className={`rounded-3xl p-8 sm:p-11 flex flex-col justify-between transition-all duration-300 relative ${
 isAssured
 ? "bg-gradient-to-b from-[#0b1d15] via-[#091823] to-[#071320] text-white shadow-2xl ring-2 ring-accent border border-accent/40"
 : "bg-paper text-ink border border-line shadow-xs hover:border-accent/40"
 }`}
 >
 {/* Highlight Tag */}
 {isAssured && (
 <div className="absolute -top-3.5 left-8 bg-accent text-ink font-display font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
 ★ Most Popular for Law Firms &amp; Tech
 </div>
 )}

 <div>
 <div className="flex items-center justify-between">
 <span
 className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${
 isAssured
 ? "bg-white/10 text-accent border border-white/15"
 : "bg-surface-2 text-accent-deep border border-accent/20"
 }`}
 >
 {model.badge}
 </span>
 <span className="text-xs font-mono font-bold opacity-60">
 Option 0{idx + 1}
 </span>
 </div>

 <h3
 className={`font-display text-3xl font-extrabold mt-5 tracking-tight ${
 isAssured ? "text-white" : "text-ink"
 }`}
 >
 {model.name}
 </h3>
 <p
 className={`text-xs font-bold uppercase tracking-wider mt-1 ${
 isAssured ? "text-accent" : "text-muted"
 }`}
 >
 {model.subtitle}
 </p>

 <p
 className={`mt-4 text-sm leading-relaxed ${
 isAssured ? "text-white/75" : "text-muted"
 }`}
 >
 {model.idealFor}
 </p>

 {/* Price Display */}
 <div className="mt-8 pt-6 border-t border-line/30">
 <div className="flex items-baseline gap-2">
 <span className="font-display text-5xl font-black tracking-tight leading-none">
 {model.priceHeadline}
 </span>
 </div>
 <p
 className={`text-xs mt-2 font-medium ${
 isAssured ? "text-accent" : "text-muted"
 }`}
 >
 {model.priceSub}
 </p>
 </div>

 {/* Campaign Duration Tag */}
 <div className="mt-4 p-3 rounded-xl bg-surface/40 border border-line/30 text-xs font-semibold flex items-center gap-2">
 <Clock className="w-4 h-4 text-accent shrink-0" />
 <span className={isAssured ? "text-white/85" : "text-ink/80"}>
 {model.campaignDuration}
 </span>
 </div>

 {/* Deliverables List */}
 <div className="mt-8 space-y-3">
 <span
 className={`text-xs font-bold uppercase tracking-wider block mb-3 ${
 isAssured ? "text-white/85" : "text-ink"
 }`}
 >
 What Is Included:
 </span>
 {model.deliverables.map((item) => (
 <div key={item} className="flex items-start gap-2.5 text-xs sm:text-[13px]">
 <div
 className={`h-4 w-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
 isAssured ? "bg-accent text-ink" : "bg-accent-soft text-accent-deep"
 }`}
 >
 <Check className="h-2.5 w-2.5 stroke-[3]" />
 </div>
 <span className={isAssured ? "text-white/85" : "text-ink/80"}>
 {item}
 </span>
 </div>
 ))}
 </div>
 </div>

 {/* Bottom CTA Button */}
 <div className="mt-10 pt-6 border-t border-line/30">
 <Link
 href={model.ctaLink}
 className={`btn w-full justify-center text-xs font-bold ${
 isAssured ? "btn-accent shadow-lg" : "btn-ink"
 }`}
 >
 <span>{model.ctaText}</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] opacity-70">
 <ShieldCheck className="w-3.5 h-3.5 text-accent" />
 <span>Backed by HST Terms of Business &amp; SLAs</span>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>

 {/* Contractual SLA 4 Pillars */}
 <div className="mt-16 rounded-3xl bg-surface border border-line p-8 sm:p-10">
 <div className="max-w-[700px] mb-8">
 <span className="text-[11px] uppercase tracking-wider font-bold text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 Contractual SLA Standards
 </span>
 <h3 className="font-display text-2xl font-bold text-ink mt-3">
 How HST&apos;s Terms of Business Protect Your Investment
 </h3>
 <p className="mt-2 text-sm text-muted">
 Governed under England &amp; Wales law, both pricing options guarantee complete transparency:
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {HST_SLA_PILLARS.map((pillar) => {
 const Icon = pillar.icon;
 return (
 <div key={pillar.title} className="p-5 rounded-2xl bg-paper border border-line shadow-2xs">
 <div className="h-10 w-10 rounded-xl bg-accent-soft text-accent-deep flex items-center justify-center mb-4">
 <Icon className="w-5 h-5" />
 </div>
 <h4 className="font-display text-sm font-bold text-ink mb-1.5">
 {pillar.title}
 </h4>
 <p className="text-xs text-muted leading-relaxed">
 {pillar.desc}
 </p>
 </div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
