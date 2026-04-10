"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "MES yazılımı nedir?",
    answer:
      "MES (Manufacturing Execution System), yani Üretim Yürütme Sistemi, üretim süreçlerini gerçek zamanlı olarak izleyen, kontrol eden ve optimize eden bir yazılım platformudur. Hammadde girişinden bitmiş ürüne kadar tüm üretim operasyonlarını dijital ortamda yönetir. MES, üretim hattındaki verileri anlık olarak toplayarak üretim planlaması, kalite kontrol, bakım yönetimi ve performans analizi gibi kritik fonksiyonları entegre bir şekilde sunar.",
  },
  {
    question: "MES ve ERP arasındaki fark nedir?",
    answer:
      "ERP (Enterprise Resource Planning) işletmenin tamamını kapsayan finansal planlama, insan kaynakları ve tedarik zinciri gibi üst düzey yönetim süreçlerine odaklanırken, MES doğrudan üretim sahasına odaklanır. ERP 'ne üretilecek' sorusuna cevap verirken, MES 'nasıl üretilecek ve üretiliyor' sorusuna yanıt verir. İdeal bir yapıda MES ve ERP birbirleriyle entegre çalışarak tam bir üretim ekosistemi oluşturur.",
  },
  {
    question: "MES yazılımı hangi sektörlerde kullanılır?",
    answer:
      "MES yazılımı, kesikli üretim (otomotiv, elektronik, makine), süreç tipi üretim (gıda, ilaç, kimya) ve karma üretim yapan tüm sektörlerde kullanılabilir. Özellikle kalite izlenebilirliğin kritik olduğu ilaç ve gıda sektörleri, yüksek verimlilik gerektiren otomotiv sektörü ve karmaşık üretim süreçlerine sahip havacılık sektörü MES'ten en çok fayda sağlayan alanlar arasındadır.",
  },
  {
    question: "MES yazılımının yatırım getirisi (ROI) nedir?",
    answer:
      "MES yazılımı yatırımları genellikle 12-18 ay içinde kendini amorti eder. Tipik getiriler arasında üretim verimliliğinde %15-30 artış, kalite maliyetlerinde %20-25 azalma, envanter doğruluğunda %99+ iyileşme, kağıt tüketiminde %50-70 azalma ve duruş sürelerinde %20-30 azalma sayılabilir. Yatırım getirisi, işletmenin büyüklüğüne, mevcut dijitalleşme seviyesine ve uygulama kapsamına göre değişkenlik gösterebilir.",
  },
  {
    question: "MES ile OEE nasıl hesaplanır?",
    answer:
      "OEE (Overall Equipment Effectiveness - Genel Ekipman Etkinliği), MES yazılımının en temel performans göstergelerinden biridir. OEE = Kullanılabilirlik × Performans × Kalite formülü ile hesaplanır. MES, makine duruş sürelerini (kullanılabilirlik), fiili üretim hızını (performans) ve hatalı ürün oranını (kalite) otomatik olarak ölçerek gerçek zamanlı OEE değerlerini hesaplar. Dünya sınıfı OEE değeri %85 ve üzeri olarak kabul edilir.",
  },
  {
    question: "MES yazılımı ERP ile nasıl entegre çalışır?",
    answer:
      "MES, ERP sisteminden iş emirlerini, ürün ağaçlarını (BOM), malzeme listelerini ve üretim planlarını alır. Üretim tamamlandığında üretim miktarları, malzeme tüketimleri, kalite verileri ve üretim süreleri ERP'ye geri gönderilir. Bu çift yönlü veri akışı genellikle API, web servis veya middleware platformları üzerinden sağlanır. SAP, Oracle, Microsoft Dynamics gibi yaygın ERP sistemleri ile standart entegrasyon arayüzleri mevcuttur.",
  },
  {
    question: "Endüstri 4.0 ve MES ilişkisi nedir?",
    answer:
      "MES, Endüstri 4.0'ın temel yapı taşlarından biridir. Akıllı fabrika konseptinin merkezinde yer alan MES, IoT sensörlerinden gelen verileri işler, yapay zeka ve makine öğrenmesi algoritmaları ile üretim süreçlerini optimize eder, dijital ikiz (digital twin) teknolojisi ile üretim simülasyonları yapar ve bulut tabanlı mimariler ile her yerden erişim sağlar. MES olmadan Endüstri 4.0 dönüşümü tamamlanamaz.",
  },
  {
    question: "MES yazılımı seçerken nelere dikkat edilmeli?",
    answer:
      "MES yazılımı seçerken göz önünde bulundurulması gereken temel kriterler: sektörünüze özel fonksiyonellik, ölçeklenebilirlik ve modüler yapı, mevcut sistemlerle (ERP, SCADA, PLM) entegrasyon kapasitesi, kullanıcı dostu arayüz, mobil erişim imkanı, bulut veya on-premise deployment seçenekleri, tedarikçinin referansları ve sektör deneyimi, teknik destek ve eğitim hizmetleri, toplam sahip olma maliyeti (TCO) ve uyumluluk sertifikaları (ISA-95, IEC 62264) gibi kriterlerdir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-24 lg:py-32 bg-gray-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Sıkça Sorulan Sorular
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            MES Yazılımı Hakkında
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Merak Edilenler
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-xl border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.08)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
