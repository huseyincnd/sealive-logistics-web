"use client";

import { motion } from "framer-motion";
import { FaFileContract, FaClipboardCheck, FaGlobe, FaShieldAlt, FaClock, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';

export default function CustomsClearance() {
  const services = [
    {
      icon: FaFileContract,
      title: "İthalat Gümrükleme",
      description: "FCL ve LCL yükleriniz için komple gümrükleme hizmetleri. Belge hazırlama, vergi hesaplama ve ödeme takibi."
    },
    {
      icon: FaClipboardCheck,
      title: "İhracat Gümrükleme",
      description: "Konteyner ve parsiyel yükler için ihracat gümrük işlemleri. Doğru GTİP ve belge yönetimi."
    },
    {
      icon: FaGlobe,
      title: "Transit Gümrükleme",
      description: "Aktarmalı yükler için transit gümrük işlemleri. T1/T2 belgeleri ve teminat yönetimi."
    },
    {
      icon: FaShieldAlt,
      title: "Danışmanlık",
      description: "Gümrük mevzuatı, vergi optimizasyonu ve dış ticaret danışmanlığı. Uzman kadro desteği."
    }
  ];

  const features = [
    "Online Gümrük Takibi",
    "7/24 Operasyon Desteği",
    "Dijital Arşivleme",
    "Mevzuat Güncellemeleri",
    "Vergi Optimizasyonu",
    "Uzman Müşavirlik"
  ];

  const specialServices = [
    {
      title: "Antrepo Hizmetleri",
      items: [
        "Geçici Depolama",
        "Gümrüklü Depolama",
        "Elleçleme İşlemleri",
        "Stok Yönetimi",
        "Envanter Takibi"
      ]
    },
    {
      title: "Özel İzin ve Belgeler",
      items: [
        "CE Belgelendirme",
        "TSE Uygunluk",
        "Gözetim Belgesi",
        "Kontrol Belgesi",
        "Sağlık Sertifikası"
      ]
    },
    {
      title: "Rejim İşlemleri",
      items: [
        "Dahilde İşleme",
        "Hariçte İşleme",
        "Geçici İthalat",
        "Serbest Bölge",
        "Geri Gelen Eşya"
      ]
    },
    {
      title: "Sektörel Çözümler",
      items: [
        "Tekstil ve Hazır Giyim",
        "Otomotiv ve Yedek Parça",
        "Kimya ve Tehlikeli Madde",
        "Gıda ve Tarım Ürünleri",
        "Makine ve Ekipman"
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
            style={{ backgroundImage: "url('/customs-hero.webp')" }}
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
              Gümrükleme Hizmetleri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              FCL ve LCL yükleriniz için komple gümrükleme çözümleri.
              İthalat, ihracat ve transit işlemlerinizde uzman kadromuzla yanınızdayız.
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

      {/* Special Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Özel Hizmetlerimiz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-6">{service.title}</h3>
                <ul className="space-y-4 text-gray-300">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>{item}</span>
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
            Gümrükleme işlemleriniz için hızlı teklif alın
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