import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/lib/cities-data";

export default function CitiesSection() {
  return (
    <section
      id="sehirler"
      className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Hizmet Verdiğimiz Şehirler
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Türkiye Genelinde
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MES Yazılımı Çözümleri
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Türkiye&apos;nin önde gelen sanayi şehirlerinde, yerel sektör
            ihtiyaçlarına özel MES yazılımı çözümleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">
                      {city.name} MES Firması
                    </h3>
                    <p className="text-slate-500 text-xs">{city.region}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                {city.industries.slice(0, 4).join(" · ")}
              </p>
              <div className="mt-3 pt-3 border-t border-white/5 text-xs text-slate-500">
                {city.industrialZones.slice(0, 2).join(", ")}
                {city.industrialZones.length > 2 && " +"}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
