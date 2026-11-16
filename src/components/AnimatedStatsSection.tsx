"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";

const STATS_DATA = [
 {
 numericValue: 1495,
 prefix: "£",
 suffix: "",
 label: "Flat Fee Starting Rate",
 subtext: "vs. 20%-30% typical agency commission",
 },
 {
 numericValue: 5,
 prefix: "",
 suffix: " Days",
 label: "Average Shortlist Delivery",
 subtext: "Pre-screened candidates directly to inbox",
 },
 {
 numericValue: 8,
 prefix: "",
 suffix: " Weeks",
 label: "Placement Guarantee Shield",
 subtext: "Contractual Section 6 free replacement SLA",
 },
 {
 numericValue: 80,
 prefix: "Up to ",
 suffix: "%",
 label: "Recruitment Budget Retained",
 subtext: "Zero commission penalty on candidate pay",
 },
];

export default function AnimatedStatsSection() {
 return (
 <section className="border-y border-line bg-surface-soft/60 py-10 sm:py-12">
 <div className="wrap">
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-line">
 {STATS_DATA.map((stat, idx) => (
 <motion.div
 key={stat.label}
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-20px" }}
 transition={{ duration: 0.5, delay: idx * 0.08 }}
 className={`flex flex-col justify-center ${
 idx === 0
 ? "lg:pr-8"
 : idx === STATS_DATA.length - 1
 ? "lg:pl-8"
 : "lg:px-8"
 }`}
 >
 {/* Rolling Number */}
 <div className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-none">
 <AnimatedCounter
 value={stat.numericValue}
 prefix={stat.prefix}
 suffix={stat.suffix}
 duration={1.8 + idx * 0.15}
 />
 </div>

 {/* Title Label */}
 <h4 className="font-display text-sm sm:text-base font-bold text-ink mt-2.5">
 {stat.label}
 </h4>

 {/* Subtext description */}
 <p className="text-xs text-muted mt-1 leading-relaxed">
 {stat.subtext}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
