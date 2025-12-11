'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [role, setRole] = useState<'user' | 'creator'>('user');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    const data: any = {
      name: formData.get('name'),
      email: email,
      role,
      creatorData: role === 'creator' ? {
        socialLink: formData.get('socialLink'),
        niche: formData.get('niche'),
        audienceSize: formData.get('audienceSize'),
        proof: formData.get('proof'),
      } : undefined
    };

    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    // Handle BLOCKED (403)
    if (res.status === 403) {
        setLoading(false);
        router.push('/access-denied');
        return;
    }

    const result = await res.json();
    setLoading(false);

    if (res.ok) {
      localStorage.setItem('stacq_user_email', email);

      // Handle REJECTED status specifically
      if (result.status === 'rejected') {
        // Redirect to the status page which handles the "Rejected" view
        router.push('/status/pending'); 
        // OR create a specific /status/rejected page if you prefer
      } 
      else if (result.status === 'pending') {
        router.push('/status/pending');
      } 
      else {
        router.push('/success');
      }
    } else {
      alert(result.error);
    }
  };

  return (
    // ... (Your existing JSX form code remains exactly the same)
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-primary/20 max-w-md mx-auto">
      {/* Role Toggle */}
      <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
        <button
          type="button"
          onClick={() => setRole('user')}
          className={`flex-1 py-2 rounded-md font-semibold text-sm transition-all ${
            role === 'user' ? 'bg-white text-primary shadow-sm' : 'text-gray-500'
          }`}
        >
          I'm a User
        </button>
        <button
          type="button"
          onClick={() => setRole('creator')}
          className={`flex-1 py-2 rounded-md font-semibold text-sm transition-all ${
            role === 'creator' ? 'bg-white text-primary shadow-sm' : 'text-gray-500'
          }`}
        >
          I'm a Creator
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" required placeholder="Full Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input name="email" type="email" required placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />

        {role === 'creator' && (
          <div className="space-y-4 pt-2 border-t border-gray-100 animate-fade-in">
            <p className="text-xs font-bold text-primary uppercase tracking-wider">Creator Application</p>
            <input name="niche" required placeholder="Primary Niche (e.g. Tech)" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
            <input name="socialLink" required placeholder="Social Profile (Twitter/LinkedIn)" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
            <select name="audienceSize" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <option value="<1k">&lt; 1k Followers</option>
              <option value="1k-10k">1k - 10k Followers</option>
              <option value="10k+">10k+ Followers</option>
            </select>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Proof of Work / Sample Content</label>
              <textarea name="proof" required placeholder="Paste a link to your best content or stack..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg h-24" />
            </div>
          </div>
        )}

        <button 
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/30"
        >
          {loading ? 'Processing...' : (role === 'creator' ? 'Submit for Review' : 'Join Waitlist')}
        </button>
      </form>
    </div>
  );
}