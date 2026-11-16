"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
 error,
 reset,
}: {
 error: Error & { digest?: string };
 reset: () => void;
}) {
 useEffect(() => {
 console.error("Next.js App Router error:", error);
 }, [error]);

 return (
 <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
 <div className="max-w-md w-full text-center space-y-6">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 shadow-xs">
 <AlertTriangle className="w-8 h-8" />
 </div>
 <div className="space-y-2">
 <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
 Application Error
 </span>
 <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
 Something Went Wrong
 </h1>
 <p className="text-sm sm:text-base text-ink-muted">
 An unexpected error occurred while rendering this page. You can try refreshing the component or return home.
 </p>
 </div>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
 <button
 onClick={() => reset()}
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-white hover:bg-ink/90 font-medium text-sm transition-all shadow-sm"
 >
 <RotateCcw className="w-4 h-4" />
 Try Again
 </button>
 <Link
 href="/"
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-line bg-surface hover:bg-surface-soft text-ink font-medium text-sm transition-all shadow-xs"
 >
 <Home className="w-4 h-4" />
 Back to Home
 </Link>
 </div>
 </div>
 </div>
 );
}
