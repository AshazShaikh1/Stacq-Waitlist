'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-center font-sans selection:bg-primary/20">
      
      {/* Container */}
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-primary/10 max-w-lg w-full animate-fade-in-up">
        
        {/* 1. SUCCESS HEADER */}
        <div className="mb-8 flex flex-col items-center">
            <Image 
              src="/logo.png" 
              alt="Stacq Logo" 
              width={80} 
              height={80} 
              className="mb-6 rounded-2xl shadow-lg shadow-[#1db954]/20"
            />
          <h1 className="text-3xl font-bold text-dark mb-2">You’re on the Stacq waitlist</h1>
          <p className="text-gray-500 text-lg">Early access will roll out soon.</p>
        </div>

        {/* 2. WHAT HAPPENS NEXT */}
        <div className="text-left bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
            <h3 className="font-bold text-dark mb-4 text-sm uppercase tracking-wide">What happens next?</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-[#1db954] font-bold mt-0.5">1.</span>
                    <span>You’re added to the waitlist</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-[#1db954] font-bold mt-0.5">2.</span>
                    <span>We’ll email you when access opens</span>
                </li>
            </ul>
        </div>

        {/* 4. SECONDARY ACTIONS */}
        <div className="flex flex-col gap-3 text-sm font-medium">
            <Link href="/how-it-works" className="text-gray-400 hover:text-primary transition-colors">
                See how Stacq works
            </Link>
            <Link href="/" className="text-gray-400 hover:text-dark transition-colors">
                Return to home
            </Link>
        </div>

      </div>

      {/* 5. TRUST FOOTNOTE */}
      <p className="mt-8 text-xs text-gray-400 font-medium">
        Stacq is human-curated and usefulness-driven.
      </p>

    </div>
  );
}