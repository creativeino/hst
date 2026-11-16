import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgressBar, FloatingBackToTop } from "@/components/ScrollEnhancements";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
 display: "swap",
});

const archivo = Archivo({
 subsets: ["latin"],
 weight: ["400", "500", "600", "700", "800"],
 variable: "--font-archivo",
 display: "swap",
});

export const metadata: Metadata = {
 title: "HST Hiring | Fixed Fee Recruitment & Talent Search UK",
 description:
 "Recruitment, fixed. One flat transparent fee agreed upfront before the search starts. UK legal, SaaS and professional hiring without the traditional 20-30% agency commission.",
 icons: {
 icon: "/images/HST-Logomark.png",
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
 <body className="min-h-screen flex flex-col bg-paper text-ink">
 <noscript>
 <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
 </noscript>
 <SmoothScrollProvider>
 <Navbar />
 <ScrollProgressBar />
 <main className="flex-grow">{children}</main>
 <FloatingBackToTop />
 <Footer />
 </SmoothScrollProvider>
 </body>
 </html>
 );
}
