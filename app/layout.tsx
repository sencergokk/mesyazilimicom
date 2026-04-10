import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mesyazilimi.com"),
  title: {
    default:
      "MES Yazılımı | Üretim Yürütme Sistemi - Akıllı Fabrika Çözümleri",
    template: "%s | MES Yazılımı",
  },
  description:
    "MES (Manufacturing Execution System) yazılımı ile üretim süreçlerinizi dijitalleştirin. Gerçek zamanlı üretim takibi, kalite kontrol, OEE analizi ve Endüstri 4.0 çözümleri hakkında kapsamlı rehber.",
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
    "mes çözümleri",
    "oee nedir",
    "oee hesaplama",
    "endüstri 4.0",
    "akıllı fabrika",
    "üretim yönetim sistemi",
    "kalite kontrol yazılımı",
    "üretim izleme sistemi",
    "fabrika yönetim yazılımı",
    "üretim verimliliği",
    "dijital fabrika",
    "mes erp farkı",
    "üretim optimizasyonu",
    "gerçek zamanlı üretim takibi",
    "üretim performans analizi",
    "scada mes entegrasyonu",
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
    siteName: "MES Yazılımı",
    title:
      "MES Yazılımı | Üretim Yürütme Sistemi - Akıllı Fabrika Çözümleri",
    description:
      "MES (Manufacturing Execution System) yazılımı ile üretim süreçlerinizi dijitalleştirin. Gerçek zamanlı üretim takibi, kalite kontrol, OEE analizi ve Endüstri 4.0 çözümleri hakkında kapsamlı rehber.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MES Yazılımı | Üretim Yürütme Sistemi - Akıllı Fabrika Çözümleri",
    description:
      "MES (Manufacturing Execution System) yazılımı ile üretim süreçlerinizi dijitalleştirin. Gerçek zamanlı üretim takibi, kalite kontrol, OEE analizi ve Endüstri 4.0 çözümleri hakkında kapsamlı rehber.",
  },
  alternates: {
    canonical: "https://mesyazilimi.com",
  },
  verification: {
    google: "",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mesyazilimi.com/#website",
      url: "https://mesyazilimi.com",
      name: "MES Yazılımı",
      description:
        "MES (Manufacturing Execution System) yazılımı ile üretim süreçlerinizi dijitalleştirin. Gerçek zamanlı üretim takibi, kalite kontrol, OEE analizi ve Endüstri 4.0 çözümleri hakkında kapsamlı rehber.",
      inLanguage: "tr-TR",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://mesyazilimi.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://mesyazilimi.com/#organization",
      name: "MES Yazılımı",
      url: "https://mesyazilimi.com",
      description:
        "MES yazılımı ve üretim yürütme sistemleri hakkında Türkiye'nin en kapsamlı bilgi kaynağı.",
      sameAs: [],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} font-sans antialiased bg-gray-950 text-slate-300`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
