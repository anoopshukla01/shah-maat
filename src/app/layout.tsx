import type { Metadata } from 'next';
import { Pirata_One, Anton, Permanent_Marker, Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pirata',
  display: 'swap',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const marker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['900'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shah-Maat | IIT Madras BS Chess Society',
  description:
    'The official chess collective of the IIT Madras BS Degree program. Tournaments, masterclasses, inter-house battles, and community.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pirata.variable} ${anton.variable} ${marker.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink antialiased selection:bg-saffron selection:text-cream">
        {/* Paper Grain Overlay */}
        <div className="paper-grain-overlay" aria-hidden="true" />

        {/* Global Header */}
        <Header />

        {/* Main Page Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}

