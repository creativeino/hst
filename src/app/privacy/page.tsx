import Link from "next/link";

const sections = [
 {
 id: "introduction",
 title: "1. Introduction",
 body: "HST Group Ltd (“HST”, “we”, “our”, or “us”) is committed to protecting and respecting your privacy. This policy sets out the basis on which personal data collected via our website (hst-hiring.co.uk) or through candidate and client engagements is processed under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.",
 },
 {
 id: "information-we-collect",
 title: "2. Information we collect",
 body: "We may collect and process information regarding candidates and client representatives, including names, contact details (email, phone, address), curriculum vitae (CVs), qualifications, employment histories, salary requirements, and professional references.",
 },
 {
 id: "candidate-data",
 title: "3. Discretion & candidate privacy",
 body: "Candidate information is processed exclusively for confidential recruitment search and placement advisory. We strictly enforce a non-disclosure standard: we never disclose your identity, current employer, or CV to prospective firms without your prior knowledge and permission.",
 },
 {
 id: "retention",
 title: "4. Data retention and security",
 body: "We implement robust technical and organisational security controls to protect your personal data from unauthorised access, alteration or disclosure, and retain it only as long as necessary for legitimate recruitment and legal compliance purposes.",
 },
 {
 id: "your-rights",
 title: "5. Your rights under UK GDPR",
 body: "You have the right to request access to, rectification of, or erasure of your personal data, as well as the right to restrict or object to processing. To exercise these statutory rights, please contact our data officer.",
 },
 {
 id: "contact",
 title: "6. Data controller contact",
 body: "HST Group Ltd, Office 44, 3 Caxton Road, Fulwood, Preston, PR2 9ZZ. Email: hello@hst-hiring.co.uk. Phone: 01772 970609.",
 },
];

export default function PrivacyPage() {
 return (
 <div className="wrap py-14 sm:py-20">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
 <aside className="lg:col-span-4">
 <h1 className="h2">Privacy Policy</h1>
 <p className="mt-5 text-[14px] text-ink/50">
 Last updated: November 2026
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
 How HST Hiring collects, uses and protects personal information.
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
 Questions about this policy?{" "}
 <Link
 href="/contact"
 className="font-semibold text-accent-deep hover:text-ink underline underline-offset-4 decoration-accent transition-colors"
 >
 Contact our team
 </Link>
 .
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}
