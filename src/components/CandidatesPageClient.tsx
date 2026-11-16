"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowRight,
 ShieldCheck,
 EyeOff,
 Briefcase,
 FileSearch,
 CheckCircle2,
 MapPin,
 Building2,
 Banknote,
 Send,
 PhoneCall,
 Mail,
 Lock,
 Clock,
 Plus,
 Minus,
 Check,
 TrendingUp,
 UserCheck,
 HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CandidateApplicationForm from "@/components/CandidateApplicationForm";
import AppointmentScheduler from "@/components/AppointmentScheduler";
import AnimatedCounter from "@/components/AnimatedCounter";
import { LIVE_JOBS, CANDIDATE_STEPS, FAQS, COMPANY_CONTACT } from "@/data/siteData";

const IMPACT_METRICS = [
 {
 numericValue: 100,
 prefix: "",
 suffix: "%",
 label: "Strict Confidentiality",
 subtext: "Current employer never alerted",
 },
 {
    numericValue: 100,
    prefix: "",
    suffix: "%",
    label: "Candidate Consent Controlled",
    subtext: "No CV is ever submitted without express approval",
  },
 {
 numericValue: 47,
 prefix: "",
 suffix: "%",
 label: "Counter-Offers Defended",
 subtext: "Coached through resignation & notice",
 },
 {
 numericValue: 30,
 prefix: "",
 suffix: "+",
 label: "Years Combined Network",
 subtext: "Direct partner and board relationships",
 },
];

const CANDIDATE_PILLARS = [
 {
 icon: TrendingUp,
 title: "Market Compensation Reality",
 desc: "Unfiltered intelligence on current UK salaries, fee-earner billing targets, and real partner equity progression.",
 },
 {
 icon: EyeOff,
 title: "Total Discretion Protocol",
 desc: "Zero employer risk. We never submit your CV, profile, or current firm details to anyone without your explicit green light.",
 },
 {
 icon: UserCheck,
 title: "Zero Agency Pressure",
 desc: "No aggressive quotas, transactional CV pushes, or urging you into a firm whose culture doesn't match your life.",
 },
];

const DISCIPLINE_FILTERS = [
 "All Opportunities",
 "Commercial Property",
 "Corporate & M&A",
 "Conveyancing",
 "Private Client",
];

