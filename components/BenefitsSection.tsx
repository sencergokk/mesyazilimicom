"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/* -------------------------------------------------- */
/*  Animated Counter                                   */
/* -------------------------------------------------- */

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const stepTime = 16;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      %{count}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------- */
/*  Data                                               */
/* -------------------------------------------------- */

const stats = [
  { value: 30, label: "Üretim Verimliliğinde Artış" },
  { value: 25, label: "Kalite Maliyetlerinde Azalma" },
  { value: 50, label: "Kağıt Tüketiminde Azalma" },
  { value: 20, label: "Duruş Sürelerinde Azalma" },
];

const benefits = [
  {
    title: "Gerçek Zamanlı Görünürlük",
    description:
      "Üretim süreçlerindeki tüm verilere anlık erişim sağlayarak hızlı karar alma imkanı.",
  },
  {
    title: "Tam İzlenebilirlik",
    description:
      "Hammaddeden bitmiş ürüne kadar tam izlenebilirlik ile geri çağırma süreçlerini hızlandırma.",
  },
  {
    title: "Maliyet Optimizasyonu",
    description:
      "Fire oranlarını azaltarak, enerji tüketimini optimize ederek üretim maliyetlerini düşürme.",
  },
  {
    title: "Regülasyon Uyumu",
    description:
      "ISO, FDA, GMP gibi standartlara uyumu otomatik dokümantasyon ile kolaylaştırma.",
  },
  {
    title: "Entegrasyon Gücü",
    description:
      "ERP, SCADA, PLM ve diğer sistemlerle sorunsuz entegrasyon ile veri silolarını ortadan kaldırma.",
  },
  {
    title: "Rekabet Avantajı",
    description:
      "Endüstri 4.0 dönüşümü ile dijital fabrika vizyonunu gerçekleştirme.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* -------------------------------------------------- */
/*  Component                                          */
/* -------------------------------------------------- */

export default function BenefitsSection() {
  return (
    <section id="avantajlar" className="py-24 lg:py-32 bg-slate-900/50 relative">
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
            Avantajlar
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            MES Yazılımının İşletmenize
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sağladığı Değer
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                  <AnimatedCounter target={stat.value} />
                </div>
                <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Benefits list */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={item}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
