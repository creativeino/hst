"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  scale?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 28,
  direction = "up",
  duration = 0.8,
  scale = 1,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let x = 0;
    let y = 0;
    if (direction === "up") y = distance;
    else if (direction === "down") y = -distance;
    else if (direction === "left") x = distance;
    else if (direction === "right") x = -distance;

    const delaySec = delay > 10 ? delay / 1000 : delay;

    // Set initial GSAP state
    gsap.set(el, {
      opacity: 0,
      x,
      y,
      scale: scale !== 1 ? scale : 1,
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay: delaySec,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, distance, direction, duration, scale, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Stagger Container using GSAP Timeline / ScrollTrigger
export function StaggerContainer({
  children,
  className = "",
  staggerChildren = 0.1,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const items = container.querySelectorAll(".gsap-stagger-item");
    if (items.length === 0) return;

    gsap.set(items, { opacity: 0, y: 24 });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: delayChildren,
          stagger: staggerChildren,
          ease: "power3.out",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [staggerChildren, delayChildren]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Stagger Child Element
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return <div className={`gsap-stagger-item ${className}`}>{children}</div>;
}
