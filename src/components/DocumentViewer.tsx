import React, { useState } from 'react';
import { DocumentItem } from '../types/taxPacket';

interface DocumentViewerProps {
  documents: DocumentItem[];
  selectedDocId: string;
  onSelectDocId: (id: string) => void;
}

export default function DocumentViewer({ documents = [], selectedDocId, onSelectDocId }: DocumentViewerProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = documents.filter((doc) => {
    const query = searchTerm.toLowerCase();
    return (
      doc.id?.toLowerCase().includes(query) ||
      doc.title?.toLowerCase().includes(query) ||
      doc.issuer?.toLowerCase().includes(query)
    );
  });

  const currentDoc = documents.find((d) => d.id === selectedDocId) || documents[0] || {};
  let contentText = currentDoc?.printed_content || currentDoc?.content || currentDoc?.text || '';
  if (typeof contentText === 'object') {
    contentText = JSON.stringify(contentText, null, 2);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-[640px] overflow-hidden">
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
            <span>Source Evidence Search ({documents.length} Files)</span>
          </h2>
          <span className="bg-blue-100 text-blue-800 font-mono text-[10px] font-bold px-2 py-0.5 rounded">
            {currentDoc?.id || selectedDocId}
          </span>
        </div>

        <input
          type="text"
          placeholder="Search docs by ID, title, issuer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-xs border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <select
          value={selectedDocId}
          onChange={(e) => onSelectDocId(e.target.value)}
          className="w-full text-xs border border-slate-300 rounded-lg p-2 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {filteredDocs.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.id}: {doc.title} ({doc.issuer})
            </option>
          ))}
          {filteredDocs.length === 0 && <option disabled>No matching documents found</option>}
        </select>
      </div>

      <div className="p-4 bg-slate-900 text-emerald-400 font-mono text-xs overflow-y-auto flex-1 whitespace-pre-wrap leading-relaxed">
        <div className="mb-3 pb-2 border-b border-slate-800 text-slate-400 flex flex-wrap justify-between text-[11px]">
          <span>Issuer: {currentDoc?.issuer || 'N/A'}</span>
          <span>Owner: {currentDoc?.owner || 'Household'}</span>
        </div>
        {contentText || `Document ${selectedDocId} loaded.`}
      </div>
    </div>
  );
}