import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pure Point Water Solutions | Bottle-less Coolers & 5-Gallon Jugs | Greenwich CT',
  description: 'Local water solutions serving NY & CT. Bottle-less cooler rentals and 5-gallon jug delivery with flat monthly pricing and preventative care.',
  keywords: 'water coolers, bottleless coolers, 5-gallon jugs, office water, Greenwich CT, water delivery',
  openGraph: {
    title: 'Pure Point Water Solutions | Bottle-less Coolers & 5-Gallon Jugs | Greenwich CT',
    description: 'Local water solutions serving NY & CT. Bottle-less cooler rentals and 5-gallon jug delivery with flat monthly pricing and preventative care.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure Point Water Solutions | Bottle-less Coolers & 5-Gallon Jugs | Greenwich CT',
    description: 'Local water solutions serving NY & CT. Bottle-less cooler rentals and 5-gallon jug delivery with flat monthly pricing and preventative care.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Pure Point Logo Symbol (4).png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://purepointwatersolutions.com',
              name: 'Pure Point Water Solutions',
              description: 'Local water solutions serving NY & CT. Bottle-less cooler rentals and 5-gallon jug delivery.',
              url: 'https://purepointwatersolutions.com',
              telephone: '+1-203-275-9009',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '257 Sound Beach Ave',
                addressLocality: 'Old Greenwich',
                addressRegion: 'CT',
                postalCode: '06870',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '41.0334',
                longitude: '-73.5668',
              },
              areaServed: {
                '@type': 'GeoRadius',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: '41.0334',
                  longitude: '-73.5668',
                },
                geoRadius: '90 miles',
              },
              serviceType: ['Water Purification', 'Office Equipment Supply', 'Water Cooler Rental'],
              priceRange: '$$',
              openingHours: 'Mo-Fr 08:00-17:00',
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C49RTJ9Y2S"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C49RTJ9Y2S');
          `}
        </Script>
      </head>
      <body className={nunito.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}