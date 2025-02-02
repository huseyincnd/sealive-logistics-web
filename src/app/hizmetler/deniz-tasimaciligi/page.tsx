"use client";

import { motion } from "framer-motion";
import { FaShip, FaAnchor, FaGlobe, FaRoute, FaBoxOpen, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function SeaTransport() {
  const services = [
    {
      icon: FaBoxOpen,
      title: "FCL (Full Container Load)",
      description: "Maersk, MSC, CMA CGM ve Hapag-Lloyd ile dünya çapında FCL taşımacılık. 20', 40', 40'HC, Reefer ve özel ekipman seçenekleri."
    },
    {
      icon: FaRoute,
      title: "LCL (Less Container Load)",
      description: "Haftalık konsolidasyon servisleri ile parsiyel yükleriniz için ekonomik çözümler. Minimum 1m³'den başlayan opsiyonlar."
    },
    {
      icon: FaShip,
      title: "Konteyner Hattı Servisleri",
      description: "Ana limanlar arası düzenli servisler, rekabetçi hat anlaşmaları ve öncelikli ekipman tahsisi."
    },
    {
      icon: FaShieldAlt,
      title: "Özel Yük Taşıma",
      description: "Tehlikeli madde (IMO), soğuk zincir (Reefer) ve proje yükleri için özel ekipman ve hat çözümleri."
    }
  ];

  const features = [
    "Dünya Çapında 100+ Limanda Servis",
    "Önde Gelen Hatlarla Direkt Anlaşmalar",
    "Online Booking ve Konteyner Takibi",
    "Rekabetçi Hat Fiyatları",
    "7/24 Operasyon Desteği",
    "Door to Door Teslimat"
  ];

  const containerTypes = [
    {
      type: "20' DC",
      specs: "33 m³ / 28.200 kg",
      description: "Standart kuru yükler için"
    },
    {
      type: "40' DC",
      specs: "67 m³ / 28.800 kg",
      description: "Hacimli kuru yükler için"
    },
    {
      type: "40' HC",
      specs: "76 m³ / 28.800 kg",
      description: "Ekstra hacimli yükler için"
    },
    {
      type: "20' RF",
      specs: "28 m³ / 27.700 kg",
      description: "Soğuk zincir taşımaları için"
    },
    {
      type: "40' RF",
      specs: "59 m³ / 29.150 kg",
      description: "Büyük hacimli soğuk zincir için"
    },
    {
      type: "Özel Ekipman",
      specs: "Flat Rack, Open Top, etc.",
      description: "Standart dışı yükler için"
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
            style={{ backgroundImage: "url('/sea-transport-hero.jpg')" }}
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
              Deniz Taşımacılığı
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Dünya'nın önde gelen konteyner hatları ile FCL ve LCL taşımacılık çözümleri. 
              Global acente ağımız ve güçlü hat partnerliklerimiz ile yükünüzü dünyanın her noktasına ulaştırıyoruz.
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

      {/* Container Types */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Konteyner Tipleri
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {containerTypes.map((container, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{container.type}</h3>
                <p className="text-blue-400 mb-2">{container.specs}</p>
                <p className="text-gray-400">{container.description}</p>
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
            Yükünüz için en uygun konteyner hattı ve fiyat teklifini alın
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