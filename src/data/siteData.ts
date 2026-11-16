export interface TeamMember {
 name: string;
 role: string;
 bio: string;
 philosophy: string;
 image: string;
 linkedin?: string;
 tags: string[];
}

export interface Testimonial {
 quote: string;
 author: string;
 role: string;
 company: string;
 highlight: string;
 metric?: string;
}

export interface LiveJob {
 id: string;
 title: string;
 salary: string;
 location: string;
 firmType: string;
 discipline: string;
 summary: string;
 tags: string[];
}

export interface FaqItem {
 q: string;
 a: string;
 category?: "fixed-fee" | "talentflow" | "candidates";
}

export const TEAM_MEMBERS: TeamMember[] = [
 {
 name: "Ian Partington",
 role: "Founder & Director",
 bio: "Ian brings a broad commercial and recruitment background to HST, with a particular focus on challenging the traditional recruitment model. He is passionate about helping businesses rethink how they hire - from the economics of recruitment through to the way technology and process can improve outcomes. Ian is one of the driving forces behind HST's Fixed Fee and Recruitment as a Service models.",
 philosophy: "Recruitment should deliver measurable commercial value, not simply generate another agency invoice.",
 image: "/images/Ian-Partington.webp",
 tags: ["Strategy", "Fixed-Fee Economics", "Commercial Hiring", "RaaS Architecture"]
 },
 {
 name: "Sean McAuley",
 role: "Founder & Director",
 bio: "Sean has more than 10 years' recruitment experience extending well beyond traditional agency recruitment. Having worked across recruitment, technology, marketing and SaaS, he brings deep insight into both candidate and client perspectives. Sean is dedicated to elevating candidate care, delivering total discretion, and forging long-term advisory partnerships.",
 philosophy: "The best recruitment relationships are built on trust and commercial alignment, not transactional CV flipping.",
 image: "/images/Sean-McAuley.webp",
 tags: ["Executive Search", "Candidate Care", "Tech & SaaS", "Confidential Search"]
 },
 {
 name: "Millie Partington",
 role: "Recruitment Guru & Legal Specialist",
 bio: "Millie specialises in legal recruitment, helping law firms across the North of England and nationwide identify exceptional professionals across legal support, fee-earning, and corporate functions. She pairs deep sector fluency with an acute understanding of law firm cultures and the high stakes of critical hiring.",
 philosophy: "The details matter - and great recruitment starts with genuinely understanding team dynamics and firm culture.",
 image: "/images/Millie-Partington.webp",
 tags: ["Legal Recruitment", "Law Firm Dynamics", "Talent Sourcing", "Professional Services"]
 }
];

export const TESTIMONIALS: Testimonial[] = [
 {
 highlight: "They took time to understand what we required",
 quote: "We used HST for assistance with a role. They were fantastic in taking the time to understand what we required. Their approach really made the process as easy as possible and we found a great new team member from it. Thank you. If we need an agency again in the future you will be at the top of the list.",
 author: "Director",
 role: "Practice Director",
 company: "Greater Manchester Accountancy Practice",
 metric: "1st Choice Hiring Partner"
 },
 {
 highlight: "Significant improvement in both efficiency and outcomes",
 quote: "Working with HST Hiring has completely transformed our recruitment process. Previously, we were juggling multiple agency relationships and struggling with inconsistent candidate quality and availability. Since partnering exclusively with HST, we've seen a significant improvement in both efficiency and outcomes.",
 author: "Practice Director",
 role: "Practice Director",
 company: "60-Staff Law Practice, Manchester",
 metric: "Exclusive Partner"
 },
 {
 highlight: "Hiring was proving expensive for us",
 quote: "As a growing Family specialist solicitors, hiring new staff is central to our growth plans. Hiring through the traditional agency model was proving expensive for us as fees were high, creating intense pressure to make hires work and leading to mistakes. We tried hiring ourselves to save costs but struggled to keep on top of things. When presented with the HST Fixed Fee solution, we had a hiring partner that reduced costs, worked exclusively for us and managed the whole process end-to-end. It's been a great decision.",
 author: "Operations Director",
 role: "Ops Director",
 company: "Family Specific Law Firm, London",
 metric: "Massive Cost Savings"
 },
 {
 highlight: "Always a First Class Service",
 quote: "I have successfully hired several excellent employees through their Fixed Fee service and would not hesitate in recommending them to any firm looking for transparency and genuine candidate calibre.",
 author: "HR Manager",
 role: "Head of People",
 company: "135-Staff Law Firm, South West",
 metric: "Multiple Successful Hires"
 }
];

export const STATS = [
 {
 value: "20-30%",
 label: "Traditional Agency Fee",
 desc: "Charged by old-school recruiters of candidate first-year salary"
 },
 {
 value: "From £1,495",
 label: "HST Fixed Fee Model",
 desc: "Typically ~6% effective rate, agreed upfront in writing"
 },
 {
 value: "92%",
 label: "UK Legal Skills Shortages",
 desc: "Of UK legal employers report acute shortages in qualified talent"
 },
 {
 value: "47%",
 label: "Counter-Offer Risk Factor",
 desc: "Of professional hires where counter-offers risk derailment without proactive onboarding"
 },
 {
 value: "11-200",
 label: "Client Firm Size",
 desc: "Staff headcount range of law firms & businesses partnering with HST"
 }
];

