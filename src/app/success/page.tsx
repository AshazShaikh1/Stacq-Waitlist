'use client';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-primary/20 max-w-lg animate-fade-in">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
          🎉
        </div>
        
        <h1 className="text-3xl font-bold text-dark mb-4">You're on the list!</h1>
        <p className="text-gray-600 mb-8 text-lg">
          We have reserved your spot. We are rolling out access gradually to ensure the best experience.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-8">
          <p className="text-sm text-gray-500">
            Keep an eye on your inbox for your invite link.
          </p>
        </div>

        <Link 
          href="/" 
          className="text-primary font-bold hover:underline text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}