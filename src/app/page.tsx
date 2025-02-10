"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import Link from "next/link";

interface ShippingLine {
  name: string;
  logo: string;
}

interface Reference {
  name: string;
  logo: string;
}

// Dil içerikleri
const content = {
  hero: {
    company: "SEALIVE LOJİSTİK",
    title: "Global Yük Taşımacılığında",
    subtitle: "Güvenilir Çözüm Ortağınız",
    description: "Hapag-Lloyd, CMA CGM, MSC ve Maersk ile dünya çapında deniz taşımacılığı çözümleri.",
    buttons: {
      quote: "Hemen Teklif Alın",
      contact: "İletişime Geçin"
    }
  },
  form: {
    title: "Hızlı Fiyat Teklifi",
    origin: "Yükleme Limanı",
    originPlaceholder: "ör: Istanbul",
    destination: "Varış Limanı",
    destinationPlaceholder: "ör: Barcelona",
    containerType: "Konteyner Tipi",
    getPrice: "Fiyat Sorgula"
  },
  services: {
    title: "Taşımacılık Çözümlerimiz",
    description: "Dünya'nın önde gelen konteyner hatları ile FCL ve LCL taşımacılık hizmetleri sunuyoruz. Her türlü yükünüz için en uygun çözümü ve en rekabetçi fiyatı garanti ediyoruz.",
    items: [
      {
        title: "FCL Taşımacılık",
        description: "Tüm konteyner tipleriyle dünya çapında FCL taşımacılık hizmetleri",
        icon: "🚢"
      },
      {
        title: "LCL Taşımacılık",
        description: "Parsiyel yükleriniz için ekonomik konsolidasyon çözümleri",
        icon: "📦"
      },
      {
        title: "Gümrükleme",
        description: "İthalat ve ihracat gümrük işlemleriniz için uçtan uca hizmet",
        icon: "📋"
      }
    ]
  },
  process: {
    title: "Operasyon Sürecimiz",
    description: "Yükünüzü teslim aldığımız andan teslimat noktasına ulaşana kadar profesyonel ekibimizle yanınızdayız. Her aşamada şeffaf bilgilendirme ve kesintisiz iletişim sağlıyoruz.",
    steps: [
      {
        title: "Fiyat Teklifi",
        description: "En uygun hat ve rota için hızlı fiyat teklifi"
      },
      {
        title: "Booking",
        description: "Seçtiğiniz hat üzerinden hızlı booking işlemi"
      },
      {
        title: "Dokümantasyon",
        description: "B/L ve gümrük evraklarının hazırlanması"
      },
      {
        title: "Takip & Teslimat",
        description: "Konteyner takibi ve sorunsuz teslimat"
      }
    ]
  },
  network: {
    title: "Global Ağımız",
    description: "Dünyanın önde gelen konteyner hatları ile çalışıyor, 100'den fazla limanda hizmet veriyoruz. Global acente ağımız ve güçlü hat partnerliklerimiz ile yükünüzü dünyanın her noktasına ulaştırıyoruz.",
    stats: [
      { value: "100+", label: "Liman" },
      { value: "50+", label: "Ülke" },
      { value: "20+", label: "Hat Partneri" },
      { value: "1000+", label: "Rota" }
    ]
  },
  advantages: {
    title: "Neden SeaLive Lojistik?",
    items: [
      {
        title: "Rekabetçi Fiyatlar",
        description: "Büyük hat anlaşmalarımız sayesinde avantajlı konteyner fiyatları",
        icon: "💰"
      },
      {
        title: "Esnek Çözümler",
        description: "FCL, LCL ve özel ekipman çözümleriyle her türlü yük için hizmet",
        icon: "🔄"
      },
      {
        title: "7/24 Operasyon",
        description: "Kesintisiz operasyon ve booking desteği",
        icon: "⏰"
      },
      {
        title: "Online Takip",
        description: "Konteyner ve yük takibini online platformumuzdan anlık izleyin",
        icon: "🔍"
      }
    ]
  },
  contact: {
    title: "İletişime Geçin",
    description: "Lojistik ihtiyaçlarınız için bizimle iletişime geçin. Size özel çözümler sunalım.",
    form: {
      name: "İsim Soyisim",
      namePlaceholder: "Adınız Soyadınız",
      email: "E-posta",
      emailPlaceholder: "ornek@email.com",
      phone: "Telefon",
      phonePlaceholder: "+90 (___) ___ __ __",
      message: "Mesajınız",
      messagePlaceholder: "Mesajınızı buraya yazın...",
      submit: "Gönder"
    },
    address: {
      title: "Adres",
      value: "İstanbul, Türkiye"
    },
    phone: {
      title: "Telefon",
      value: "+90 (212) 123 45 67"
    },
    email: {
      title: "E-posta",
      value: "info@sealive.com"
    }
  },
  references: {
    title: "Referanslarımız",
    items: [
      {
        name: "Maersk",
        logo: "/shipping-lines/maersk.png",
      },
      {
        name: "CMA CGM",
        logo: "/shipping-lines/cmacgm.png",
      },
      {
        name: "MSC",
        logo: "/shipping-lines/msc.png",
      },
      {
        name: "Hapag-Lloyd",
        logo: "/shipping-lines/hapag-lloyd.png",
      },
    ] as Reference[]
  },
  shippingLines: [
    {
      name: "Maersk",
      logo: "/shipping-lines/maersk.png"
    },
    {
      name: "CMA CGM",
      logo: "/shipping-lines/cmacgm.png"
    },
    {
      name: "MSC",
      logo: "/shipping-lines/msc.png"
    },
    {
      name: "Hapag-Lloyd",
      logo: "/shipping-lines/hapag-lloyd.png"
    }
  ] as ShippingLine[]
};

