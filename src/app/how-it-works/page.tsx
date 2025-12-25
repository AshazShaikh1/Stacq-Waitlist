'use client';
import Link from 'next/link';
import { useState } from 'react';
import SignupForm from '../../components/SignupForm';
import Modal from '../../components/Modal';

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-bg text-dark font-sans selection:bg-primary/20 pb-20 overflow-hidden">
      
      {/* 1. PAGE HEADER */}
      <header className="relative px-6 pt-32 pb-24 text-center max-w-4xl mx-auto animate-fade-in-up">
        {/* Decorative background blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-dark leading-[1.1]">
          How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#1ED760]">Stacq</span> Works
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
          A simple way to save, organize, and discover useful resources — <span className="text-dark font-medium">curated by humans</span>.
        </p>
      </header>

      {/* 2. BIG IDEA SECTION */}
      <section className="px-6 mb-32 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12 text-dark">Built around two simple ideas</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Cards Card */}
          <div className="group bg-white p-10 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🃏</div>
            <h3 className="text-2xl font-bold mb-3 text-dark">Cards</h3>
            <p className="text-gray-500 font-medium">Individual resources like articles, videos, or tools.</p>
          </div>
          
          {/* Collections Card */}
          <div className="group bg-white p-10 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-green-400"></div>
            <div className="w-24 h-24 bg-green-50 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-2xl font-bold mb-3 text-dark">Collections</h3>
            <p className="text-gray-500 font-medium">Curated paths that group Cards into a logical order.</p>
          </div>
        </div>
      </section>

      {/* 3. CARDS SECTION */}
      <section className="px-6 py-24 bg-white relative">
        <div className="absolute inset-0 bg-gray-50/50 skew-y-3 transform origin-top-left -z-10 h-full w-full"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cards</h2>
            <p className="text-gray-500 text-xl">The building blocks of knowledge.</p>
          </div>

          {/* Visual Grid of Card Examples */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {/* Article Card */}
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow transform hover:-rotate-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-xs">A</div>
                    <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                </div>
                <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-100 rounded mb-6"></div>
                <div className="flex justify-between items-center mt-auto">
                     <div className="text-xs text-gray-300 font-bold">ARTICLE</div>
                     <div className="h-6 w-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold">Read</div>
                </div>
             </div>
             
             {/* YouTube Card */}
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow transform md:-translate-y-4 z-10">
                <div className="aspect-video w-full bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm pl-1">▶</div>
                    </div>
                </div>
                <div className="h-4 w-3/4 bg-gray-100 rounded mb-2"></div>
                <div className="flex justify-between items-center mt-4">
                     <div className="text-xs text-gray-300 font-bold">VIDEO</div>
                     <div className="h-6 w-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-[10px] font-bold">Watch</div>
                </div>
             </div>
             
             {/* GitHub Card */}
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow transform hover:rotate-1">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">G</div>
                    <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                </div>
                <div className="border border-gray-100 rounded-lg p-3 bg-gray-50 mb-4">
                    <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                </div>
                <div className="flex justify-between items-center mt-auto">
                     <div className="text-xs text-gray-300 font-bold">REPO</div>
                     <div className="h-6 w-16 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-[10px] font-bold">Code</div>
                </div>
             </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {['Save', 'Upvote', 'Share', 'Discuss'].map((action) => (
                <div key={action} className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                    {action}
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COLLECTIONS SECTION */}
      <section className="px-6 py-32 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-6 text-dark">Collections</h2>
                <p className="text-gray-500 text-xl mb-8 leading-relaxed">
                    Stop opening 50 tabs. Collections group cards into a clear, linear path for learning or research.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="bg-primary/10 px-4 py-2 rounded-full text-primary font-bold text-sm">Human-organized</span>
                    <span className="bg-primary/10 px-4 py-2 rounded-full text-primary font-bold text-sm">Intentionally ordered</span>
                    <span className="bg-primary/10 px-4 py-2 rounded-full text-primary font-bold text-sm">Topic-focused</span>
                </div>
            </div>

            <div className="flex-1 relative h-80 w-full flex items-center justify-center">
                 {/* Visual Stack Animation */}
                 <div className="absolute top-0 w-72 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm z-10 transform -translate-y-8 scale-90 opacity-40"></div>
                 <div className="absolute top-4 w-72 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm z-20 transform -translate-y-4 scale-95 opacity-70"></div>
                 <div className="absolute top-8 w-72 bg-white p-8 rounded-2xl border-t-4 border-primary shadow-2xl z-30 flex flex-col gap-4 transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-1">
                        <h4 className="font-bold text-lg text-dark">Learn Next.js</h4>
                        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">12 Cards</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-colors">
                            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">1</span>
                            <span className="text-sm font-medium text-gray-600">Initial Setup</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-colors">
                            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">2</span>
                            <span className="text-sm font-medium text-gray-600">App Router</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-colors">
                            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">3</span>
                            <span className="text-sm font-medium text-gray-600">Server Components</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* 5. WHO CURATES SECTION */}
      <section className="px-6 py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-2">Who publishes on Stacq?</h2>
                <div className="inline-block bg-white px-4 py-1 rounded-full border border-gray-200 mt-4 shadow-sm">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">Stacqers</span>
                </div>
                <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
                    Stacqers are real people—developers, researchers, and learners—who publish public Cards and Collections.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-9xl text-primary leading-none -mt-4 -mr-4">S</div>
                    <h3 className="font-bold text-2xl mb-6 text-dark flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                        Stacqers
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="bg-primary/10 p-2 rounded-lg text-xl">✨</div>
                            <div>
                                <h4 className="font-bold text-dark">Publish Content</h4>
                                <p className="text-sm text-gray-500">Share your best resources.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-primary/10 p-2 rounded-lg text-xl">🧠</div>
                            <div>
                                <h4 className="font-bold text-dark">Curate Knowledge</h4>
                                <p className="text-sm text-gray-500">Organize chaos into paths.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-primary/10 p-2 rounded-lg text-xl">🏆</div>
                            <div>
                                <h4 className="font-bold text-dark">Build Authority</h4>
                                <p className="text-sm text-gray-500">Become a trusted source.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-9xl text-gray-400 leading-none -mt-4 -mr-4">E</div>
                    <h3 className="font-bold text-2xl mb-6 text-dark flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                        Everyone else
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 text-gray-600">
                             <div className="bg-gray-100 p-2 rounded-lg">👀</div>
                             <span className="font-medium">Browse public content</span>
                        </li>
                        <li className="flex items-center gap-4 text-gray-600">
                             <div className="bg-gray-100 p-2 rounded-lg">💾</div>
                             <span className="font-medium">Save for later</span>
                        </li>
                        <li className="flex items-center gap-4 text-gray-600">
                             <div className="bg-gray-100 p-2 rounded-lg">🔔</div>
                             <span className="font-medium">Follow curators</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
      </section>

      {/* 6. WHY STACQ EXISTS */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
         <h2 className="text-3xl font-bold mb-12 text-center">Why we built this</h2>
         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-bold mb-2">The SEO Problem</h3>
                <p className="text-sm text-gray-500">Search engines today reward SEO optimization over actual usefulness.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-4xl mb-4">📱</div>
                <div className="font-bold mb-2">The Attention Trap</div>
                <p className="text-sm text-gray-500">Social feeds reward clicks and outrage, not deep learning.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl text-center border border-primary/20">
                <div className="text-4xl mb-4">💡</div>
                <div className="font-bold mb-2 text-primary">The Stacq Solution</div>
                <p className="text-sm text-gray-600 font-medium">We reward human curation and genuine utility.</p>
            </div>
         </div>
      </section>

      {/* 7. WHAT STACQ IS / IS NOT */}
      <section className="px-6">
        <div className="bg-dark text-white rounded-[2.5rem] p-8 md:p-16 max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
             {/* Background accents */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>

             <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-[#1db954]">Stacq is</h3>
                    <ul className="space-y-6 text-xl font-medium">
                        <li className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                            <span className="text-[#1db954] text-2xl">✓</span> Human-curated
                        </li>
                        <li className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                            <span className="text-[#1db954] text-2xl">✓</span> Usefulness-driven
                        </li>
                        <li className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                            <span className="text-[#1db954] text-2xl">✓</span> Built for learning
                        </li>
                    </ul>
                </div>
                <div className="space-y-8 opacity-60">
                    <h3 className="text-3xl font-bold text-gray-400">Stacq is not</h3>
                    <ul className="space-y-6 text-xl font-medium">
                        <li className="flex gap-4 items-center p-4"><span>✕</span> A search engine</li>
                        <li className="flex gap-4 items-center p-4"><span>✕</span> A bookmark dump</li>
                        <li className="flex gap-4 items-center p-4"><span>✕</span> An ad-driven platform</li>
                    </ul>
                </div>
             </div>
        </div>
      </section>

      {/* 8. SOFT ENDING */}
      <section className="px-6 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark tracking-tight">Curated knowledge.<br/>Without the noise.</h2>
        <div className="flex justify-center gap-10 items-center font-bold">
            <Link href="/" className="text-gray-400 hover:text-dark transition-colors border-b border-transparent hover:border-dark pb-1">Return Home</Link>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all"
            >
                Join the waitlist
            </button>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SignupForm />
      </Modal>

    </main>
  );
}
