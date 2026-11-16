"use client";

import Link from "next/link";
import { ArrowRight, Check, X, ShieldCheck } from "lucide-react";
import { COMPARISON_DATA } from "@/data/siteData";
import Reveal from "@/components/Reveal";

export default function WaysToHireSection() {
 return (
 <section className="bg-surface py-20 border-y border-line">
 <div className="wrap">
 <Reveal>
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
 <div className="lg:col-span-6">
 <span className="tag">Two ways to hire</span>
 <h2 className="h2 mt-4">The difference, in plain terms.</h2>
 </div>
 <p className="lg:col-span-6 lead max-w-[44ch] text-muted">
 The instability and hidden cost of contingent recruitment, against the clarity and certainty of our fixed-fee partnership.
 </p>
 </div>
 </Reveal>

 <Reveal delay={0.1}>
 {/* ================= DESKTOP TABLE VIEW ================= */}
 <div className="hidden md:block card overflow-hidden shadow-xs border border-line bg-paper">
 <div className="overflow-x-auto">
 <table className="w-full min-w-[720px] border-collapse text-left">
 <thead>
 <tr className="border-b border-line bg-surface-2/60">
 <th className="w-[26%] p-5 text-xs font-bold uppercase tracking-wider text-muted">
 Comparison Metric
 </th>
 <th className="w-[37%] p-5 align-top">
 <div className="flex items-center gap-2">
 <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold">
 ✕
 </span>
 <span className="font-display text-[17px] font-semibold text-muted">
 Contingent agency
 </span>
 </div>
 </th>
 <th className="w-[37%] p-5 align-top bg-accent-soft/80 border-l border-line">
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className="w-5 h-5 rounded-full bg-accent text-paper flex items-center justify-center text-xs font-bold shadow-xs">
 ✓
 </span>
 <span className="font-display text-[17px] font-bold text-ink">
 HST fixed fee
 </span>
 </div>
 <span className="text-[11px] font-semibold text-accent-deep bg-white px-2.5 py-0.5 rounded-full border border-accent/20">
 Recommended
 </span>
 </div>
 </th>
 </tr>
 </thead>
 <tbody className="divide-y divide-line">
 {COMPARISON_DATA.map((row) => (
 <tr 
 key={row.metric} 
 className="group hover:bg-surface/60 transition-colors duration-150"
 >
 {/* Metric Name */}
 <td className="p-5 align-top text-[14px] font-semibold text-ink">
 <div className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
 <span>{row.metric}</span>
 </div>
 </td>

 {/* Traditional / Contingent Column */}
 <td className="p-5 align-top text-[14px] leading-relaxed text-muted">
 <div className="flex items-start gap-2.5">
 <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
 <X className="w-3 h-3 stroke-[2.5]" />
 </div>
 <span>{row.traditional}</span>
 </div>
 </td>

 {/* HST Column */}
 <td className="p-5 align-top bg-accent-soft/60 border-l border-line text-[14px] leading-relaxed text-ink group-hover:bg-accent-soft/90 transition-colors duration-150">
 <div className="flex items-start gap-2.5">
 <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent text-paper flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-110">
 <Check className="w-3 h-3 stroke-[3]" />
 </div>
 <span className="font-medium">{row.hst}</span>
 </div>
 </td>
 </tr>
 ))}

 {/* Bottom Summary & CTA Row */}
 <tr className="bg-surface-2/40">
 <td className="p-5 align-middle text-[13px] font-medium text-muted">
 <div className="flex items-center gap-2">
 <ShieldCheck className="w-4 h-4 text-accent" />
 <span>Protected by guarantee</span>
 </div>
 </td>
 <td className="p-5 align-middle text-[13px] text-muted-light">
 Cost unknown until the offer stage.
 </td>
 <td className="p-5 bg-accent-soft/80 border-l border-line">
 <Link 
 href="/contact" 
 className="btn btn-ink w-full justify-center group/btn shadow-xs hover:shadow-md transition-all"
 >
 <span>Start a fixed-fee search</span>
 <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
 </Link>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>

 {/* ================= MOBILE COMPARATIVE CARD STACK ================= */}
 <div className="md:hidden space-y-4">
 {COMPARISON_DATA.map((row) => (
 <div
 key={`mobile-${row.metric}`}
 className="card border border-line bg-paper overflow-hidden shadow-xs p-5"
 >
 <div className="flex items-center justify-between pb-3 border-b border-line">
 <span className="text-xs font-bold uppercase tracking-wider text-muted">
 {row.metric}
 </span>
 <span className="text-[10px] font-bold text-accent-deep bg-accent-soft px-2 py-0.5 rounded-full border border-accent/20">
 HST Advantage
 </span>
 </div>

 <div className="mt-4 space-y-3">
 {/* HST Fixed Fee Pill Card */}
 <div className="p-3.5 rounded-2xl bg-accent-soft/80 border border-accent/30 flex items-start gap-3">
 <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center shadow-xs">
 <Check className="w-3 h-3 stroke-[3]" />
 </div>
 <div>
 <span className="text-[11px] font-bold uppercase tracking-wider text-accent-deep block">
 HST Fixed Fee
 </span>
 <p className="text-sm font-semibold text-ink mt-0.5 leading-snug">
 {row.hst}
 </p>
 </div>
 </div>

 {/* Contingent Agency Card */}
 <div className="p-3 rounded-2xl bg-surface border border-line/80 flex items-start gap-3">
 <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center">
 <X className="w-3 h-3 stroke-[2.5]" />
 </div>
 <div>
 <span className="text-[11px] font-medium uppercase tracking-wider text-muted block">
 Contingent Agency
 </span>
 <p className="text-xs text-muted mt-0.5 leading-relaxed">
 {row.traditional}
 </p>
 </div>
 </div>
 </div>
 </div>
 ))}

 <div className="p-4 rounded-2xl bg-surface border border-line text-center">
 <p className="text-xs text-muted mb-3">All HST fixed fee placements backed by an 8-week guarantee.</p>
 <Link href="/contact" className="btn btn-accent w-full justify-center">
 <span>Start a fixed-fee search</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>
 </Reveal>
 </div>
 </section>
 );
}
