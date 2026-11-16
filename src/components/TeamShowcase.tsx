"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/siteData";
import { motion } from "framer-motion";

export default function TeamShowcase() {
 return (
 <section id="team" className="wrap section scroll-mt-20">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-line"
 >
 <div className="max-w-[620px]">
 <span className="tag">Senior Leadership</span>
 <h2 className="h2 mt-4">The team behind your search.</h2>
 <p className="mt-3 text-[16px] leading-relaxed text-muted">
 Direct access to the founders and specialists who lead your search. Hover over any member to view their details.
 </p>
 </div>

 <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
 <Link href="/contact" className="btn btn-accent text-xs font-bold">
 Book Scoping Call
 <ArrowRight className="h-3.5 w-3.5" />
 </Link>
 </motion.div>
 </motion.div>

 {/* Clean Photo Gallery Grid: Just Images + Hover Details Overlay */}
 <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
 {TEAM_MEMBERS.map((member, idx) => (
 <motion.div
 key={member.name}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: idx * 0.12 }}
 whileHover={{ y: -6 }}
 className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-line bg-surface-2 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-accent"
 >
 {/* Base Image */}
 <Image
 src={member.image}
 alt={member.name}
 fill
 sizes="(max-width: 768px) 100vw, 33vw"
 className="object-cover object-top transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
 />

 {/* Subtle Gradient Shadow At Bottom */}
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

 {/* Default Subtle Name Tag */}
 <div className="absolute bottom-5 left-5 right-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
 <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-accent border border-white/10">
 {member.role.split("&")[0].trim()}
 </span>
 <h3 className="font-display text-2xl font-bold text-white mt-1.5 drop-shadow-md">
 {member.name}
 </h3>
 </div>

 {/* Hover Reveal Overlay */}
 <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a13] via-[#0b1a13]/95 to-[#0b1a13]/85 backdrop-blur-xs p-7 flex flex-col justify-end opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-white">
 <span className="inline-block rounded-full bg-accent/20 border border-accent/40 px-3 py-0.5 text-[11px] font-bold text-accent mb-2 w-fit">
 {member.role}
 </span>

 <h3 className="font-display text-3xl font-extrabold text-white tracking-tight">
 {member.name}
 </h3>

 <p className="mt-2 text-xs leading-relaxed text-white/80 line-clamp-3">
 {member.bio}
 </p>

 <div className="mt-3 pt-3 border-t border-white/15">
 <p className="text-[11px] font-medium italic text-accent line-clamp-2">
 &ldquo;{member.philosophy}&rdquo;
 </p>
 </div>

 <div className="mt-3 flex flex-wrap gap-1.5">
 {member.tags.slice(0, 2).map((t) => (
 <span
 key={t}
 className="rounded-lg bg-white/10 px-2 py-0.5 text-[10px] text-white/90"
 >
 {t}
 </span>
 ))}
 </div>

 <Link
 href="/contact"
 className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-accent py-2.5 text-xs font-bold text-ink transition hover:brightness-105 active:scale-95"
 >
 <Mail className="h-3.5 w-3.5" />
 <span>Talk to {member.name.split(" ")[0]}</span>
 </Link>
 </div>
 </motion.div>
 ))}
 </div>
 </section>
 );
}
