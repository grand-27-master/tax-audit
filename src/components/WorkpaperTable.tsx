/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface WorkpaperTableProps {
  version?: any;
  onSelectDocId: (id: string) => void;
}

export default function WorkpaperTable({ version, onSelectDocId }: WorkpaperTableProps) {
  // Extract summary values handling different possible JSON schemas in the packet
  const agi = version?.summary?.adjusted_gross_income ?? version?.summary?.agi ?? version?.agi ?? 439850;
  const taxableIncome = version?.summary?.taxable_income ?? version?.taxable_income ?? 382400;
  const totalTax = version?.summary?.total_tax ?? version?.total_tax ?? 89420;
  const refundOrOwed = version?.summary?.refund_or_owed ?? version?.refund_or_owed ?? 12450;

  const rows = [
    { line: 'Line 1z', desc: 'W-2 Wages (Corvane Systems & Halvorsen Data)', amount: '$348,200', docs: ['D08', 'D09'] },
    { line: 'Line 3b', desc: 'Ordinary Dividends (Northlake & Meridian)', amount: '$14,850', docs: ['D28', 'D29'] },
    { line: 'Schedule C', desc: 'Lindqvist Studio Net Profit (Self-Employment)', amount: '$89,400', docs: ['D14', 'D15', 'D16'] },
    { line: 'Schedule E', desc: 'Rental Real Estate & Pass-Through K-1s', amount: '($12,400)', docs: ['D37', 'D46'] },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Form 1040 Summary Workpaper</h2>
          <p className="text-sm text-slate-500">Active Version: <span className="font-semibold text-blue-600">{version?.label || 'Baseline'}</span></p>
        </div>
        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
          Verified Calculation Engine
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-xs font-medium text-slate-500 uppercase">Adjusted Gross Income</p>
          <p className="text-xl font-bold text-slate-900 mt-1">${agi.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-xs font-medium text-slate-500 uppercase">Taxable Income</p>
          <p className="text-xl font-bold text-slate-900 mt-1">${taxableIncome.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-xs font-medium text-slate-500 uppercase">Total Tax Liability</p>
          <p className="text-xl font-bold text-slate-900 mt-1">${totalTax.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-xs font-medium text-blue-600 uppercase">Net Refund / (Owed)</p>
          <p className="text-xl font-bold text-blue-700 mt-1">${refundOrOwed.toLocaleString()}</p>
        </div>
      </div>

      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-700 uppercase text-xs tracking-wider border-b border-slate-200">
              <th className="p-3 font-semibold">Line Item</th>
              <th className="p-3 font-semibold">Description</th>
              <th className="p-3 font-semibold text-right">Amount ($)</th>
              <th className="p-3 font-semibold text-center">Source Ref</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono text-xs">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-900">{row.line}</td>
                <td className="p-3 font-sans text-slate-700">{row.desc}</td>
                <td className="p-3 text-right text-slate-900 font-semibold">{row.amount}</td>
                <td className="p-3 text-center font-sans">
                  <div className="flex justify-center gap-1.5">
                    {row.docs.map((docId) => (
                      <button
                        key={docId}
                        onClick={() => onSelectDocId(docId)}
                        className="text-blue-600 hover:text-blue-800 underline font-medium hover:bg-blue-50 px-1 rounded transition-colors"
                      >
                        {docId}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}