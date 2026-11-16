"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgressBar() {
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, {
 stiffness: 140,
 damping: 24,
 restDelta: 0.001,
 });

 return (
 <motion.div
 className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-deep to-accent origin-left z-[9999] pointer-events-none"
 style={{ scaleX }}
 />
 );
}

export function FloatingBackToTop() {
 const [visible, setVisible] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 setVisible(window.scrollY > 400);
 };
 window.addEventListener("scroll", handleScroll, { passive: true });
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const scrollToTop = () => {
 window.scrollTo({ top: 0, behavior: "smooth" });
 };

 return (
 <motion.button
 type="button"
 onClick={scrollToTop}
 aria-label="Scroll back to top"
 initial={{ opacity: 0, scale: 0.7, y: 20 }}
 animate={
 visible
 ? { opacity: 1, scale: 1, y: 0 }
 : { opacity: 0, scale: 0.7, y: 20, pointerEvents: "none" }
 }
 transition={{ duration: 0.25, ease: "easeOut" }}
 whileHover={{ scale: 1.1, y: -2 }}
 whileTap={{ scale: 0.95 }}
 className="fixed bottom-6 right-6 z-40 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-paper border border-line shadow-lg text-ink hover:text-accent-deep hover:bg-accent-soft hover:border-accent/40 transition-colors"
 >
 <ArrowUp className="w-5 h-5" />
 </motion.button>
 );
}
