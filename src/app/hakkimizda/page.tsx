"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGlobeAmericas, FaHandshake, FaShip, FaAward } from "react-icons/fa";

export default function About() {
  const stats = [
    {
      number: "50+",
      label: "Konteyner Hattı Partneri",
    },
    {
      number: "100+",
      label: "Servis Verilen Liman",
    },
    {
      number: "10K+",
      label: "Başarılı Sevkiyat",
    },
    {
      number: "24/7",
      label: "Operasyon Desteği",
    },
  ];

  const values = [
    {
      icon: FaGlobeAmericas,
      title: "Global Ağ",
      description: "Dünya'nın önde gelen konteyner hatları ile güçlü partnerlikler ve 100'den fazla limanda servis.",
    },
    {
      icon: FaHandshake,
      title: "Güvenilir Hizmet",
      description: "FCL ve LCL taşımacılıkta uzman kadro ve rekabetçi hat anlaşmaları.",
    },
    {
      icon: FaShip,
      title: "Operasyonel Mükemmellik",
      description: "Online booking, konteyner takibi ve 7/24 operasyon desteği.",
    },
    {
      icon: FaAward,
      title: "Sektör Tecrübesi",
      description: "10 yılı aşkın freight forwarding tecrübesi ve uzman müşteri temsilcileri.",
    },
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
            style={{ backgroundImage: "url('/about-hero.jpg')" }}
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
              Hakkımızda
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              10 yılı aşkın freight forwarding tecrübemiz ve güçlü konteyner hattı partnerliklerimiz ile 
              global ticaretinize değer katıyoruz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Freight Forwarding'de Güvenilir Çözüm Ortağınız</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  2013 yılından bu yana, dünya'nın önde gelen konteyner hatları ile kurduğumuz güçlü partnerlikler 
                  sayesinde müşterilerimize rekabetçi ve güvenilir freight forwarding hizmetleri sunuyoruz.
                </p>
                <p>
                  FCL ve LCL taşımacılıkta uzmanlaşmış kadromuz, modern booking ve takip sistemlerimiz ve 
                  7/24 operasyon desteğimiz ile ithalat ve ihracat operasyonlarınızı sorunsuz yönetiyoruz.
                </p>
                <p>
                  100'den fazla limanda sunduğumuz servisler, geniş acente ağımız ve dijital çözümlerimiz ile 
                  global ticaretinizi kolaylaştırıyoruz.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/about-content.jpg"
                alt="About us"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Değerlerimiz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
              >
                <value.icon className="text-4xl text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8"
          >
            Vizyonumuz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Türkiye'nin önde gelen freight forwarder şirketlerinden biri olarak, 
            dijital çözümlerimiz ve güçlü hat partnerliklerimiz ile müşterilerimizin 
            global ticaretine değer katmaya devam edeceğiz.
          </motion.p>
        </div>
      </section>
    </main>
  );
} 