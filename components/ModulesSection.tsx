"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const modules = [
  {
    number: "01",
    title: "Üretim Yürütme",
    description:
      "İş emirlerinin oluşturulması, takibi ve yönetimi. Üretim sürecinin başından sonuna kadar kontrol.",
  },
  {
    number: "02",
    title: "Veri Toplama",
    description:
      "Makine, sensör ve operatör verilerinin otomatik toplanması. IoT entegrasyonu ile gerçek zamanlı veri akışı.",
  },
  {
    number: "03",
    title: "Kalite Yönetimi",
    description:
      "Kalite kontrol noktaları, SPC analizleri, uygunsuzluk yönetimi ve CAPA süreçleri.",
  },
  {
    number: "04",
    title: "Bakım Yönetimi",
    description:
      "Planlı, arızi ve kestirimci bakım süreçlerinin yönetimi. Bakım maliyetlerinin optimizasyonu.",
  },
  {
    number: "05",
    title: "Malzeme Yönetimi",
    description:
      "Malzeme hareketleri, stok takibi, lot izlenebilirlik ve hammadde yönetimi.",
  },
  {
    number: "06",
    title: "Performans Analizi",
    description:
      "OEE hesaplamaları, üretim KPI'ları, darboğaz analizi ve verimlilik raporları.",
  },
  {
    number: "07",
    title: "İş Gücü Yönetimi",
    description:
      "Operatör yetkinlik matrisi, vardiya planlama, performans takibi ve eğitim yönetimi.",
  },
  {
    number: "08",
    title: "Çizelgeleme",
    description:
      "Kapasite bazlı üretim çizelgeleme, kaynak optimizasyonu ve sipariş önceliklendirme.",
  },
  {
    number: "09",
    title: "Doküman Yönetimi",
    description:
      "Dijital iş talimatları, üretim formları, kalite dokümanları ve revizyon kontrolü.",
  },
  {
    number: "10",
    title: "Raporlama ve Analiz",
    description:
      "Özelleştirilebilir dashboard'lar, gelişmiş raporlama ve karar destek sistemleri.",
  },
];

export default function ModulesSection() {
  return (
    <section id="moduller" className="py-24 lg:py-32 bg-gray-950 relative">
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
            Modüller
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Kapsamlı MES
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modül Yapısı
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            MES yazılımı, üretim süreçlerinizin her aşamasını kapsayan modüler
            bir yapı sunar.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.number}
              variants={item}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 border-l-2 border-l-cyan-500/40 overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute top-4 right-6 text-5xl font-bold text-cyan-500/10 select-none pointer-events-none font-heading">
                {mod.number}
              </span>

              <div className="relative">
                <h3 className="text-lg font-semibold text-white mb-2 font-heading">
                  {mod.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
