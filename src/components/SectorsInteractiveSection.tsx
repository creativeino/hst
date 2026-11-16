"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
 Scale,
 Code2,
 Calculator,
 Crown,
 Database,
 ArrowRight,
 CheckCircle2,
 ShieldCheck,
 TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SectorItem {
 id: string;
 stepNumber: string;
 tabLabel: string;
 title: string;
 tagline: string;
 icon: any;
 salaryBand: string;
 statBadge: string;
 description: string;
 image: string;
 specialistRoles: string[];
 whyHST: string;
 caseNote: string;
 savingsStat: string;
}

const SECTOR_DATA: SectorItem[] = [
 {
 id: "legal",
 stepNumber: "01",
 tabLabel: "Legal & Compliance",
 title: "Legal 500 & Commercial Law Practices",
 tagline: "Fee-Earners, Senior Associates, Partners & Practice Directors",
 icon: Scale,
 salaryBand: "£55k - £160k+",
 statBadge: "First CVs in 5 Days",
 savingsStat: "£11.2k avg saved",
 description:
 "The UK legal sector experiences a 92% talent shortage. Traditional agencies charge 25-30% of salary (£20k+ per fee-earner). HST headhunts actively employed senior solicitors for one flat pre-agreed fee - never incentivised to inflate salary offers.",
 image: "/images/scott-graham-5fNmWej4tAA-unsplash-scaled-1.jpg",
 specialistRoles: [
 "Commercial Property & Real Estate Solicitors",
 "Private Client Senior Associates (Wills, Trusts & Probate)",
 "Heads of Conveyancing & Department Leaders",
 "Corporate M&A Fee-Earners & Lateral Partners",
 "COLP / COFA Regulatory Compliance Directors",
 ],
 whyHST: "Unbiased salary advice with zero percentage commissions, backed by an 8-week replacement guarantee.",
 caseNote: "Senior Commercial Solicitor at £80k: Client saved £11,200 compared to standard 20% contingency commission.",
 },
 {
 id: "saas",
 stepNumber: "02",
 tabLabel: "SaaS & Technology",
 title: "B2B SaaS, Software Scale-ups & Cloud",
 tagline: "Staff Engineers, Heads of Product, Presales & Cloud Architecture",
 icon: Code2,
 salaryBand: "£70k - £150k+",
 statBadge: "Direct Sourcing Only",
 savingsStat: "£17.5k avg saved",
 description:
 "Exceptional developers and technical leaders never scroll job boards. We run discrete, targeted talent mapping across the UK to engage passive practitioners who align with your stack, engineering velocity, and commercial roadmap.",
 image: "/images/laptop2.png",
 specialistRoles: [
 "Staff & Principal Full-Stack Engineers",
 "VP / Head of Engineering",
 "Solutions Architects (AWS / Azure / GCP)",
 "Technical Product Managers",
 "Enterprise Solutions Engineers (Presales)",
 ],
 whyHST: "We vet system architecture depth, code maturity, and cultural pace before candidate shortlist presentation.",
 caseNote: "VP Engineering placement at £120k: Locked fee saved the scale-up £17,500 in upfront agency commission.",
 },
 {
 id: "finance",
 stepNumber: "03",
 tabLabel: "Finance & Accountancy",
 title: "Top 100 Accountancy & Advisory Firms",
 tagline: "Audit Managers, Tax Directors, Controllers & Portfolio CFOs",
 icon: Calculator,
 salaryBand: "£60k - £165k+",
 statBadge: "100% Locked Fee",
 savingsStat: "£14.8k avg saved",
 description:
 "From regional accountancy partnerships to private equity-backed portfolio businesses, we source chartered professionals (ACA / ACCA / CTA) who bring immediate client management and fee billing capacity.",
 image: "/images/campaign-creators-e6n7uoEnYbA-unsplash-scaled-1.jpg",
 specialistRoles: [
 "Audit & Assurance Senior Managers",
 "Corporate Tax & Private Client Tax Directors",
 "Financial Controllers (SME & Mid-Market)",
 "Corporate Finance & Deal Advisory Specialists",
 "Full-Time & Portfolio Chief Financial Officers",
 ],
 whyHST: "Zero salary escalation penalties when offering higher packages to secure top performers.",
 caseNote: "Tax Director placement: Written fixed fee agreed in 24 hours, shortlist presented within 6 days.",
 },
 {
 id: "leadership",
 stepNumber: "04",
 tabLabel: "Executive & Board",
 title: "Senior Executive Search & Practice Directors",
 tagline: "COOs, Managing Directors, Practice Directors & In-House Counsel",
 icon: Crown,
 salaryBand: "£90k - £220k+",
 statBadge: "Confidential Search",
 savingsStat: "£22k+ avg saved",
 description:
 "Pivotal executive appointments demand complete discretion and market authority. HST conducts discrete, partner-led headhunting (led directly by Ian or Sean) without onerous retainer deposit traps.",
 image: "/images/linkedin-sales-solutions-46bom4lObsA-unsplash-scaled-1.jpg",
 specialistRoles: [
 "Practice Operations Directors (Law & Professional)",
 "Chief Operating Officers (COO)",
 "In-House General Counsel",
 "Commercial Managing Directors",
 "Non-Executive Board Advisors",
 ],
 whyHST: "Direct senior founder handling with thorough referencing, discretion, and active counter-offer defense.",
 caseNote: "Firm Practice Director hire: Over £22,000 saved vs traditional 30% executive search mandate.",
 },
 {
 id: "data-ai",
 stepNumber: "05",
 tabLabel: "Data & Analytics",
 title: "Enterprise Data, Analytics & Business Intelligence",
 tagline: "Data Platform Engineering, BI Leadership & Machine Learning",
 icon: Database,
 salaryBand: "£65k - £135k+",
 statBadge: "Pre-screened Video CVs",
 savingsStat: "£12.4k avg saved",
 description:
 "Connecting modern data teams with practitioners who design production infrastructure, robust reporting, and predictive workflows. Pre-screened video interviews ensure both technical prowess and commercial communication.",
 image: "/images/microsoft-365-bWL-c09Ys80-unsplash-scaled-copy.webp",
 specialistRoles: [
 "Head of Data & Business Intelligence",
 "Lead Data Platform Engineers",
 "Analytics Engineering Leads (dbt / Snowflake)",
 "Commercial Data Scientists",
 "Data Governance & Architecture Specialists",
 ],
 whyHST: "Thorough pre-screen validation assessing code quality, schema architecture, and cross-functional leadership.",
 caseNote: "Lead Data Engineer placement: Placed within 18 days of mandate scoping call.",
 },
];

