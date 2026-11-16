import Link from "next/link";
import { MoveLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
 return (
 <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
 <div className="max-w-md w-full text-center space-y-6">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-soft border border-line text-accent-deep shadow-xs">
 <HelpCircle className="w-8 h-8" />
 </div>
 <div className="space-y-2">
 <span className="text-xs font-mono font-bold tracking-widest text-accent-deep uppercase">
 Error 404
 </span>
 <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
 Page Not Found
 </h1>
 <p className="text-sm sm:text-base text-ink-muted">
 The page you are looking for doesn't exist or has been relocated within the HST platform.
 </p>
 </div>
 <div>
 <Link
 href="/"
 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ink text-white hover:bg-ink/90 font-medium text-sm transition-all shadow-sm group"
 >
 <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
 Back to Home
 </Link>
 </div>
 </div>
 </div>
 );
}
