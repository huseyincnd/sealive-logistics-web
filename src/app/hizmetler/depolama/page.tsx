"use client";

import { motion } from "framer-motion";
import { FaWarehouse, FaBoxOpen, FaBarcode, FaShieldAlt, FaTruckLoading, FaChartLine } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

export default function Warehousing() {
  const services = [
    {
      icon: FaWarehouse,
      title: "Antrepo Hizmetleri",
      description: "A Tipi Genel Antrepo hizmetleri. Gümrüklü depolama ve elleçleme işlemleri."
    },
    {
      icon: FaBoxOpen,
      title: "Konteyner Depolama",
      description: "FCL ve LCL yükler için geçici depolama. Yükleme öncesi ve sonrası konteyner park alanı."
    },
    {
      icon: FaTruckLoading,
      title: "Cross-Dock",
      description: "Konteyner aktarma ve parsiyel yük konsolidasyonu. Hızlı elleçleme ve sevkiyat."
    },
    {
      icon: FaShieldAlt,
      title: "Özel Depolama",
      description: "Soğuk hava, tehlikeli madde ve özel koşul gerektiren yükler için özel depolama alanları."
    }
  ];

  const features = [
    "24/7 Güvenlik",
    "CCTV Sistemi",
    "Yangın Önleme",
    "İklimlendirme",
    "Dijital Stok Takibi",
    "Sigortalı Depolama"
  ];

  const facilities = [
    {
      title: "Antrepo Tesisi",
      specs: "10.000 m²",
      features: [
        "Gümrüklü Alan",
        "Raf Sistemi",
        "Forklift Hizmeti",
        "7/24 Kamera",
        "Yangın Sistemi"
      ]
    },
    {
      title: "Konteyner Sahası",
      specs: "20.000 m²",
      features: [
        "Dolu/Boş Konteyner",
        "Reefer Bağlantı",
        "Konteyner Tamir",
        "Yıkama Hizmeti",
        "Reach Stacker"
      ]
    },
    {
      title: "Cross-Dock Alanı",
      specs: "5.000 m²",
      features: [
        "Hızlı Aktarma",
        "Konsolidasyon",
        "Etiketleme",
        "Paketleme",
        "Yük Güvenliği"
      ]
    },
    {
      title: "Soğuk Hava Deposu",
      specs: "2.000 m²",
      features: [
        "Sıcaklık Kontrolü",
        "Nem Kontrolü",
        "Reefer Takibi",
        "FIFO Sistemi",
        "Özel Ekipman"
      ]
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
            style={{ backgroundImage: "url('/warehouse-hero.webp')" }}
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
              Depolama Hizmetleri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Antrepo, konteyner depolama ve cross-dock hizmetleri.
              FCL ve LCL yükleriniz için güvenli ve modern depolama çözümleri.
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Tesis Özellikleri
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

      {/* Facilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Depolama Alanlarımız
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-blue-400 mb-4">{facility.specs}</p>
                <ul className="space-y-3">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
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
            Depolama ihtiyaçlarınız için hızlı teklif alın
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