export default function SectorsInteractiveSection() {
 const [activeStep, setActiveStep] = useState(0);
 const sectorRefs = useRef<(HTMLDivElement | null)[]>([]);

 useEffect(() => {
 const handleScroll = () => {
 const triggerPoint = window.innerHeight * 0.45;

 sectorRefs.current.forEach((el, index) => {
 if (!el) return;
 const rect = el.getBoundingClientRect();
 if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
 setActiveStep(index);
 }
 });
 };

 window.addEventListener("scroll", handleScroll, { passive: true });
 handleScroll();
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const current = SECTOR_DATA[activeStep];
 const CurrentIcon = current.icon;

 const scrollToSector = (idx: number) => {
 const target = sectorRefs.current[idx];
 if (target) {
 const yOffset = -140;
 const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
 window.scrollTo({ top: y, behavior: "smooth" });
 }
 };

 return (
 <section id="sectors" className="wrap section scroll-mt-20">
 {/* Header */}
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-line">
 <div className="max-w-[640px]">
 <span className="tag">Specialist Practice Areas</span>
 <h2 className="h2 mt-4">Hired across the UK: Key Sectors.</h2>
 <p className="mt-3 text-[16px] leading-relaxed text-muted">
 Scroll through our five core disciplines. The showcase window on the right updates live with typical compensation bands, key roles, and real case economics.
 </p>
 </div>

 <div className="flex flex-wrap items-center gap-3">
 <Link href="/pricing" className="btn btn-ink text-xs font-semibold">
 Pricing & Savings
 </Link>
 <Link href="/contact" className="btn btn-accent text-xs font-bold">
 Scope a Vacancy
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>

 {/* Main Sticky Scrolling Layout */}
 <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
 {/* Left Column: Scrolling Sector Cards */}
 <div className="lg:col-span-7 space-y-20 lg:space-y-28 py-2">
 {SECTOR_DATA.map((sec, idx) => {
 const isCurrent = activeStep === idx;
 const SectorIcon = sec.icon;

 return (
 <div
 key={sec.id}
 ref={(el) => {
 sectorRefs.current[idx] = el;
 }}
 onClick={() => scrollToSector(idx)}
 className={`transition-all duration-500 ease-out cursor-pointer ${
 isCurrent
 ? "opacity-100 translate-x-0"
 : "opacity-60 hover:opacity-100 -translate-x-1"
 }`}
 >
 {/* Header of Item */}
 <div className="flex items-center gap-4">
 <div
 className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
 isCurrent
 ? "bg-accent text-paper shadow-md ring-4 ring-accent/20"
 : "bg-surface-2 text-muted border border-line"
 }`}
 >
 <SectorIcon className="h-6 w-6" />
 </div>

 <div>
 <div className="flex items-center gap-2">
 <span className="font-mono text-xs font-bold text-accent-deep tracking-widest uppercase">
 Sector {sec.stepNumber}
 </span>
 <span className="text-[11px] font-bold uppercase tracking-wider text-accent-deep bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
 {sec.statBadge}
 </span>
 </div>
 <p className="text-xs font-semibold text-muted mt-0.5">
 Typical Compensation: <strong className="text-ink">{sec.salaryBand}</strong>
 </p>
 </div>
 </div>

 {/* Title & Description */}
 <div className="mt-5">
 <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-snug">
 {sec.title}
 </h3>
 <p className="text-xs font-bold uppercase tracking-wider text-accent-deep mt-1.5">
 {sec.tagline}
 </p>

 <p className="mt-4 text-[16px] leading-relaxed text-muted max-w-[58ch]">
 {sec.description}
 </p>

 {/* Frequently Placed Roles */}
 <div className="mt-6 pt-5 border-t border-line">
 <span className="text-xs font-bold uppercase tracking-wider text-ink block mb-3">
 Frequently Placed Specialists:
 </span>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 {sec.specialistRoles.map((role) => (
 <div
 key={role}
 className="flex items-center gap-2 text-xs text-ink/85 bg-surface p-2.5 rounded-xl border border-line"
 >
 <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
 <span className="font-medium truncate">{role}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Real Savings Fact */}
 <div className="mt-6 p-4 rounded-2xl bg-surface-2 border border-accent/25 flex items-start gap-3">
 <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
 <div>
 <span className="text-[11px] font-bold uppercase tracking-wider text-accent-deep">
 Commercial Case Note
 </span>
 <p className="text-xs text-muted mt-0.5 font-medium leading-relaxed">
 {sec.caseNote}
 </p>
 </div>
 </div>
 </div>
 </div>
 );
 })}
 </div>

 {/* Right Column: Premium Sticky Showcase Window */}
 <div className="hidden lg:block lg:col-span-5 sticky top-28">
 <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-line bg-ink text-white group">
 {/* Top Visual Image Stage */}
 <div className="relative aspect-[4/3.4] w-full overflow-hidden bg-[#071320]">
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
 <motion.span
 key={`badge-${current.id}`}
 initial={{ opacity: 0, y: -8 }}
 animate={{ opacity: 1, y: 0 }}
 className="inline-flex items-center gap-1.5 rounded-full bg-ink/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-bold text-accent shadow-sm"
 >
 
 {current.tabLabel}
 </motion.span>
 </div>

 {/* Floating Savings Stat Top Right */}
 <div className="absolute top-4 right-4 z-10 text-right">
 <motion.span
 key={`stat-${current.id}`}
 initial={{ scale: 0.85, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 className="inline-block rounded-xl bg-accent px-3 py-1 text-xs font-black text-ink shadow-lg"
 >
 {current.savingsStat}
 </motion.span>
 </div>

 {/* Overlaid Title on Image Bottom */}
 <div className="absolute bottom-4 left-5 right-5 z-10">
 <p className="text-[11px] font-bold uppercase tracking-wider text-accent drop-shadow">
 Typical Bracket: {current.salaryBand}
 </p>
 <h4 className="font-display text-xl font-black text-white mt-0.5 leading-snug drop-shadow-md">
 {current.title}
 </h4>
 </div>
 </div>

 {/* Bottom Insight Card Section */}
 <div className="p-6 bg-[#0c1f17] border-t border-white/10 space-y-4">
 <AnimatePresence mode="wait">
 <motion.div
 key={current.id}
 initial={{ opacity: 0, y: 8 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -8 }}
 transition={{ duration: 0.25 }}
 className="space-y-3"
 >
 <p className="text-xs text-white/80 leading-relaxed font-medium">
 {current.whyHST}
 </p>
 <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
 <span>Replacement Guarantee:</span>
 <strong className="text-accent font-bold">8 Weeks Full Protection</strong>
 </div>
 </motion.div>
 </AnimatePresence>

 {/* Interactive Step Navigator Dots */}
 <div className="flex items-center justify-between pt-3 border-t border-white/10">
 <div className="flex items-center gap-2">
 {SECTOR_DATA.map((s, idx) => (
 <button
 key={s.id}
 onClick={() => scrollToSector(idx)}
 className={`h-2 rounded-full transition-all duration-300 ${
 activeStep === idx
 ? "w-8 bg-accent"
 : "w-2 bg-white/25 hover:bg-white/50"
 }`}
 aria-label={`Jump to sector ${s.tabLabel}`}
 />
 ))}
 </div>

 <Link
 href="/contact"
 className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:brightness-110"
 >
 Start Search
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
