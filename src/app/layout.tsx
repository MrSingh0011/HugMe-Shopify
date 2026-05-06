import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

const outfit = Outfit({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'HugMe – Premium Leather Fashion',
  description: 'Premium leather fashion – jackets, bags & accessories. Shop HugMe for timeless luxury.',
  openGraph: {
    title: 'HugMe – Premium Leather Fashion',
    description: 'Timeless leather jackets, bags & accessories.',
    type: 'website',
    url: 'https://hugme.fashion',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
