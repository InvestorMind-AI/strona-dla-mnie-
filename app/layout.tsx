import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'AUTOMO AI | Odzyskaj pieniądze ze swojej bazy klientów',
  description: 'Agencja automatyzacji AI z Trójmiasta. Reaktywacja bazy (DBR), agenci AI, automatyzacje n8n. Sprawdź, jak możemy zwiększyć Twoje przychody w 14 dni.',
};

import SmoothScrolling from '@/components/smooth-scrolling';
import Background3D from '@/components/background-3d';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <Background3D />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
