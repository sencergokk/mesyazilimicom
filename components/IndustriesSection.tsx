"use client";

import { motion } from "framer-motion";
import {
  Car,
  Cpu,
  Pill,
  UtensilsCrossed,
  Plane,
  Zap,
  FlaskConical,
  Scissors,
  Hammer,
  Package,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

interface Industry {
  icon: LucideIcon;
  name: string;
}

const industries: Industry[] = [
  { icon: Car, name: "Otomotiv" },
  { icon: Cpu, name: "Elektronik" },
  { icon: Pill, name: "İlaç & Farma" },
  { icon: UtensilsCrossed, name: "Gıda & İçecek" },
  { icon: Plane, name: "Havacılık" },
  { icon: Zap, name: "Enerji" },
  { icon: FlaskConical, name: "Kimya" },
  { icon: Scissors, name: "Tekstil" },
  { icon: Hammer, name: "Metal & Makine" },
  { icon: Package, name: "FMCG" },
];

export default function IndustriesSection() {
  return (
    <section id="sektorler" className="py-24 lg:py-32 bg-slate-900/50 relative">
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
            Sektörler
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            MES Yazılımı
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Kullanım Alanları
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            MES çözümleri, kesikli ve süreç tipi üretim yapan tüm sektörlerde
            etkin çözümler sunar.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={item}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <span className="text-sm font-medium text-white">
                  {industry.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
