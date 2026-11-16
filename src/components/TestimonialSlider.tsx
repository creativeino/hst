"use client";

import { useState } from "react";
import { Star, ArrowLeft, ArrowRight, Building2, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSlider() {
 const [current, setCurrent] = useState(0);
 const [direction, setDirection] = useState<1 | -1>(1);

 const total = TESTIMONIALS.length;

 const next = () => {
 setDirection(1);
 setCurrent((prev) => (prev + 1) % total);
 };

 const prev = () => {
 setDirection(-1);
 setCurrent((prev) => (prev - 1 + total) % total);
 };

 const active = TESTIMONIALS[current];

 return (
 <div className="w-full">
 {/* Clean, Elegant Light Card */}
 <div className="rounded-2xl border border-line bg-paper p-8 sm:p-12 shadow-sm relative">
 <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-line">
 {/* Rating & Tag */}
 <div className="flex items-center gap-3">
 <div className="flex items-center gap-1 text-amber-500">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
 ))}
 </div>
 <span className="text-xs font-bold text-ink tracking-tight">5.0 Star Rating</span>
 <span className="h-1 w-1 rounded-full bg-line" />
 <span className="text-xs font-semibold text-accent-deep bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent/20">
 {active.metric}
 </span>
 </div>

 {/* Clean Arrow Buttons */}
 <div className="flex items-center gap-2">
 <span className="text-xs font-mono font-medium text-muted mr-2">
 0{current + 1} / 0{total}
 </span>
 <button
 type="button"
 onClick={prev}
 aria-label="Previous review"
 className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-ink hover:bg-accent-soft hover:text-accent-deep hover:border-accent/30 transition-colors"
 >
 <ArrowLeft className="h-4 w-4" />
 </button>
 <button
 type="button"
 onClick={next}
 aria-label="Next review"
 className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-ink hover:bg-accent-soft hover:text-accent-deep hover:border-accent/30 transition-colors"
 >
 <ArrowRight className="h-4 w-4" />
 </button>
 </div>
 </div>

 {/* Quote Content */}
 <div className="py-8 min-h-[190px] flex flex-col justify-center">
 <AnimatePresence mode="wait" custom={direction}>
 <motion.div
 key={current}
 custom={direction}
 initial={{ opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -12 }}
 transition={{ duration: 0.28, ease: "easeInOut" }}
 >
 <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-snug">
 &ldquo;{active.highlight}&rdquo;
 </h3>
 <p className="mt-4 text-[16px] sm:text-[17px] text-muted leading-relaxed max-w-[68ch]">
 {active.quote}
 </p>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* Author Footer */}
 <div className="pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <AnimatePresence mode="wait">
 <motion.div
 key={current}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.2 }}
 className="flex items-center gap-3.5"
 >
 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-paper font-display font-bold text-base">
 {active.author.charAt(0)}
 </div>
 <div>
 <p className="font-display font-bold text-[15px] text-ink">
 {active.author}
 </p>
 <p className="text-xs text-muted flex items-center gap-1.5 mt-0.5">
 <Building2 className="h-3.5 w-3.5 text-accent" />
 <span>{active.company}</span>
 </p>
 </div>
 </motion.div>
 </AnimatePresence>

 {/* Clickable Dots */}
 <div className="flex items-center gap-2">
 {TESTIMONIALS.map((_, idx) => (
 <button
 key={idx}
 type="button"
 onClick={() => {
 setDirection(idx > current ? 1 : -1);
 setCurrent(idx);
 }}
 aria-label={`Go to slide ${idx + 1}`}
 className={`h-2 rounded-full transition-all duration-200 ${
 current === idx ? "w-6 bg-accent" : "w-2 bg-line hover:bg-muted-light"
 }`}
 />
 ))}
 </div>
 </div>
 </div>
 </div>
 );
}
