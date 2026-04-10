"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Calendar,
  Cpu,
  FileText,
  PackageSearch,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Activity,
    title: "Gerçek Zamanlı Üretim Takibi",
    description:
      "Üretim hattındaki tüm süreçleri anlık olarak izleyin. Makine durumları, üretim adetleri ve çevrim sürelerini gerçek zamanlı görüntüleyin.",
  },
  {
    icon: ShieldCheck,
    title: "Kalite Yönetimi",
    description:
      "Üretim sürecinin her aşamasında kalite kontrol noktaları oluşturun. SPC analizleri ve kalite raporları ile hata oranlarını minimuma indirin.",
  },
  {
    icon: PackageSearch,
    title: "Malzeme İzlenebilirlik",
    description:
      "Hammaddeden nihai ürüne kadar tüm malzeme hareketlerini takip edin. Lot ve seri numarası bazında tam izlenebilirlik sağlayın.",
  },
  {
    icon: BarChart3,
    title: "OEE ve Performans Analizi",
    description:
      "Genel Ekipman Etkinliği (OEE) hesaplamaları ile üretim performansınızı ölçün. Darboğazları tespit edin ve verimliliği artırın.",
  },
  {
    icon: FileText,
    title: "Dijital Dokümantasyon",
    description:
      "Kağıtsız fabrika konseptini hayata geçirin. Üretim talimatları, iş emirleri ve kalite dokümanlarını dijital ortamda yönetin.",
  },
  {
    icon: Wrench,
    title: "Bakım Yönetimi",
    description:
      "Planlı ve kestirimci bakım stratejileri ile duruş sürelerini minimize edin. Bakım takvimlerini otomatik oluşturun.",
  },
  {
    icon: Users,
    title: "İş Gücü Yönetimi",
    description:
      "Operatör performansını takip edin, vardiya planlaması yapın. Yetkinlik bazlı iş atama ile verimliliği artırın.",
  },
  {
    icon: Cpu,
    title: "Makine Entegrasyonu",
    description:
      "SCADA, PLC ve IoT sensörlerinden otomatik veri toplama. Makine parametrelerini gerçek zamanlı izleme ve kontrol.",
  },
  {
    icon: Calendar,
    title: "Üretim Planlama",
    description:
      "Sipariş bazlı üretim çizelgeleme, kaynak optimizasyonu ve kapasite planlaması. ERP entegrasyonu ile sorunsuz veri akışı.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="ozellikler" className="py-24 lg:py-32 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Özellikler
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            MES Yazılımının
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Temel Özellikleri
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Üretim süreçlerinizi uçtan uca dijitalleştiren kapsamlı özellikler
            ile fabrikanızı geleceğe taşıyın.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
