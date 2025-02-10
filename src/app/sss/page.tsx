"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "FCL ve LCL taşımacılık arasındaki fark nedir?",
      answer: "FCL (Full Container Load), bir konteynerin tamamının tek bir müşteriye ait yükle doldurulduğu taşıma şeklidir. LCL (Less Container Load) ise, farklı müşterilere ait parsiyel yüklerin aynı konteyner içinde konsolide edilerek taşındığı hizmettir. FCL genellikle büyük hacimli yükler için, LCL ise daha küçük parsiyel yükler için tercih edilir."
    },
    {
      question: "Konteyner booking işlemi nasıl yapılır?",
      answer: "Konteyner booking işlemi için öncelikle yükünüzün detaylarını (hacim, ağırlık, yükleme/varış limanı, konteyner tipi) bizimle paylaşmanız gerekir. Ardından anlaşmalı olduğumuz konteyner hatlarından en uygun opsiyonu belirleyip, booking onayını size iletiriz. Booking onayı ile birlikte konteyner numarası ve gemi detayları tarafınıza bildirilir."
    },
    {
      question: "Gümrükleme sürecinde hangi belgeler gereklidir?",
      answer: "Temel gümrük belgeleri: Ticari Fatura, Paket Listesi, Konşimento (B/L), Menşe Şahadetnamesi ve ATR/EUR.1 gibi tercihli ticaret belgeleridir. Ürün özelinde ek belgeler (Kontrol Belgesi, Gözetim Belgesi, Sağlık Sertifikası vb.) gerekebilir. Uzman gümrük ekibimiz tüm belge süreçlerinizi yönetir."
    },
    {
      question: "Konteyner takibi nasıl yapılır?",
      answer: "Online konteyner takip sistemimiz üzerinden konteyner numarası ile yükünüzün anlık durumunu takip edebilirsiniz. Sistem üzerinden geminin konumu, tahmini varış zamanı, gümrük durumu gibi bilgilere erişebilirsiniz. Ayrıca operasyon ekibimiz düzenli olarak yük durumu hakkında sizi bilgilendirir."
    },
    {
      question: "Tehlikeli madde taşımacılığı yapıyor musunuz?",
      answer: "Evet, IMO sertifikalı tehlikeli madde taşımacılığı hizmeti veriyoruz. Tehlikeli maddelerin UN kodu, sınıfı ve paketleme grubuna göre uygun konteyner tipi seçilir. Özel ekipman ve izin gerektiren tehlikeli yükler için hat ve liman koordinasyonunu sağlıyoruz."
    },
    {
      question: "Konşimento (B/L) çeşitleri nelerdir?",
      answer: "Temel olarak 3 tip konşimento vardır: Original B/L (Orijinal Konşimento), Express B/L (Ekspres Konşimento) ve Seawaybill. Original B/L mülkiyet belgesidir ve ciro edilebilir. Express B/L ve Seawaybill ise orijinal belge gerektirmeden teslimat yapılabilen konşimento tipleridir."
    },
    {
      question: "Demuraj ve detention süreleri nasıl hesaplanır?",
      answer: "Demuraj, konteynerın limanda serbest süre sonrası beklemesi; detention ise müşteri sahasında serbest süre sonrası beklemesidir. Her konteyner hattının farklı serbest süreleri ve ücret tarifeleri vardır. Booking aşamasında serbest süreleri size bildiririz ve süre aşımı olmaması için operasyon planlaması yaparız."
    },
    {
      question: "Sigorta hizmetiniz var mı?",
      answer: "Evet, yükleriniz için kapsamlı nakliyat sigortası hizmeti sunuyoruz. ICC-A, ICC-B ve ICC-C olmak üzere farklı teminat seçenekleri mevcuttur. Sigorta primi yükün değeri, taşıma şekli ve rota üzerinden hesaplanır. Hasar durumunda sigorta süreçlerini sizin adınıza yönetiyoruz."
    },
    {
      question: "Hangi ödeme şekillerini kabul ediyorsunuz?",
      answer: "Peşin ödeme, vadeli ödeme ve akreditif gibi farklı ödeme seçenekleri sunuyoruz. Düzenli müşterilerimiz için özel ödeme planları oluşturabiliyoruz. Ayrıca trade finance çözümlerimiz ile finansman desteği de sağlıyoruz."
    },
    {
      question: "Minimum taşıma miktarı var mı?",
      answer: "LCL taşımacılıkta minimum 1 m³ veya 1 ton yük kabul ediyoruz. FCL taşımacılıkta ise 20'DC, 40'DC, 40'HC gibi farklı konteyner opsiyonları mevcut. Küçük parsiyel yükleriniz için konsolidasyon hizmeti, büyük projeleriniz için ise çoklu konteyner çözümleri sunuyoruz."
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('/faq-hero.jpg')",
              height: '100%',
              minHeight: '400px'
            }}
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
              Sıkça Sorulan Sorular
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Freight forwarding hizmetlerimiz hakkında merak edilen soruları ve cevaplarını bulabilirsiniz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="text-lg font-medium text-left">{faq.question}</span>
                  <span className="text-blue-500 ml-4">
                    {openQuestion === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                {openQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8"
          >
            Sorunuzu Bulamadınız mı?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto mb-8"
          >
            Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır.
          </motion.p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-all">
            Bize Ulaşın
          </button>
        </div>
      </section>
    </main>
  );
} 