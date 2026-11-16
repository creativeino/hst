import Link from "next/link";
import { ShieldCheck, FileText, Lock, CheckCircle2, Scale } from "lucide-react";

const sections = [
  {
    id: "fixed-fee",
    title: "1. Fixed Fee Agreement & Upfront Pricing",
    body: "All search fees are agreed in writing before recruitment outreach begins. Fees are strictly fixed and are never subject to variable salary-percentage recalculations upon final job offers. Once an engagement schedule is signed, the fee remains unchanged regardless of candidate starting salary or subsequent pay reviews.",
  },
  {
    id: "delivery",
    title: "2. Search Delivery, SLA Window & Exclusivity",
    body: "HST operates on an exclusive committed partnership basis for an agreed delivery window (typically 6-12 weeks). This commitment guarantees exhaustive direct headhunting of passive practitioners, bespoke candidate qualification, and dedicated senior consultant oversight. Exclusivity ensures your firm is represented with total confidentiality and priority.",
  },
  {
    id: "replacement",
    title: "3. 8-Week Candidate Replacement Shield",
    body: "Every Fixed Fee search is protected by an 8-Week Placement Replacement Shield. In the unlikely event that an introduced practitioner leaves employment within the first 8 weeks (other than through redundancy, client insolvency, or material breach of the agreed job specification), HST will execute a priority replacement search at zero additional fee.",
  },
  {
    id: "refund",
    title: "4. Written 14-Day 100% Cash Refund Guarantee",
    body: "If HST does not present a verified, qualified shortlist of candidates matching the agreed specification within the contractual SLA delivery period, and has not met the delivery milestones set out in the schedule, the client is entitled to a 100% cash refund payable within 14 working days. No credit vouchers, no mandatory roll-over obligations.",
  },
  {
    id: "confidentiality",
    title: "5. Strict Confidentiality & Candidate Non-Shopping",
    body: "Both parties agree to treat all business information, client commercial plans, and candidate identities as strictly privileged and confidential under non-disclosure standards. HST operates a zero candidate-shopping policy: candidate CVs and personal identifiers are never circulated to third parties without prior knowledge and express written permission.",
  },
  {
    id: "payments",
    title: "6. Billing Milestones & Invoicing Terms",
    body: "Unless otherwise agreed in writing, fees are structured into clear, transparent commercial milestones confirmed prior to search commencement. Invoices are strictly payable within 14 days of invoice date in accordance with the signed Engagement Order.",
  },
  {
    id: "company",
    title: "7. Company Registration, Governance & Regulatory Compliance",
    body: "HST Group Ltd is a company registered in England and Wales under Company Registration No. 14923180. Registered Office: Office 44, 3 Caxton Road, Fulwood, Preston, Lancashire, PR2 9ZZ. HST is registered with the Information Commissioner's Office (ICO) under the UK Data Protection Act 2018 (Registration No. ZB610924) and complies with the Employment Agencies Act 1973 and the Conduct of Employment Agencies and Employment Businesses Regulations 2003.",
  },
];

export default function TermsPage() {
  return (
    <div className="wrap py-14 sm:py-20">
      {/* Top Trust Header */}
      <div className="mb-12 pb-8 border-b border-line">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/30 text-accent-deep text-xs font-bold mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Statutory Terms of Business & Commercial SLAs</span>
        </div>
        <h1 className="h2 text-ink">Terms of Business & Client Protections</h1>
        <p className="mt-3 text-base text-muted max-w-3xl leading-relaxed">
          Transparent, pre-agreed commercial terms designed to protect employers and candidates. All search assignments are governed by the laws of England & Wales.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <aside className="lg:col-span-4">
          <div className="sticky top-28 p-5 rounded-2xl bg-surface border border-line space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-deep block">
              Quick Clause Navigation
            </span>
            <nav>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block px-3 py-2 rounded-lg text-[13.5px] font-medium text-muted hover:text-ink hover:bg-surface-2 transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pt-4 border-t border-line text-xs text-muted leading-relaxed">
              <p className="font-semibold text-ink">Need a tailored search agreement?</p>
              <p className="mt-1">
                Contact our directors directly at{" "}
                <a href="mailto:hello@hst-hiring.co.uk" className="text-accent-deep font-bold hover:underline">
                  hello@hst-hiring.co.uk
                </a>
              </p>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-8 space-y-10">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-32 p-6 sm:p-7 rounded-2xl bg-paper border border-line shadow-2xs hover:border-line-strong transition-colors"
            >
              <h2 className="text-lg sm:text-xl font-display font-bold text-ink mb-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                {section.title}
              </h2>
              <p className="text-[15px] sm:text-[15.5px] text-muted leading-relaxed font-normal">
                {section.body}
              </p>
            </article>
          ))}

          <div className="p-6 rounded-2xl bg-accent-soft/70 border border-accent/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-ink text-base">
                Ready to review a role-specific search SLA?
              </h3>
              <p className="text-xs text-muted mt-0.5">
                Book a confidential 20-minute scoping call with an HST director.
              </p>
            </div>
            <Link href="/contact" className="btn btn-accent text-xs font-bold shrink-0 px-5 py-2.5">
              Book Scoping Call
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
