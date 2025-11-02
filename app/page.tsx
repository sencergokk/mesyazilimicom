export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              MES Yazılımı
            </h1>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              MES Yazılımı Nedir?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              MES (Manufacturing Execution System - Üretim Yürütme Sistemi), 
              üretim süreçlerini gerçek zamanlı olarak izleyen, kontrol eden ve 
              optimize eden bir yazılım sistemidir. Fabrika katı ile üst düzey 
              yönetim sistemleri (ERP) arasında köprü görevi görür.
            </p>
          </div>
        </section>

        {/* What is MES Section */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-slate-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                MES Sistemi Ne İşe Yarar?
              </h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed mb-4">
                  MES yazılımı, üretim süreçlerinin tüm aşamalarını dijital ortamda 
                  yönetir ve şeffaflaştırır. Hammaddenin fabrikaya girişinden, 
                  üretim süreçlerinden, kalite kontrolüne ve son ürünün sevkiyatına 
                  kadar tüm süreçleri takip eder.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Geleneksel üretim yöntemlerinde kağıt bazlı takip sistemleri 
                  kullanılırken, MES sistemi tüm bu verileri dijital ortamda 
                  toplar, analiz eder ve raporlar. Bu sayede üretim verimliliği 
                  artar, hatalar azalır ve karar verme süreçleri hızlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
              MES Yazılımının Temel Özellikleri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Gerçek Zamanlı İzleme",
                  description: "Üretim süreçlerini anlık olarak takip edin. Makine durumları, operatör performansı ve üretim miktarlarını gerçek zamanlı görün."
                },
                {
                  title: "Üretim Takibi",
                  description: "Her bir iş emrini başlangıçtan bitişe kadar izleyin. Hangi operasyonun ne zaman, kim tarafından yapıldığını kaydedin."
                },
                {
                  title: "Kalite Yönetimi",
                  description: "Kalite kontrol noktalarını tanımlayın, test sonuçlarını kaydedin ve uygunsuz ürünleri izole edin."
                },
                {
                  title: "Malzeme Takibi",
                  description: "Ham madde ve ara ürünlerin seri/lot numaralarını takip edin. Tam izlenebilirlik sağlayın."
                },
                {
                  title: "Performans Analizi",
                  description: "OEE (Genel Ekipman Etkinliği) hesaplayın. Makine ve operatör performanslarını ölçün ve analiz edin."
                },
                {
                  title: "Dokümantasyon",
                  description: "Tüm üretim süreçlerini otomatik olarak dokümante edin. İş talimatları, çizimler ve prosedürleri dijital ortamda sunun."
                },
                {
                  title: "Bakım Yönetimi",
                  description: "Önleyici ve düzeltici bakım faaliyetlerini planlayın ve takip edin. Makine arızalarını minimize edin."
                },
                {
                  title: "Kaynak Yönetimi",
                  description: "Personel, ekipman ve malzeme kaynaklarını optimal şekilde planlayın ve kullanın."
                },
                {
                  title: "Raporlama",
                  description: "Detaylı üretim raporları oluşturun. Grafikler ve göstergelerle performansı görselleştirin."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-blue-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
                MES Sistemi Kullanmanın Faydaları
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Üretim Verimliliğinde Artış",
                    description: "Gerçek zamanlı izleme ve analiz sayesinde darboğazlar hızla tespit edilir ve üretim verimliliği %15-30 oranında artar."
                  },
                  {
                    title: "Kalite İyileştirme",
                    description: "Hataların erken tespiti ve süreç kontrolü ile ürün kalitesi artar, hurda oranları düşer."
                  },
                  {
                    title: "Tam İzlenebilirlik",
                    description: "Her ürün için tam geçmiş bilgisi. Hangi hammaddeden, hangi operatör tarafından, hangi makinede üretildiği kaydedilir."
                  },
                  {
                    title: "Stok Optimizasyonu",
                    description: "Gerçek zamanlı malzeme takibi ile stok seviyeleri optimize edilir, fazla stok maliyetleri azalır."
                  },
                  {
                    title: "Hızlı Karar Verme",
                    description: "Anlık veri ve analizler sayesinde yöneticiler daha hızlı ve doğru kararlar alabilir."
                  },
                  {
                    title: "Uyumluluk ve Sertifikasyon",
                    description: "ISO, FDA, GMP gibi standartlara uyum için gerekli dokümantasyon otomatik oluşturulur."
                  },
                  {
                    title: "Kağıtsız Üretim",
                    description: "Dijital iş talimatları ve elektronik kayıtlar ile kağıt kullanımı minimize edilir."
                  },
                  {
                    title: "Maliyet Tasarrufu",
                    description: "Fire azalması, verimlilik artışı ve stok optimizasyonu ile üretim maliyetleri düşer."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MES Modules Section */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
              MES Sistemi Modülleri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "İş Emri Yönetimi",
                  description: "Üretim planlamasından gelen iş emirlerini yönetin. Operasyonları, malzemeleri ve kaynakları tanımlayın."
                },
                {
                  title: "Reçete Yönetimi (BOM)",
                  description: "Ürün reçetelerini tanımlayın. Her ürün için gerekli hammadde, yarı mamul ve operasyonları belirleyin."
                },
                {
                  title: "Rota Yönetimi",
                  description: "Üretim rotalarını oluşturun. Her operasyonun hangi iş merkezinde, ne kadar sürede yapılacağını tanımlayın."
                },
                {
                  title: "Veri Toplama",
                  description: "Makinelerden, sensörlerden ve operatörlerden otomatik/manuel veri toplayın."
                },
                {
                  title: "Üretim Planı Yönetimi",
                  description: "Kısa vadeli üretim planlarını yönetin. Kapasite planlaması yapın ve kaynakları atayın."
                },
                {
                  title: "İzlenebilirlik",
                  description: "Seri/lot numarası bazında tam izlenebilirlik sağlayın. İleri ve geri izleme yapın."
                },
                {
                  title: "Proses Kontrol",
                  description: "Üretim parametrelerini kontrol edin. Tolerans dışı değerlerde alarm verin."
                },
                {
                  title: "Depo Yönetimi",
                  description: "Üretim alanındaki malzeme hareketlerini takip edin. Stok seviyelerini izleyin."
                },
                {
                  title: "Enerji Yönetimi",
                  description: "Üretim süreçlerindeki enerji tüketimini izleyin ve optimize edin."
                },
                {
                  title: "İş Gücü Yönetimi",
                  description: "Operatör performansını izleyin. Yetkinlik bazlı iş ataması yapın."
                }
              ].map((module, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:border-blue-200 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">
                    {module.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-slate-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
                MES Yazılımı Hangi Sektörlerde Kullanılır?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Otomotiv Sanayi",
                  "Elektronik ve Yarı İletken",
                  "İlaç ve Kimya",
                  "Gıda ve İçecek",
                  "Havacılık ve Uzay",
                  "Plastik ve Ambalaj",
                  "Metal İşleme",
                  "Tekstil ve Konfeksiyon",
                  "Tıbbi Cihaz Üretimi",
                  "Enerji ve Batarya Üretimi"
                ].map((industry, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
              Sıkça Sorulan Sorular
            </h3>
            <div className="space-y-6">
              {[
                {
                  question: "MES ile ERP arasındaki fark nedir?",
                  answer: "ERP (Enterprise Resource Planning) sistemleri işletmenin tüm kaynaklarını planlayan üst düzey yönetim sistemleridir. MES ise fabrika katında, üretim süreçlerini gerçek zamanlı yöneten bir sistemdir. MES, ERP'den aldığı üretim emirlerini detaylandırır ve gerçekleşen üretimi ERP'ye bildirir."
                },
                {
                  question: "MES yazılımı hangi sistemlerle entegre olur?",
                  answer: "MES yazılımı üstte ERP, PLM sistemleriyle, altta ise SCADA, PLC, robot kontrol sistemleri gibi otomasyon sistemleriyle entegre olur. Ayrıca IoT sensörleri, kalite ölçüm cihazları ve barkod okuyucular gibi donanımlarla da iletişim kurar."
                },
                {
                  question: "MES sistemi kurulumu ne kadar sürer?",
                  answer: "Süre, fabrikanın büyüklüğüne ve proses karmaşıklığına göre değişir. Küçük bir üretim hattı için 2-3 ay, orta ölçekli bir fabrika için 6-12 ay, büyük ve karmaşık tesisler için 12-24 ay sürebilir."
                },
                {
                  question: "Bulut tabanlı MES mi yoksa yerinde kurulum mu daha iyidir?",
                  answer: "Her iki yaklaşımın da avantajları vardır. Bulut tabanlı MES, düşük başlangıç maliyeti ve kolay ölçeklenebilirlik sunar. Yerinde kurulum ise veri güvenliği ve tam kontrol sağlar. Hibrit modeller de yaygın olarak kullanılmaktadır."
                },
                {
                  question: "MES yazılımı için operatör eğitimi gerekli mi?",
                  answer: "Evet, operatörlerin sistemi etkin kullanabilmesi için eğitim gereklidir. Ancak modern MES sistemleri kullanıcı dostu arayüzlere sahiptir ve genellikle 2-5 günlük bir eğitim yeterli olmaktadır."
                },
                {
                  question: "MES sistemi yatırımının geri dönüş süresi nedir?",
                  answer: "Sektöre ve uygulamaya göre değişmekle birlikte, tipik olarak 1-3 yıl arasındadır. Verimlilik artışı, fire azalması ve kalite iyileştirmeleri sayesinde yatırım geri dönüşü sağlanır."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-slate-100"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                MES Yazılımı: Akıllı Üretimin Temeli
              </h3>
              <div className="space-y-4 text-slate-100 leading-relaxed">
                <p>
                  MES yazılımı, modern üretim tesislerinin dijital dönüşümünde 
                  kritik bir rol oynar. Endüstri 4.0 ve akıllı fabrika kavramlarının 
                  hayata geçirilmesinde temel taşlardan biridir.
                </p>
                <p>
                  Gerçek zamanlı veri toplama, analiz ve raporlama yetenekleri 
                  sayesinde üretim süreçlerinde şeffaflık sağlar. Bu da daha iyi 
                  kararlar, daha yüksek kalite ve daha düşük maliyetler anlamına gelir.
                </p>
                <p>
                  Günümüzde rekabetçi kalabilmek isteyen üretim işletmeleri için 
                  MES sistemi artık bir lüks değil, zorunluluk haline gelmiştir. 
                  Doğru MES çözümü, işletmenizin üretim verimliliğini ve karlılığını 
                  önemli ölçüde artırabilir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              MES Yazılımı
            </h2>
            <p className="text-slate-400 mb-6">
              Üretim Yürütme Sistemleri Hakkında Kapsamlı Bilgi Kaynağı
            </p>
            <div className="text-sm text-slate-500">
              © 2025 MES Yazılımı. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