export const WORKFLOW_STEPS = [
 {
 step: "01",
 title: "Discovery & Scoping Call",
 description: "Role, seniority, culture fit, and a realistic salary benchmark - concise, commercial, and focused in under an hour.",
 icon: "Headphones"
 },
 {
 step: "02",
 title: "Fixed Fee Agreed Upfront",
 description: "One flat fee confirmed in writing before the search starts. No hidden extras, no salary percentage surprises.",
 icon: "FileCheck2"
 },
 {
 step: "03",
 title: "Targeted Search & Shortlisting",
 description: "Active headhunting and sector network sourcing - engaging genuinely qualified, passive talent who actually want the role.",
 icon: "UserSearch"
 },
 {
 step: "04",
 title: "Offer & Onboarding Support",
 description: "We manage offer negotiations, proactively neutralize counter-offer risk, and support the candidate right through to their start date.",
 icon: "ShieldCheck"
 }
];

export const CORE_BENEFITS = [
 {
 title: "Outsourced Recruitment",
 description: "A complete search run end-to-end as an organic extension of your team - sourcing, screening, and shortlisting handled to your schedule.",
 badge: "End-to-End Search"
 },
 {
 title: "Proactive Headhunting",
 description: "Direct targeted approaches to exceptional passive candidates through deep network outreach, not just whoever applied on a job board.",
 badge: "Direct Sourcing"
 },
 {
 title: "Dedicated Single Contact",
 description: "One dedicated senior partner throughout the search - from the scoping call to the candidate's first day. No re-explaining your firm.",
 badge: "Dedicated Partner"
 },
 {
 title: "Total Transparency",
 description: "Complete visibility of search progress through regular reporting, with every fee confirmed in writing from day one.",
 badge: "Clear Visibility"
 }
];

export const SECTORS = [
 "Legal & compliance",
 "SaaS & technology",
 "Professional services",
 "Finance & accountancy",
 "Marketing & growth",
 "Operations",
 "HR & people",
 "Executive leadership",
 "Customer success",
 "Data & analytics",
 "Engineering",
 "Corporate functions",
];

export const LIVE_JOBS: LiveJob[] = [
 {
 id: "job-1",
 title: "Commercial Property Solicitor",
 salary: "£80,000",
 location: "London",
 firmType: "Legal 500 Firm",
 discipline: "Real Estate & Commercial Property",
 summary: "Senior fee-earner opportunity managing complex commercial acquisitions, landlord/tenant matters, and portfolio refinancing.",
 tags: ["Commercial Property", "Legal 500", "London"]
 },
 {
 id: "job-2",
 title: "Agricultural Solicitor",
 salary: "£60,000+",
 location: "Somerset",
 firmType: "Legal 500 Firm",
 discipline: "Rural & Agricultural Law",
 summary: "Specialist agricultural role handling landed estate conveyancing, farm tenancy restructuring, and rural land development.",
 tags: ["Agricultural Law", "Estates", "Somerset"]
 },
 {
 id: "job-3",
 title: "Head of Conveyancing",
 salary: "£75,000",
 location: "Stockport / Greater Manchester",
 firmType: "Regional Firm",
 discipline: "Residential Property Leadership",
 summary: "Leadership role steering an established department of 12 specialists, managing high-volume quality caseloads and compliance.",
 tags: ["Leadership", "Conveyancing", "North West"]
 },
 {
 id: "job-4",
 title: "Private Client Senior Associate",
 salary: "£80,000",
 location: "South London",
 firmType: "High Street & Boutique Practice",
 discipline: "Wills, Trusts & Probate",
 summary: "Advising HNW individuals on succession planning, inheritance tax structuring, probate disputes, and complex trust administration.",
 tags: ["Private Client", "HNW", "Trusts"]
 }
];

