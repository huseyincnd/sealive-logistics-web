"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/services-hero.jpg"
            alt="Lojistik hizmetler"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                delay: i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + (i % 2) * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Freight Forwarding Hizmetlerimiz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl"
            >
              Dünya'nın önde gelen konteyner hatları ile FCL ve LCL taşımacılık çözümleri
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={ref} className="py-24 relative">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-32 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-[400px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                    <div className="relative h-full rounded-3xl overflow-hidden border border-white/10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <span className="text-blue-400">✓</span>
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
                    >
                      Detaylı Bilgi
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
          >
            Ek Hizmetlerimiz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link 
                  href={service.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2"
                >
                  <span>Daha Fazla</span>
                  <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Deniz Taşımacılığı",
    description: "Dünya'nın önde gelen konteyner hatları ile FCL ve LCL taşımacılık hizmetleri sunuyoruz.",
    icon: "🚢",
    image: "/sea-transport-hero.jpg",
    link: "/hizmetler/deniz-tasimaciligi",
    features: [
      "FCL - Tüm konteyner tipleri (20DC, 40DC, 40HC, Reefer)",
      "LCL - Parsiyel yükler için konsolidasyon hizmeti",
      "Özel ekipman çözümleri (Flat Rack, Open Top)",
      "Hat bazlı booking ve konteyner takibi",
      "Düzenli servisler ve rekabetçi fiyatlar",
      "Door to Door teslimat seçeneği"
    ],
  },
  {
    title: "Kara Taşımacılığı",
    description: "Avrupa, Orta Doğu ve BDT ülkelerine kapıdan kapıya taşımacılık hizmetleri.",
    icon: "🚛",
    image: "/land-transport-hero.jpg",
    link: "/hizmetler/kara-tasimaciligi",
    features: [
      "Konteyner Drayage Hizmetleri",
      "Cross-Border Taşımacılık",
      "Intermodal Taşımacılık",
      "Proje Kargo Taşımacılığı",
      "Soğuk Zincir Taşımacılığı",
      "Ekspres Teslimat Seçenekleri"
    ],
  },
  {
    title: "Gümrükleme",
    description: "Uzman kadromuzla gümrük süreçlerinizi profesyonelce yönetiyoruz.",
    icon: "📋",
    image: "/customs-hero.webp",
    link: "/hizmetler/gumrukleme",
    features: [
      "İthalat ve İhracat Gümrükleme",
      "Transit Ticaret İşlemleri",
      "Serbest Bölge İşlemleri",
      "Gümrük Danışmanlığı",
      "Dijital Gümrük Takip Sistemi",
      "7/24 Operasyon Desteği"
    ],
  },
  {
    title: "Depolama",
    description: "FCL ve LCL yükleriniz için antrepo ve depolama çözümleri sunuyoruz.",
    icon: "🏭",
    image: "/warehouse-hero.webp",
    link: "/hizmetler/depolama",
    features: [
      "A Tipi Genel Antrepo",
      "Konteyner Depolama Sahası",
      "Cross-Dock Hizmetleri",
      "Soğuk Hava Depoları",
      "24/7 Güvenlik ve CCTV",
      "Dijital Stok Takibi"
    ],
  },
];

const additionalServices = [
  {
    title: "Konteyner Leasing",
    description: "Kısa ve uzun dönem konteyner kiralama çözümleri.",
    icon: "📦",
    link: "/hizmetler/konteyner-leasing",
  },
  {
    title: "Sigorta Hizmetleri",
    description: "Yükleriniz için kapsamlı sigorta çözümleri.",
    icon: "🛡️",
    link: "/hizmetler/sigorta",
  },
  {
    title: "Trade Finance",
    description: "İthalat ve ihracat finansmanı çözümleri.",
    icon: "💰",
    link: "/hizmetler/trade-finance",
  },
  {
    title: "Proje Taşımacılığı",
    description: "Özel proje ve ağır yük taşımacılığı çözümleri.",
    icon: "🏗️",
    link: "/hizmetler/proje-tasimaciligi",
  },
  {
    title: "Depolama & Dağıtım",
    description: "Antrepo ve depolama hizmetleri.",
    icon: "🏭",
    link: "/hizmetler/depolama",
  },
  {
    title: "Danışmanlık",
    description: "Dış ticaret ve lojistik danışmanlığı.",
    icon: "💡",
    link: "/hizmetler/danismanlik",
  }
]; 