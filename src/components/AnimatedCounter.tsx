"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
 value: number;
 prefix?: string;
 suffix?: string;
 duration?: number;
 decimals?: number;
 className?: string;
}

export default function AnimatedCounter({
 value,
 prefix = "",
 suffix = "",
 duration = 2,
 decimals = 0,
 className = "",
}: AnimatedCounterProps) {
 const ref = useRef<HTMLSpanElement>(null);
 const isInView = useInView(ref, { once: true, margin: "-50px" });

 const motionValue = useMotionValue(0);
 const springValue = useSpring(motionValue, {
 duration: duration * 1000,
 bounce: 0,
 });

 const [displayValue, setDisplayValue] = useState<string>("0");

 useEffect(() => {
 if (isInView) {
 motionValue.set(value);
 }
 }, [isInView, motionValue, value]);

 useEffect(() => {
 const unsubscribe = springValue.on("change", (latest) => {
 if (decimals > 0) {
 setDisplayValue(latest.toFixed(decimals));
 } else {
 setDisplayValue(Math.floor(latest).toLocaleString("en-GB"));
 }
 });

 return () => unsubscribe();
 }, [springValue, decimals]);

 return (
 <span ref={ref} className={className}>
 {prefix}
 {displayValue}
 {suffix}
 </span>
 );
}
