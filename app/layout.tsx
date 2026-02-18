import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://nottinghamclean.co.uk"),
  title: {
    default: `${business.name} | Professional Cleaning Services in Nottingham`,
    template: `%s | ${business.name}`
  },
  description: "Professional home and office cleaning services in Nottingham with flexible scheduling.",
  openGraph: {
    title: business.name,
    description: "Trusted local cleaning services in Nottingham.",
    type: "website",
    locale: "en_GB"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    areaServed: business.location,
    telephone: business.phone,
    email: business.email
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </body>
    </html>
  );
}
