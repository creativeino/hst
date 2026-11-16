"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowRight,
 Check,
 Compass,
 Layers,
 Building2,
 Users,
 ShieldCheck,
 TrendingDown,
 PhoneCall,
 Mail,
 Award,
  TrendingUp,
 CheckCircle2,
 Clock,
 Briefcase,
 Scale,
 Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import { TEAM_MEMBERS } from "@/data/siteData";

const disciplines = [
 {
 icon: Compass,
 title: "Recruitment Expertise",
 badge: "Core Discipline",
 tagline: "30+ Years Combined Fluency",
 text: "Decades of deep recruitment fluency across UK legal, technology, and professional sectors. We understand candidate motivations, partner evaluations, and what it genuinely takes to get top-tier specialists over the line.",
 bullets: [
 "In-depth salary & market rate calibration",
 "Executive search & passive talent headhunting",
 "Notice period management & counter-offer defense",
 ],
 },
 {
 icon: Layers,
 title: "Job Boards & Tech Evolution",
 badge: "Modern Sourcing",
 tagline: "Beyond Passive Job Ads",
 text: "Having witnessed first-hand how digital platforms evolved hiring, we know simply posting a vacancy online is ineffective for hiring high-calibre specialists. Modern search requires active, discreet direct outreach.",
 bullets: [
 "Targeted talent mapping beyond job boards",
 "Direct outreach to currently employed talent",
 "Pre-screened video interviews before shortlist",
 ],
 },
 {
 icon: TrendingUp,
  title: "Modern Marketing DNA",
 badge: "Employer Brand",
 tagline: "Compelling Narrative Design",
 text: "Modern recruitment is targeted marketing. We craft compelling employer value propositions, distinctive positioning, and personalized outreach that cuts through inboxes and commands attention from senior practitioners.",
 bullets: [
 "Tailored role positioning that attracts passive talent",
 "Cultural alignment and firm values presentation",
 "Multi-channel candidate engagement journeys",
 ],
 },
 {
 icon: Building2,
 title: "IT & SaaS Commerciality",
 badge: "Lean Economics",
 tagline: "Transparent Fixed Pricing",
 text: "Operating with lean, modern SaaS efficiency allows us to replace bloated agency overheads with transparent, pre-agreed flat fees that make compelling commercial sense for growing professional firms.",
 bullets: [
 "Locked flat fee agreed in writing upfront",
 "Zero salary escalators or percentage penalties",
 "Section 6 SLA protection & cash refund guarantee",
 ],
 },
];

const IMPACT_METRICS = [
 {
 numericValue: 1495,
 prefix: "£",
 suffix: "",
 label: "Starting Flat Fee",
 subtext: "vs 20%-30% typical agency commission",
 },
 {
 numericValue: 30,
 prefix: "",
 suffix: "+",
 label: "Years Combined Fluency",
 subtext: "Legal, Tech, Marketing & SaaS backgrounds",
 },
 {
 numericValue: 8,
 prefix: "",
 suffix: " Wks",
 label: "Replacement Guarantee",
 subtext: "Contractual Section 6 SLA protection",
 },
 {
 numericValue: 80,
 prefix: "Up to ",
 suffix: "%",
 label: "Budget Saved vs Agency",
 subtext: "Retained cash for internal growth & pay",
 },
];

const COMPARISON_POINTS = [
 {
 traditional: "Percentage fee escalates if candidate salary is negotiated upwards.",
 hst: "Fee is locked in writing before outreach begins; never increases with offer.",
 },
 {
 traditional: "Multiple agencies race each other, broadcasting identical CVs.",
 hst: "Exclusive search mandate with dedicated senior partner handling.",
 },
 {
 traditional: "Senior pitch leads to junior resourcers handling your search.",
 hst: "Direct access to founders (Ian, Sean, or Millie) throughout every stage.",
 },
 {
 traditional: "Rarely includes cash refunds; disputes resolved with credit notes.",
 hst: "Section 6.2 written 14-day 100% cash refund if SLAs are unfulfilled.",
 },
];

