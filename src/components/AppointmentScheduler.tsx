"use client";

import { useState } from "react";
import Image from "next/image";
import {
 Calendar as CalendarIcon,
 Clock,
 Video,
 ShieldCheck,
 Check,
 ExternalLink,
 ChevronRight,
 Phone,
 Mail,
 Building2,
 Lock,
 Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeSlot {
 time: string;
}

const AVAILABLE_DAYS = [
 { dayName: "Mon", dayNum: 16, fullDate: "Monday, 16 November 2026" },
 { dayName: "Tue", dayNum: 17, fullDate: "Tuesday, 17 November 2026" },
 { dayName: "Wed", dayNum: 18, fullDate: "Wednesday, 18 November 2026" },
 { dayName: "Thu", dayNum: 19, fullDate: "Thursday, 19 November 2026" },
 { dayName: "Fri", dayNum: 20, fullDate: "Friday, 20 November 2026" },
];

const TIME_SLOTS: TimeSlot[] = [
 { time: "09:30 AM" },
 { time: "10:30 AM" },
 { time: "11:45 AM" },
 { time: "02:00 PM" },
 { time: "03:15 PM" },
 { time: "04:30 PM" },
];

interface AppointmentSchedulerProps {
 defaultMeetingType?: "client-scoping" | "candidate-cv";
 title?: string;
 subtitle?: string;
}

export default function AppointmentScheduler({
 defaultMeetingType = "client-scoping",
 title,
 subtitle,
}: AppointmentSchedulerProps) {
 const [meetingType, setMeetingType] = useState<"client-scoping" | "candidate-cv">(
 defaultMeetingType
 );
 const [meetingPlatform, setMeetingPlatform] = useState<"zoom" | "google-meet" | "phone">("zoom");
 const [selectedDayIndex, setSelectedDayIndex] = useState(1); // Tuesday
 const [selectedTime, setSelectedTime] = useState<string>("10:30 AM");
 const [formSubmitted, setFormSubmitted] = useState(false);
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 phone: "",
 notes: "",
 });

 const selectedDay = AVAILABLE_DAYS[selectedDayIndex];

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setFormSubmitted(true);
 };

 return (
 <div className="card overflow-hidden shadow-2xl border border-line bg-paper">
 {/* Top Header with Google Calendar Brand Banner */}
 <div className="bg-surface-soft border-b border-line p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div>
 <div className="flex flex-wrap items-center gap-2">
 {/* Google Calendar Pill */}
 <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-ink bg-white px-3 py-1 rounded-full border border-line shadow-2xs">
 <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
 <rect width="24" height="24" rx="4" fill="#FFFFFF"/>
 <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" fill="#4285F4"/>
 <path d="M11 11h5v5h-5z" fill="#34A853"/>
 </svg>
 <span>Google Calendar Integration</span>
 </span>

 {/* Video Platform Badge */}
 <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent-deep bg-accent-soft px-3 py-1 rounded-full border border-accent/20">
 <Video className="w-3.5 h-3.5 text-accent" />
 <span>Zoom &amp; Google Meet Enabled</span>
 </span>
 </div>

 <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mt-2.5">
 {title ||
 (meetingType === "client-scoping"
 ? "Book a 30-Min Fee & Role Scoping Review"
 : "Book a Confidential 1-on-1 Call with Sean")}
 </h3>
 <p className="text-xs sm:text-sm text-muted mt-1">
 {subtitle ||
 (meetingType === "client-scoping"
 ? "Direct 1-on-1 video consultation to benchmark salaries and confirm your locked fixed fee."
 : "Zero sales pressure, 100% confidential discussion regarding your legal/tech market value.")}
 </p>
 </div>

 {/* Meeting Target Switcher */}
 <div className="flex items-center gap-1 p-1 bg-paper border border-line rounded-xl shrink-0 self-start sm:self-center">
 <button
 type="button"
 onClick={() => {
 setMeetingType("client-scoping");
 setFormSubmitted(false);
 }}
 className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
 meetingType === "client-scoping"
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface"
 }`}
 >
 Hiring Employer
 </button>
 <button
 type="button"
 onClick={() => {
 setMeetingType("candidate-cv");
 setFormSubmitted(false);
 }}
 className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
 meetingType === "candidate-cv"
 ? "bg-ink text-white shadow-xs"
 : "text-muted hover:text-ink hover:bg-surface"
 }`}
 >
 Candidate
 </button>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-line">
 {/* ================= LEFT HOST & PLATFORM SELECTION ================= */}
 <div className="lg:col-span-4 p-6 sm:p-7 bg-surface-soft/40 flex flex-col justify-between">
 <div>
 {/* Host Details */}
 <div className="flex items-center gap-3.5 pb-6 border-b border-line">
 <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-line shadow-xs shrink-0 bg-ink">
 <Image
 src="/images/Sean-McAuley.webp"
 alt="Sean McAuley - Director at HST Hiring"
 fill
 className="object-cover object-top"
 />
 </div>
 <div>
 <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep">
 HST Leadership
 </span>
 <h4 className="font-display text-base font-bold text-ink">
 Sean McAuley
 </h4>
 <p className="text-xs text-muted">
 Director &amp; Co-Founder
 </p>
 </div>
 </div>

 {/* Video Platform Selection */}
 <div className="mt-6">
 <label className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
 Preferred Meeting Channel
 </label>

 <div className="space-y-2">
 {/* Zoom Option */}
 <button
 type="button"
 onClick={() => setMeetingPlatform("zoom")}
 className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
 meetingPlatform === "zoom"
 ? "border-[#2D8CFF] bg-[#2D8CFF]/10 ring-1 ring-[#2D8CFF]"
 : "border-line bg-paper hover:bg-surface"
 }`}
 >
 <div className="flex items-center gap-2.5">
 <div className="w-7 h-7 rounded-lg bg-[#2D8CFF] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
 Z
 </div>
 <div>
 <p className="text-xs font-bold text-ink">Zoom Meeting</p>
 <p className="text-[10px] text-muted">Video link generated automatically</p>
 </div>
 </div>
 {meetingPlatform === "zoom" && (
 <Check className="w-4 h-4 text-[#2D8CFF]" />
 )}
 </button>

 {/* Google Meet Option */}
 <button
 type="button"
 onClick={() => setMeetingPlatform("google-meet")}
 className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
 meetingPlatform === "google-meet"
 ? "border-[#00897B] bg-[#00897B]/10 ring-1 ring-[#00897B]"
 : "border-line bg-paper hover:bg-surface"
 }`}
 >
 <div className="flex items-center gap-2.5">
 <div className="w-7 h-7 rounded-lg bg-[#00897B] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
 G
 </div>
 <div>
 <p className="text-xs font-bold text-ink">Google Meet</p>
 <p className="text-[10px] text-muted">Direct browser calendar invite</p>
 </div>
 </div>
 {meetingPlatform === "google-meet" && (
 <Check className="w-4 h-4 text-[#00897B]" />
 )}
 </button>

 {/* Direct Phone Option */}
 <button
 type="button"
 onClick={() => setMeetingPlatform("phone")}
 className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
 meetingPlatform === "phone"
 ? "border-accent bg-accent/10 ring-1 ring-accent"
 : "border-line bg-paper hover:bg-surface"
 }`}
 >
 <div className="flex items-center gap-2.5">
 <div className="w-7 h-7 rounded-lg bg-accent text-paper flex items-center justify-center font-bold text-xs shadow-2xs">
 <Phone className="w-3.5 h-3.5" />
 </div>
 <div>
 <p className="text-xs font-bold text-ink">Direct Telephone Call</p>
 <p className="text-[10px] text-muted">Sean will call your UK mobile</p>
 </div>
 </div>
 {meetingPlatform === "phone" && (
 <Check className="w-4 h-4 text-accent-deep" />
 )}
 </button>
 </div>
 </div>

 {/* Quick Commitments */}
 <div className="mt-6 pt-5 border-t border-line space-y-2.5 text-xs text-muted">
 <div className="flex items-center gap-2">
 <Clock className="w-3.5 h-3.5 text-accent" />
 <span>30 Minutes · Focused &amp; actionable</span>
 </div>
 <div className="flex items-center gap-2">
 <ShieldCheck className="w-3.5 h-3.5 text-accent" />
 <span>100% Non-Disclosure Discretion</span>
 </div>
 <div className="flex items-center gap-2">
 <Lock className="w-3.5 h-3.5 text-accent" />
 <span>Fixed fee confirmed in writing in 24h</span>
 </div>
 </div>
 </div>

 {/* Preston Office Signoff */}
 <div className="mt-8 pt-5 border-t border-line text-xs text-muted">
 <p className="font-semibold text-ink">Preston Office:</p>
 <p className="text-[11px] text-muted mt-0.5">01772 289900 · hello@hst-hiring.co.uk</p>
 </div>
 </div>

 {/* ================= RIGHT CALENDAR TIME SLOTS & FORM ================= */}
 <div className="lg:col-span-8 p-6 sm:p-8">
 <AnimatePresence mode="wait">
 {!formSubmitted ? (
 <motion.div
 key="booking-form"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 >
 {/* Step 1: Date Bar */}
 <div>
 <div className="flex items-center justify-between mb-3">
 <label className="text-xs font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
 <CalendarIcon className="w-3.5 h-3.5 text-accent" />
 <span>1. Select Date on Google Calendar</span>
 </label>
 <span className="text-xs font-semibold text-accent-deep">
 {selectedDay.fullDate}
 </span>
 </div>

 {/* 5-Day Horizontal Picker */}
 <div className="grid grid-cols-5 gap-2">
 {AVAILABLE_DAYS.map((day, idx) => (
 <button
 key={day.dayName}
 type="button"
 onClick={() => setSelectedDayIndex(idx)}
 className={`p-3 rounded-2xl border text-center transition-all ${
 selectedDayIndex === idx
 ? "border-accent bg-accent text-paper font-bold shadow-sm"
 : "border-line bg-surface hover:bg-paper text-ink"
 }`}
 >
 <span className={`text-[10px] uppercase font-bold block ${
 selectedDayIndex === idx ? "text-paper/85" : "text-muted"
 }`}>
 {day.dayName}
 </span>
 <strong className="text-lg font-black block mt-0.5">
 {day.dayNum}
 </strong>
 </button>
 ))}
 </div>
 </div>

 {/* Step 2: Time Slots */}
 <div className="mt-7">
 <label className="text-xs font-bold uppercase tracking-wider text-muted flex items-center gap-1.5 mb-3">
 <Clock className="w-3.5 h-3.5 text-accent" />
 <span>2. Select Time (UK GMT)</span>
 </label>

 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
 {TIME_SLOTS.map((slot) => (
 <button
 key={slot.time}
 type="button"
 onClick={() => setSelectedTime(slot.time)}
 className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
 selectedTime === slot.time
 ? "border-ink bg-ink text-white shadow-xs"
 : "border-line bg-surface hover:bg-paper text-ink"
 }`}
 >
 {slot.time}
 </button>
 ))}
 </div>
 </div>

 {/* Step 3: Attendee Details */}
 <form onSubmit={handleSubmit} className="mt-8 pt-6 border-t border-line space-y-4">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label className="text-xs font-semibold text-ink block mb-1">
 Your Full Name *
 </label>
 <input
 type="text"
 required
 placeholder="e.g. Rachel Adams"
 value={formData.name}
 onChange={(e) =>
 setFormData({ ...formData, name: e.target.value })
 }
 className="input text-xs"
 />
 </div>
 <div>
 <label className="text-xs font-semibold text-ink block mb-1">
 Business / Personal Email *
 </label>
 <input
 type="email"
 required
 placeholder="rachel@company.co.uk"
 value={formData.email}
 onChange={(e) =>
 setFormData({ ...formData, email: e.target.value })
 }
 className="input text-xs"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label className="text-xs font-semibold text-ink block mb-1">
 Phone Number (Optional)
 </label>
 <input
 type="tel"
 placeholder="07700 900123"
 value={formData.phone}
 onChange={(e) =>
 setFormData({ ...formData, phone: e.target.value })
 }
 className="input text-xs"
 />
 </div>
 <div>
 <label className="text-xs font-semibold text-ink block mb-1">
 Role Brief / Topic
 </label>
 <input
 type="text"
 placeholder={
 meetingType === "client-scoping"
 ? "e.g. Commercial Litigation Partner"
 : "e.g. Confidential salary benchmark"
 }
 value={formData.notes}
 onChange={(e) =>
 setFormData({ ...formData, notes: e.target.value })
 }
 className="input text-xs"
 />
 </div>
 </div>

 {/* Submit Button */}
 <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
 <p className="text-[11px] text-muted">
 Synced via Google Calendar with instant {meetingPlatform === "zoom" ? "Zoom" : meetingPlatform === "google-meet" ? "Google Meet" : "phone call"} details.
 </p>
 <button
 type="submit"
 className="btn btn-accent w-full sm:w-auto text-xs font-bold py-2.5 px-6 shrink-0 shadow-md"
 >
 Book on Google Calendar
 <ChevronRight className="w-4 h-4 ml-1" />
 </button>
 </div>
 </form>
 </motion.div>
 ) : (
 /* Success Confirmation Screen */
 <motion.div
 key="booking-success"
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 className="py-10 text-center max-w-md mx-auto"
 >
 <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
 <Check className="w-8 h-8 stroke-[3]" />
 </div>

 <span className="text-[11px] font-bold uppercase tracking-wider text-accent-deep mt-4 block">
 Google Calendar Confirmed
 </span>
 <h3 className="font-display text-2xl font-black text-ink mt-1">
 You&apos;re scheduled with Sean!
 </h3>

 <div className="mt-6 p-4 rounded-2xl bg-surface border border-line text-xs text-ink space-y-2 text-left">
 <div className="flex justify-between">
 <span className="text-muted">Date:</span>
 <strong className="font-bold">{selectedDay.fullDate}</strong>
 </div>
 <div className="flex justify-between">
 <span className="text-muted">Time:</span>
 <strong className="font-bold">{selectedTime} (UK GMT)</strong>
 </div>
 <div className="flex justify-between">
 <span className="text-muted">Platform:</span>
 <strong className="font-bold uppercase text-accent-deep">
 {meetingPlatform === "zoom"
 ? "Zoom Video Call"
 : meetingPlatform === "google-meet"
 ? "Google Meet"
 : "Direct Phone Call"}
 </strong>
 </div>
 <div className="flex justify-between">
 <span className="text-muted">Host:</span>
 <strong>Sean McAuley (Director &amp; Co-Founder)</strong>
 </div>
 <div className="flex justify-between">
 <span className="text-muted">Invitee:</span>
 <strong>{formData.name || "Guest"} ({formData.email})</strong>
 </div>
 </div>

 <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-200 text-left text-xs text-blue-900 flex items-center justify-between">
 <div className="flex items-center gap-2">
 <Video className="w-4 h-4 text-blue-600 shrink-0" />
 <span>Meeting link added to your Google / Outlook calendar.</span>
 </div>
 <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-blue-200 font-bold">
 AUTO-SYNC
 </span>
 </div>

 <button
 type="button"
 onClick={() => setFormSubmitted(false)}
 className="mt-6 btn btn-line text-xs font-semibold py-2 px-4"
 >
 Reschedule / Book Another Slot
 </button>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </div>
 </div>
 );
}
