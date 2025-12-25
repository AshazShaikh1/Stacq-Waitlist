'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SignupForm from '../components/SignupForm';
import Modal from '../components/Modal';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-bg text-dark font-sans selection:bg-primary/20">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 py-24 md:py-32 text-center max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-dark leading-[1.1]">
          Find the best resources on the internet — <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#1ED760]">curated by real people.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Save and explore links, videos, tools, and guides that actually helped someone.
        </p>
        
        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary-hover cursor-pointer text-white text-lg font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1"
          >
            Join the waitlist
          </button>
          <span className="text-sm text-gray-400 font-medium">Early access only · No spam</span>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Finding good resources is broken.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🤖', text: 'SEO spam & ads' },
              { icon: '🎣', text: 'Clickbait content' },
              { icon: '📂', text: 'Endless bookmarks' },
              { icon: '♻️', text: 'Repetitive info' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <span className="text-3xl mb-3">{item.icon}</span>
                <span className="font-medium text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE DIFFERENCE SECTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stacq works differently.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Instead of ranking what’s popular or sponsored, Stacq shows resources real people actually used and found valuable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Human-curated', desc: 'Vetted by real builders and learners.' },
            { title: 'Usefulness-driven', desc: 'Ranked by utility, not just clicks.' },
            { title: 'Deep Work', desc: 'Built for learning, not doomscrolling.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SOCIAL PROOF */}
      <section className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 font-bold uppercase tracking-widest text-sm">
          <span>Built by developers</span>
          <span>•</span>
          <span>Curated by learners</span>
          <span>•</span>
          <span>Opening Soon</span>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 px-6 text-center bg-[#1db954]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-white">Get early access to Stacq</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto bg-white cursor-pointer hover:bg-gray-50 text-dark text-lg font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Join the waitlist
          </button>
          <p className="mt-6 text-white text-sm">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-500 text-sm bg-dark text-white">
        <div className="flex flex-col gap-4">
          <Image src="/logo.png" alt="Stacq Logo" width={40} height={40} className="mx-auto mb-2" />
          <span className="font-bold text-[#1db954] text-[35px] hidden">Stacq</span>
          <p>Human-curated knowledge.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/how-it-works" className="hover:text-primary transition-colors cursor-pointer">How it works</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
          </div>
          <p className="mt-8 text-xs text-gray-300">© {new Date().getFullYear()} Stacq. All rights reserved.</p>
        </div>
      </footer>

      {/* MODAL */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SignupForm />
      </Modal>

    </main>
  );
}