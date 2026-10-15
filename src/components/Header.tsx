import React from 'react';

interface HeaderProps {
  clientName: string;
  clientId: string;
  activeRole: string;
  onRoleChange: (role: string) => void;
}

export default function Header({ clientName, clientId, activeRole, onRoleChange }: HeaderProps) {
  const roles = ['Preparer', 'Reviewer', 'Partner', 'Client', 'Firm Admin', 'IRS Examiner'];

  return (
    <header className="bg-slate-900 text-white shadow-md border-b border-slate-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-xs font-semibold px-2.5 py-1 rounded uppercase tracking-wider">Tax Year 2025</span>
          <span className="text-slate-400 text-sm">Client ID: {clientId}</span>
        </div>
        <h1 className="text-xl font-bold mt-1">{clientName} Workpaper & Return Suite</h1>
      </div>
      
      <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
        <label htmlFor="role-select" className="text-xs text-slate-400 uppercase font-medium">Active Role:</label>
        <select
          id="role-select"
          value={activeRole}
          onChange={(e) => onRoleChange(e.target.value)}
          className="bg-slate-900 text-white text-sm font-semibold rounded px-2 py-1 border border-slate-600 focus:outline-none focus:border-blue-500 cursor-pointer"
        >
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
    </header>
  );
}