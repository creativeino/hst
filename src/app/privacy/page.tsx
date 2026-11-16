import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction & Statutory Framework",
    body: "HST Group Ltd ('HST', 'we', 'our', or 'us') is committed to protecting and respecting your personal privacy and maintaining total confidentiality. This policy sets out the basis on which personal data collected via our website (hst-hiring.co.uk) or through candidate and client search engagements is processed under the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the Privacy and Electronic Communications Regulations (PECR).",
  },
  {
    id: "ico",
    title: "2. Data Controller & ICO Registration",
    body: "HST Group Ltd is registered as a Data Controller with the Information Commissioner's Office (ICO) under registration reference ZB610924. Registered address: Office 44, 3 Caxton Road, Fulwood, Preston, Lancashire, PR2 9ZZ. We adhere strictly to the Seven Key Principles of the UK GDPR: Lawfulness, Fairness, Transparency, Purpose Limitation, Data Minimisation, Accuracy, Storage Limitation, and Integrity/Confidentiality.",
  },
  {
    id: "information-we-collect",
    title: "3. Categories of Personal Data Collected",
    body: "We process professional data relating to candidates and client decision-makers, strictly limited to what is relevant for executive search, legal placement, and commercial hiring: full names, contact channels (business and personal email, phone), curriculum vitae (CVs), professional qualifications (e.g. SRA roll status, practicing certificates), verified employment history, compensation benchmarks, and direct reference feedback.",
  },
  {
    id: "candidate-data",
    title: "4. Discretion & Strict Non-Disclosure Policy",
    body: "Candidate information is held in the strictest executive confidence. We operate a zero candidate-shopping standard: we never share, distribute, or discuss candidate CVs, current firm names, or identifiable career information with prospective hiring firms without prior consultation, mutual role agreement, and express written consent from the candidate.",
  },
  {
    id: "retention",
    title: "5. Data Retention Periods & Security Safeguards",
    body: "We implement robust technical and organisational security controls (including TLS encryption in transit, AES-256 encrypted cloud storage, access authentication, and periodic permission audits). We retain candidate files for legitimate recruitment search purposes for up to 24 months from the last active contact, after which records are securely erased or anonymised.",
  },
  {
    id: "your-rights",
    title: "6. Your Rights under UK GDPR",
    body: "Under the UK GDPR, you hold statutory rights including the Right to be Informed, Right of Access (Subject Access Requests), Right to Rectification, Right to Erasure ('Right to be Forgotten'), Right to Restrict Processing, and the Right to Data Portability. To exercise any of these rights, please email our Data Protection team at privacy@hst-hiring.co.uk.",
  },
  {
    id: "contact",
    title: "7. Regulatory Contacts & Complaints",
    body: "If you have questions or complaints regarding how your personal information is managed, contact our Data Protection Officer at privacy@hst-hiring.co.uk or by phone at 01772 970609. You also have the right to lodge a complaint directly with the UK supervisory authority: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF (ico.org.uk).",
  },
];

export default function PrivacyPage() {
  return (
    <div className="wrap py-14 sm:py-20">
      {/* Top Trust Header */}
      <div className="mb-12 pb-8 border-b border-line">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/30 text-accent-deep text-xs font-bold mb-4">
          <Lock className="w-4 h-4" />
          <span>UK GDPR &amp; ICO Data Protection Registered</span>
        </div>
        <h1 className="h2 text-ink">Privacy Notice &amp; Data Protection Policy</h1>
        <p className="mt-3 text-base text-muted max-w-3xl leading-relaxed">
          How HST Group Ltd collects, stores, and securely manages candidate and client information under the Data Protection Act 2018 and UK GDPR.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <aside className="lg:col-span-4">
          <div className="sticky top-28 p-5 rounded-2xl bg-surface border border-line space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-deep block">
              Policy Sections
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
              <p className="font-semibold text-ink">Data Protection Officer</p>
              <p className="mt-1">
                HST Group Ltd · ICO Registration: ZB610924
              </p>
              <p className="mt-1">
                <a href="mailto:privacy@hst-hiring.co.uk" className="text-accent-deep font-bold hover:underline">
                  privacy@hst-hiring.co.uk
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
        </main>
      </div>
    </div>
  );
}
