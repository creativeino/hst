"use client";

import { useState } from "react";
import Link from "next/link";
import {
 Plus,
 Minus,
 Search,
 HelpCircle,
 MessageCircleQuestion,
 ArrowRight,
 ShieldCheck,
 FileCheck2,
 Clock,
 Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
 q: string;
 a: string;
 category: "all" | "fixed-fee" | "guarantees" | "talentflow" | "candidates";
 badge?: string;
}

const FAQ_DATA: FaqItem[] = [
 // 1. Fixed Fee & Commercials
 {
 category: "fixed-fee",
 badge: "Commercial Model",
 q: "How does the Fixed Fee recruitment model actually work?",
 a: "Unlike traditional agencies that charge 20%-30% of candidate starting salary, HST agrees a single flat fee upfront before outreach begins (typically around 6% effective cost, starting from £1,495). Once agreed in writing via an Engagement Order, the fee never increases regardless of the final salary or package offered.",
 },
 {
 category: "fixed-fee",
 badge: "Payment Terms",
 q: "Why is the fee paid in advance rather than on contingency?",
 a: "Because we operate as an exclusive search partner rather than racing 4 other agencies to flip job board CVs. Paying the fixed fee upfront commits our senior partners exclusively to your mandate - running confidential headhunting, talent mapping, and video pre-screening. In return, your total recruitment cost is cut by 60%-70% compared to traditional contingency.",
 },
 {
 category: "fixed-fee",
 badge: "Process Inclusions",
 q: "What is included within the Fixed Fee service?",
 a: "Everything from mandate inception to day-one arrival: role calibration, UK salary benchmarking, direct headhunting of passive specialists, video screening, structured candidate reports, interview coordination, offer negotiation, resignation coaching, and our 90-day onboarding check-ins.",
 },
 {
 category: "fixed-fee",
 badge: "Search Timeline",
 q: "How long does a Fixed Fee search take?",
 a: "Our standard SLA campaign runs across a 12-week search window. However, vetted shortlists are typically presented within 5 to 7 business days from the scoping call. Average time-to-offer across legal and tech roles is 4 to 8 weeks depending on notice periods.",
 },

 // 2. Guarantees & SLAs
 {
 category: "guarantees",
 badge: "8-Week Protection",
 q: "What happens if a placed candidate leaves or doesn't work out?",
 a: "Every Fixed Fee placement includes our written 8-Week Replacement Guarantee. If the candidate leaves or is dismissed within 8 weeks through no fault of the client, HST conducts a complete replacement search free of charge under identical scope.",
 },
 {
 category: "guarantees",
 badge: "14-Day Refund SLA",
 q: "What happens if you fail to place a suitable candidate?",
 a: "If the 12-week search period concludes without a hire and HST has failed to meet its Service Level Agreements (whilst the client cooperated with timely feedback), you receive a 100% cash refund within 14 business days. Not a credit note, not a discount on future work - cash back.",
 },
 {
 category: "guarantees",
 badge: "Salary Objectivity",
 q: "How does HST's fee protect our salary negotiations?",
 a: "Traditional percentage agencies are financially incentivised to push candidate salaries higher (every extra £5,000 on salary pays them an extra £1,000-£1,500). Because our fee is 100% locked before outreach, our salary advice is completely unbiased and focused on securing the right commercial terms for your business.",
 },

 // 3. Talent Flow (RaaS Subscription)
 {
 category: "talentflow",
 badge: "Volume Hiring",
 q: "What is Talent Flow (Recruitment as a Service)?",
 a: "Talent Flow is our embedded subscription model designed for companies hiring multiple roles throughout the year. Starting from £1,500/month, you get a dedicated senior talent acquisition partner managing all live vacancies, candidate pooling, and outreach without paying hefty per-placement agency commissions.",
 },
 {
 category: "talentflow",
 badge: "Flexibility",
 q: "Is there a long-term lock-in on Talent Flow agreements?",
 a: "No. Talent Flow operates on an initial 3-month term to establish candidate pipelines, rolling on a straightforward 30-day notice thereafter. It gives high-growth businesses full flexibility without indefinite agency overhead.",
 },

 // 4. Candidates & Care
 {
 category: "candidates",
 badge: "Confidentiality",
 q: "As an employed candidate, is my inquiry completely confidential?",
 a: "100% confidential. We never submit your CV, profile, or current employer details to any firm without your explicit permission after discussing the brief. You can speak freely with Ian, Sean, or Millie for exploratory advice with zero sales pressure.",
 },
 {
 category: "candidates",
 badge: "Free CV Service",
 q: "Do you offer a free CV evaluation for job seekers?",
 a: "Yes. HST provides a complimentary CV review service for legal, SaaS, and commercial specialists, providing actionable feedback on structure, achievement metrics, and market alignment before you approach the market.",
 },
];

const CATEGORIES = [
 { id: "all", label: "All Questions", count: FAQ_DATA.length },
 {
 id: "fixed-fee",
 label: "Fixed Fee Model & Pricing",
 count: FAQ_DATA.filter((f) => f.category === "fixed-fee").length,
 },
 {
 id: "guarantees",
 label: "8-Week Guarantee & Refunds",
 count: FAQ_DATA.filter((f) => f.category === "guarantees").length,
 },
 {
 id: "talentflow",
 label: "Talent Flow (Volume / RaaS)",
 count: FAQ_DATA.filter((f) => f.category === "talentflow").length,
 },
 {
 id: "candidates",
 label: "Candidates & Confidentiality",
 count: FAQ_DATA.filter((f) => f.category === "candidates").length,
 },
];

