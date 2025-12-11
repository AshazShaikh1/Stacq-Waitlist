'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PendingPage() {
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    const email = localStorage.getItem('stacq_user_email');
    if (!email) return;

    const checkStatus = async () => {
      try {
        const res = await fetch(`/api/user/status?email=${encodeURIComponent(email)}`);
        if (res.ok) {
          const data = await res.json();
          setStatus(data.status);
        }
      } catch (e) {
        console.error("Polling error", e);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  // VIEW: REJECTED
  if (status === 'rejected') {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-red-200 max-w-lg animate-fade-in">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
            ✕
          </div>
          
          <h1 className="text-3xl font-bold text-dark mb-4">Application Rejected</h1>
          <p className="text-gray-600 mb-6 text-lg">
            Your creator application is rejected.
          </p>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8 text-sm text-red-800">
             You have been added to the general waitlist as a User instead.
          </div>

          <Link href="/" className="text-gray-400 hover:text-dark text-sm transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // VIEW: APPROVED
  if (status === 'approved') {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-primary/20 max-w-lg animate-fade-in">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
            🚀
          </div>
          <h1 className="text-3xl font-bold text-dark mb-4">You're In!</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Your creator account has been approved. Welcome to Stacq!
          </p>
          <a 
            href="https://stacq.app/login"
            className="block w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary/30"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  // VIEW: PENDING
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-yellow-200 max-w-lg animate-fade-in">
        <div className="w-20 h-20 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto animate-pulse">
          ⏳
        </div>
        
        <h1 className="text-3xl font-bold text-dark mb-4">Application Received</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Your creator application is currently <strong>under review</strong>.
        </p>
        
        <div className="text-left bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-primary mt-1">✓</span>
            <span className="text-sm text-gray-600">Profile details submitted</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary mt-1">✓</span>
            <span className="text-sm text-gray-600">Proof of work received</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 mt-1">●</span>
            <span className="text-sm text-gray-600 font-medium">Waiting for admin approval</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          This page will update automatically when your status changes.
        </p>
      </div>
    </div>
  );
}