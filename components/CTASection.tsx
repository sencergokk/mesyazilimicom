"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            MES Yazılımı ile
            <br />
            Üretiminizi Dönüştürün
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Üretim süreçlerinizi dijitalleştirmek, verimliliği artırmak ve
            rekabet gücünüzü yükseltmek için MES yazılımı hakkında detaylı bilgi
            edinin.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-white text-gray-950 font-semibold rounded-xl px-8 py-4 text-base transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105"
          >
            Blog Yazılarını İnceleyin
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-slate-500 text-sm mt-8">
            Veya aşağı kaydırarak daha fazla bilgi edinin
          </p>
        </motion.div>
      </div>
    </section>
  );
}