export default function FaqSectionEnhanced() {
 const [selectedCategory, setSelectedCategory] = useState<string>("all");
 const [searchQuery, setSearchQuery] = useState("");
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 const filteredFaqs = FAQ_DATA.filter((faq) => {
 const matchesCategory =
 selectedCategory === "all" || faq.category === selectedCategory;
 const matchesSearch =
 faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
 faq.a.toLowerCase().includes(searchQuery.toLowerCase());
 return matchesCategory && matchesSearch;
 });

 return (
 <section id="faq" className="wrap section scroll-mt-20">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
 {/* ================= LEFT SIDEBAR: Heading, Search & Topic Filters ================= */}
 <div className="lg:col-span-4">
 <div className="lg:sticky lg:top-28">
 <span className="tag">Plain Answers · HST Terms</span>
 <h2 className="h2 mt-4">Frequently Asked Questions.</h2>
 <p className="mt-3 text-[15px] leading-relaxed text-muted">
 Everything you need to know about our pre-paid fixed fee, 8-week replacement guarantee, and 14-day refund SLA.
 </p>

 {/* Live Search Input */}
 <div className="relative mt-6">
 <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-light" />
 <input
 type="text"
 placeholder="Search terms, refund, guarantee..."
 value={searchQuery}
 onChange={(e) => {
 setSearchQuery(e.target.value);
 setOpenIndex(0);
 }}
 className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line bg-surface text-sm text-ink placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
 />
 </div>

 {/* Clean Category Filters */}
 <div className="mt-6 flex flex-col gap-1.5">
 <span className="text-[11px] font-bold uppercase tracking-wider text-muted-light mb-1">
 Filter by Topic:
 </span>
 {CATEGORIES.map((cat) => {
 const isSelected = selectedCategory === cat.id;
 return (
 <button
 key={cat.id}
 type="button"
 onClick={() => {
 setSelectedCategory(cat.id);
 setOpenIndex(0);
 }}
 className={`flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
 isSelected
 ? "bg-ink text-white font-bold shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface"
 }`}
 >
 <span>{cat.label}</span>
 <span
 className={`text-[10px] px-2 py-0.5 rounded-full ${
 isSelected
 ? "bg-white/20 text-white"
 : "bg-surface-2 text-muted"
 }`}
 >
 {cat.count}
 </span>
 </button>
 );
 })}
 </div>

 {/* Direct Contact Card */}
 <div className="mt-8 p-5 rounded-2xl bg-surface-2 border border-line">
 <div className="flex items-center gap-2 text-accent-deep text-xs font-bold">
 <HelpCircle className="w-4 h-4 text-accent" />
 <span>Need tailored terms?</span>
 </div>
 <p className="mt-1.5 text-xs text-muted leading-relaxed">
 Direct partner scoping with Ian, Sean, or Millie for bespoke briefs, partner moves, or multi-role packages.
 </p>
 <Link
 href="/contact"
 className="link-underline mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-accent-deep"
 >
 <span>Ask our team directly</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>
 </div>

 {/* ================= RIGHT COLUMN: Interactive Animated Accordion ================= */}
 <div className="lg:col-span-8">
 {filteredFaqs.length === 0 ? (
 <div className="p-10 text-center rounded-2xl bg-surface border border-line text-muted">
 <MessageCircleQuestion className="w-8 h-8 mx-auto text-muted-light mb-2" />
 <p className="font-semibold text-ink">No matching questions</p>
 <p className="text-xs mt-1">Try another search keyword or clear the filter.</p>
 <button
 type="button"
 onClick={() => {
 setSearchQuery("");
 setSelectedCategory("all");
 }}
 className="btn btn-ink text-xs mt-4"
 >
 Reset FAQ Filters
 </button>
 </div>
 ) : (
 <div className="divide-y divide-line border-y border-line">
 {filteredFaqs.map((item, i) => {
 const open = openIndex === i;
 const panelId = `faq-panel-${i}`;
 const buttonId = `faq-button-${i}`;

 return (
 <div key={item.q} className="group">
 <h3>
 <button
 type="button"
 id={buttonId}
 aria-expanded={open}
 aria-controls={panelId}
 onClick={() => setOpenIndex(open ? null : i)}
 className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200"
 >
 <div className="flex items-center gap-3.5">
 <span className="font-mono text-xs font-bold text-accent-deep shrink-0">
 {String(i + 1).padStart(2, "0")}
 </span>
 <div>
 {item.badge && (
 <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent-deep bg-accent-soft px-2 py-0.5 rounded-md mb-1 border border-accent/20">
 {item.badge}
 </span>
 )}
 <h4
 className={`font-display text-[16px] sm:text-[18px] font-bold leading-snug tracking-[-0.02em] transition-colors duration-200 ${
 open
 ? "text-accent-deep"
 : "text-ink group-hover:text-accent-deep"
 }`}
 >
 {item.q}
 </h4>
 </div>
 </div>

 <motion.span
 className="shrink-0 text-accent flex items-center justify-center w-8 h-8 rounded-full bg-surface group-hover:bg-accent-soft transition-colors"
 animate={{ rotate: open ? 180 : 0 }}
 transition={{ duration: 0.25, ease: "easeInOut" }}
 >
 {open ? (
 <Minus className="w-4 h-4" />
 ) : (
 <Plus className="w-4 h-4" />
 )}
 </motion.span>
 </button>
 </h3>

 <AnimatePresence initial={false}>
 {open && (
 <motion.div
 id={panelId}
 role="region"
 aria-labelledby={buttonId}
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
 {item.a}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 })}
 </div>
 )}
 </div>
 </div>
 </section>
 );
}
