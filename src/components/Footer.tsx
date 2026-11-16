"use client";

import Link from "next/link";
import Image from "next/image";
import {
 ArrowRight,
 ArrowUpRight,
 Mail,
 MapPin,
 Phone,
 ShieldCheck,
 CheckCircle2,
 Clock,
 ExternalLink,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

const FOOTER_NAV = [
 {
 title: "Services & Models",
 links: [
 { name: "HST Assured (Fixed Fee)", href: "/fixed-fee" },
 { name: "Talent Flow (RaaS Subscription)", href: "/fixed-fee#talentflow" },
 { name: "Legal Sector Headhunting", href: "/#sectors" },
 { name: "Tech & SaaS Hiring", href: "/#sectors" },
 { name: "Finance & Accountancy", href: "/#sectors" },
 ],
 },
 {
 title: "Candidates",
 links: [
 { name: "Candidate Overview", href: "/candidates" },
 { name: "Free CV Evaluation", href: "/candidates#cv-review" },
 { name: "Live UK Roles", href: "/candidates#jobs" },
 { name: "Confidential Consultation", href: "/contact" },
 ],
 },
 {
 title: "Commercial & Legal",
 links: [
 { name: "Pricing & Calculator", href: "/pricing" },
 { name: "Terms of Business & SLAs", href: "/terms" },
 { name: "Fixed Fee Service SLAs", href: "/fixed-fee" },
 { name: "Privacy Policy", href: "/privacy" },
 ],
 },
];

export default function Footer() {
 return (
 <footer className="bg-[#06120c] text-white border-t border-white/10">
 {/* Top Pre-Footer Callout Bar */}
 <div className="border-b border-white/10 py-10 bg-white/2">
 <div className="wrap flex flex-col md:flex-row md:items-center justify-between gap-6">
 <div className="flex items-center gap-4">
 <div className="h-12 w-12 rounded-2xl bg-accent text-ink flex items-center justify-center shrink-0 font-bold shadow-md">
 <ShieldCheck className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-display text-base font-bold text-white">
 Every search backed by our written Service Level Agreement
 </h4>
 <p className="text-xs sm:text-sm text-white/60 mt-0.5">
 8-Week replacement guarantee and Section 6.2 14-day cash refund protection.
 </p>
 </div>
 </div>

 <div className="flex items-center gap-3 shrink-0">
 <Link href="/pricing" className="btn btn-line-light text-xs font-semibold">
 Compare Savings
 </Link>
 <Link href="/contact" className="btn btn-accent text-xs font-bold">
 Book Scoping Call
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>
 </div>

 {/* Main Footer Links & Company Details */}
 <div className="wrap pt-16 pb-12">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
 {/* Brand & Address Column */}
 <div className="lg:col-span-5">
 <Link href="/" className="flex items-center gap-3 group" aria-label="HST Hiring - home">
 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft border border-accent/40 p-1.5 shadow-xs">
 <Image
 src="/images/HST-Logomark.png"
 alt="HST Logo"
 width={34}
 height={34}
 className="h-8 w-auto object-contain"
 />
 </div>
 <div className="flex flex-col">
 <span className="text-[22px] font-display font-black tracking-[-0.03em] text-white leading-tight">
 HST<span className="text-accent ml-0.5 font-bold">Hiring</span>
 </span>
 <span className="text-[10px] uppercase tracking-wider font-bold text-white/50">
 Fixed Fee Recruitment Partner
 </span>
 </div>
 </Link>

 <p className="mt-5 max-w-[38ch] text-[14.5px] leading-relaxed text-white/70">
 Challenging the UK 30% recruitment commission model. Transparent flat fees agreed in writing before outreach begins, with zero salary penalties.
 </p>

 {/* Direct Contact Details */}
 <div className="mt-7 space-y-3 text-xs sm:text-sm text-white/75">
 <a
 href={`mailto:${COMPANY_CONTACT.email}`}
 className="flex items-center gap-3 text-white/85 hover:text-accent transition-colors"
 >
 <Mail className="w-4 h-4 text-accent shrink-0" />
 <span>{COMPANY_CONTACT.email}</span>
 </a>

 <a
 href={`tel:${COMPANY_CONTACT.phone}`}
 className="flex items-center gap-3 text-white/85 hover:text-accent transition-colors"
 >
 <Phone className="w-4 h-4 text-accent shrink-0" />
 <span>{COMPANY_CONTACT.phone}</span>
 </a>

 <div className="flex items-start gap-3 text-white/65">
 <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
 <span className="leading-relaxed">
 {COMPANY_CONTACT.address}
 </span>
 </div>
 </div>
 </div>

 {/* Categorized Navigation Columns */}
 <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
 {FOOTER_NAV.map((col) => (
 <div key={col.title}>
 <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
 {col.title}
 </h3>
 <ul className="space-y-3">
 {col.links.map((link) => (
 <li key={link.name}>
 <Link
 href={link.href}
 className="text-xs sm:text-[13.5px] text-white/65 hover:text-white transition-colors flex items-center gap-1.5 group"
 >
 <span className="truncate">{link.name}</span>
 <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all text-accent" />
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>

 {/* Bottom Legal / Copyright Strip */}
 <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
 <div>
 <p>© 2026 HST Hiring Group Ltd. Registered in England &amp; Wales.</p>
 <p className="mt-0.5 text-[11px] text-white/40">
 Company Registration &amp; Terms governed under the laws of England and Wales.
 </p>
 </div>

 <div className="flex items-center gap-5">
 <Link href="/privacy" className="hover:text-white transition-colors">
 Privacy Notice
 </Link>
 <span>·</span>
 <Link href="/terms" className="hover:text-white transition-colors">
 Terms of Business
 </Link>
 <span>·</span>
 <a href="#top" className="text-accent hover:underline">
 Back to top ↑
 </a>
 </div>
 </div>
 </div>
 </footer>
 );
}
