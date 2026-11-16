import Link from "next/link";

const sections = [
 {
 id: "fixed-fee",
 title: "1. Fixed fee agreement",
 body: "All search fees are agreed in writing before recruitment outreach begins. Fees are fixed and are not subject to variable salary-percentage recalculations upon final job offers. Pricing is agreed in writing after a scoping call.",
 },
 {
 id: "delivery",
 title: "2. Search delivery and exclusivity",
 body: "HST operates on an exclusive committed partnership basis to ensure exhaustive headhunting, bespoke candidate vetting, and dedicated senior consultant attention throughout the search. Exclusive commitment ensures the role is prioritized and filled promptly.",
 },
 {
 id: "replacement",
 title: "3. 8-Week replacement guarantee",
 body: "Every Fixed Fee placement includes an 8-week replacement guarantee. In the event that an introduced candidate leaves employment within that period through no fault of the client, HST will run a free replacement search in accordance with the signed engagement schedule.",
 },
 {
 id: "refund",
 title: "4. 14-Day cash refund commitment",
 body: "If HST does not place a suitable candidate within the agreed search period and we have not met our agreed service commitments, the client receives a full refund within 14 working days. No credit notes, no future hire obligations - your money back.",
 },
 {
 id: "confidentiality",
 title: "5. Confidentiality & NDAs",
 body: "Both parties agree to treat all business information, employer trade secrets, and candidate profiles as strictly confidential. No candidate details are ever circulated without express authorization.",
 },
 {
 id: "payments",
 title: "6. Fees and payment schedule",
 body: "Unless otherwise agreed in writing, fees are structured with clear milestones confirmed before work commences. Invoices are payable within the agreed terms stated in the Engagement Order.",
 },
 {
 id: "contact",
 title: "7. Company identification & contact",
 body: "HST Group Ltd. Registered office: Office 44, 3 Caxton Road, Fulwood, Preston, PR2 9ZZ. Email: hello@hst-hiring.co.uk. Phone: 01772 970609.",
 },
];

export default function TermsPage() {
 return (
 <div className="wrap py-14 sm:py-20">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
 <aside className="lg:col-span-4">
 <h1 className="h2">Terms of Business</h1>
 <p className="mt-5 text-[14px] text-ink/50">
 HST Hiring client agreement summary
 </p>
 <nav className="hidden lg:block mt-10 sticky top-28">
 <ul className="space-y-1.5">
 {sections.map((section) => (
 <li key={section.id}>
 <a
 href={`#${section.id}`}
 className="block px-3 py-1.5 rounded-lg text-[14px] text-muted hover:text-ink hover:bg-surface transition-colors"
 >
 {section.title}
 </a>
 </li>
 ))}
 </ul>
 </nav>
 </aside>

 <div className="lg:col-span-8 max-w-[68ch]">
 <p className="lead text-ink/70">
 The basis on which HST Hiring provides fixed-fee recruitment
 services.
 </p>

 <div className="mt-10 space-y-10">
 {sections.map((section) => (
 <section key={section.id} id={section.id} className="scroll-mt-28">
 <h2 className="font-serif text-[clamp(22px,2vw,28px)] leading-tight tracking-[-0.02em]">
 {section.title}
 </h2>
 <p className="mt-3 text-[16px] leading-relaxed text-ink/70">
 {section.body}
 </p>
 </section>
 ))}
 </div>

 <div className="mt-14 pt-8 border-t border-line">
 <p className="text-[15px] text-muted">
 Ready to discuss a search?{" "}
 <Link
 href="/contact"
 className="font-semibold text-accent-deep hover:text-ink underline underline-offset-4 decoration-accent transition-colors"
 >
 Book a free review
 </Link>
 .
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}
