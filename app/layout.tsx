import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata = {
  title: 'Luke Fornieri - MAK REALTY | Premium Real Estate Services',
  description: 'Luke Fornieri, premium real estate agent with MAK REALTY. Specializing in luxury properties and exceptional client service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Luke Fornieri",
              "url": "https://lukefornieri.com",
              "sameAs": [
                "https://www.instagram.com/lukefornieri",
                "https://medium.com/@lukeforn",
                "https://www.youtube.com/channel/UC-example"
              ],
              "jobTitle": "Real Estate Agent",
              "worksFor": {
                "@type": "Organization",
                "name": "MAK REALTY"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Melbourne",
                "addressCountry": "AU"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
} 