export default function AboutPageClient() {
 const [activeTeamIndex, setActiveTeamIndex] = useState(0);
 const activeMember = TEAM_MEMBERS[activeTeamIndex];

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
 
 <span>Challenging the UK Recruitment Status Quo</span>
 </div>

 <h1 className="mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-[clamp(38px,5vw,66px)] text-ink">
 Recruitment should work{" "}
 <span className="relative inline-block text-accent-deep">
 differently.
 <motion.span
 initial={{ width: 0 }}
 animate={{ width: "100%" }}
 transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
 className="absolute bottom-1 left-0 h-[4px] bg-accent rounded-full"
 />
 </span>
 </h1>

 <p className="mt-5 lead text-muted leading-relaxed max-w-[50ch]">
 HST was founded on a simple conviction: hiring senior talent should not carry an arbitrary 20%-30% salary penalty, opaque candidate filtering, or transactional agency games.
 </p>

 <p className="mt-3 body-text text-muted leading-relaxed max-w-[52ch]">
 We unite senior recruitment authority with modern job boards, SaaS commerciality, and B2B marketing DNA - delivering an executive search standard for one transparent flat fee.
 </p>

 {/* Quick Proof Pills */}
 <div className="mt-8 flex flex-wrap items-center gap-2.5">
 {[
 "Pre-agreed locked fee from £1,495",
 "Preston HQ · UK-wide delivery",
 "100% senior partner led",
 "Section 6 SLA protected",
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

 {/* CTA Action Row */}
 <div className="mt-9 flex flex-wrap items-center gap-4">
 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
 <Link href="/fixed-fee" className="btn btn-ink">
 <span>Explore Fixed Fee Hiring</span>
 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
 </Link>
 </motion.div>
 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
 <Link href="/contact" className="btn btn-line">
 <span>Book Free Discovery Call</span>
 </Link>
 </motion.div>
 </div>
 </motion.div>

 {/* Hero Right Visual with Animated Badges */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
 className="lg:col-span-5"
 >
 <div className="relative aspect-[4/4.8] sm:aspect-[4/4.2] lg:aspect-[4/4.8] overflow-hidden rounded-3xl shadow-2xl border border-line bg-ink group">
 <Image
 src="/images/campaign-creators-gMsnXqILjp4-unsplash-scaled-copy.webp"
 alt="HST founders collaborating on executive search strategy"
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
 <ShieldCheck className="w-4 h-4 text-accent-deep" />
 </div>
 <div>
 <p className="text-[10px] font-bold uppercase tracking-wider text-accent-deep">
 SLA Guarantee
 </p>
 <p className="text-xs font-bold text-ink">
 8-Week Free Replacement
 </p>
 </div>
 </div>
 <span className="text-[11px] font-bold text-accent-deep bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
 Section 6.5
 </span>
 </motion.div>

 {/* Bottom Floating Impact Metric */}
 <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-paper/95 backdrop-blur-md border border-line shadow-lg">
 <div className="flex items-center justify-between">
 <div>
 <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
 Commercial Impact
 </span>
 <p className="font-display text-xl font-black text-ink mt-0.5">
 £1.2M+ Retained
 </p>
 </div>
 <span className="text-xs font-bold text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 Saved by UK Clients
 </span>
 </div>
 <p className="text-[11px] text-muted mt-2 border-t border-line/60 pt-2 leading-relaxed">
 Compared to traditional 20%-30% contingent agency invoices.
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

 {/* ================= FOUNDATION & STORY ================= */}
 <section className="wrap section">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 {/* Visual Showcase */}
 <motion.div
 initial={{ opacity: 0, x: -25 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="lg:col-span-5 relative"
 >
 <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-line bg-paper group">
 <Image
 src="/images/scott-graham-5fNmWej4tAA-unsplash-scaled-1.jpg"
 alt="Reviewing recruitment candidate contracts and commercial SLAs"
 fill
 sizes="(max-width: 1024px) 100vw, 42vw"
 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

 <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-paper/95 backdrop-blur-md border border-line shadow-md">
 <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep">
 The Core Principle
 </span>
 <p className="font-display text-sm font-bold text-ink mt-0.5">
 &ldquo;A recruitment fee should reflect the work delivered, never the candidate&apos;s salary.&rdquo;
 </p>
 </div>
 </div>
 </motion.div>

 {/* Narrative Content */}
 <motion.div
 initial={{ opacity: 0, x: 25 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="lg:col-span-7"
 >
 <span className="tag">Our Foundation</span>
 <h2 className="h2 mt-4 text-ink">
 Recruitment expertise meets a fundamentally different way of thinking.
 </h2>

 <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
 <p>
 The traditional recruitment model hasn&apos;t changed in thirty years. A firm has a vacancy, an agency flips a handful of job board CVs across, and if someone gets hired, the agency extracts a massive percentage of their first-year salary - in most cases, an over-inflated fee carrying zero performance guarantee.
 </p>
 <p>
 Our founders&apos; backgrounds span traditional executive search, job board platforms, B2B marketing, software architecture, and SaaS. That breadth gives us a fundamentally different perspective on how businesses attract, evaluate, and secure exceptional talent.
 </p>
 <p>
 The result is a service built entirely around what firms actually need: proactive access to high-calibre passive candidates, complete search transparency, and a pre-agreed locked fee that aligns incentives with your business.
 </p>
 </div>

 {/* Checklist */}
 <div className="mt-7 pt-6 border-t border-line space-y-3">
 {[
 {
 title: "Objective Pay Benchmarking",
 desc: "Because our fee never rises with the offer, our salary advice remains 100% unbiased.",
 },
 {
 title: "Direct Sourcing of Passive Talent",
 desc: "We actively headhunt senior fee-earners and tech specialists who never scroll job boards.",
 },
 {
 title: "Transparent Section 6 Protection",
 desc: "8-Week replacement guarantee and 14-day cash refund commitment written into every order.",
 },
 ].map((item) => (
 <div key={item.title} className="flex items-start gap-3">
 <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
 <Check className="w-3.5 h-3.5 stroke-[2.5]" />
 </span>
 <div>
 <h4 className="text-sm font-bold text-ink">{item.title}</h4>
 <p className="text-xs text-muted mt-0.5">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>

 {/* ================= 4 MULTI-DISCIPLINARY PILLARS ================= */}
 <section className="bg-surface border-y border-line">
 <div className="wrap section">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-line">
 <div className="max-w-[620px]">
 <span className="tag">Why We Are Different</span>
 <h2 className="h2 mt-4 text-ink">
 The four disciplines behind the HST edge.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 HST wasn&apos;t created by recruiters who only know one version of the industry. We merge four complementary skill sets to redefine the hiring process:
 </p>
 </div>

 <Link href="/fixed-fee" className="btn btn-ink text-xs font-semibold shrink-0">
 <span>View Service Breakdown</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>

 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {disciplines.map((d, idx) => {
 const Icon = d.icon;
 return (
 <motion.div
 key={d.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.45, delay: idx * 0.08 }}
 whileHover={{ y: -6 }}
 className="card p-6 sm:p-7 bg-paper flex flex-col justify-between hover:border-accent hover:shadow-xl transition-all duration-300"
 >
 <div>
 <div className="flex items-center justify-between">
 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep border border-accent/20">
 <Icon className="h-6 w-6" />
 </div>
 <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
 {d.badge}
 </span>
 </div>

 <h3 className="mt-5 font-display font-bold text-lg text-ink">
 {d.title}
 </h3>
 <p className="text-xs font-bold uppercase tracking-wider text-accent-deep mt-1">
 {d.tagline}
 </p>

 <p className="mt-3 text-xs leading-relaxed text-muted">
 {d.text}
 </p>

 <ul className="mt-5 space-y-2 pt-4 border-t border-line text-xs text-ink/80">
 {d.bullets.map((b) => (
 <li key={b} className="flex items-start gap-2">
 <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
 <span>{b}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-xs font-bold text-accent-deep">
 <span>HST Delivery Pillar 0{idx + 1}</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </div>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* ================= INTERACTIVE LEADERSHIP SHOWCASE ================= */}
 <section id="leadership" className="wrap section scroll-mt-20">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-line">
 <div className="max-w-[620px]">
 <span className="tag">Senior Leadership &amp; Specialists</span>
 <h2 className="h2 mt-4 text-ink">
 Small team. Big recruitment experience.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 We are deliberately not a huge faceless agency machine. You will know exactly who is working on your brief and have direct access to senior partners from day one.
 </p>
 </div>

 {/* Interactive Member Switcher Tabs */}
 <div className="flex items-center gap-1.5 p-1 bg-surface border border-line rounded-2xl shrink-0">
 {TEAM_MEMBERS.map((m, idx) => (
 <button
 key={m.name}
 type="button"
 onClick={() => setActiveTeamIndex(idx)}
 className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
 activeTeamIndex === idx
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface-2"
 }`}
 >
 {m.name.split(" ")[0]}
 </button>
 ))}
 </div>
 </div>

 {/* Featured Interactive Deep-Dive Card */}
 <div className="mt-10">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeMember.name}
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -15 }}
 transition={{ duration: 0.35, ease: "easeOut" }}
 className="card overflow-hidden border border-line bg-paper shadow-xl grid grid-cols-1 lg:grid-cols-12"
 >
 {/* Member Photo Stage */}
 <div className="lg:col-span-5 relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto min-h-[380px] bg-ink">
 <Image
 src={activeMember.image}
 alt={activeMember.name}
 fill
 sizes="(max-width: 1024px) 100vw, 42vw"
 className="object-cover object-top"
 priority
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent pointer-events-none" />

 <div className="absolute bottom-5 left-5 right-5 text-white">
 <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent-deep border border-accent/20 mb-2">
 {activeMember.role}
 </span>
 <h3 className="font-display text-3xl font-extrabold tracking-tight">
 {activeMember.name}
 </h3>
 </div>
 </div>

 {/* Bio & Details Column */}
 <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
 <div>
 <div className="flex items-center justify-between pb-4 border-b border-line">
 <div>
 <span className="text-[11px] font-bold uppercase tracking-wider text-accent-deep">
 Direct Partner Mandate
 </span>
 <h4 className="font-display text-2xl font-bold text-ink mt-0.5">
 {activeMember.name}
 </h4>
 </div>
 <span className="text-xs font-mono font-bold text-muted bg-surface px-3 py-1 rounded-full border border-line">
 Partner 0{activeTeamIndex + 1}
 </span>
 </div>

 <p className="mt-5 text-[15px] leading-relaxed text-muted">
 {activeMember.bio}
 </p>

 {/* Philosophy Quote */}
 <div className="mt-6 p-4 rounded-2xl bg-accent-soft/60 border-l-4 border-accent-deep">
 <p className="text-xs uppercase font-bold text-accent-deep tracking-wider mb-1">
 Search Philosophy
 </p>
 <p className="text-sm font-medium text-ink italic leading-relaxed">
 &ldquo;{activeMember.philosophy}&rdquo;
 </p>
 </div>

 {/* Tags */}
 <div className="mt-6">
 <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2.5">
 Specialist Practice &amp; Search Focus:
 </span>
 <div className="flex flex-wrap gap-2">
 {activeMember.tags.map((t) => (
 <span
 key={t}
 className="px-3 py-1 rounded-xl text-xs font-semibold bg-surface border border-line text-ink hover:border-accent hover:bg-accent-soft transition-colors"
 >
 {t}
 </span>
 ))}
 </div>
 </div>
 </div>

 <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div className="flex items-center gap-2 text-xs text-muted">
 <Clock className="w-4 h-4 text-accent" />
 <span>Direct founder involvement on every assignment</span>
 </div>

 <Link
 href="/contact"
 className="btn btn-ink text-xs font-bold shrink-0 justify-center"
 >
 <Mail className="w-3.5 h-3.5" />
 <span>Talk to {activeMember.name.split(" ")[0]}</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* 3 Overview Cards Below */}
 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
 {TEAM_MEMBERS.map((m, idx) => (
 <motion.div
 key={m.name}
 whileHover={{ y: -4 }}
 onClick={() => setActiveTeamIndex(idx)}
 className={`p-5 rounded-2xl border cursor-pointer transition-all ${
 activeTeamIndex === idx
 ? "border-accent bg-accent-soft/40 shadow-sm"
 : "border-line bg-paper hover:border-accent/40"
 }`}
 >
 <div className="flex items-center gap-3">
 <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-line shrink-0">
 <Image
 src={m.image}
 alt={m.name}
 fill
 className="object-cover object-top"
 />
 </div>
 <div>
 <h4 className="font-display text-sm font-bold text-ink">
 {m.name}
 </h4>
 <p className="text-[11px] text-muted line-clamp-1">{m.role}</p>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </section>

 {/* ================= COMPARISON: TRADITIONAL VS HST ================= */}
 <section className="bg-surface border-y border-line">
 <div className="wrap section">
 <div className="max-w-[620px] mb-10">
 <span className="tag">Commercial Transparency</span>
 <h2 className="h2 mt-4 text-ink">
 The difference between contingency &amp; fixed-fee.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Why leading law practices, tech scale-ups, and professional advisory firms choose HST over percentage agency commission:
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {COMPARISON_POINTS.map((pt, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: i * 0.08 }}
 className="card p-6 bg-paper border border-line shadow-2xs space-y-4"
 >
 {/* Traditional Side */}
 <div className="flex items-start gap-3 text-xs text-muted pb-3 border-b border-line">
 <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 font-bold text-[11px] border border-rose-200">
 ✕
 </span>
 <div>
 <span className="font-semibold text-rose-600 block text-[10px] uppercase tracking-wider">
 Traditional Agency
 </span>
 <p className="mt-0.5">{pt.traditional}</p>
 </div>
 </div>

 {/* HST Side */}
 <div className="flex items-start gap-3 text-xs text-ink">
 <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep font-bold text-[11px] border border-accent/20">
 ✓
 </span>
 <div>
 <span className="font-bold text-accent-deep block text-[10px] uppercase tracking-wider">
 HST Fixed Fee
 </span>
 <p className="mt-0.5 font-medium">{pt.hst}</p>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* ================= TESTIMONIALS SLIDER ================= */}
 <section className="wrap section">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
 <div className="max-w-[560px]">
 <span className="tag">Partner Trust</span>
 <h2 className="h2 mt-4 text-ink">
 What leaders say about partnering with HST.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Read how UK Law Firm Practice Directors, Operations Leaders, and Accountancy Principals experience our fixed-fee model.
 </p>
 </div>
 <div className="flex items-center gap-2">
 <span className="text-xs font-semibold text-muted">
 Automatic presentation · Hover to pause
 </span>
 </div>
 </div>

 <TestimonialSlider />
 </section>

 {/* ================= BOTTOM CTA ================= */}
 <section className="wrap pb-16 sm:pb-24">
 <div className="rounded-3xl bg-ink text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
 {/* Ambient Glow */}
 <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 <div className="lg:col-span-6">
 <span className="inline-flex rounded-full bg-accent/20 px-3.5 py-1 text-xs font-semibold text-accent">
 Start a Conversation
 </span>
 <h2 className="h2 mt-4 text-white">
 Let&apos;s make your next hire simple, fair, and fixed.
 </h2>
 <p className="mt-4 text-[15px] leading-relaxed text-white/70 max-w-[44ch]">
 Speak directly with Ian, Sean, or Millie. We will assess your brief, benchmark the current market, and confirm your locked fee in writing within 24 hours.
 </p>

 <div className="mt-8 space-y-3 text-sm text-white/80">
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>Pre-agreed flat fee from £1,495 - never salary percentages</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>8-Week replacement guarantee &amp; Section 6 cash refund SLA</span>
 </div>
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
 ✓
 </div>
 <span>Direct founder involvement with confidential discretion</span>
 </div>
 </div>

 <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50 space-y-1">
 <p>Preston Office · 01772 289900 · hello@hst-hiring.co.uk</p>
 <p>Registered in England &amp; Wales. SLAs governed under UK law.</p>
 </div>
 </div>

 <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
 <h3 className="font-display text-lg font-bold text-white mb-4">
 Request a Free Scoping Review
 </h3>
 <ContactInquiryForm defaultRequirement="one-off" />
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
