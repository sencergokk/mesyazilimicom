import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2,
  CheckCircle2,
  Factory,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { cities, getCity } from "@/lib/cities-data";

type Params = { city: string };

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  const title = `${city.name} MES Firması | ${city.name} MES Yazılımı Çözümleri`;
  const description = `${city.name} MES firması — ${city.name} MES yazılımı, üretim yürütme sistemi (MES) ve Endüstri 4.0 çözümleri. ${city.industrialZones.slice(0, 3).join(", ")} OSB'lerindeki üreticiler için kurumsal MES sistemi.`;

  return {
    title,
    description,
    keywords: [
      `${city.nameLower} mes firması`,
      `${city.nameLower} mes yazılımı`,
      `${city.nameLower} mes sistemi`,
      `${city.nameLower} üretim yürütme sistemi`,
      `${city.nameLower} mes programı`,
      `${city.nameLower} fabrika otomasyon`,
      `${city.nameLower} endüstri 4.0`,
      `${city.nameLower} oee yazılımı`,
      `${city.nameLower} üretim takip`,
      ...city.industrialZones.map(
        (z) => `${z.toLowerCase()} mes yazılımı`,
      ),
    ],
    alternates: {
      canonical: `https://mesyazilimi.com/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://mesyazilimi.com/${city.slug}`,
      type: "website",
      locale: "tr_TR",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Anasayfa",
        item: "https://mesyazilimi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${city.name} MES Firması`,
        item: `https://mesyazilimi.com/${city.slug}`,
      },
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://mesyazilimi.com/${city.slug}#localbusiness`,
    name: `MES Yazılımı - ${city.name}`,
    description: city.description,
    url: `https://mesyazilimi.com/${city.slug}`,
    image: "https://mesyazilimi.com/og-image.jpg",
    priceRange: "₺₺",
    areaServed: {
      "@type": "City",
      name: `${city.name}, Türkiye`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: "TR",
    },
    serviceArea: {
      "@type": "City",
      name: city.name,
    },
  };

  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${city.name} MES Yazılımı`,
    description: city.description,
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
      ratingCount: "127",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gray-950 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(6,182,212,0.10) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-slate-400 mb-8"
            >
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Anasayfa
              </Link>
              <span>/</span>
              <span className="text-slate-300">{city.name} MES Firması</span>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-400 mb-6">
                <MapPin className="w-4 h-4" />
                {city.name}, {city.region} Bölgesi
              </span>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {city.name} MES Firması
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Üretim Yürütme Sistemi Çözümleri
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-3xl">
                {city.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#sehir-detay"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base transition-transform duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  {city.name} MES Çözümlerini İncele
                </Link>
                <Link
                  href="/blog/mes-yazilimi-nedir"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white font-semibold text-base transition-colors duration-200 hover:bg-white/10"
                >
                  MES Yazılımı Nedir?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {city.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 font-heading">
                    {s.value}
                  </div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Detail */}
        <section id="sehir-detay" className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                    {city.name}&apos;da MES Yazılımı Neden Kritik?
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {city.whyHere}
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Factory className="w-7 h-7 text-cyan-400" />
                    {city.name} Sanayi Sektörleri
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {city.industries.map((industry) => (
                      <div
                        key={industry}
                        className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                        <span className="text-white text-sm font-medium">
                          {industry}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Building2 className="w-7 h-7 text-cyan-400" />
                    {city.name} Organize Sanayi Bölgeleri
                  </h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {city.name} MES yazılımı çözümlerimiz, aşağıdaki organize
                    sanayi bölgelerindeki üreticilere hizmet vermektedir:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {city.industrialZones.map((zone) => (
                      <div
                        key={zone}
                        className="bg-gradient-to-br from-cyan-500/5 to-blue-600/5 border border-cyan-500/20 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                          <span className="text-white font-medium">{zone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
                    {city.name} MES Firması Hakkında Sık Sorulan Sorular
                  </h2>
                  <div className="space-y-4">
                    {city.faqs.map((f) => (
                      <details
                        key={f.q}
                        className="group bg-white/5 border border-white/10 rounded-xl p-6 open:border-cyan-500/30"
                      >
                        <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                          <h3 className="font-heading font-semibold text-white text-base">
                            {f.q}
                          </h3>
                          <span className="text-cyan-400 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">
                            +
                          </span>
                        </summary>
                        <p className="text-slate-400 leading-relaxed mt-4">
                          {f.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-white text-lg mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      {city.name} MES Avantajları
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>Yerel saha desteği ve hızlı müdahale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{city.region} sanayisine özel modüller</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>OEE %15-25 artış, fire %20-30 azalış</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>KOSGEB ve TÜBİTAK destek uyumlu</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-white text-base mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-cyan-400" />
                      Diğer Şehirler
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {otherCities.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/${c.slug}`}
                            className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            {c.name} MES Firması
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-white text-base mb-3">
                      MES Hakkında Daha Fazla
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/blog/mes-yazilimi-nedir"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          → MES Yazılımı Nedir?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/mes-ve-erp-farklari"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          → MES ve ERP Farkları
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/oee-nedir-mes-ile-uretim-verimliligi"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          → OEE Nedir?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/mes-yazilimi-roi-yatirim-getirisi"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          → MES Yatırım Getirisi (ROI)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
