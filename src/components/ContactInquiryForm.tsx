"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface ContactInquiryFormProps {
 defaultRequirement?: "one-off" | "ongoing" | "other";
 compact?: boolean;
}

export default function ContactInquiryForm({
 defaultRequirement = "one-off",
 compact = false
}: ContactInquiryFormProps) {
 const [formData, setFormData] = useState({
 firstName: "",
 surname: "",
 email: "",
 phone: "",
 company: "",
 requirement: defaultRequirement,
 message: ""
 });

 const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
 const [errorMessage, setErrorMessage] = useState("");

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 if (!formData.firstName || !formData.surname || !formData.email || !formData.phone) {
 setStatus("error");
 setErrorMessage("Please complete all required fields (*).");
 return;
 }

 setStatus("submitting");
 setErrorMessage("");

 // Simulate realistic asynchronous network submission
 await new Promise((resolve) => setTimeout(resolve, 900));

 setStatus("success");
 try {
 confetti({
 particleCount: 65,
 spread: 60,
 origin: { y: 0.75 }
 });
 } catch {
 // Gracefully ignore if canvas isn't available
 }
 };

 if (status === "success") {
 return (
 <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center backdrop-blur-md">
 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
 <CheckCircle2 className="h-8 w-8" />
 </div>
 <h3 className="mt-4 text-xl font-semibold text-white">Thank You, {formData.firstName}!</h3>
 <p className="mt-2 text-sm text-neutral-300">
 Your enquiry has been received. Our team will review your requirements and provide our fixed-fee proposal within 24 hours.
 </p>
 <button
 onClick={() => {
 setStatus("idle");
 setFormData({
 firstName: "",
 surname: "",
 email: "",
 phone: "",
 company: "",
 requirement: defaultRequirement,
 message: ""
 });
 }}
 className="mt-6 inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
 >
 Submit another inquiry
 </button>
 </div>
 );
 }

 return (
 <form onSubmit={handleSubmit} className="space-y-4">
 {status === "error" && errorMessage && (
 <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
 <AlertCircle className="h-4 w-4 shrink-0" />
 <span>{errorMessage}</span>
 </div>
 )}

 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
 <div>
 <label className="block text-xs font-medium text-neutral-300">First Name *</label>
 <input
 type="text"
 required
 value={formData.firstName}
 onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
 placeholder="Jane"
 className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition focus:border-accent/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/60"
 />
 </div>
 <div>
 <label className="block text-xs font-medium text-neutral-300">Surname *</label>
 <input
 type="text"
 required
 value={formData.surname}
 onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
 placeholder="Doe"
 className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition focus:border-accent/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/60"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
 <div>
 <label className="block text-xs font-medium text-neutral-300">Email Address *</label>
 <input
 type="email"
 required
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 placeholder="jane@company.co.uk"
 className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition focus:border-accent/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/60"
 />
 </div>
 <div>
 <label className="block text-xs font-medium text-neutral-300">Phone Number *</label>
 <input
 type="tel"
 required
 value={formData.phone}
 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
 placeholder="07123 456789"
 className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition focus:border-accent/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/60"
 />
 </div>
 </div>

 <div>
 <label className="block text-xs font-medium text-neutral-300">Company / Firm Name</label>
 <input
 type="text"
 value={formData.company}
 onChange={(e) => setFormData({ ...formData, company: e.target.value })}
 placeholder="Acme Legal LLP"
 className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition focus:border-accent/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/60"
 />
 </div>

 <div>
 <label className="block text-xs font-medium text-neutral-300">Hiring Requirement</label>
 <div className="mt-2 grid grid-cols-2 gap-3">
 <button
 type="button"
 onClick={() => setFormData({ ...formData, requirement: "one-off" })}
 className={`rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition ${
 formData.requirement === "one-off"
 ? "border-accent bg-accent/20 text-accent font-bold"
 : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/15 hover:text-white"
 }`}
 >
 One-off Search (Fixed Fee)
 </button>
 <button
 type="button"
 onClick={() => setFormData({ ...formData, requirement: "ongoing" })}
 className={`rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition ${
 formData.requirement === "ongoing"
 ? "border-accent bg-accent/20 text-accent font-bold"
 : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/15 hover:text-white"
 }`}
 >
 Ongoing (RaaS / Talentflow)
 </button>
 </div>
 </div>

 {!compact && (
 <div>
 <label className="block text-xs font-medium text-neutral-300">Role Details / Message</label>
 <textarea
 rows={3}
 value={formData.message}
 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
 placeholder="Tell us about the role, seniority, or salary range..."
 className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition focus:border-accent/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/60"
 />
 </div>
 )}

 <button
 type="submit"
 disabled={status === "submitting"}
 className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-ink shadow-lg shadow-accent/25 transition hover:brightness-105 active:scale-[0.99] disabled:opacity-50"
 >
 {status === "submitting" ? (
 <>
 <Loader2 className="h-4 w-4 animate-spin" />
 <span>Sending proposal request...</span>
 </>
 ) : (
 <>
 
 <span>Book Free Scoping Review</span>
 <Send className="h-4 w-4" />
 </>
 )}
 </button>

 <p className="text-center text-[11px] text-neutral-400">
 By submitting, you agree to our confidential outreach policy. We respond within 24 hours.
 </p>
 </form>
 );
}
