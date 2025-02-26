"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUsers, FaLaptop, FaGraduationCap, FaHandshake } from "react-icons/fa";
import { useState, ChangeEvent, FormEvent, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  cv: File | null;
}

export default function Career() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cv: null
  });

  const scrollToForm = (position?: string) => {
    if (position) {
      setFormData(prev => ({ ...prev, position }));
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        cv: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic will be implemented here
    console.log(formData);
  };

  const positions = [
    {
      title: "FCL Operasyon Uzmanı",
      department: "Operasyon",
      location: "İstanbul",
      type: "Tam Zamanlı",
      requirements: [
        "Denizcilik/Lojistik bölümü mezunu",
        "Minimum 2 yıl FCL operasyon deneyimi",
        "Konteyner hatları ile çalışma tecrübesi",
        "İyi derecede İngilizce",
        "MS Office programlarına hakimiyet"
      ]
    },
    {
      title: "LCL Operasyon Uzmanı",
      department: "Operasyon",
      location: "İstanbul",
      type: "Tam Zamanlı",
      requirements: [
        "Denizcilik/Lojistik bölümü mezunu",
        "Minimum 2 yıl LCL operasyon deneyimi",
        "Konsolidasyon süreçlerine hakimiyet",
        "İyi derecede İngilizce",
        "Organizasyon ve planlama yeteneği"
      ]
    },
    {
      title: "Deniz Yolu Satış Uzmanı",
      department: "Satış",
      location: "İstanbul",
      type: "Tam Zamanlı",
      requirements: [
        "Denizcilik/Lojistik sektöründe satış deneyimi",
        "FCL/LCL ürünlerine hakimiyet",
        "Güçlü iletişim ve müzakere becerileri",
        "İyi derecede İngilizce",
        "Aktif sürücü belgesi"
      ]
    },
    {
      title: "Gümrük Müşavir Yardımcısı",
      department: "Gümrük",
      location: "İstanbul",
      type: "Tam Zamanlı",
      requirements: [
        "Gümrük Müşavir Yardımcılığı belgesi",
        "Minimum 2 yıl gümrük deneyimi",
        "Gümrük mevzuatına hakimiyet",
        "Takım çalışmasına yatkın",
        "Esnek çalışma saatlerine uyum"
      ]
    }
  ];

  const benefits = [
    {
      icon: FaUsers,
      title: "Profesyonel Gelişim",
      description: "Freight forwarding sektöründe kariyer gelişimi ve eğitim fırsatları"
    },
    {
      icon: FaLaptop,
      title: "Modern Çalışma Ortamı",
      description: "Son teknoloji sistemler ve rahat ofis ortamı"
    },
    {
      icon: FaGraduationCap,
      title: "Eğitim Programları",
      description: "Konteyner hatları ve operasyon süreçleri eğitimleri"
    },
    {
      icon: FaHandshake,
      title: "Sosyal Haklar",
      description: "Özel sağlık sigortası ve yemek kartı"
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
            style={{ backgroundImage: "url('/career-hero.jpeg')" }}
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
              Kariyer Fırsatları
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Global freight forwarding sektöründe kariyer yapmak isteyen, 
              dinamik ve gelişime açık takım arkadaşları arıyoruz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Açık Pozisyonlar
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold mb-4">{position.title}</h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                    {position.department}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                    {position.location}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                    {position.type}
                  </span>
                </div>
                <div className="space-y-2">
                  {position.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => scrollToForm(position.title)}
                  className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  Başvur
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Çalışan Avantajları
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center"
              >
                <benefit.icon className="text-4xl text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8"
          >
            Bizimle Çalışmak İster Misiniz?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto mb-8"
          >
            Global freight forwarding sektöründe kariyer yapmak ve profesyonel gelişiminize
            katkı sağlamak için bize katılın.
          </motion.p>
          <button 
            onClick={() => scrollToForm()}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-all"
          >
            Özgeçmişini Gönder
          </button>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Başvuru Formu
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.form
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors duration-300 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors duration-300 text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors duration-300 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Başvurmak İstediğiniz Pozisyon</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors duration-300 text-white"
                  required
                >
                  <option value="">Seçiniz</option>
                  {positions.map((position, index) => (
                    <option key={index} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                  <option value="other">Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mesajınız</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors duration-300 text-white h-32"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CV Yükle</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors duration-300 text-white"
                  required
                />
                <p className="mt-2 text-sm text-gray-400">PDF, DOC veya DOCX formatında (Max. 5MB)</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300"
                >
                  Başvuruyu Gönder
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
} 