export default function CandidatesPageClient() {
 const [selectedDiscipline, setSelectedDiscipline] = useState("All Opportunities");
 const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

 const candidateFaqs = FAQS.filter(
 (f) => f.category === "candidates" || f.q.includes("sectors") || f.q.includes("confidential")
 );

 const filteredJobs = LIVE_JOBS.filter((job) => {
 if (selectedDiscipline === "All Opportunities") return true;
 return (
 job.discipline.toLowerCase().includes(selectedDiscipline.toLowerCase()) ||
 job.tags.some((t) => t.toLowerCase().includes(selectedDiscipline.toLowerCase()))
 );
 });

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
 {/* Tag Pill */}
 <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent-deep shadow-2xs">
 
 <span>For Employed Specialists · 100% Confidential</span>
 </div>

 <h1 className="mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-[clamp(38px,5vw,66px)] text-ink">
 Your next move. Handled{" "}
 <span className="relative inline-block text-accent-deep">
 discreetly.
 <motion.span
 initial={{ width: 0 }}
 animate={{ width: "100%" }}
 transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
 className="absolute bottom-1 left-0 h-[4px] bg-accent rounded-full"
 />
 </span>
 </h1>

 <p className="mt-5 lead text-muted leading-relaxed max-w-[50ch]">
 The strongest opportunities are rarely advertised publicly. At HST, we represent senior fee-earners, solicitors, and specialists directly to law firm leaders and practices - often months before a brief ever reaches a job board.
 </p>

 <p className="mt-3 body-text text-muted leading-relaxed max-w-[52ch]">
 Explore your market value in complete confidence. Zero sales pressure, no cold-call spam, and your current firm will never know you are benchmarking options.
 </p>

 {/* Proof Pills */}
 <div className="mt-8 flex flex-wrap items-center gap-2.5">
 {[
 "100% NDA Protected",
 "Direct partner introductions",
 "Objective salary benchmarks",
 "Free executive CV evaluation",
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
 <a href="#book-call" className="btn btn-accent">
 <span>Book Call with Sean McAuley</span>
 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
 </a>
 </motion.div>
 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
 <a href="#live-jobs" className="btn btn-line">
 <span>View Live UK Roles</span>
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
 src="/images/christina-wocintechchat-com-m-LQ1t-8Ms5PY-unsplash-scaled-copy.webp"
 alt="A discreet private career benchmarking conversation with an HST partner"
 fill
 priority
 sizes="(max-width: 1024px) 100vw, 42vw"
 className="object-cover object-[50%_35%] transition-transform duration-700 ease-out group-hover:scale-105"
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
 Privacy Shield
 </p>
 <p className="text-xs font-bold text-ink">
 100% Anonymized Scoping
 </p>
 </div>
 </div>
 <span className="text-[11px] font-bold text-accent-deep bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
 NDA Bound
 </span>
 </motion.div>

 {/* Bottom Floating Stats Box */}
 <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-paper/95 backdrop-blur-md border border-line shadow-lg">
 <div className="flex items-center justify-between">
 <div>
 <span className="text-[10px] uppercase font-bold tracking-wider text-muted block">
 Direct Senior Representation
 </span>
 <p className="font-display text-xl font-black text-ink mt-0.5">
 Off-Market Discretion
 </p>
 </div>
 <span className="text-xs font-bold text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 Preston &amp; UK-Wide
 </span>
 </div>
 <p className="text-[11px] text-muted mt-2 border-t border-line/60 pt-2 leading-relaxed">
 Your CV is never circulated or submitted anywhere without explicit consent.
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

 {/* ================= PHILOSOPHY / DIFFERENTIATOR ================= */}
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
 src="/images/uk-black-tech-t_5XoZ3hE-E-unsplash-scaled-copy.webp"
 alt="Honest, transparent career advisory meeting"
 fill
 sizes="(max-width: 1024px) 100vw, 42vw"
 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

 <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-paper/95 backdrop-blur-md border border-line shadow-md">
 <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep">
 Candidate First
 </span>
 <p className="font-display text-sm font-bold text-ink mt-0.5">
 &ldquo;If an opportunity isn&apos;t right for your trajectory, we will tell you honestly.&rdquo;
 </p>
 </div>
 </div>
 </motion.div>

 {/* Narrative Content & 3 Interactive Pillar Cards */}
 <motion.div
 initial={{ opacity: 0, x: 25 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="lg:col-span-7"
 >
 <span className="tag">Candidate Advocacy</span>
 <h2 className="h2 mt-4 text-ink">
 No pressure. No sales pitch. Just honest commercial insight.
 </h2>

 <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
 <p>
 We have zero interest in bombarding you with irrelevant job alerts or shoving your CV at roles that don&apos;t match your career ambition. We work directly with managing partners, operations directors, and law firm boards who trust us to identify genuinely aligned specialists.
 </p>
 <p>
 Because our fee model is pre-agreed and locked with employers, we are never incentivized to push you into an unstable role or inflate compensation artificially just to bump an agency invoice.
 </p>
 </div>

 {/* 3 Interactive Cards */}
 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
 {CANDIDATE_PILLARS.map((col, idx) => {
 const Icon = col.icon;
 return (
 <motion.div
 key={col.title}
 whileHover={{ y: -4 }}
 className="card p-5 bg-paper border border-line shadow-2xs hover:border-accent hover:shadow-md transition-all flex flex-col justify-between"
 >
 <div>
 <div className="h-9 w-9 rounded-xl bg-accent-soft text-accent-deep flex items-center justify-center mb-3">
 <Icon className="w-4 h-4" />
 </div>
 <h3 className="font-display text-sm font-bold text-ink">
 {col.title}
 </h3>
 <p className="mt-1.5 text-xs text-muted leading-relaxed">
 {col.desc}
 </p>
 </div>
 </motion.div>
 );
 })}
 </div>
 </motion.div>
 </div>
 </section>

 {/* ================= LIVE ROLES SHOWCASE ================= */}
 <section id="live-jobs" className="bg-surface border-y border-line scroll-mt-20">
 <div className="wrap section">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-line">
 <div className="max-w-[620px]">
 <span className="tag">Live Opportunities</span>
 <h2 className="h2 mt-4 text-ink">
 Roles we are actively headhunting for right now.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Genuine, active briefs we are exclusively supporting across UK legal and professional firms:
 </p>
 </div>

 {/* Filter Pills */}
 <div className="flex flex-wrap items-center gap-1.5 p-1 bg-paper border border-line rounded-2xl shrink-0">
 {DISCIPLINE_FILTERS.map((disc) => (
 <button
 key={disc}
 type="button"
 onClick={() => setSelectedDiscipline(disc)}
 className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
 selectedDiscipline === disc
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface"
 }`}
 >
 {disc}
 </button>
 ))}
 </div>
 </div>

 {/* Jobs Grid */}
 <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
 <AnimatePresence mode="popLayout">
 {filteredJobs.map((job) => (
 <motion.div
 key={job.id}
 layout
 initial={{ opacity: 0, scale: 0.98 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.98 }}
 transition={{ duration: 0.3 }}
 whileHover={{ y: -5 }}
 className="card p-7 sm:p-8 bg-paper border border-line shadow-xs hover:border-accent hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
 >
 <div>
 <div className="flex items-center justify-between gap-3">
 <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent-deep border border-accent/20">
 {job.discipline}
 </span>
 <span className="font-display text-xl font-black text-ink">
 {job.salary}
 </span>
 </div>

 <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
 {job.title}
 </h3>

 <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted">
 <div className="flex items-center gap-1.5">
 <MapPin className="h-3.5 w-3.5 text-accent" />
 <span>{job.location}</span>
 </div>
 <div className="flex items-center gap-1.5">
 <Building2 className="h-3.5 w-3.5 text-accent" />
 <span>{job.firmType}</span>
 </div>
 </div>

 <p className="mt-4 text-sm text-muted leading-relaxed">
 {job.summary}
 </p>

 <div className="mt-5 flex flex-wrap gap-1.5">
 {job.tags.map((t) => (
 <span
 key={t}
 className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-surface border border-line text-ink"
 >
 {t}
 </span>
 ))}
 </div>
 </div>

 <div className="mt-7 pt-4 border-t border-line flex items-center justify-between">
 <span className="text-xs font-medium text-muted">
 Direct Partner Exclusive Mandate
 </span>
 <a
 href="#cv-and-apply"
 className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-deep hover:text-ink transition-colors"
 >
 <span>Enquire confidentially</span>
 <ArrowRight className="h-3.5 w-3.5" />
 </a>
 </div>
 </motion.div>
 ))}
 </AnimatePresence>
 </div>

 {/* Off-Market Search Banner */}
 <motion.div
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mt-10 rounded-3xl bg-paper border border-line p-7 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
 >
 <div>
 <div className="flex items-center gap-2">
 <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
 <span className="text-xs font-bold uppercase tracking-wider text-accent-deep">
 Off-Market Mandates Active
 </span>
 </div>
 <h4 className="font-display font-bold text-ink text-lg sm:text-xl mt-1">
 Don&apos;t see your exact practice or role listed?
 </h4>
 <p className="text-xs sm:text-sm text-muted mt-1 max-w-[58ch] leading-relaxed">
 Over 60% of our partner and director appointments are handled strictly off-market under bilateral NDA without public advertising.
 </p>
 </div>
 <a
 href="#cv-and-apply"
 className="btn btn-ink text-xs font-bold whitespace-nowrap shrink-0"
 >
 Register Off-Market Criteria
 <ArrowRight className="w-3.5 h-3.5" />
 </a>
 </motion.div>
 </div>
 </section>

 {/* ================= 4-STEP CANDIDATE JOURNEY ================= */}
 <section className="wrap section">
 <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-line">
 <div className="max-w-[620px]">
 <span className="tag">The Candidate Journey</span>
 <h2 className="h2 mt-4 text-ink">
 How we navigate your next chapter.
 </h2>
 <p className="mt-3 text-[16px] text-muted leading-relaxed">
 Four structured milestones, entirely under your control. You decide what to explore and when:
 </p>
 </div>

 <span className="text-xs font-mono font-bold text-accent-deep bg-accent-soft px-3 py-1.5 rounded-full border border-accent/20 shrink-0">
 100% Non-Disclosure Guaranteed
 </span>
 </div>

 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {CANDIDATE_STEPS.map((step, idx) => (
 <motion.div
 key={step.step}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.45, delay: idx * 0.08 }}
 whileHover={{ y: -5 }}
 className="card p-6 sm:p-7 bg-paper border border-line shadow-xs hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
 >
 <div>
 <span className="font-mono text-2xl font-black text-accent-deep block">
 {step.step}
 </span>
 <h3 className="font-display font-bold text-lg text-ink mt-3">
 {step.title}
 </h3>
 <p className="mt-2 text-xs text-muted leading-relaxed">
 {step.description}
 </p>
 </div>

 <div className="mt-6 pt-4 border-t border-line text-[11px] font-bold text-accent-deep flex items-center justify-between">
 <span>Phase 0{idx + 1}</span>
 <Check className="w-3.5 h-3.5 stroke-[3]" />
 </div>
 </motion.div>
 ))}
 </div>
 </section>

 {/* ================= DIRECT CALENDAR SCHEDULER ================= */}
 <section id="book-call" className="wrap section-tight scroll-mt-20">
 <div className="max-w-[640px] mb-8">
 <span className="tag">Direct Founder Access</span>
 <h2 className="h2 mt-4 text-ink">
 Book an informal benchmarking call with Sean.
 </h2>
 <p className="mt-2 text-[15px] text-muted leading-relaxed">
 Select a 30-minute slot on Sean&apos;s direct calendar. No sales pressure, no obligation - just pure market insight regarding salary rates, firm stability, and confidential briefs.
 </p>
 </div>

 <AppointmentScheduler
 defaultMeetingType="candidate-cv"
 title="Book a Confidential 1-on-1 Call with Sean McAuley"
 subtitle="Direct video or phone consultation. 100% confidential discussion regarding your career trajectory."
 />
 </section>

 {/* ================= FREE CV REVIEW & SUBMISSION FORM ================= */}
 <section id="cv-and-apply" className="wrap section scroll-mt-20">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
 {/* Left Guidance Column */}
 <div className="lg:col-span-5">
 <span className="tag">Complimentary Review</span>
 <h2 className="h2 mt-4 text-ink">
 Is your CV communicating your true commercial value?
 </h2>
 <p className="mt-4 text-[15px] leading-relaxed text-muted">
 Your CV has one purpose: to ensure top-tier managing partners want to meet you. If you haven&apos;t refreshed yours recently, or want objective feedback on market alignment, we provide a thorough, complimentary evaluation.
 </p>

 <div className="mt-6 space-y-4 pt-4 border-t border-line">
 <div className="flex items-start gap-3">
 <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
 <div>
 <h4 className="text-sm font-bold text-ink">Impact &amp; Billing Achievements</h4>
 <p className="text-xs text-muted mt-0.5 leading-relaxed">
 Framing demonstrable client wins, billings, and matter values rather than mundane job responsibilities.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
 <div>
 <h4 className="text-sm font-bold text-ink">Seniority &amp; Equity Alignment</h4>
 <p className="text-xs text-muted mt-0.5 leading-relaxed">
 Positioning your profile accurately for senior associate, salaried partner, or practice director moves.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
 <div>
 <h4 className="text-sm font-bold text-ink">Executive Brevity &amp; Layout</h4>
 <p className="text-xs text-muted mt-0.5 leading-relaxed">
 Stripping away filler text to ensure hiring committees grasp your pedigree in under 60 seconds.
 </p>
 </div>
 </div>
 </div>

 {/* Direct Phone / Contact Card */}
 <div className="mt-8 p-5 rounded-2xl bg-surface border border-line">
 <h4 className="font-display font-bold text-ink text-sm">
 Prefer a confidential telephone chat?
 </h4>
 <p className="text-xs text-muted mt-1 leading-relaxed">
 Call Sean McAuley or Ian Partington directly at our Preston office for an informal discussion.
 </p>
 <div className="mt-3 flex items-center gap-4 text-xs font-bold text-accent-deep">
 <a
 href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, "")}`}
 className="hover:text-ink transition-colors"
 >
 {COMPANY_CONTACT.phone}
 </a>
 <span>·</span>
 <a
 href={`mailto:${COMPANY_CONTACT.email}`}
 className="hover:text-ink transition-colors"
 >
 {COMPANY_CONTACT.email}
 </a>
 </div>
 </div>
 </div>

 {/* Right Form Card */}
 <div className="lg:col-span-7 bg-ink text-white rounded-3xl p-7 sm:p-10 shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

 <div className="relative z-10">
 <div className="flex items-center gap-2 mb-2">
 <ShieldCheck className="w-4 h-4 text-accent" />
 <span className="text-xs font-bold uppercase tracking-wider text-accent">
 100% Confidential Candidate Submission
 </span>
 </div>
 <h3 className="font-display text-2xl font-bold text-white">
 Submit Your CV for Confidential Review
 </h3>
 <p className="text-xs text-white/70 mt-1 mb-6">
 Tell us where you are heading. Your details remain strictly confidential and will never be shared without your permission.
 </p>

 <CandidateApplicationForm />
 </div>
 </div>
 </div>
 </section>

 {/* ================= CANDIDATE FAQS ================= */}
 <section className="bg-surface border-t border-line">
 <div className="wrap section">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
 <div className="lg:col-span-4">
 <div className="lg:sticky lg:top-28">
 <span className="tag">Candidate Questions</span>
 <h2 className="h2 mt-4 text-ink">
 Frequently asked questions.
 </h2>
 <p className="mt-3 text-[15px] leading-relaxed text-muted">
 Everything you need to know about our representation policies, discretion protocols, and free career support.
 </p>

 <div className="mt-8 p-5 rounded-2xl bg-paper border border-line">
 <span className="text-xs font-bold text-accent-deep uppercase tracking-wider block">
 Need direct answers?
 </span>
 <p className="text-xs text-muted mt-1 leading-relaxed">
 Sean and Millie are on hand for discreet questions without any commitment.
 </p>
 <a
 href="#book-call"
 className="btn btn-ink text-xs font-bold mt-4 justify-center w-full"
 >
 Schedule 30-Min Call
 <ArrowRight className="w-3.5 h-3.5" />
 </a>
 </div>
 </div>
 </div>

 {/* Accordion */}
 <div className="lg:col-span-8 divide-y divide-line border-y border-line">
 {candidateFaqs.map((faq, i) => {
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
 className="shrink-0 text-accent flex items-center justify-center w-8 h-8 rounded-full bg-paper group-hover:bg-accent-soft transition-colors"
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
 </div>
 </section>
 </div>
 );
}
