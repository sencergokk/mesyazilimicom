"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, ChevronDown, Shield, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stats = [
  { icon: Activity, label: "Gerçek Zamanlı İzleme" },
  { icon: BarChart3, label: "OEE Analizi" },
  { icon: Shield, label: "Kalite Kontrol" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* --- Background Layers --- */}

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(6,182,212,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-60 pointer-events-none" />

      {/* Floating geometric shapes */}
      <div className="absolute top-[15%] left-[10%] w-32 h-32 border border-cyan-500/20 rounded-lg rotate-12 animate-float pointer-events-none" />
      <div
        className="absolute top-[60%] right-[8%] w-24 h-24 border border-blue-500/20 rounded-full animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-[20%] left-[20%] w-16 h-16 border border-cyan-400/15 rounded-md rotate-45 animate-float pointer-events-none"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-[25%] right-[22%] w-20 h-20 border border-blue-400/10 rounded-lg -rotate-12 animate-spin-slow pointer-events-none"
      />

      {/* --- Content --- */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-cyan-500/30 text-sm text-cyan-400">
            <Sparkles className="w-4 h-4" />
            Üretim Yürütme Sistemi (MES)
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Üretim Süreçlerinizi
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Dijital Çağa
          </span>{" "}
          Taşıyın
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          MES yazılımı ile üretim hattınızı gerçek zamanlı izleyin, kaliteyi
          artırın ve maliyetleri düşürün. Endüstri 4.0&apos;a hazır olun.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#ozellikler"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base transition-transform duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            Detaylı Bilgi
          </a>
          <a
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/20 text-white font-semibold text-base transition-colors duration-200 hover:bg-white/10"
          >
            Blog Yazıları
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{stat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#ozellikler"
          aria-label="Aşağı kaydır"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
