import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://procureconsultafrica.com"),

  title: {
    default: "Procure Consult Africa | Source • Buy • Move • Expand",
    template: "%s | Procure Consult Africa",
  },

  description:
    "Procure Consult Africa helps businesses source products, coordinate procurement, manage logistics, access commodities, and expand into African markets.",

  keywords: [
    "African sourcing",
    "procurement Africa",
    "commodity sourcing Africa",
    "cross border logistics Africa",
    "market entry Africa",
    "diaspora sourcing Africa",
    "supplier sourcing Africa",
    "Africa procurement company",
  ],

  openGraph: {
    title: "Procure Consult Africa",
    description:
      "Source, buy, move, and expand across Africa with trusted execution support.",
    url: "https://procureconsultafrica.com",
    siteName: "Procure Consult Africa",
    images: [
      {
        url: "/logos/pca-logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Procure Consult Africa",
    description:
      "Source, buy, move, and expand across Africa.",
    images: ["/logos/pca-logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logos/pca-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body
 className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 font-sans antialiased"
>
  <Navbar />

  <div className="mx-auto max-w-[1600px] px-3 py-3 sm:px-4 sm:py-4">
    {children}
    <Footer />
  </div>
</body>
    </html>
  );
}