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
  tr: {
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
          logo: "/shipping-lines/Hapag-Lloyd.png",
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
  },
  en: {
    hero: {
      company: "SEALIVE LOGISTICS",
      title: "Your Trusted Partner in",
      subtitle: "Global Freight Transportation",
      description: "Worldwide shipping solutions with Hapag-Lloyd, CMA CGM, MSC, and Maersk.",
      buttons: {
        quote: "Get a Quote",
        contact: "Contact Us"
      }
    },
    form: {
      title: "Quick Quote",
      origin: "Port of Loading",
      originPlaceholder: "e.g. Istanbul",
      destination: "Port of Discharge",
      destinationPlaceholder: "e.g. Barcelona",
      containerType: "Container Type",
      getPrice: "Get Price"
    },
    services: {
      title: "Our Transportation Solutions",
      description: "We provide FCL and LCL shipping services with world's leading container lines. We guarantee the most suitable solution and competitive prices for all your cargo.",
      items: [
        {
          title: "FCL Transportation",
          description: "Worldwide FCL transportation services with all container types",
          icon: "🚢"
        },
        {
          title: "LCL Transportation",
          description: "Economic consolidation solutions for your partial shipments",
          icon: "📦"
        },
        {
          title: "Customs Clearance",
          description: "End-to-end service for your import and export customs operations",
          icon: "📋"
        }
      ]
    },
    process: {
      title: "Our Operation Process",
      description: "We are with you from the moment we receive your cargo until it reaches the delivery point with our professional team. We provide transparent information and continuous communication at every stage.",
      steps: [
        {
          title: "Price Quote",
          description: "Quick price quote for the most suitable line and route"
        },
        {
          title: "Booking",
          description: "Fast booking process through your chosen line"
        },
        {
          title: "Documentation",
          description: "Preparation of B/L and customs documents"
        },
        {
          title: "Tracking & Delivery",
          description: "Container tracking and smooth delivery"
        }
      ]
    },
    network: {
      title: "Our Global Network",
      description: "We work with the world's leading container lines and provide service in more than 100 ports. With our global agency network and strong line partnerships, we deliver your cargo to every point in the world.",
      stats: [
        { value: "100+", label: "Ports" },
        { value: "50+", label: "Countries" },
        { value: "20+", label: "Line Partners" },
        { value: "1000+", label: "Routes" }
      ]
    },
    advantages: {
      title: "Why SeaLive Logistics?",
      items: [
        {
          title: "Competitive Prices",
          description: "Advantageous container prices thanks to our major line agreements",
          icon: "💰"
        },
        {
          title: "Flexible Solutions",
          description: "Service for all types of cargo with FCL, LCL and special equipment solutions",
          icon: "🔄"
        },
        {
          title: "24/7 Operation",
          description: "Continuous operation and booking support",
          icon: "⏰"
        },
        {
          title: "Online Tracking",
          description: "Track your container and cargo instantly from our online platform",
          icon: "🔍"
        }
      ]
    },
    contact: {
      title: "Contact Us",
      description: "Get in touch with us for your logistics needs. Let us offer you customized solutions.",
      form: {
        name: "Full Name",
        namePlaceholder: "Your Full Name",
        email: "Email",
        emailPlaceholder: "example@email.com",
        phone: "Phone",
        phonePlaceholder: "+90 (___) ___ __ __",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        submit: "Send"
      },
      address: {
        title: "Address",
        value: "Istanbul, Turkey"
      },
      phone: {
        title: "Phone",
        value: "+90 (212) 123 45 67"
      },
      email: {
        title: "Email",
        value: "info@sealive.com"
      }
    },
    references: {
      title: "Our References",
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
          logo: "/shipping-lines/Hapag-Lloyd.png",
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
  }
};

export default function Home() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-1 flex space-x-1">
          <button
            onClick={() => setLang('tr')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              lang === 'tr' 
                ? 'bg-blue-600 text-white' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            TR
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              lang === 'en' 
                ? 'bg-blue-600 text-white' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>

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
                   //hero-bg.webp
              alt={lang === 'tr' ? "Lojistik arka plan" : "Logistics background"}
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
                    {content[lang].hero.company}
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    {content[lang].hero.title}
                    <br />
                    <span className="text-blue-100">{content[lang].hero.subtitle}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-100 mb-8 max-w-2xl font-light"
                  >
                    {content[lang].hero.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-12"
                  >
                    <Link 
                      href={lang === 'tr' ? "/teklif-al" : "/quote"} 
                      className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {content[lang].hero.buttons.quote}
                    </Link>
                    <Link 
                      href={lang === 'tr' ? "/iletisim" : "/contact"} 
                      className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/30 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {content[lang].hero.buttons.contact}
                    </Link>
                  </motion.div>

                  {/* Shipping Lines */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                  >
                    {content[lang].shippingLines.map((line: ShippingLine, index: number) => (
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
                    <h3 className="text-xl text-white mb-4 font-semibold">{content[lang].form.title}</h3>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const data = {
                        origin: formData.get('origin'),
                        destination: formData.get('destination'),
                        containerType: formData.get('containerType')
                      };
                      window.location.href = `/${lang === 'tr' ? 'teklif-al' : 'quote'}?origin=${data.origin}&destination=${data.destination}&containerType=${data.containerType}`;
                    }}>
                      <div className="space-y-4">
                        <div>
                          <label className="text-gray-300 text-sm mb-1 block">{content[lang].form.origin}</label>
                          <input 
                            name="origin"
                            type="text" 
                            placeholder={content[lang].form.originPlaceholder}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-100 focus:outline-none focus:border-blue-500" 
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm mb-1 block">{content[lang].form.destination}</label>
                          <input 
                            name="destination"
                            type="text" 
                            placeholder={content[lang].form.destinationPlaceholder}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-100 focus:outline-none focus:border-blue-500" 
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm mb-1 block">{content[lang].form.containerType}</label>
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
                        {content[lang].form.getPrice}
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

      {/* Services Section */}
      <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-8"
          >
            {content[lang].services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-300 text-lg mb-20 max-w-3xl mx-auto"
          >
            {content[lang].services.description}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[lang].services.items.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-8"
          >
            {content[lang].process.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-100 text-lg mb-20 max-w-3xl mx-auto"
          >
            {content[lang].process.description}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content[lang].process.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 transform transition-transform group-hover:scale-110">
                      {index + 1}
                    </div>
                    {index < content[lang].process.steps.length - 1 && (
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
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                {content[lang].network.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 text-lg mb-12"
              >
                {content[lang].network.description}
              </motion.p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {content[lang].network.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
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
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
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
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
          >
            {content[lang].advantages.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[lang].advantages.items.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-20"
          >
            {content[lang].references.title}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content[lang].references.items.map((reference: Reference, index: number) => (
              <motion.div
                key={reference.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
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
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                {content[lang].contact.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 text-lg mb-12"
              >
                {content[lang].contact.description}
              </motion.p>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Adres</h3>
                    <p className="text-gray-400">{content[lang].contact.address.title}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">Telefon</h3>
                    <p className="text-gray-400">{content[lang].contact.phone.title}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">E-posta</h3>
                    <p className="text-gray-400">{content[lang].contact.email.title}</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{content[lang].contact.form.name}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={content[lang].contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{content[lang].contact.form.email}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={content[lang].contact.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{content[lang].contact.form.phone}</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={content[lang].contact.form.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{content[lang].contact.form.message}</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={content[lang].contact.form.messagePlaceholder}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    {content[lang].contact.form.submit}
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
