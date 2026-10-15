# Okafor-Lindqvist Tax Workpaper & Return Verification Suite

A web-native tax workpaper and return verification engine built for tax practice management, source document tracing, and scenario analysis (Tax Year 2025, Client ID: `CL-20417`).


---

## Key Features

- **Split-Screen Evidence Inspection**: Link Form 1040 line items directly to underlying source documents (`D01` through `D74`), including multi-state W-2s, brokerage 1099s, crypto disclosures, and Schedule C/E filings.
- **Interactive Role Switcher**: Toggle between **Preparer**, **Reviewer**, **Partner**, **Client**, **Firm Admin**, and **IRS Examiner** roles to evaluate data visibility and review workflows.
- **Real-Time Scenario Modeling ("What-If Sandbox")**: Adjust capital gains, self-employment profits, and retirement contribution sliders to simulate tax liability impacts dynamically prior to return lock-in.
- **Robust JSON Packet Parsing**: Automatically ingests structured tax return data and fallback calculation models directly from client data packets.

---

## Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **UI & Styling**: React 18, Tailwind CSS, Lucide Icons
- **Language**: TypeScript
