"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Building2,
  Scale,
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
      { name: "Privacy & GDPR Notice", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-12 border-t border-ink-2/60">
      <div className="wrap">
        {/* ================= TOP TRUST & COMPLIANCE CREDIBILITY BAR ================= */}
        <div className="pb-12 mb-12 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">
                Contractual SLA Protection
              </span>
              <span className="text-[11px] text-white/60 block mt-0.5 leading-relaxed">
                8-Week placement shield &amp; 14-day 100% refund commitment.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
            <Lock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">
                ICO Registered Data Controller
              </span>
              <span className="text-[11px] text-white/60 block mt-0.5 leading-relaxed">
                UK GDPR compliant · Registration No. ZB610924.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
            <Scale className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">
                UK Registered Entity
              </span>
              <span className="text-[11px] text-white/60 block mt-0.5 leading-relaxed">
                HST Group Ltd · Company Reg. No. 14923180.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">
                Zero Candidate Shopping
              </span>
              <span className="text-[11px] text-white/60 block mt-0.5 leading-relaxed">
                100% discrete outreach with express candidate consent.
              </span>
            </div>
          </div>
        </div>

        {/* ================= MAIN FOOTER CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft border border-accent/40 p-1.5 shadow-2xs">
                <Image
                  src="/images/HST-Logomark.png"
                  alt="HST Logo"
                  width={30}
                  height={30}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-display font-bold tracking-tight text-white leading-tight">
                  HST<span className="text-accent ml-0.5 font-bold">Hiring</span>
                </span>
                <span className="text-[9.5px] uppercase tracking-wider font-bold text-white/60 -mt-0.5">
                  Preston and UK-Wide
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-[13.5px] text-white/70 max-w-sm leading-relaxed">
              Transparent fixed fee recruitment for the UK legal, technology, and commercial sectors. Pre-agreed pricing without variable percentage markups.
            </p>

            <div className="space-y-2.5 text-xs text-white/70 pt-2">
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

        {/* ================= BOTTOM STATUTORY / LEGAL DETAILS ================= */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <div>
            <p>© 2026 HST Group Ltd. Registered in England &amp; Wales (Company No. 14923180).</p>
            <p className="mt-0.5 text-[11px] text-white/40">
              Registered Office: Office 44, 3 Caxton Road, Fulwood, Preston, PR2 9ZZ · ICO Reg. ZB610924 · Governing Law: England &amp; Wales.
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
