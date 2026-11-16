"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Faq {
 q: string;
 a: string;
}

export default function FaqAccordion({ items }: { items: Faq[] }) {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <div className="divide-y divide-line border-y border-line">
 {items.map((item, i) => {
 const open = openIndex === i;
 const panelId = `faq-panel-${i}`;
 const buttonId = `faq-button-${i}`;

 return (
 <div key={item.q} className="group">
 <h3>
 <button
 type="button"
 id={buttonId}
 aria-expanded={open}
 aria-controls={panelId}
 onClick={() => setOpenIndex(open ? null : i)}
 className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200"
 >
 <span className={`font-display text-[17px] sm:text-[19px] font-semibold leading-snug tracking-[-0.02em] transition-colors duration-200 ${
 open ? "text-accent-deep" : "text-ink group-hover:text-accent-deep"
 }`}>
 {item.q}
 </span>
 <motion.span
 className="shrink-0 text-accent flex items-center justify-center w-8 h-8 rounded-full bg-surface group-hover:bg-accent-soft transition-colors"
 animate={{ rotate: open ? 180 : 0 }}
 transition={{ duration: 0.25, ease: "easeInOut" }}
 >
 {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
 </motion.span>
 </button>
 </h3>

 <AnimatePresence initial={false}>
 {open && (
 <motion.div
 id={panelId}
 role="region"
 aria-labelledby={buttonId}
 initial={{ opacity: 0, height: 0 }}
 animate={{
 opacity: 1,
 height: "auto",
 transition: {
 height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
 opacity: { duration: 0.25, delay: 0.05 },
 },
 }}
 exit={{
 opacity: 0,
 height: 0,
 transition: {
 height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
 opacity: { duration: 0.15 },
 },
 }}
 className="overflow-hidden"
 >
 <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted">
 {item.a}
 </p>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 })}
 </div>
 );
}
