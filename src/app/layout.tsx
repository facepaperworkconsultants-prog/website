import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Face PaperWorks Consultants | Cosmetics & Medical Device Regulatory Consultancy India",
    template: "%s | Face PaperWorks Consultants",
  },
  description:
    "Face PaperWorks Consultants provides regulatory consultancy for cosmetics and medical device imports in India. CDSCO registration, import licensing, MD-42, and compliance support.",
  keywords: [
    "CDSCO cosmetic import registration consultant",
    "cosmetic registration consultancy India",
    "cosmetics import licence assistance India",
    "medical device import licence consultant India",
    "MD-14 MD-15 medical device import licensing support",
    "MD-42 registration assistance India",
    "cosmetic manufacturing licence consultancy",
    "medical device regulatory affairs consultant India",
    "Face PaperWorks Consultants",
  ],
  authors: [{ name: "Face PaperWorks Consultants" }],
  creator: "Face PaperWorks Consultants",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Face PaperWorks Consultants",
    title: "Face PaperWorks Consultants | Cosmetics & Medical Device Regulatory Consultancy India",
    description:
      "From regulatory documentation to licensing and application support, Face PaperWorks Consultants helps businesses navigate India's cosmetics and medical-device regulatory requirements.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#142B49" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
