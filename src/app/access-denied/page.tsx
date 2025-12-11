'use client';
import Link from 'next/link';

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-red-200 max-w-lg animate-fade-in">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
          🚫
        </div>
        
        <h1 className="text-3xl font-bold text-dark mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Your account has been flagged and blocked by our administrators. You cannot join the waitlist at this time.
        </p>

        <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-8 text-sm text-red-800">
          If you believe this is a mistake, please contact support.
        </div>

        <Link 
          href="/" 
          className="text-gray-400 hover:text-dark text-sm transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}