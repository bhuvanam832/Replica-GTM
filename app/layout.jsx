import { Inter, Manrope, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ScrollProgress from '@/components/ScrollProgress';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Manrope({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });

export const metadata = {
  title: 'GTM Technology Solutions | Fractional RevOps Consulting',
  description:
    'Fractional RevOps consulting helps SaaS and SMBs build a predictable revenue engine at a fractional cost.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable}`}>
      <body>
        <ScrollProgress />
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
