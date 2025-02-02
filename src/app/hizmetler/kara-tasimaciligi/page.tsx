"use client";

import { motion } from "framer-motion";
import { FaTruck, FaRoute, FaMapMarkedAlt, FaShieldAlt, FaWarehouse, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

export default function LandTransport() {
  const services = [
    {
      icon: FaTruck,
      title: "Konteyner Drayage",
      description: "Limanlardan fabrika/depo teslimat ve toplama hizmetleri. Tüm Türkiye'de yaygın araç ağı."
    },
    {
      icon: FaRoute,
      title: "Cross-Border Taşımacılık",
      description: "Avrupa, Orta Doğu ve BDT ülkelerine konteyner ve genel kargo taşımacılığı. Gümrüklü ve gümrüksüz taşıma seçenekleri."
    },
    {
      icon: FaWarehouse,
      title: "Intermodal Taşımacılık",
      description: "Demiryolu bağlantılı konteyner taşımacılığı. Çevreci ve ekonomik çözümler."
    },
    {
      icon: FaShieldAlt,
      title: "Proje Taşımacılığı",
      description: "Ağır ve gabari dışı yükler için özel ekipman ve rota planlaması. Kapıdan kapıya proje lojistiği."
    }
  ];

  const features = [
    "Türkiye Genelinde Geniş Araç Filosu",
    "Konteyner Takip Sistemi",
    "Anlık Teslimat Bildirimi",
    "Profesyonel Sürücü Kadrosu",
    "7/24 Operasyon Desteği",
    "Sigortalı Taşımacılık"
  ];

  const routes = [
    {
      title: "Avrupa Rotaları",
      destinations: "Almanya, Hollanda, İtalya, İspanya, Fransa",
      transitTime: "3-5 gün"
    },
    {
      title: "Orta Doğu Rotaları",
      destinations: "BAE, Suudi Arabistan, Katar, Kuveyt",
      transitTime: "4-6 gün"
    },
    {
      title: "BDT Ülkeleri",
      destinations: "Azerbaycan, Gürcistan, Özbekistan, Kazakistan",
      transitTime: "5-7 gün"
    },
    {
      title: "Balkan Rotaları",
      destinations: "Bulgaristan, Romanya, Sırbistan, Yunanistan",
      transitTime: "2-3 gün"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/land-transport-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </motion.div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-4"
            >
              Kara Taşımacılığı
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Konteyner drayage, cross-border ve intermodal taşımacılık çözümleri.
              Avrupa, Orta Doğu ve BDT ülkelerine kapıdan kapıya teslimat.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <service.icon className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Servis Rotalarımız
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{route.title}</h3>
                <p className="text-blue-400 mb-2">Transit Süre: {route.transitTime}</p>
                <p className="text-gray-400">{route.destinations}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Neden Bizi Tercih Etmelisiniz?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
              >
                <p className="text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Hemen Teklif Alın</h2>
          <p className="text-xl text-gray-300 mb-8">
            Yükünüz için en uygun taşıma çözümü ve fiyat teklifini alın
          </p>
          <Link
            href="/teklif-al"
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-all inline-block"
          >
            Teklif Al
          </Link>
        </div>
      </section>
    </main>
  );
} 