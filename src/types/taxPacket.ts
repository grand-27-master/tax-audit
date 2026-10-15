export interface DocumentItem {
  text: string;
  content: string;
  id: string;
  title: string;
  type: string;
  issuer: string;
  owner: string;
  timestamp: string;
  printed_content: string;
}

export interface ExtractedValue {
  id: string;
  document_id: string;
  field_label: string;
  value: number | string;
  value_type: string;
  confidence: number;
}

export interface ReturnVersion {
  version_id: string;
  label: string;
  summary: {
    adjusted_gross_income: number;
    taxable_income: number;
    total_tax: number;
    refund_or_owed: number;
  };
  line_items: Record<string, unknown>;
}

export interface TaxPacket {
  packet: {
    name: string;
    version: string;
    client_id: string;
  };
  documents: DocumentItem[];
  extracted_values: ExtractedValue[];
  return_versions: ReturnVersion[];
}