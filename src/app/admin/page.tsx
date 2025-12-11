'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [key, setKey] = useState('');
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/list', { headers: { 'x-admin-key': key } });
      
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users);
        setAuthed(true);
      } else {
        alert('Invalid Admin Key');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (userId: string, action: 'approve' | 'reject' | 'block' | 'unblock') => {
    if(!confirm(`Are you sure you want to ${action} this user?`)) return;

    const res = await fetch('/api/admin/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
        body: JSON.stringify({ userId, action })
    });
    
    if (res.ok) {
      fetchUsers(); 
    } else {
      alert('Action failed');
    }
  };

  if (!authed) return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <form onSubmit={fetchUsers} className="bg-white p-8 rounded-xl shadow-lg border border-primary/20">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Access</h2>
        <input 
          type="password"
          placeholder="Enter Admin Key" 
          value={key}
          onChange={e => setKey(e.target.value)} 
          className="border p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-primary outline-none" 
          autoFocus
        />
        <button 
          type="submit"
          disabled={loading} 
          className="bg-primary hover:bg-primary-hover text-white p-3 rounded-lg w-full font-bold transition-colors"
        >
          {loading ? 'Verifying...' : 'Login'}
        </button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-bg p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-dark">Admin Dashboard</h1>
          <button onClick={() => window.location.reload()} className="text-sm text-red-500">Logout</button>
        </header>
        
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase font-bold border-b">
              <tr>
                <th className="p-4 w-1/4">User</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4 w-1/4">Creator Proof</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((u) => {
                const proofLink = u.creator_applications?.[0]?.proof_content || u.creator_applications?.proof_content;
                return (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="p-4">
                        <div className="font-bold text-dark">{u.name}</div>
                        <div className="text-gray-500 text-xs">{u.email}</div>
                    </td>
                    <td className="p-4"><span className="bg-gray-100 px-2 py-1 rounded text-xs uppercase font-semibold">{u.role}</span></td>
                    <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs uppercase font-bold ${
                            u.status === 'approved' ? 'text-primary bg-primary/10' : 
                            u.status === 'pending' ? 'text-yellow-600 bg-yellow-100' : 
                            u.status === 'blocked' ? 'text-black bg-gray-200' :
                            'text-red-600 bg-red-100'
                        }`}>
                            {u.status}
                        </span>
                    </td>
                    <td className="p-4">
                        {proofLink ? (
                            <a href={proofLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium flex items-center gap-1">
                              Link ↗
                            </a>
                        ) : <span className="text-gray-300 text-xs">-</span>}
                    </td>
                    <td className="p-4 text-right space-x-2">
                        {/* UNBLOCK BUTTON */}
                        {u.status === 'blocked' ? (
                           <button onClick={() => handleAction(u.id, 'unblock')} className="text-dark hover:bg-gray-200 border border-gray-300 px-3 py-1 rounded font-medium transition-colors">
                             Unblock
                           </button>
                        ) : (
                          <>
                            {u.role === 'creator' && u.status === 'pending' && (
                                <>
                                    <button onClick={() => handleAction(u.id, 'approve')} className="text-primary hover:bg-primary/10 px-3 py-1 rounded font-medium transition-colors">Accept</button>
                                    <button onClick={() => handleAction(u.id, 'reject')} className="text-red-500 hover:bg-red-50 px-3 py-1 rounded font-medium transition-colors">Reject</button>
                                </>
                            )}
                            {/* Block button for non-blocked users */}
                            <button onClick={() => handleAction(u.id, 'block')} className="text-gray-400 hover:text-red-600 text-xs transition-colors">Block</button>
                          </>
                        )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}