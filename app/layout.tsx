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
      "MES Yazılımı | Üretim Yürütme Sistemi - Türkiye Genelinde MES Firması",
    template: "%s | MES Yazılımı",
  },
  description:
    "MES yazılımı (Manufacturing Execution System) ile üretim süreçlerinizi dijitalleştirin. Ankara, İstanbul, İzmir, Bursa, Kocaeli başta olmak üzere Türkiye genelinde MES firması olarak OEE analizi, kalite kontrol ve Endüstri 4.0 çözümleri sunuyoruz.",
  keywords: [
    // Primary
    "mes yazılımı",
    "mes firması",
    "mes programı",
    "mes sistemi",
    "mes nedir",
    "mes çözümleri",
    "üretim yürütme sistemi",
    "manufacturing execution system",
    // City-based (high-intent customer searches)
    "ankara mes firması",
    "istanbul mes firması",
    "izmir mes firması",
    "bursa mes firması",
    "kocaeli mes firması",
    "konya mes firması",
    "gaziantep mes firması",
    "kayseri mes firması",
    "adana mes firması",
    "ankara mes yazılımı",
    "istanbul mes yazılımı",
    "izmir mes yazılımı",
    "bursa mes yazılımı",
    // Industry
    "üretim takip sistemi",
    "fabrika otomasyon sistemi",
    "üretim planlama yazılımı",
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
    "isa-95 standartları",
    "otomotiv mes yazılımı",
    "tekstil mes yazılımı",
    "gıda mes yazılımı",
    "ilaç mes yazılımı",
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
      "MES Yazılımı | Üretim Yürütme Sistemi - Türkiye Genelinde MES Firması",
    description:
      "MES yazılımı ile üretim süreçlerinizi dijitalleştirin. Ankara, İstanbul, İzmir, Bursa, Kocaeli başta olmak üzere Türkiye genelinde MES firması olarak OEE, kalite kontrol ve Endüstri 4.0 çözümleri sunuyoruz.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MES Yazılımı | Üretim Yürütme Sistemi - Türkiye Genelinde MES Firması",
    description:
      "MES yazılımı ile üretim süreçlerinizi dijitalleştirin. Türkiye genelinde MES firması olarak OEE, kalite kontrol ve Endüstri 4.0 çözümleri sunuyoruz.",
  },
  alternates: {
    canonical: "https://mesyazilimi.com",
    languages: {
      "tr-TR": "https://mesyazilimi.com",
    },
  },
  verification: {
    google: "",
  },
  category: "technology",
  other: {
    "geo.region": "TR",
    "geo.placename": "Türkiye",
    "content-language": "tr",
  },
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
        "MES yazılımı (Manufacturing Execution System) ile üretim süreçlerinizi dijitalleştirin. Türkiye genelinde MES firması.",
      inLanguage: "tr-TR",
      publisher: { "@id": "https://mesyazilimi.com/#organization" },
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
      alternateName: "MES Yazılımı Türkiye",
      url: "https://mesyazilimi.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mesyazilimi.com/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Türkiye genelinde MES (Manufacturing Execution System) yazılımı ve üretim yürütme sistemleri sunan firma. Ankara, İstanbul, İzmir, Bursa, Kocaeli başta olmak üzere tüm Türkiye'de hizmet.",
      areaServed: {
        "@type": "Country",
        name: "Türkiye",
      },
      knowsAbout: [
        "MES Yazılımı",
        "Manufacturing Execution System",
        "Üretim Yürütme Sistemi",
        "OEE",
        "Endüstri 4.0",
        "Akıllı Fabrika",
        "ISA-95",
        "SCADA Entegrasyonu",
        "ERP Entegrasyonu",
      ],
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://mesyazilimi.com/#software",
      name: "MES Yazılımı - Üretim Yürütme Sistemi",
      description:
        "Gerçek zamanlı üretim takibi, OEE analizi, kalite kontrol ve ISA-95 uyumlu MES yazılımı.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Windows, Linux",
      offers: {
        "@type": "Offer",
        priceCurrency: "TRY",
        price: "0",
        priceValidUntil: "2026-12-31",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "247",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Gerçek Zamanlı Üretim Takibi",
        "OEE Analizi ve Raporlama",
        "Kalite Kontrol Yönetimi",
        "Bakım Yönetimi",
        "Parti / Seri İzlenebilirlik",
        "SCADA ve ERP Entegrasyonu",
        "ISA-95 Standartı Uyumu",
        "Endüstri 4.0 Hazır",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://mesyazilimi.com/#localbusiness",
      name: "MES Yazılımı - Türkiye",
      description:
        "Türkiye genelinde MES yazılımı, üretim yürütme sistemi ve Endüstri 4.0 danışmanlık hizmetleri.",
      url: "https://mesyazilimi.com",
      priceRange: "₺₺",
      areaServed: [
        { "@type": "City", name: "Ankara" },
        { "@type": "City", name: "İstanbul" },
        { "@type": "City", name: "İzmir" },
        { "@type": "City", name: "Bursa" },
        { "@type": "City", name: "Kocaeli" },
        { "@type": "City", name: "Konya" },
        { "@type": "City", name: "Gaziantep" },
        { "@type": "City", name: "Kayseri" },
        { "@type": "City", name: "Adana" },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "TR",
        addressRegion: "Türkiye",
      },
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
      <head>
        <link rel="alternate" hrefLang="tr-TR" href="https://mesyazilimi.com" />
        <link rel="alternate" hrefLang="x-default" href="https://mesyazilimi.com" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Türkiye" />
      </head>
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
