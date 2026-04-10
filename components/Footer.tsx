import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Avantajlar", href: "#avantajlar" },
  { label: "Modüller", href: "#moduller" },
  { label: "Blog", href: "/blog" },
];

const blogLinks = [
  { label: "MES Yazılımı Nedir?", href: "/blog/mes-yazilimi-nedir" },
  { label: "MES ve ERP Farkları", href: "/blog/mes-ve-erp-farklari" },
  { label: "Endüstri 4.0 ve MES", href: "/blog/endustri-4-0-ve-mes" },
  {
    label: "OEE Nedir?",
    href: "/blog/oee-nedir-mes-ile-uretim-verimliligi",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-heading text-lg">
                <span className="font-bold text-white">MES</span>
                <span className="text-slate-400 font-normal ml-0.5">
                  Yazılımı
                </span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              MES yazilimi ve uretim yurutme sistemleri hakkinda Turkiye&apos;nin
              en kapsamli bilgi kaynagi.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@mesyazilimi.com"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                aria-label="E-posta"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Blog Posts */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Blog Yazıları
            </h3>
            <ul className="space-y-3">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@mesyazilimi.com"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-slate-500 group-hover:text-cyan-400 transition-colors duration-200 shrink-0" />
                  <span>info@mesyazilimi.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                  <span>MES Yazılımı Bilgi Portali</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2025 MES Yazılımı. Tum haklari saklidir.
          </p>
          <p className="text-sm text-slate-500">
            Turkiye&apos;nin MES Bilgi Kaynagi
          </p>
        </div>
      </div>
    </footer>
  );
}
