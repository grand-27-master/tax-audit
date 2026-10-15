import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Okafor-Lindqvist Tax Workpaper Suite',
  description: 'Web-native tax workpaper and return verification system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}