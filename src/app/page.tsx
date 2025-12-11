'use client';
import SignupForm from '../components/SignupForm';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-bg text-dark">
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
          Coming Soon
        </span>
        <h1 className="text-5xl font-bold mb-6 tracking-tight text-dark">
          Human-curated knowledge <br className="hidden md:block" /> is coming.
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Stacq is where the best resources are organized by real people, not algorithms. 
          Join the waitlist to reserve your username and get early access.
        </p>

        {/* FIX: Removed the duplicate "User/Creator" buttons here.
           The SignupForm handles the toggle now.
        */}

        {/* Signup Component */}
        <SignupForm />
      </section>

      {/* Features Grid */}
      <section className="bg-white py-20 border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-12 h-12 bg-bg rounded-xl mb-4 flex items-center justify-center text-2xl border border-primary/20">🎯</div>
            <h3 className="text-xl font-bold mb-2">Curated Collections</h3>
            <p className="text-gray-600">No more endless searching. Find boards built by experts.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-bg rounded-xl mb-4 flex items-center justify-center text-2xl border border-primary/20">🧠</div>
            <h3 className="text-xl font-bold mb-2">Knowledge, Not Noise</h3>
            <p className="text-gray-600">A feed designed for learning and utility.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-bg rounded-xl mb-4 flex items-center justify-center text-2xl border border-primary/20">🚀</div>
            <h3 className="text-xl font-bold mb-2">Creator Economy</h3>
            <p className="text-gray-600">Monetize your taste and expertise directly.</p>
          </div>
        </div>
      </section>
    </main>
  );
}