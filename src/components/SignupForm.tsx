'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    const data = {
      name: formData.get('name'),
      email: email,
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
      router.push('/success');
    } else {
      alert(result.error);
    }
  };

  return (
    // ... (Your existing JSX form code remains exactly the same)
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-primary/20 max-w-md mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-dark mb-2">Join the waitlist</h3>
        <p className="text-gray-500 text-sm">Enter your details to get early access.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" required placeholder="Full Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
        <input name="email" type="email" required placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />

        <button 
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/30"
        >
          {loading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
    </div>
  );
}