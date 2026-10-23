import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ReservaForm from './ReservaForm';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Reserva Menu Degustação R$ 179,90 | Imaginum Sushi Curitiba',
  description:
    'Menu Degustação Imaginum de R$ 209 por R$ 179,90 por pessoa. Segunda a quarta, exceto feriados, somente com reserva. Garanta sua mesa online.',
  alternates: { canonical: '/reserva' },
  openGraph: {
    title: 'Menu Degustação por R$ 179,90 — reserve sua mesa',
    description: 'Segunda a quarta, das 11h30 às 23h30. Válido somente com reserva.',
    url: '/reserva',
    type: 'website',
    locale: 'pt_BR',
  },
};

const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA = process.env.NEXT_PUBLIC_GA_ID;

export default function ReservaPage() {
  return (
    <div className={serif.variable}>
      {/* Meta Pixel — só carrega se o site ainda não tiver um pixel instalado */}
      {PIXEL && (
        <Script id="meta-pixel-reserva" strategy="afterInteractive">{`
          if (!window.fbq) {
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL}');
            fbq('track', 'PageView');
          }
        `}</Script>
      )}
      {/* Google Analytics 4 — só carrega se o site ainda não tiver o gtag */}
      {GA && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga4-reserva" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            if (!window.gtag) { window.gtag = function(){ dataLayer.push(arguments); }; gtag('js', new Date()); }
            gtag('config', '${GA}');
          `}</Script>
        </>
      )}
      <Nav />
      <div style={{ paddingTop: '4.5rem', background: '#0d0d0d' }}>
        <ReservaForm />
      </div>
      <Footer />
    </div>
  );
}
