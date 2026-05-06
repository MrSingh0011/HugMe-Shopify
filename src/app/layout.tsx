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
  alternates: {
    canonical: 'https://hugme.fashion',
    languages: {
      'en-IN': 'https://hugme.fashion',
      'en-US': 'https://hugme.fashion/en-us',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <link rel="alternate" hrefLang="en-in" href="https://hugme.fashion/" />
        <link rel="alternate" hrefLang="en-us" href="https://hugme.fashion/en-us" />
        <link rel="alternate" hrefLang="x-default" href="https://hugme.fashion/" />
      </head>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
