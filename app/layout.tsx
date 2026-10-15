import type { Metadata } from 'next';
// @ts-expect-error Next.js handles global CSS imports at build time.
import './globals.css';

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