export const FAQS: FaqItem[] = [
 {
 q: "How do we get started with Fixed Fee hiring?",
 a: "Get in touch with our team and we will discuss your requirements before sending a written proposal, including the fixed fee, guarantee terms, and an estimated timeline - usually within 24 hours.",
 category: "fixed-fee"
 },
 {
 q: "What sectors and roles do you cover?",
 a: "We specialise in legal recruitment and adjacent professional services - including accountancy, finance, HR, technology, and SME operations - from fee-earners and practice support through to director and partner hires.",
 category: "fixed-fee"
 },
 {
 q: "Is Fixed Fee hiring suitable for one-off or urgent roles?",
 a: "Yes - it is built for exactly that. If you are hiring a single vacancy, or hiring occasionally rather than continuously, Fixed Fee gives you agency-level search without committing to a retained or ongoing subscription. For multiple recurring hires, our Talentflow service is usually the better fit.",
 category: "fixed-fee"
 },
 {
 q: "How long does the process typically take?",
 a: "Most Fixed Fee searches produce a first vetted shortlist within 5 business days of the role being confirmed, with an average time-to-offer ranging from 6 to 12 weeks depending on role seniority and niche requirements.",
 category: "fixed-fee"
 },
 {
 q: "Is there a guarantee if the hire doesn't work out?",
 a: "Yes. Every Fixed Fee placement comes with an 8-week replacement guarantee. If the candidate leaves or is let go within that window through no fault of the client, we run a free replacement search - full details are set out in our Terms of Business.",
 category: "fixed-fee"
 },
 {
 q: "What is included in the fixed fee?",
 a: "The fee covers the complete search-to-offer process: role scoping, market mapping, proactive candidate sourcing, screening, shortlist delivery, interview coordination, offer management, and post-placement check-ins. You receive a single senior point of contact throughout.",
 category: "fixed-fee"
 },
 {
 q: "What happens if we don't end up hiring anyone?",
 a: "If we do not place a suitable candidate within the agreed search period and we have not met our own service commitments, you receive a full refund within 14 working days. Not a credit note, not a future discount - your money back.",
 category: "fixed-fee"
 },
 {
 q: "Do we pay the fee upfront?",
 a: "Yes. Because we operate as an exclusive partner rather than a contingency agency, we commit our time and resources to working dedicatedly on your vacancy. Rather than racing multiple agencies to throw CVs at a wall, we run a tailored search with proactive outreach and video screening. The upfront structure allows us to offer this service at a much lower overall cost (typically ~6% vs. 20-30%).",
 category: "fixed-fee"
 },
 {
 q: "How does Recruitment-as-a-Service (Talentflow) work?",
 a: "Talentflow runs on a predictable monthly fee (starting from £950/mo) based on your hiring volume. You get embedded talent acquisition across all live roles, continuous pipelining, and proactive sourcing without paying large per-hire invoices.",
 category: "talentflow"
 },
 {
 q: "Is there a minimum contract length for Talentflow?",
 a: "Yes, Talentflow agreements typically run on a 3-month initial term followed by a 1-month notice period, providing stability for both sides while eliminating indefinite lock-in.",
 category: "talentflow"
 },
 {
 q: "As a candidate, is my inquiry completely confidential?",
 a: "100% confidential. We never share your CV, name, or current employer with any firm without your explicit permission. You can have an exploratory chat with Sean or Millie with zero sales pressure.",
 category: "candidates"
 },
 {
 q: "Do you offer free CV evaluations for candidates?",
 a: "Yes! Our CV review is completely free, providing objective feedback on clarity, achievement framing, and how well your profile aligns with target roles.",
 category: "candidates"
 }
];

export const CANDIDATE_STEPS = [
 {
 step: "01",
 title: "We get to know you",
 description: "Tell us where you are now, where you'd like to go, and what you want to avoid. You don't need to be actively job hunting - an honest market benchmark is invaluable."
 },
 {
 step: "02",
 title: "We identify genuine opportunities",
 description: "When a role surfaces that truly matches your ambitions and culture requirements, we reach out. No spam, no irrelevant alerts."
 },
 {
 step: "03",
 title: "We make the introduction",
 description: "If you want to explore the role, we introduce you directly to partners and decision-makers, giving you the insider context you need."
 },
 {
 step: "04",
 title: "We stay involved & protect your move",
 description: "From interviews to final contract offer, notice period guidance, and counter-offer protection, we ensure the move is smooth and successful."
 }
];

export const COMPARISON_DATA = [
 {
 metric: "Fee Structure",
 traditional: "20-30% of 1st-year salary (fees rise with pay)",
 hst: "One flat fee agreed upfront (~6% effective rate, from £1,495)"
 },
 {
 metric: "Incentive Alignment",
 traditional: "Incentivized to push salary up to boost invoice",
 hst: "Objective commercial advice focused purely on the best hire"
 },
 {
 metric: "Relationship",
 traditional: "Racing multiple agencies on the same brief",
 hst: "One dedicated partner, exclusively engaged on your search"
 },
 {
 metric: "Candidate Quality",
 traditional: "Volume-driven, rush to send the first available CV",
 hst: "Full bespoke search & proactive headhunting of passive talent"
 },
 {
 metric: "Cost Certainty",
 traditional: "Invoice size unknown until offer stage",
 hst: "Cost confirmed in writing before the search begins"
 },
 {
 metric: "Continuity",
 traditional: "Fresh agency briefing and junior account handoffs every vacancy",
 hst: "One senior point of contact who deeply knows your firm"
 },
 {
 metric: "Protection",
 traditional: "Rarely any real rebate if a hire doesn't work out",
 hst: "8-week replacement guarantee & 14-day refund protection"
 }
];

export const COMPANY_CONTACT = {
 address: "Office 44, 3 Caxton Road, Fulwood, Preston, PR2 9ZZ",
 email: "hello@hst-hiring.co.uk",
 phone: "01772 970609",
 companyName: "HST Group Ltd",
 companyNumber: "Registered in England & Wales"
};
