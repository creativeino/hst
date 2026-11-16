"use client";

import Image from "next/image";
import Link from "next/link";
import {
 Users,
 Search,
 LayoutDashboard,
 Scale,
 ShieldCheck,
 CheckCircle2,
 ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
 {
 number: "01",
 tag: "Dedicated Extension",
 title: "An outsourced recruitment department, without the overhead.",
 lead: "A full end-to-end executive search run as an organic extension of your leadership team.",
 description:
 "We handle every phase of the search: role scoping, market mapping, talent pooling, targeted approaches, initial video screening, and shortlist presentation. Delivered entirely to your schedule, not an agency billing cycle.",
 bullets: [
 "Dedicated partner contact throughout (Ian, Sean, or Millie)",
 "Zero junior handoffs or resourcer filters",
 "Full search-to-hire management with complete discretion",
 ],
 image: "/images/campaign-creators-e6n7uoEnYbA-unsplash-scaled-1.jpg",
 badge: "100% Senior Partner-Led",
 },
 {
 number: "02",
 tag: "Targeted Outreach",
 title: "Proactive headhunting of employed, passive talent.",
 lead: "We don't wait for applicants. We directly engage high-calibre specialists who never look at job boards.",
 description:
 "The strongest legal and commercial professionals are already successfully employed. We run confidential, targeted approaches across our sector network to engage candidates who are genuinely qualified and culturally aligned.",
 bullets: [
 "Direct confidential outreach across UK legal & professional sectors",
 "Multi-channel sourcing beyond traditional LinkedIn spam",
 "Genuinely interested candidates, not just available CVs",
 ],
 image: "/images/linkedin-sales-solutions-46bom4lObsA-unsplash-scaled-1.jpg",
 badge: "Direct Sector Sourcing",
 },
 {
 number: "03",
 tag: "Total Search Visibility",
 title: "Transparent reporting & live talent pipeline tracking.",
 lead: "Full search progress through transparent reporting: every stage, every candidate, zero opacity.",
 description:
 "You receive structured visibility on all live talent outreach, market reception, candidate feedback, and shortlist rankings. With fees confirmed in writing from day one, there are no invoice surprises.",
 bullets: [
 "Structured candidate shortlist with pre-screen interview notes",
 "Transparent market salary benchmarks and feedback",
 "One flat fee confirmed in writing before outreach begins",
 ],
 image: "/images/laptop2.png",
 badge: "Full Transparency",
 },
 {
 number: "04",
 tag: "Commercial Certainty",
 title: "Unbiased salary advice & counter-offer defense.",
 lead: "Because our fee never rises with the offer, our compensation advice stays 100% honest.",
 description:
 "Traditional percentage agencies have a built-in incentive to push offers higher. HST's locked fee keeps our advice completely objective. Plus, we coach candidates through resignation and counter-offer pressures through to their start date.",
 bullets: [
 "Zero percentage penalties or salary escalators",
 "Proactive counter-offer protection and pre-boarding coaching",
 "8-week replacement guarantee & 14-day refund protection",
 ],
 image: "/images/scott-graham-5fNmWej4tAA-unsplash-scaled-1.jpg",
 badge: "8-Week Guarantee",
 },
];

export default function WhatYouGetRows() {
 return (
 <section className="wrap section scroll-mt-20">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-8% 0px" }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-line"
 >
 <div className="max-w-[640px]">
 <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent-deep">
 
 <span>The HST Deliverable Standard</span>
 </div>
 <h2 className="h2 mt-4">
 What You Get: Built around how you actually hire.
 </h2>
 <p className="mt-3 text-[16px] leading-relaxed text-muted">
 A dedicated senior recruitment infrastructure designed to protect your margin, guarantee continuity, and secure top-tier passive specialists.
 </p>
 </div>

 <div className="flex items-center gap-3">
 <Link href="/fixed-fee" className="btn btn-line text-xs font-semibold">
 Explore Terms
 </Link>
 <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
 <Link href="/contact" className="btn btn-accent text-xs font-bold">
 Book Scoping Review
 <ArrowRight className="h-3.5 w-3.5" />
 </Link>
 </motion.div>
 </div>
 </motion.div>

 {/* Alternating Horizontal Rows */}
 <div className="mt-16 space-y-20 lg:space-y-28">
 {FEATURES.map((item, idx) => {
 const isEven = idx % 2 === 1;

 return (
 <motion.div
 key={item.number}
 initial={{ opacity: 0, y: 35 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10% 0px" }}
 transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
 className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
 >
 {/* Text Column */}
 <div
 className={`lg:col-span-6 ${
 isEven ? "lg:order-2" : "lg:order-1"
 }`}
 >
 <div className="flex items-center gap-3">
 <span className="font-display text-4xl font-black text-accent">
 {item.number}
 </span>
 <div className="h-4 w-px bg-line" />
 <span className="text-xs font-bold uppercase tracking-wider text-muted">
 {item.tag}
 </span>
 </div>

 <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mt-3 tracking-tight leading-tight">
 {item.title}
 </h3>

 <p className="mt-3 text-sm font-semibold text-accent-deep">
 {item.lead}
 </p>

 <p className="mt-4 text-[15px] leading-relaxed text-muted">
 {item.description}
 </p>

 <div className="mt-6 space-y-2.5 pt-4 border-t border-line">
 {item.bullets.map((b) => (
 <div key={b} className="flex items-start gap-2.5 text-xs text-ink/85">
 <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent shrink-0" />
 <span>{b}</span>
 </div>
 ))}
 </div>

 <div className="mt-8">
 <Link
 href="/contact"
 className="inline-flex items-center gap-2 text-xs font-bold text-accent-deep hover:text-ink transition group"
 >
 <span>Schedule discovery for this service</span>
 <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
 </Link>
 </div>
 </div>

 {/* Visual Showcase Column */}
 <div
 className={`lg:col-span-6 ${
 isEven ? "lg:order-1" : "lg:order-2"
 }`}
 >
 <motion.div
 whileHover={{ y: -5 }}
 transition={{ duration: 0.3 }}
 className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-line bg-surface group hover:border-accent hover:shadow-[0_20px_50px_-15px_rgba(94,191,132,0.3)] transition-all duration-500"
 >
 <Image
 src={item.image}
 alt={item.title}
 fill
 sizes="(max-width: 1024px) 100vw, 50vw"
 className="object-cover transition duration-700 ease-out group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />

 {/* Floating Badge Top */}
 <div className="absolute top-4 left-4 z-10">
 <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/80 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-bold text-accent shadow-sm">
 
 {item.badge}
 </span>
 </div>

 {/* Overlaid Title on Bottom */}
 <div className="absolute bottom-4 left-5 right-5 z-10">
 <p className="text-[11px] uppercase tracking-wider text-accent font-bold drop-shadow">
 HST Standard {item.number}
 </p>
 <p className="font-display text-lg font-bold text-white mt-0.5 leading-snug drop-shadow-md">
 {item.title}
 </p>
 </div>
 </motion.div>
 </div>
 </motion.div>
 );
 })}
 </div>
 </section>
 );
}
