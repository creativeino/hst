"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
 Mail,
 MapPin,
 Phone,
 ShieldCheck,
 Check,
 Clock,
 Calendar,
 Building2,
 Users,
 Send,
 Lock,
 ArrowRight,
 UserCheck,
 CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import CandidateApplicationForm from "@/components/CandidateApplicationForm";
import AppointmentScheduler from "@/components/AppointmentScheduler";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function ContactPageClient() {
 const [activeTab, setActiveTab] = useState<"calendar" | "client" | "candidate">("calendar");

 return (
 <div className="overflow-hidden">
 {/* ================= HERO SECTION ================= */}
 <section className="relative wrap pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
 <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="lg:col-span-7"
 >
 <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent-deep shadow-2xs">
 
 <span>Preston HQ &amp; UK-Wide · Direct Founder Communication</span>
 </div>

 <h1 className="mt-5 font-display font-extrabold leading-[1.02] tracking-[-0.04em] text-[clamp(38px,5vw,66px)] text-ink">
 Start with a{" "}
 <span className="relative inline-block text-accent-deep">
 conversation.
 <motion.span
 initial={{ width: 0 }}
 animate={{ width: "100%" }}
 transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
 className="absolute bottom-1 left-0 h-[4px] bg-accent rounded-full"
 />
 </span>
 </h1>
 </motion.div>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="lg:col-span-5 lead text-muted lg:pb-1 leading-relaxed"
 >
 Review your vacancy challenges, benchmark market salaries, or discuss confidential career moves. Direct access to our founders in Preston, Lancashire and across the UK.
 </motion.p>
 </div>
 </section>

 {/* ================= MAIN INTERFACE SECTION ================= */}
 <section className="wrap pb-16 sm:pb-24">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
 {/* Left Column: Direct Office & Process Details */}
 <motion.aside
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.55 }}
 className="lg:col-span-5 rounded-3xl bg-ink text-white p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden"
 >
 <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

 <div className="relative z-10">
 <span className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent border border-accent/20">
 Direct Contact Standards
 </span>
 <h2 className="font-display text-2xl font-bold text-white mt-3">
 How we work with you
 </h2>

 <ul className="mt-7 space-y-4">
 {[
 {
 title: "Realistic salary benchmarking",
 text: "Current UK legal, tech, and professional market rates based on live placements, not guesswork.",
 },
 {
 title: "One transparent flat fee",
 text: "Confirmed in writing within 24 hours. Zero percentage escalators, no variable invoices.",
 },
 {
 title: "Complete client & candidate discretion",
 text: "Strict NDAs and non-disclosure standards. We never share profiles or vacancies without explicit consent.",
 },
 {
 title: "8-Week replacement guarantee",
 text: "Contractual Section 6 protection and full cash refund commitments written into every engagement.",
 },
 ].map((item) => (
 <li key={item.title} className="flex items-start gap-3">
 <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-ink font-bold text-xs shadow-xs">
 <Check className="w-3 h-3 stroke-[3]" />
 </span>
 <div>
 <h3 className="text-sm font-semibold text-white">
 {item.title}
 </h3>
 <p className="mt-0.5 text-xs leading-relaxed text-white/60">
 {item.text}
 </p>
 </div>
 </li>
 ))}
 </ul>
 </div>

 <div className="mt-10 pt-7 border-t border-white/15 space-y-3.5 relative z-10">
 <a
 href={`mailto:${COMPANY_CONTACT.email}`}
 className="flex items-center gap-3 text-xs sm:text-sm text-white/85 hover:text-accent transition-colors"
 >
 <Mail className="w-4 h-4 text-accent shrink-0" />
 <span>{COMPANY_CONTACT.email}</span>
 </a>

 <a
 href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, "")}`}
 className="flex items-center gap-3 text-xs sm:text-sm text-white/85 hover:text-accent transition-colors"
 >
 <Phone className="w-4 h-4 text-accent shrink-0" />
 <span>{COMPANY_CONTACT.phone}</span>
 </a>

 <div className="flex items-start gap-3 text-xs sm:text-sm text-white/65 leading-relaxed">
 <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
 <span>{COMPANY_CONTACT.address}</span>
 </div>

 <div className="flex items-center gap-2 text-[11px] text-white/50 pt-2 border-t border-white/10">
 <ShieldCheck className="w-3.5 h-3.5 text-accent" />
 <span>{COMPANY_CONTACT.companyName} · Registered in England &amp; Wales</span>
 </div>
 </div>
 </motion.aside>

 {/* Right Column: Interactive Tabbed Interface */}
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.55 }}
 className="lg:col-span-7 card p-6 sm:p-9 bg-paper border border-line shadow-xl flex flex-col justify-between"
 >
 <div>
 {/* Tab Selector */}
 <div className="flex rounded-2xl bg-surface p-1.5 border border-line gap-1">
 <button
 type="button"
 onClick={() => setActiveTab("calendar")}
 className={`flex-1 rounded-xl py-2.5 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
 activeTab === "calendar"
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface-2"
 }`}
 >
 <Calendar className="w-3.5 h-3.5 text-accent" />
 <span>Book Consultation</span>
 </button>
 <button
 type="button"
 onClick={() => setActiveTab("client")}
 className={`flex-1 rounded-xl py-2.5 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
 activeTab === "client"
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface-2"
 }`}
 >
 <Building2 className="w-3.5 h-3.5" />
 <span>Hiring Enquiry</span>
 </button>
 <button
 type="button"
 onClick={() => setActiveTab("candidate")}
 className={`flex-1 rounded-xl py-2.5 text-xs font-bold transition flex items-center justify-center gap-1.5 ${
 activeTab === "candidate"
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface-2"
 }`}
 >
 <UserCheck className="w-3.5 h-3.5" />
 <span>Candidate CV</span>
 </button>
 </div>

 {/* Dynamic Tab Content with Smooth Transitions */}
 <div className="mt-6">
 <AnimatePresence mode="wait">
 {activeTab === "calendar" && (
 <motion.div
 key="calendar-tab"
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.25 }}
 >
 <AppointmentScheduler />
 </motion.div>
 )}

 {activeTab === "client" && (
 <motion.div
 key="client-tab"
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.25 }}
 className="p-2"
 >
 <div className="mb-6">
 <span className="text-[11px] font-bold uppercase tracking-wider text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 Employer Proposal Request
 </span>
 <h3 className="font-display text-2xl font-bold text-ink mt-2">
 Book a Free Scoping Review
 </h3>
 <p className="text-xs text-muted mt-1 leading-relaxed">
 Tell us about your vacancy, target seniority, or team expansion. We will benchmark current salaries and send a written fixed-fee proposal within 24 hours.
 </p>
 </div>

 <div className="bg-surface border border-line rounded-2xl p-6 sm:p-7">
 <ContactInquiryForm defaultRequirement="one-off" />
 </div>
 </motion.div>
 )}

 {activeTab === "candidate" && (
 <motion.div
 key="candidate-tab"
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.25 }}
 className="p-2"
 >
 <div className="mb-6">
 <span className="text-[11px] font-bold uppercase tracking-wider text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 100% Confidential Candidate Channel
 </span>
 <h3 className="font-display text-2xl font-bold text-ink mt-2">
 Confidential Candidate Inquiry &amp; CV Review
 </h3>
 <p className="text-xs text-muted mt-1 leading-relaxed">
 Share your CV or explore market benchmark rates with Sean and Millie. Zero sales pressure, strictly confidential under bilateral NDA.
 </p>
 </div>

 <div className="bg-ink text-white border border-white/10 rounded-2xl p-6 sm:p-7 shadow-lg">
 <CandidateApplicationForm />
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </div>
 </motion.div>
 </div>
 </section>
 </div>
 );
}