export default function Home() {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '50px 0px 50px 0px',
    initialInView: true
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '50px 0px 50px 0px',
    initialInView: true
  });

  const [networkRef, networkInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '50px 0px 50px 0px',
    initialInView: true
  });

  const [advantagesRef, advantagesInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '50px 0px 50px 0px',
    initialInView: true
  });

  const [referencesRef, referencesInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '50px 0px 50px 0px',
    initialInView: true
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '50px 0px 50px 0px',
    initialInView: true
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-5deg"]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-screen overflow-hidden">
        {/* Paralax Background with 3D effect */}
        <motion.div
          style={{ 
            y,
            scale,
          }}
          className="absolute inset-0 z-0 origin-center"
        >
          <motion.div 
            style={{ rotate }}
            className="absolute inset-0 scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/40 to-gray-900/60 z-20 mix-blend-multiply"></div>
            <Image
              src="/sea-transport-hero.jpg"
              alt="Lojistik arka plan"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="relative z-30 min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Sol Taraf - Başlık ve Butonlar */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm font-semibold text-blue-600 tracking-wider mb-4"
                  >
                    {content.hero.company}
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    {content.hero.title}
                    <br />
                    <span className="text-blue-100">{content.hero.subtitle}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-100 mb-8 max-w-2xl font-light"
                  >
                    {content.hero.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-12"
                  >
                    <Link 
                      href="/teklif-al" 
                      className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {content.hero.buttons.quote}
                    </Link>
                    <Link 
                      href="/iletisim" 
                      className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/30 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {content.hero.buttons.contact}
                    </Link>
                  </motion.div>

                  {/* Shipping Lines */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                  >
                    {content.shippingLines.map((line: ShippingLine, index: number) => (
                      <div 
                        key={line.name} 
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center group hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="relative w-[120px] h-[45px]">
                          <Image
                            src={line.logo}
                            alt={line.name}
                            fill
                            className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                            sizes="(max-width: 768px) 80px, 120px"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Sağ Taraf - Form */}
                <div>
                  {/* Quick Quote Form */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  >
                    <h3 className="text-xl text-white mb-4 font-semibold">{content.form.title}</h3>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const data = {
                        origin: formData.get('origin'),
                        destination: formData.get('destination'),
                        containerType: formData.get('containerType')
                      };
                      window.location.href = `/teklif-al?origin=${data.origin}&destination=${data.destination}&containerType=${data.containerType}`;
                    }}>
                      <div className="space-y-4">
                        <div>
                          <label className="text-gray-300 text-sm mb-1 block">{content.form.origin}</label>
                          <input 
                            name="origin"
                            type="text" 
                            placeholder={content.form.originPlaceholder}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-100 focus:outline-none focus:border-blue-500" 
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm mb-1 block">{content.form.destination}</label>
                          <input 
                            name="destination"
                            type="text" 
                            placeholder={content.form.destinationPlaceholder}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-100 focus:outline-none focus:border-blue-500" 
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm mb-1 block">{content.form.containerType}</label>
                          <select 
                            name="containerType"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:border-blue-500 [&>option]:bg-gray-800 [&>option]:text-white"
                          >
                            <option value="20DC">20' DC (Standard)</option>
                            <option value="40DC">40' DC (Standard)</option>
                            <option value="40HC">40' HC (High Cube)</option>
                            <option value="20RF">20' RF (Reefer)</option>
                            <option value="40RF">40' RF (Reefer)</option>
                          </select>
                        </div>
                      </div>
                      <button 
                        type="submit"
                        className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                      >
                        {content.form.getPrice}
                      </button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Infinite Carousel Section */}
      <section className="py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        
        <div className="relative">
          {/* First Row */}
          <motion.div
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-16"
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16">
                {[
                  {
                    name: "Maersk",
                    logo: "/shipping-lines/maersk.png",
                  },
                  {
                    name: "MSC",
                    logo: "/shipping-lines/msc.png",
                  },
                  {
                    name: "CMA CGM",
                    logo: "/shipping-lines/cmacgm.png",
                  },
                  {
                    name: "Hapag-Lloyd",
                    logo: "/shipping-lines/hapag-lloyd.png",
                  }
                ].map((company, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="min-w-[280px] h-[120px] p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group flex items-center justify-center hover:scale-105"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                        sizes="(max-width: 768px) 160px, 280px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            animate={{
              x: [-1200, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-16 mt-16"
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16">
                {[
                  {
                    name: "Hapag-Lloyd",
                    logo: "/shipping-lines/hapag-lloyd.png",
                  },
                  {
                    name: "CMA CGM",
                    logo: "/shipping-lines/cmacgm.png",
                  },
                  {
                    name: "MSC",
                    logo: "/shipping-lines/msc.png",
                  },
                  {
                    name: "Maersk",
                    logo: "/shipping-lines/maersk.png",
                  }
                ].map((company, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="min-w-[280px] h-[120px] p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group flex items-center justify-center hover:scale-105"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                        sizes="(max-width: 768px) 160px, 280px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays for Smooth Edges */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-8"
          >
            {content.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-300 text-lg mb-20 max-w-3xl mx-auto"
          >
            {content.services.description}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-8"
          >
            {content.process.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-100 text-lg mb-20 max-w-3xl mx-auto"
          >
            {content.process.description}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 transform transition-transform group-hover:scale-110">
                      {index + 1}
                    </div>
                    {index < content.process.steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-white/20">
                        <div className="absolute -right-1 -top-1 w-2 h-2 bg-white/40 rotate-45"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Stats Section */}
      <section ref={networkRef} className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={networkInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                {content.network.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={networkInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 text-lg mb-12"
              >
                {content.network.description}
              </motion.p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {content.network.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={networkInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/world-map.webp"
                  alt="Global ağ haritası"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section ref={advantagesRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        {/* Dekoratif elementler */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                delay: i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
              style={{
                left: `${15 + i * 25}%`,
                top: `${20 + (i * 15)}%`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
          >
            {content.advantages.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.advantages.items.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400/20 to-blue-300/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center">{advantage.title}</h3>
                <p className="text-gray-300 text-center">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section ref={referencesRef} className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={referencesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
          >
            {content.references.title}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.references.items.map((reference: Reference, index: number) => (
              <motion.div
                key={reference.name}
                initial={{ opacity: 0, y: 20 }}
                animate={referencesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative h-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={reference.logo}
                    alt={reference.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-400 text-sm text-center group-hover:text-white transition-colors">{reference.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                delay: i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                {content.contact.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 text-lg mb-12"
              >
                {content.contact.description}
              </motion.p>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={contactInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Adres</h3>
                    <p className="text-gray-400">{content.contact.address.title}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={contactInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Telefon</h3>
                    <p className="text-gray-400">{content.contact.phone.title}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={contactInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">E-posta</h3>
                    <p className="text-gray-400">{content.contact.email.title}</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{content.contact.form.name}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={content.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{content.contact.form.email}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={content.contact.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{content.contact.form.phone}</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={content.contact.form.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{content.contact.form.message}</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={content.contact.form.messagePlaceholder}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    {content.contact.form.submit}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
