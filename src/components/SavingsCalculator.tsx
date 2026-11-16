"use client";

import { useState } from "react";
import Link from "next/link";
import {
 ArrowRight,
 Layers,
 Calculator,
 Building2,
 CheckCircle2,
 TrendingDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function formatGBP(value: number) {
 return `£${Math.round(value).toLocaleString("en-GB")}`;
}

export default function SavingsCalculator() {
 const [activeTab, setActiveTab] = useState<"fixed-fee" | "talentflow">("fixed-fee");

 // Tab 1: Fixed Fee States
 const [singleSalary, setSingleSalary] = useState<number>(55000);
 const [agencyRate, setAgencyRate] = useState<number>(20);

 // Tab 2: Talent Flow (RaaS Volume) States
 const [rolesCount, setRolesCount] = useState<number>(5);
 const [avgSalary, setAvgSalary] = useState<number>(50000);
 const [tfMonthlyFee, setTfMonthlyFee] = useState<number>(1500); // £1,500/mo

 // Calculations for Tab 1: Fixed Fee
 const traditionalCost = Math.round((singleSalary * agencyRate) / 100);
 const hstFixedFee = Math.max(1495, Math.round(singleSalary * 0.06));
 const fixedSavings = Math.max(0, traditionalCost - hstFixedFee);
 const fixedPercent = Math.round((fixedSavings / traditionalCost) * 100);

 // Calculations for Tab 2: Talent Flow
 const totalSalaries = rolesCount * avgSalary;
 const traditionalAgencyTotal = Math.round((totalSalaries * 20) / 100); // 20% standard
 const annualTalentFlowCost = tfMonthlyFee * 12; // 12-month RaaS partnership
 const talentFlowSavings = Math.max(0, traditionalAgencyTotal - annualTalentFlowCost);
 const talentFlowPercent = Math.round((talentFlowSavings / traditionalAgencyTotal) * 100);

 return (
 <div className="card overflow-hidden shadow-2xl border border-line bg-paper">
 {/* Sticky Mobile Summary Bar */}
 <div className="lg:hidden sticky top-0 z-20 bg-ink text-white px-4 py-3 border-b border-white/10 flex items-center justify-between shadow-md">
 <div>
 <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
 {activeTab === "fixed-fee" ? "Estimated Saving" : "Annual Saving"}
 </span>
 <p className="font-display text-lg font-black text-white leading-tight">
 {formatGBP(activeTab === "fixed-fee" ? fixedSavings : talentFlowSavings)}
 <span className="text-xs font-semibold text-accent ml-1.5">
 ({activeTab === "fixed-fee" ? fixedPercent : talentFlowPercent}%)
 </span>
 </p>
 </div>
 <Link
 href="/contact"
 className="btn btn-accent text-xs font-bold py-1.5 px-3 shadow-xs"
 >
 <span>Lock Fee</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>

 {/* Tab Switcher Header */}
 <div className="flex flex-wrap items-center justify-between border-b border-line bg-surface p-4 sm:p-6 gap-4">
 <div>
 <span className="text-[11px] uppercase tracking-wider font-bold text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 Interactive Cost Model
 </span>
 <h2 className="font-display text-xl sm:text-2xl font-extrabold text-ink mt-2">
 Calculate your recruitment investment.
 </h2>
 </div>

 {/* 2 Tabs */}
 <div className="flex flex-wrap items-center gap-1.5 bg-paper p-1.5 rounded-2xl border border-line shadow-2xs">
 <button
 type="button"
 onClick={() => setActiveTab("fixed-fee")}
 className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
 activeTab === "fixed-fee"
 ? "text-paper bg-ink shadow-xs"
 : "text-muted hover:text-ink"
 }`}
 >
 Fixed Fee (Per Hire)
 {activeTab === "fixed-fee" && (
 <motion.div
 layoutId="calcTabPill"
 className="absolute inset-0 bg-ink rounded-xl -z-10"
 transition={{ type: "spring", stiffness: 400, damping: 30 }}
 />
 )}
 </button>

 <button
 type="button"
 onClick={() => setActiveTab("talentflow")}
 className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
 activeTab === "talentflow"
 ? "text-paper bg-ink shadow-xs"
 : "text-muted hover:text-ink"
 }`}
 >
 Talent Flow (Volume / RaaS)
 {activeTab === "talentflow" && (
 <motion.div
 layoutId="calcTabPill"
 className="absolute inset-0 bg-ink rounded-xl -z-10"
 transition={{ type: "spring", stiffness: 400, damping: 30 }}
 />
 )}
 </button>
 </div>
 </div>

 {/* Main Grid: Controls vs Live Output */}
 <div className="grid grid-cols-1 lg:grid-cols-12">
 {/* ================= LEFT CONTROLS ================= */}
 <div className="lg:col-span-7 p-6 sm:p-9 lg:p-10">
 <AnimatePresence mode="wait">
 {activeTab === "fixed-fee" && (
 <motion.div
 key="fixed-fee-controls"
 initial={{ opacity: 0, x: -15 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 15 }}
 transition={{ duration: 0.25 }}
 >
 <span className="tag">One-off / Critical Hires</span>
 <h3 className="h3 mt-3 text-ink">Single Role Flat Fee Comparison</h3>
 <p className="mt-2 text-sm text-muted leading-relaxed max-w-[48ch]">
 Compare standard 15%-25% agency contingency commission against HST&apos;s one flat fee, locked in writing before outreach begins.
 </p>

 {/* Salary Slider */}
 <div className="mt-8">
 <div className="flex items-end justify-between">
 <label htmlFor="singleSalary" className="text-sm font-semibold text-muted">
 Candidate annual salary
 </label>
 <span className="font-display text-3xl font-extrabold text-ink">
 {formatGBP(singleSalary)}
 </span>
 </div>
 <input
 id="singleSalary"
 type="range"
 min={25000}
 max={150000}
 step={2500}
 value={singleSalary}
 onChange={(e) => setSingleSalary(Number(e.target.value))}
 className="range mt-3"
 style={{
 background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${((singleSalary - 25000) / (150000 - 25000)) * 100}%, var(--color-line) ${((singleSalary - 25000) / (150000 - 25000)) * 100}%, var(--color-line) 100%)`
 }}
 />
 <div className="flex justify-between text-xs text-muted-light mt-1">
 <span>£25k</span>
 <span>£75k</span>
 <span>£150k</span>
 </div>
 </div>

 {/* Agency Fee Slider */}
 <div className="mt-8">
 <div className="flex items-end justify-between">
 <label htmlFor="agencyRate" className="text-sm font-semibold text-muted">
 Traditional agency percentage
 </label>
 <span className="font-display text-2xl font-bold text-ink">
 {agencyRate}%
 </span>
 </div>
 <input
 id="agencyRate"
 type="range"
 min={15}
 max={30}
 step={1}
 value={agencyRate}
 onChange={(e) => setAgencyRate(Number(e.target.value))}
 className="range mt-3"
 style={{
 background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${((agencyRate - 15) / (30 - 15)) * 100}%, var(--color-line) ${((agencyRate - 15) / (30 - 15)) * 100}%, var(--color-line) 100%)`
 }}
 />
 <div className="flex justify-between text-xs text-muted-light mt-1">
 <span>15%</span>
 <span>20% (UK Avg)</span>
 <span>30%</span>
 </div>
 </div>

 {/* Value Checklist */}
 <div className="mt-8 pt-6 border-t border-line space-y-2 text-xs text-muted">
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-accent-deep shrink-0" />
 <span>Includes full candidate headhunting &amp; pre-screened video interviews</span>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-accent-deep shrink-0" />
 <span>Contractual Section 6 SLA protection &amp; 8-week replacement guarantee</span>
 </div>
 </div>
 </motion.div>
 )}

 {activeTab === "talentflow" && (
 <motion.div
 key="talentflow-controls"
 initial={{ opacity: 0, x: -15 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 15 }}
 transition={{ duration: 0.25 }}
 >
 <span className="tag">Volume / RaaS Hiring</span>
 <h3 className="h3 mt-3 text-ink">Talent Flow Subscription Model</h3>
 <p className="mt-2 text-sm text-muted leading-relaxed max-w-[48ch]">
 For companies making 3+ hires annually. One predictable monthly subscription instead of paying commission on every new starter.
 </p>

 {/* Hires per year */}
 <div className="mt-8">
 <div className="flex items-end justify-between">
 <label htmlFor="rolesCount" className="text-sm font-semibold text-muted">
 Hires planned over next 12 months
 </label>
 <span className="font-display text-3xl font-extrabold text-ink">
 {rolesCount} roles
 </span>
 </div>
 <input
 id="rolesCount"
 type="range"
 min={3}
 max={20}
 step={1}
 value={rolesCount}
 onChange={(e) => setRolesCount(Number(e.target.value))}
 className="range mt-3"
 style={{
 background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${((rolesCount - 3) / (20 - 3)) * 100}%, var(--color-line) ${((rolesCount - 3) / (20 - 3)) * 100}%, var(--color-line) 100%)`
 }}
 />
 <div className="flex justify-between text-xs text-muted-light mt-1">
 <span>3 roles</span>
 <span>10 roles</span>
 <span>20 roles</span>
 </div>
 </div>

 {/* Average Salary */}
 <div className="mt-8">
 <div className="flex items-end justify-between">
 <label htmlFor="avgSalary" className="text-sm font-semibold text-muted">
 Average annual salary per role
 </label>
 <span className="font-display text-2xl font-bold text-ink">
 {formatGBP(avgSalary)}
 </span>
 </div>
 <input
 id="avgSalary"
 type="range"
 min={30000}
 max={120000}
 step={5000}
 value={avgSalary}
 onChange={(e) => setAvgSalary(Number(e.target.value))}
 className="range mt-3"
 style={{
 background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${((avgSalary - 30000) / (120000 - 30000)) * 100}%, var(--color-line) ${((avgSalary - 30000) / (120000 - 30000)) * 100}%, var(--color-line) 100%)`
 }}
 />
 <div className="flex justify-between text-xs text-muted-light mt-1">
 <span>£30k</span>
 <span>£60k</span>
 <span>£120k</span>
 </div>
 </div>

 {/* Retainer Tier Pill Switcher */}
 <div className="mt-8 pt-6 border-t border-line">
 <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
 Estimated Talent Flow Monthly Tier
 </label>
 <div className="grid grid-cols-3 gap-2">
 {[
 { tier: "Growth", fee: 1500, roles: "3-5 hires/yr" },
 { tier: "Scale", fee: 2750, roles: "6-12 hires/yr" },
 { tier: "Enterprise", fee: 4500, roles: "12+ hires/yr" },
 ].map((t) => (
 <button
 key={t.tier}
 type="button"
 onClick={() => setTfMonthlyFee(t.fee)}
 className={`p-3 rounded-xl border text-left transition-all ${
 tfMonthlyFee === t.fee
 ? "border-accent bg-accent-soft text-ink font-bold"
 : "border-line bg-paper text-muted hover:border-accent/40"
 }`}
 >
 <p className="text-xs font-bold text-ink">{t.tier}</p>
 <p className="text-sm font-extrabold text-accent-deep mt-0.5">
 {formatGBP(t.fee)}/mo
 </p>
 <p className="text-[10px] text-muted mt-1">{t.roles}</p>
 </button>
 ))}
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* ================= RIGHT LIVE OUTPUT CARD ================= */}
 <div className="lg:col-span-5 bg-ink text-white p-6 sm:p-9 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 relative overflow-hidden">
 {/* Subtle Ambient Background Gradient */}
 <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

 <div className="relative z-10">
 {activeTab === "fixed-fee" && (
 <div>
 <div className="flex items-center gap-1.5 text-accent text-[12px] font-bold uppercase tracking-wider">
 
 <span>Fixed Fee Financial Comparison</span>
 </div>

 <dl className="mt-6 space-y-4">
 <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-white/10">
 <dt className="text-sm text-white/60">
 Traditional Agency ({agencyRate}%)
 </dt>
 <dd className="font-display text-xl font-semibold text-white/40 line-through decoration-rose-400 decoration-2">
 {formatGBP(traditionalCost)}
 </dd>
 </div>
 <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-white/10">
 <dt className="text-sm text-white/80 font-medium">
 HST Fixed Fee (Pre-Agreed)
 </dt>
 <dd className="font-display text-2xl font-bold text-white">
 {formatGBP(hstFixedFee)}
 </dd>
 </div>
 </dl>

 <div className="mt-7 bg-white/5 border border-white/10 rounded-2xl p-5">
 <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">
 Net Cash Retained
 </p>
 <motion.p
 key={fixedSavings}
 initial={{ scale: 0.9, opacity: 0.8 }}
 animate={{ scale: 1, opacity: 1 }}
 className="font-display text-[clamp(36px,4vw,52px)] font-black text-accent mt-2 leading-none"
 >
 {formatGBP(fixedSavings)}
 </motion.p>
 <p className="text-xs text-white/60 mt-2 font-medium flex items-center gap-1.5">
 <span className="w-2 h-2 rounded-full bg-accent" />
 {fixedPercent}% saved compared to contingent recruiter invoice
 </p>
 </div>
 </div>
 )}

 {activeTab === "talentflow" && (
 <div>
 <div className="flex items-center gap-1.5 text-accent text-[12px] font-bold uppercase tracking-wider">
 
 <span>Talent Flow Volume Advantage</span>
 </div>

 <dl className="mt-6 space-y-4">
 <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-white/10">
 <dt className="text-sm text-white/60">
 Standard Agency ({rolesCount} roles @ 20%)
 </dt>
 <dd className="font-display text-xl font-semibold text-white/40 line-through decoration-rose-400 decoration-2">
 {formatGBP(traditionalAgencyTotal)}
 </dd>
 </div>
 <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-white/10">
 <dt className="text-sm text-white/80 font-medium">
 Talent Flow (Annual RaaS Retainer)
 </dt>
 <dd className="font-display text-2xl font-bold text-white">
 {formatGBP(annualTalentFlowCost)}
 </dd>
 </div>
 </dl>

 <div className="mt-7 bg-white/5 border border-white/10 rounded-2xl p-5">
 <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">
 Total Annual Budget Saved
 </p>
 <motion.p
 key={talentFlowSavings}
 initial={{ scale: 0.9, opacity: 0.8 }}
 animate={{ scale: 1, opacity: 1 }}
 className="font-display text-[clamp(36px,4vw,52px)] font-black text-accent mt-2 leading-none"
 >
 {formatGBP(talentFlowSavings)}
 </motion.p>
 <p className="text-xs text-white/60 mt-2 font-medium flex items-center gap-1.5">
 <span className="w-2 h-2 rounded-full bg-accent" />
 Save up to {talentFlowPercent}% on annual recruitment spend
 </p>
 </div>
 </div>
 )}
 </div>

 {/* Action Link Bottom */}
 <div className="mt-8 relative z-10">
 <Link href="/contact" className="btn btn-accent w-full justify-center shadow-lg">
 <span>
 {activeTab === "fixed-fee" && "Lock in your fixed fee"}
 {activeTab === "talentflow" && "Explore Talent Flow Subscription"}
 </span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 <p className="text-[11px] text-white/45 mt-3 leading-relaxed">
 Based on genuine UK market benchmarks. Your final fixed fee is confirmed in writing within 24 hours.
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}
