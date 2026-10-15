/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import DocumentViewer from '../src/components/DocumentViewer';
import WorkpaperTable from '../src/components/WorkpaperTable';
import WhatIfSandbox from '../src/components/WhatIfSandbox';

export default function Home() {
  const [packetData, setPacketData] = useState<any>(null);
  const [activeRole, setActiveRole] = useState('IRS Examiner');
  const [selectedDocId, setSelectedDocId] = useState('D01');
  const [activeTab, setActiveTab] = useState<'workpaper' | 'sandbox'>('workpaper');

  useEffect(() => {
    fetch('/data/okafor_lindqvist_2025_packet.json')
      .then((res) => res.json())
      .then((data) => {
        setPacketData(data);
        if (data?.documents?.[0]?.id) {
          setSelectedDocId(data.documents[0].id);
        }
      })
      .catch((err) => console.error('Failed to load tax packet:', err));
  }, []);

  const activeVersion = packetData?.return_versions?.[0] || {};
  const documents = packetData?.documents || [];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header
        clientName={packetData?.packet?.name || 'Okafor-Lindqvist Household'}
        clientId={packetData?.packet?.client_id || 'CL-20417'}
        activeRole={activeRole}
        onRoleChange={setActiveRole}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        <div className="flex gap-4 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('workpaper')}
            className={`px-4 py-2 font-semibold text-sm rounded-lg transition-colors ${
              activeTab === 'workpaper'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Form 1040 & Workpapers
          </button>
          <button
            onClick={() => setActiveTab('sandbox')}
            className={`px-4 py-2 font-semibold text-sm rounded-lg transition-colors ${
              activeTab === 'sandbox'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            What-If Scenario Sandbox
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'workpaper' ? (
              <WorkpaperTable
                version={activeVersion}
                onSelectDocId={setSelectedDocId}
              />
            ) : (
              <WhatIfSandbox />
            )}
          </div>

          <div>
            <DocumentViewer
              documents={documents}
              selectedDocId={selectedDocId}
              onSelectDocId={setSelectedDocId}
            />
          </div>
        </div>
      </main>
    </div>
  );
}