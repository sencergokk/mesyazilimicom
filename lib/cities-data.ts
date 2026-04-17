export interface CityData {
  slug: string;
  name: string;
  nameLower: string;
  region: string;
  population: string;
  industries: string[];
  industrialZones: string[];
  description: string;
  intro: string;
  whyHere: string;
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
}

export const cities: CityData[] = [
  {
    slug: "ankara-mes-firmasi",
    name: "Ankara",
    nameLower: "ankara",
    region: "İç Anadolu",
    population: "5.7 milyon",
    industries: [
      "Savunma Sanayi",
      "Otomotiv Yan Sanayi",
      "Makine İmalatı",
      "Gıda",
      "İlaç",
      "Elektronik",
    ],
    industrialZones: [
      "OSTİM OSB",
      "İvedik OSB",
      "ASO 1. OSB",
      "Sincan OSB",
      "Başkent OSB",
      "Polatlı OSB",
    ],
    description:
      "Ankara MES firması olarak savunma sanayi, otomotiv yan sanayi ve makine imalatı sektörlerine özel üretim yürütme sistemi (MES) yazılımı çözümleri sunuyoruz. OSTİM, İvedik ve Sincan OSB'deki üreticiler için özelleştirilmiş MES sistemi.",
    intro:
      "Ankara, Türkiye'nin savunma sanayi başkenti olarak ileri imalat teknolojilerine en yüksek talebin olduğu şehirlerden biridir. OSTİM ve İvedik OSB'de bulunan 5.000+ firma, Endüstri 4.0 dönüşümünde MES yazılımına ihtiyaç duymaktadır.",
    whyHere:
      "Ankara'daki savunma sanayi tedarikçileri MIL-STD ve AS9100 gibi uluslararası kalite standartlarına uyum sağlamak zorundadır. MES yazılımı, parça izlenebilirliği (lot/serial trace), ölçüm verilerinin dijital kaydı ve kalite raporlamasını otomatikleştirerek bu standartlara uyumu kolaylaştırır.",
    stats: [
      { value: "5.000+", label: "OSTİM OSB Firma Sayısı" },
      { value: "₺180 Milyar", label: "Yıllık Savunma İhracatı" },
      { value: "%32", label: "Türkiye Savunma Üretimi Payı" },
    ],
    faqs: [
      {
        q: "Ankara'da MES yazılımı kullanan firmalar hangi sektörlerden?",
        a: "Ankara'da MES yazılımını yoğun olarak savunma sanayi (ASELSAN, ROKETSAN, TUSAŞ tedarikçileri), otomotiv yan sanayi (MAN, BMC tedarikçileri), makine imalatı ve ilaç firmaları kullanmaktadır. OSTİM OSB'deki 5.000'i aşkın KOBİ için ölçeklenebilir MES çözümleri mevcuttur.",
      },
      {
        q: "Ankara MES firmaları hangi standartlara uyumlu çözümler sunar?",
        a: "Ankara'da hizmet veren MES firmaları ISA-95, AS9100 (havacılık), IATF 16949 (otomotiv), ISO 9001 ve MIL-STD savunma standartlarına uyumlu çözümler sunar. Savunma sektöründe parça izlenebilirliği zorunluluğu nedeniyle MES'in lot/serial trace özelliği kritiktir.",
      },
      {
        q: "OSTİM OSB'de MES yazılımı kurulum süresi ne kadardır?",
        a: "OSTİM ve İvedik OSB'deki KOBİ ölçekli işletmelerde tipik MES yazılımı kurulumu 8-16 hafta arasında tamamlanır. Modüler yapı sayesinde önce kritik modüller (üretim takibi, OEE) devreye alınır, ardından kalite, bakım ve raporlama modülleri eklenir.",
      },
    ],
  },
  {
    slug: "istanbul-mes-firmasi",
    name: "İstanbul",
    nameLower: "istanbul",
    region: "Marmara",
    population: "16 milyon",
    industries: [
      "Tekstil",
      "Otomotiv",
      "Elektronik",
      "Kimya",
      "Gıda",
      "İlaç",
      "Lojistik",
    ],
    industrialZones: [
      "İkitelli OSB",
      "Tuzla OSB",
      "Beylikdüzü OSB",
      "Dudullu OSB",
      "Hadımköy OSB",
      "Çerkezköy OSB",
    ],
    description:
      "İstanbul MES firması olarak Marmara Bölgesi'nin en büyük üretim merkezinde tekstil, otomotiv, kimya ve elektronik sektörlerine MES yazılımı çözümleri sunuyoruz. Tuzla, İkitelli, Dudullu OSB'deki fabrikalar için tam entegre MES sistemi.",
    intro:
      "İstanbul, Türkiye'nin sanayi GSYH'sinin %27'sini üreten ve 60.000'i aşkın imalatçı barındıran metropol. Tuzla OSB'den İkitelli'ye, Dudullu'dan Beylikdüzü'ne uzanan üretim koridorunda MES yazılımı, sıkışık üretim alanlarında verimliliği artıran kritik bir çözüm.",
    whyHere:
      "İstanbul'da yer kısıtı, yüksek işçilik maliyetleri ve sıkı teslim zamanları üreticileri MES ile gerçek zamanlı izleme yapmaya zorluyor. MES, OEE'yi ortalama %15-25 artırarak mevcut tesisten daha fazla üretim çıkarmayı mümkün kılar; yeni tesis yatırımı yerine mevcut kapasiteyi optimize eder.",
    stats: [
      { value: "60.000+", label: "İstanbul İmalatçı Firma" },
      { value: "%27", label: "Türkiye Sanayi GSYH Payı" },
      { value: "₺2.4 Trilyon", label: "Yıllık Üretim Değeri" },
    ],
    faqs: [
      {
        q: "İstanbul'da MES yazılımı en çok hangi OSB'lerde tercih ediliyor?",
        a: "İstanbul'da MES yazılımı en yoğun olarak Tuzla OSB (otomotiv ve gemi inşa), İkitelli OSB (KOBİ ve tekstil), Dudullu OSB (otomotiv yan sanayi), Beylikdüzü OSB (gıda ve kimya) ve Hadımköy bölgesinde tercih edilmektedir. Çerkezköy OSB ise Trakya tarafının büyüyen MES pazarıdır.",
      },
      {
        q: "İstanbul MES firmaları çok vardiyalı üretim için uygun mu?",
        a: "Evet, İstanbul'daki MES çözümleri 7/24 ve çok vardiyalı (3 vardiya) üretim modellerine tam uyumludur. Vardiya bazlı OEE raporlama, vardiya teslim notları, operatör performans karşılaştırması ve gece vardiyası sapma alarmları standart özellikler arasındadır.",
      },
      {
        q: "İstanbul'da küçük bir tekstil atölyesi MES kullanabilir mi?",
        a: "Evet. SaaS tabanlı MES çözümleri sayesinde 20-50 makinelik İstanbul'daki bir konfeksiyon atölyesi bile aylık abonelikle MES kullanabilir. Tablet/Android terminal ile makine başında veri girişi yapılır; sunucu yatırımı gerekmez. Aylık maliyet 5.000-15.000 TL aralığında başlar.",
      },
    ],
  },
  {
    slug: "izmir-mes-firmasi",
    name: "İzmir",
    nameLower: "izmir",
    region: "Ege",
    population: "4.4 milyon",
    industries: [
      "Otomotiv",
      "Tekstil",
      "Gıda",
      "Kimya",
      "Demir-Çelik",
      "İçecek",
    ],
    industrialZones: [
      "Atatürk OSB (AOSB)",
      "Kemalpaşa OSB",
      "İTOB OSB",
      "Aliağa Kimya İhtisas OSB",
      "Tire OSB",
      "Pancar OSB",
    ],
    description:
      "İzmir MES firması olarak Ege Bölgesi'nin sanayi başkenti İzmir'de otomotiv, gıda ve kimya sektörlerine MES yazılımı çözümleri sunuyoruz. Atatürk OSB, Kemalpaşa OSB ve Aliağa'daki fabrikalar için MES sistemi.",
    intro:
      "İzmir, Türkiye'nin ihracat üretiminin %10'unu gerçekleştiren ve liman avantajı ile dış ticarete yönelik üretimin merkezi. Atatürk OSB ve Kemalpaşa OSB'deki binlerce ihracatçı firma, müşteri zincirlerinde dijital izlenebilirlik için MES yazılımına yatırım yapıyor.",
    whyHere:
      "İhracata yönelik İzmirli üreticiler, Avrupa müşterilerinin (özellikle otomotiv OEM ve büyük gıda zincirleri) talep ettiği EDI entegrasyonu, üretim raporu ve kalite belgesi otomasyonunu MES ile sağlar. Aliağa'daki kimya ve demir-çelik tesislerinde ise süreç tipi MES ile reçete yönetimi ve emisyon takibi öne çıkar.",
    stats: [
      { value: "%10", label: "Türkiye İhracat Üretim Payı" },
      { value: "1.700+", label: "Atatürk OSB Firma Sayısı" },
      { value: "₺95 Milyar", label: "Yıllık İhracat Değeri" },
    ],
    faqs: [
      {
        q: "İzmir'de hangi OSB'lerde MES yazılımı yaygın?",
        a: "İzmir'de MES yazılımı en yaygın olarak Atatürk OSB (Çiğli), Kemalpaşa OSB, İTOB OSB (Menderes), Aliağa Kimya İhtisas OSB ve Pancar OSB'de kullanılmaktadır. Özellikle Kemalpaşa OSB'deki otomotiv ve metal işleme firmaları MES'i 2020 sonrası hızla benimsemiştir.",
      },
      {
        q: "İzmir'deki ihracatçı firmalar için MES'in EDI entegrasyonu var mı?",
        a: "Evet, İzmir'deki MES çözümleri Avrupa'daki büyük OEM'lerin (Ford, Renault, Bosch vb.) talep ettiği EDI/VDA mesaj formatlarını destekler. Üretim siparişi, sevkiyat bildirimi (DESADV) ve fatura mesajları otomatik üretilir; manuel veri girişi ortadan kalkar.",
      },
      {
        q: "Aliağa'daki proses tesisleri için MES uygun mudur?",
        a: "Aliağa'daki kimya ve metal tesisleri için süreç tipi (process) MES çözümleri kullanılır. Bu çözümler reçete (recipe) yönetimi, batch izlenebilirlik, kütle dengesi (mass balance) ve gerçek zamanlı emisyon takibi sunar. ISA-88 standardına uyumludur.",
      },
    ],
  },
  {
    slug: "bursa-mes-firmasi",
    name: "Bursa",
    nameLower: "bursa",
    region: "Marmara",
    population: "3.2 milyon",
    industries: [
      "Otomotiv",
      "Tekstil",
      "Beyaz Eşya",
      "Makine İmalatı",
      "Mobilya",
    ],
    industrialZones: [
      "Bursa OSB (BOSB)",
      "Nilüfer OSB",
      "Demirtaş OSB (DOSAB)",
      "Hasanağa OSB",
      "İnegöl OSB",
      "TOSB Otomotiv OSB",
    ],
    description:
      "Bursa MES firması olarak Türkiye'nin otomotiv başkenti Bursa'da OEM ve yan sanayi firmalarına özel MES yazılımı çözümleri sunuyoruz. BOSB, TOSB ve Nilüfer OSB'deki üreticiler için IATF 16949 uyumlu MES sistemi.",
    intro:
      "Bursa, Türkiye'de üretilen her 2 otomobilden 1'inin çıktığı şehir. TOFAŞ, OYAK Renault, Karsan ve binlerce yan sanayi firmasıyla otomotiv üretiminin kalbi. Bursa'daki MES yazılımı pazarı, OEM'lerin yan sanayiye getirdiği IATF 16949 ve traceability zorunluluğu ile en olgun pazarlardan biri.",
    whyHere:
      "Bursa'daki otomotiv üreticileri OEM zincirinde tedarikçi onay süreçlerinde (PPAP, APQP) MES verilerini sunmak zorundadır. Parça başına lot bilgisi, ölçüm verileri (CMM, gauge), uygunsuzluk (NCR) takibi ve geri çağırma (recall) hazırlığı MES olmadan mümkün değildir.",
    stats: [
      { value: "%50", label: "Türkiye Otomotiv Üretimi Payı" },
      { value: "1.800+", label: "Otomotiv Yan Sanayi Firması" },
      { value: "₺550 Milyar", label: "Yıllık Otomotiv İhracatı" },
    ],
    faqs: [
      {
        q: "Bursa'daki otomotiv yan sanayi için en uygun MES nedir?",
        a: "Bursa'daki otomotiv yan sanayi firmaları için IATF 16949 uyumlu, OEM portalları (Renault SQA, Ford SREA, TOFAŞ Q-Cockpit) ile entegre çalışabilen, EDI mesajlaşmasını destekleyen ve PPAP/APQP süreçlerini dijitalleştiren MES çözümleri en uygundur.",
      },
      {
        q: "TOSB OSB'deki firmalar için MES neden kritik?",
        a: "TOSB Otomotiv İhtisas OSB'deki firmalar, OEM'lerle gerçek zamanlı veri paylaşımı (real-time supplier data exchange) zorunluluğu ile karşı karşıya. MES yazılımı bu veriyi sağlar; aynı zamanda OEE ölçümü ile OEM auditlerinde performans gösterilebilir.",
      },
      {
        q: "Bursa MES firmaları tekstil sektörüne de hizmet veriyor mu?",
        a: "Evet, Bursa'nın güçlü tekstil ve havlu sektörü için de özel MES çözümleri vardır. DOSAB ve İnegöl bölgesindeki tekstil firmaları için dokuma/örgü makinesi entegrasyonu, sipariş bazlı parti takibi ve kumaş kalite kontrol modülleri sunulur.",
      },
    ],
  },
  {
    slug: "kocaeli-mes-firmasi",
    name: "Kocaeli",
    nameLower: "kocaeli",
    region: "Marmara",
    population: "2.1 milyon",
    industries: [
      "Otomotiv",
      "Petrokimya",
      "Demir-Çelik",
      "Lastik",
      "Kağıt",
      "İlaç",
    ],
    industrialZones: [
      "GEBKİM OSB",
      "Gebze OSB",
      "TOSB Otomotiv",
      "Çayırova OSB",
      "Dilovası OSB",
      "Köseköy OSB",
    ],
    description:
      "Kocaeli MES firması olarak Türkiye'nin sanayi yoğunluğu en yüksek ili Kocaeli'de otomotiv (Ford, Hyundai), petrokimya (TÜPRAŞ) ve ağır sanayi tesislerine MES yazılımı çözümleri sunuyoruz. GEBKİM, Gebze ve Dilovası OSB için MES sistemi.",
    intro:
      "Kocaeli, Türkiye sanayi üretiminin %13'ünü tek başına gerçekleştiren ve OEM yatırımlarının (Ford Otosan, Hyundai Assan) merkezi. GEBKİM ve Dilovası'ndaki kimya tesisleri ile Gebze'deki binlerce yan sanayi firması, MES yazılımı için Türkiye'nin en yoğun talep gören bölgelerinden biri.",
    whyHere:
      "Kocaeli'deki büyük tesisler (Ford Otosan Gölcük, TÜPRAŞ İzmit) MES'i operasyonel mükemmellik (Operational Excellence) programlarının omurgası olarak kullanır. GEBKİM'deki kimya firmaları için ise ISA-88 batch yönetimi, REACH uyumu ve tehlikeli madde izlenebilirliği MES'in temel işlevleridir.",
    stats: [
      { value: "%13", label: "Türkiye Sanayi GSYH Payı" },
      { value: "13", label: "Aktif OSB Sayısı" },
      { value: "2.500+", label: "Büyük Ölçekli İmalatçı" },
    ],
    faqs: [
      {
        q: "Kocaeli'deki büyük OEM'ler hangi MES sistemlerini kullanır?",
        a: "Ford Otosan Gölcük, Hyundai Assan İzmit ve diğer büyük OEM'ler genellikle global MES platformlarını (SAP DM, Siemens Opcenter, Rockwell FactoryTalk) kullanır. Yan sanayi tedarikçileri ise yerel MES çözümleriyle bu OEM'lerin sistemlerine EDI ile entegre olur.",
      },
      {
        q: "GEBKİM OSB'deki kimya tesisleri için süreç MES nedir?",
        a: "GEBKİM'deki kimya tesisleri için ISA-88 standardına uyumlu süreç (process) MES çözümleri kullanılır. Bu sistemler reçete yönetimi, batch izlenebilirlik, alarm/event yönetimi (S88), elektronik batch kayıtları (EBR) ve regülasyon raporlama sunar.",
      },
      {
        q: "Kocaeli'deki KOBİ'ler için uygun MES paketi var mı?",
        a: "Evet, Gebze ve Çayırova'daki KOBİ ölçekli yan sanayi firmaları için modüler ve ekonomik MES paketleri mevcuttur. Sadece üretim takibi ve OEE modüllerinden başlayan paketler aylık 8.000-20.000 TL aralığında konumlanır; ihtiyaca göre kalite ve bakım modülleri eklenir.",
      },
    ],
  },
  {
    slug: "konya-mes-firmasi",
    name: "Konya",
    nameLower: "konya",
    region: "İç Anadolu",
    population: "2.3 milyon",
    industries: [
      "Tarım Makinaları",
      "Otomotiv Yan Sanayi",
      "Döküm",
      "Gıda",
      "Mobilya",
      "Ayakkabı",
    ],
    industrialZones: [
      "Konya OSB (KOS)",
      "Konya Ereğli OSB",
      "Akşehir OSB",
      "Beyşehir OSB",
      "Seydişehir OSB",
    ],
    description:
      "Konya MES firması olarak İç Anadolu'nun sanayi başkenti Konya'da tarım makinaları, otomotiv yan sanayi ve döküm sektörlerine MES yazılımı çözümleri sunuyoruz. Konya OSB ve çevre OSB'lerdeki üreticiler için MES sistemi.",
    intro:
      "Konya, Türkiye tarım makinaları üretiminin %65'ini gerçekleştiren ve son 10 yılda otomotiv yan sanayi yatırımlarıyla hızla büyüyen bir üretim merkezi. Konya OSB'deki 600+ firma ile İç Anadolu'nun en büyük endüstriyel havzası.",
    whyHere:
      "Konya'daki tarım makinaları üreticileri sezonluk talep dalgalanmasıyla mücadele eder. MES yazılımı, sezon öncesi kapasite planlamasını optimize eder; düşük sezonda bakım planlama modülü ile makine hazırlığını yönetir. Otomotiv yan sanayide ise Bursa OEM'lerine EDI ile bağlanma kabiliyeti kritik.",
    stats: [
      { value: "%65", label: "Türkiye Tarım Makinaları Üretimi" },
      { value: "600+", label: "Konya OSB Firma Sayısı" },
      { value: "₺25 Milyar", label: "Yıllık İhracat Değeri" },
    ],
    faqs: [
      {
        q: "Konya'da tarım makinaları üreticileri için MES neler sağlar?",
        a: "Konya'daki tarım makinaları üreticileri için MES; sezonluk üretim planlama, varyant yönetimi (farklı traktör/biçerdöver modelleri için BOM), montaj hattı takibi, parça izlenebilirliği (lot/serial trace) ve garanti dönemi için satış sonrası izleme sağlar.",
      },
      {
        q: "Konya OSB'deki KOBİ'ler için MES yatırımı mantıklı mı?",
        a: "Evet, Konya OSB'deki orta ölçekli (50-200 kişilik) firmalar için MES yatırımı 12-24 ay içinde geri dönüş sağlar. Ortalama OEE artışı %12-18, fire/iskarta azalması %20-30 seviyesindedir. KOSGEB ve TÜBİTAK destekleri de MES yatırımını kapsar.",
      },
      {
        q: "Konya MES firmaları döküm sektörüne uygun çözüm sunuyor mu?",
        a: "Evet, Konya'daki döküm tesisleri için özel MES modülleri vardır. Bu modüller ergitme reçetesi yönetimi, fırın sıcaklık takibi, kalıp ömür yönetimi, döküm ağırlık kontrolü ve geri dönüşüm metal takibi gibi sektöre özel ihtiyaçları karşılar.",
      },
    ],
  },
  {
    slug: "gaziantep-mes-firmasi",
    name: "Gaziantep",
    nameLower: "gaziantep",
    region: "Güneydoğu Anadolu",
    population: "2.2 milyon",
    industries: [
      "Tekstil",
      "Halı",
      "Gıda",
      "Plastik",
      "Makine İmalatı",
      "Ambalaj",
    ],
    industrialZones: [
      "Gaziantep 1. OSB",
      "Gaziantep 2. OSB",
      "Gaziantep 3. OSB",
      "Gaziantep 4. OSB",
      "Gaziantep 5. OSB",
      "Nizip OSB",
    ],
    description:
      "Gaziantep MES firması olarak Güneydoğu Anadolu'nun ihracat şampiyonu Gaziantep'te tekstil, halı, gıda ve plastik sektörlerine MES yazılımı çözümleri sunuyoruz. 5 OSB'deki üreticiler için ölçeklenebilir MES sistemi.",
    intro:
      "Gaziantep, Türkiye'nin ihracatının %10'unu yapan ve makine halıcılıkta dünya lideri olan şehir. 5 OSB'de 1.500+ firma ile Güneydoğu'nun üretim üssü. MES yazılımı pazarı, halı ve tekstil firmalarının dijital dönüşüm yatırımlarıyla hızla büyüyor.",
    whyHere:
      "Gaziantep'teki halı ve tekstil firmaları, çok ülkeli ihracat müşteri portföyüne (ABD, Avrupa, Körfez) hizmet verir. MES yazılımı, sipariş bazlı üretim planlama, dokuma makinesi entegrasyonu (Karl Mayer, Picanol vb.), boyahane reçete kontrolü ve sevkiyat bazlı kalite raporlamasını otomatikleştirir.",
    stats: [
      { value: "%10", label: "Türkiye Toplam İhracat Payı" },
      { value: "1.500+", label: "OSB Firma Sayısı" },
      { value: "Dünya 1.", label: "Makine Halısı Üretimi" },
    ],
    faqs: [
      {
        q: "Gaziantep'teki halı üreticileri için MES neler sağlar?",
        a: "Gaziantep'teki makine halısı üreticileri için MES; dokuma tezgahı entegrasyonu (Schönherr, Vandewiele), iplik tüketim takibi, desen/varyant yönetimi, kalite kontrol noktaları (raw inspection, finishing), boyahane reçete yönetimi ve ihracat sevkiyat raporlaması sunar.",
      },
      {
        q: "Gaziantep'teki gıda firmaları için MES'in faydası nedir?",
        a: "Gaziantep'teki baharat, fıstık ve gıda firmaları için MES; lot bazlı izlenebilirlik (gıda güvenliği), CCP/HACCP noktası takibi, son kullanma tarihi yönetimi, alerjen kontrolü ve ihracat müşterisi başına ürün spesifikasyonu yönetimi sağlar.",
      },
      {
        q: "Gaziantep OSB'lerde MES yazılımı kurulumu ne kadar sürer?",
        a: "Gaziantep'teki orta ölçekli (100-300 makineli) tekstil veya halı firmasında MES kurulumu 12-20 hafta arasında tamamlanır. Önce 4-6 hafta analiz ve makine entegrasyonu yapılır; ardından modüller faz faz devreye alınır. Eğitim ve hyper-care dönemi 4 hafta sürer.",
      },
    ],
  },
  {
    slug: "kayseri-mes-firmasi",
    name: "Kayseri",
    nameLower: "kayseri",
    region: "İç Anadolu",
    population: "1.4 milyon",
    industries: [
      "Mobilya",
      "Tekstil",
      "Gıda",
      "Metal İşleme",
      "Kablo",
      "Beyaz Eşya",
    ],
    industrialZones: [
      "Kayseri OSB",
      "İncesu OSB",
      "Mimarsinan OSB",
      "Develi OSB",
      "Yeşilhisar OSB",
    ],
    description:
      "Kayseri MES firması olarak Türkiye'nin mobilya başkenti Kayseri'de mobilya, metal işleme ve tekstil sektörlerine MES yazılımı çözümleri sunuyoruz. Kayseri OSB ve İncesu OSB'deki üreticiler için MES sistemi.",
    intro:
      "Kayseri, Türkiye mobilya üretiminin %65'ini gerçekleştiren ve İstanbul-Bursa eksenindeki üreticilere alternatif olarak hızla büyüyen bir sanayi şehri. Kayseri OSB'deki 1.000+ firma, dijital dönüşümle MES yazılımı yatırımlarına yöneliyor.",
    whyHere:
      "Kayseri'deki mobilya üreticileri perakende zincirleri (IKEA, Koçtaş) ve ihracat müşterileri için yüksek hacimde, kısa teslim süreli üretim yapar. MES yazılımı, CNC ve kenar bandı makinelerinin entegrasyonu, parça takibi (her panel için barkod), montaj sırası optimizasyonu ve sevkiyat ambalajlama takibini sağlar.",
    stats: [
      { value: "%65", label: "Türkiye Mobilya Üretim Payı" },
      { value: "1.000+", label: "Kayseri OSB Firma Sayısı" },
      { value: "₺40 Milyar", label: "Yıllık Üretim Değeri" },
    ],
    faqs: [
      {
        q: "Kayseri'deki mobilya üreticileri için MES neden gerekli?",
        a: "Kayseri'deki mobilya üreticileri yüksek varyant (renk, boyut, malzeme) ve düşük adet işleriyle çalışır. MES yazılımı, her sipariş için BOM patlatma, CNC programlarının makineye otomatik gönderimi, parça/komponent takibi ve montaj seti hazırlığını dijitalleştirir.",
      },
      {
        q: "Kayseri OSB'de hangi makinelerle MES entegre edilir?",
        a: "Kayseri'deki mobilya tesislerinde MES; Homag, Biesse, SCM CNC merkezleri, Holzma kesim, IMA kenar bandı, Cefla boyahane hatları ve Brema delme makineleriyle OPC-UA veya makine PLC'leri üzerinden entegre çalışır.",
      },
      {
        q: "Kayseri'deki KOBİ mobilyacılar için MES uygun mu?",
        a: "Evet. 30-100 çalışanlı Kayseri'deki KOBİ mobilya firmaları için bulut tabanlı MES paketleri mevcuttur. Tablet üzerinden iş istasyonu takibi, basit OEE raporlaması ve sipariş ilerleme görünürlüğü ile küçük ölçekli işletmeler de MES'ten faydalanır.",
      },
    ],
  },
  {
    slug: "adana-mes-firmasi",
    name: "Adana",
    nameLower: "adana",
    region: "Akdeniz",
    population: "2.3 milyon",
    industries: [
      "Tekstil",
      "Gıda",
      "Tarım",
      "Kimya",
      "Plastik",
      "Otomotiv Yan Sanayi",
    ],
    industrialZones: [
      "Adana Hacı Sabancı OSB",
      "Ceyhan Kimya OSB",
      "Kozan OSB",
      "İmamoğlu OSB",
    ],
    description:
      "Adana MES firması olarak Çukurova'nın sanayi merkezi Adana'da tekstil, gıda, kimya ve tarım sektörlerine MES yazılımı çözümleri sunuyoruz. Adana Hacı Sabancı OSB ve Ceyhan Kimya OSB'deki üreticiler için MES sistemi.",
    intro:
      "Adana, Çukurova'nın bereketli tarım arazileri üzerinde gıda işleme, tekstil ve son yıllarda Ceyhan Kimya OSB ile büyüyen petrokimya yatırımlarının merkezi. Adana Hacı Sabancı OSB'deki 320+ firma, MES yazılımı ile verimliliği artırmaya odaklanıyor.",
    whyHere:
      "Adana'daki tekstil ve gıda firmaları sezonsel hammadde tedariki (pamuk, narenciye, buğday) ile çalışır. MES yazılımı, hammadde lot izlenebilirliği, sezon başlangıç-bitiş kapasite planlaması ve stok rotasyonunu otomatikleştirir. Ceyhan Kimya OSB için ise ISA-88 süreç MES çözümleri kritik.",
    stats: [
      { value: "320+", label: "Hacı Sabancı OSB Firma" },
      { value: "%8", label: "Türkiye Tarım Üretimi Payı" },
      { value: "₺18 Milyar", label: "Yıllık Sanayi İhracatı" },
    ],
    faqs: [
      {
        q: "Adana'daki tekstil firmaları MES'i nasıl kullanıyor?",
        a: "Adana'daki tekstil firmaları MES'i; pamuk lot takibi, iplik üretim hattı entegrasyonu, dokuma/örme makine performansı (OEE), boya reçete yönetimi ve ihracat müşterisi başına kalite raporlaması için kullanır. Özellikle denim üretiminde lot bazlı izlenebilirlik kritiktir.",
      },
      {
        q: "Ceyhan Kimya OSB'deki tesisler için MES gerekli mi?",
        a: "Evet, Ceyhan Kimya OSB'deki proses tesisleri için ISA-88 uyumlu süreç MES çözümleri kullanılır. Bu çözümler batch yönetimi, reaktör/tank takibi, reçete versiyonlama, EBR (Electronic Batch Records) ve REACH/SEVESO regülasyon raporlamasını sağlar.",
      },
      {
        q: "Adana'daki gıda fabrikaları için MES neler sağlar?",
        a: "Adana'daki narenciye, baharat ve unlu mamul fabrikaları için MES; HACCP/CCP noktası takibi, lot bazlı izlenebilirlik (forward/backward trace), son kullanma tarihi yönetimi, geri çağırma simülasyonu ve metal dedektör/ağırlık kontrolü entegrasyonunu sunar.",
      },
    ],
  },
];

export function getCity(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
