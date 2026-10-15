import React, { useState } from 'react';

export default function WhatIfSandbox() {
  const [additionalCryptoSale, setAdditionalCryptoSale] = useState(5000);
  const [extraRetirementContrib, setExtraRetirementContrib] = useState(0);

  const baseTax = 42500;
  const estimatedImpact = Math.round(additionalCryptoSale * 0.22 - extraRetirementContrib * 0.24);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-lg font-bold text-slate-900 mb-2">Interactive What-If Scenario Sandbox</h2>
      <p className="text-sm text-slate-500 mb-6">Test tax impact adjustments in real-time before locking return versions[cite: 2, 4].</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 block">
            Additional Crypto Capital Gain / (Loss): \${additionalCryptoSale.toLocaleString()}
          </label>
          <input
            type="range"
            min="-20000"
            max="50000"
            step="1000"
            value={additionalCryptoSale}
            onChange={(e) => setAdditionalCryptoSale(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 block">
            Additional Traditional IRA / SEP Contribution: \${extraRetirementContrib.toLocaleString()}
          </label>
          <input
            type="range"
            min="0"
            max="30000"
            step="1000"
            value={extraRetirementContrib}
            onChange={(e) => setExtraRetirementContrib(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
        <div>
          <p className="text-xs uppercase font-medium text-slate-500">Projected Tax Liability Impact</p>
          <p className="text-lg font-bold text-slate-900 mt-0.5">\${(baseTax + estimatedImpact).toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase font-medium text-slate-500">Net Delta vs Baseline</p>
          <p className={`text-lg font-bold ${estimatedImpact >= 0 ? 'text-emerald-600' : 'text-blue-600'}`}>
            {estimatedImpact >= 0 ? `+${estimatedImpact.toLocaleString()}` : estimatedImpact.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}