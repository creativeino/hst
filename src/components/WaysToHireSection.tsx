"use client";

import Link from "next/link";
import { ArrowRight, Check, X, ShieldCheck } from "lucide-react";
import { COMPARISON_DATA } from "@/data/siteData";
import Reveal from "@/components/Reveal";

export default function WaysToHireSection() {
  return (
    <section className="bg-surface py-20 sm:py-24 border-y border-line">
      <div className="wrap">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
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
          <div className="hidden md:block card overflow-hidden shadow-xs border border-line bg-paper rounded-2xl">
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
                <tbody className="divide-y divide-line text-sm">
                  {COMPARISON_DATA.map((row, idx) => (
                    <tr
                      key={row.metric}
                      className="group hover:bg-surface/60 transition-colors"
                    >
                      <td className="p-5 font-semibold text-ink text-[14.5px] align-top bg-paper">
                        <span className="text-xs font-mono text-muted/60 mr-2">
                          0{idx + 1}
                        </span>
                        {row.metric}
                      </td>
                      <td className="p-5 text-muted align-top leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <span className="text-rose-500 font-bold shrink-0 mt-0.5">
                            ✕
                          </span>
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-5 font-medium text-ink align-top bg-accent-soft/30 border-l border-line leading-relaxed group-hover:bg-accent-soft/50 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <span className="text-accent-deep font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="font-semibold text-ink">
                            {row.hst}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Summary Callout */}
            <div className="p-5 bg-surface border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent-deep shrink-0" />
                <span className="text-xs font-medium text-muted">
                  All HST placements backed by contractual replacement shields and 14-day refund commitments.
                </span>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-deep hover:text-ink transition-colors shrink-0"
              >
                <span>Calculate role savings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ================= MOBILE INTERACTIVE COMPARISON CARDS ================= */}
          <div className="md:hidden space-y-4">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={row.metric}
                className="p-5 rounded-2xl bg-paper border border-line shadow-2xs space-y-3.5"
              >
                <div className="flex items-center justify-between pb-2.5 border-b border-line">
                  <span className="text-sm font-display font-bold text-ink">
                    {row.metric}
                  </span>
                  <span className="text-[10px] font-mono text-muted">
                    0{idx + 1} / 0{COMPARISON_DATA.length}
                  </span>
                </div>

                {/* Contingent Agency Item */}
                <div className="p-3 rounded-xl bg-surface border border-line/60">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 mb-1">
                    <X className="w-3.5 h-3.5" />
                    <span>Contingent Agency</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-5">
                    {row.traditional}
                  </p>
                </div>

                {/* HST Fixed Fee Item */}
                <div className="p-3 rounded-xl bg-accent-soft/80 border border-accent/30">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-accent-deep mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>HST Fixed Fee</span>
                  </div>
                  <p className="text-xs font-semibold text-ink leading-relaxed pl-5">
                    {row.hst}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
