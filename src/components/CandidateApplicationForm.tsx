"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { UploadCloud, CheckCircle2, Loader2, FileText, Send, AlertCircle } from "lucide-react";

export default function CandidateApplicationForm() {
 const [formData, setFormData] = useState({
 firstName: "",
 surname: "",
 email: "",
 phone: "",
 requirement: "discuss-vacancy",
 message: ""
 });
 const [fileName, setFileName] = useState("");
 const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
 const [errorMessage, setErrorMessage] = useState("");

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 if (e.target.files && e.target.files[0]) {
 setFileName(e.target.files[0].name);
 }
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 if (!formData.firstName || !formData.surname || !formData.email || !formData.phone) {
 setStatus("error");
 setErrorMessage("Please complete all required fields (*).");
 return;
 }

 setStatus("submitting");
 setErrorMessage("");

 await new Promise((resolve) => setTimeout(resolve, 950));

 setStatus("success");
 try {
 confetti({
 particleCount: 70,
 spread: 65,
 origin: { y: 0.7 }
 });
 } catch {
 // ignore canvas error
 }
 };

 if (status === "success") {
 return (
 <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center backdrop-blur-md">
 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
 <CheckCircle2 className="h-8 w-8" />
 </div>
 <h3 className="mt-4 text-xl font-semibold text-white">Application Received, {formData.firstName}!</h3>
 <p className="mt-2 text-sm text-neutral-300">
 Sean or Millie will review your details with total discretion and reach out directly to arrange an informal chat.
 </p>
 <button
 onClick={() => {
 setStatus("idle");
 setFileName("");
 setFormData({
 firstName: "",
 surname: "",
 email: "",
 phone: "",
 requirement: "discuss-vacancy",
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
 placeholder="Alex"
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
 placeholder="Morgan"
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
 placeholder="alex@domain.co.uk"
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
 placeholder="07987 654321"
 className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition focus:border-accent/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/60"
 />
 </div>
 </div>

 <div>
 <label className="block text-xs font-medium text-neutral-300">Inquiry Purpose</label>
 <div className="mt-2 grid grid-cols-2 gap-3">
 <button
 type="button"
 onClick={() => setFormData({ ...formData, requirement: "discuss-vacancy" })}
 className={`rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition ${
 formData.requirement === "discuss-vacancy"
 ? "border-accent bg-accent/20 text-accent font-bold"
 : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/15 hover:text-white"
 }`}
 >
 Discuss Live Vacancies
 </button>
 <button
 type="button"
 onClick={() => setFormData({ ...formData, requirement: "cv-evaluation" })}
 className={`rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition ${
 formData.requirement === "cv-evaluation"
 ? "border-accent bg-accent/20 text-accent font-bold"
 : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/15 hover:text-white"
 }`}
 >
 Free CV Evaluation
 </button>
 </div>
 </div>

 <div>
 <label className="block text-xs font-medium text-neutral-300">Attach CV (Optional - PDF, DOC, DOCX)</label>
 <div className="mt-1.5 flex items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-4 transition hover:border-accent/50 hover:bg-white/10">
 <label className="flex cursor-pointer flex-col items-center text-center">
 {fileName ? (
 <div className="flex items-center gap-2 text-sm text-accent">
 <FileText className="h-5 w-5" />
 <span className="font-medium">{fileName}</span>
 </div>
 ) : (
 <>
 <UploadCloud className="h-6 w-6 text-neutral-400" />
 <span className="mt-1 text-xs text-neutral-300">Click to upload your CV</span>
 <span className="text-[10px] text-neutral-500">Total discretion guaranteed</span>
 </>
 )}
 <input
 type="file"
 accept=".pdf,.doc,.docx"
 onChange={handleFileChange}
 className="hidden"
 />
 </label>
 </div>
 </div>

 <div>
 <label className="block text-xs font-medium text-neutral-300">Current Role / Ambitions</label>
 <textarea
 rows={3}
 value={formData.message}
 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
 placeholder="Brief note about your discipline, target location, or salary expectations..."
 className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition focus:border-accent/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-accent/60"
 />
 </div>

 <button
 type="submit"
 disabled={status === "submitting"}
 className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-ink shadow-lg shadow-accent/25 transition hover:brightness-105 active:scale-[0.99] disabled:opacity-50"
 >
 {status === "submitting" ? (
 <>
 <Loader2 className="h-4 w-4 animate-spin" />
 <span>Sending confidential request...</span>
 </>
 ) : (
 <>
 <span>Submit Confidential Inquiry</span>
 <Send className="h-4 w-4" />
 </>
 )}
 </button>

 <p className="text-center text-[11px] text-neutral-400">
 Strict non-disclosure commitment. We will never share your details without permission.
 </p>
 </form>
 );
}
