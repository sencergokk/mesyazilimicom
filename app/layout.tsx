import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mesyazilimi.com"),
  title: {
    default: "MES Yazılımı - Üretim Yürütme Sistemi Nedir? | MES Programı",
    template: "%s | MES Yazılımı"
  },
  description: "MES (Manufacturing Execution System) yazılımı, üretim süreçlerini gerçek zamanlı izleyen ve yöneten bir sistemdir. MES programı hakkında detaylı bilgi edinin.",
  keywords: [
    "mes yazılımı",
    "mes programı",
    "mes sistemi",
    "üretim yürütme sistemi",
    "manufacturing execution system",
    "üretim takip sistemi",
    "fabrika otomasyon sistemi",
    "üretim planlama yazılımı",
    "mes nedir",
    "mes çözümleri"
  ],
  authors: [{ name: "MES Yazılımı" }],
  creator: "MES Yazılımı",
  publisher: "MES Yazılımı",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mesyazilimi.com",
    title: "MES Yazılımı - Üretim Yürütme Sistemi Nedir?",
    description: "MES yazılımı, üretim süreçlerini gerçek zamanlı izleyen ve yöneten bir sistemdir. Manufacturing Execution System hakkında kapsamlı bilgi.",
    siteName: "MES Yazılımı",
  },
  twitter: {
    card: "summary_large_image",
    title: "MES Yazılımı - Üretim Yürütme Sistemi",
    description: "MES yazılımı ve üretim yürütme sistemleri hakkında detaylı bilgi",
  },
  alternates: {
    canonical: "https://mesyazilimi.com",
  },
  other: {
    "google-site-verification": "your-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MES Yazılımı",
              "url": "https://mesyazilimi.com",
              "description": "MES (Manufacturing Execution System) yazılımı ve üretim yürütme sistemleri hakkında kapsamlı bilgi",
              "inLanguage": "tr-TR",
              "about": {
                "@type": "Thing",
                "name": "MES Yazılımı",
                "description": "Üretim Yürütme Sistemi"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
