import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spotlessnottingham.co.uk"),
  title: "Spotless Nottingham | Domestic Cleaning Services",
  description:
    "Reliable domestic cleaning across Nottingham. Weekly, fortnightly, or one-off deep cleans. Insured, DBS checked, 4.9★ rated.",
  openGraph: {
    title: "Spotless Nottingham",
    description:
      "Clean home. Clear head. Reliable domestic cleaning across Nottingham.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Spotless Nottingham",
    areaServed: "Nottingham, UK",
    telephone: "0115 000 0000",
    email: "hello@spotlessnottingham.co.uk",
  };

  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
