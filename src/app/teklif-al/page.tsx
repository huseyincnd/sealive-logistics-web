"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface QuoteFormData {
  origin: string;
  destination: string;
  containerType: string;
  cargoType: string;
  weight: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  additionalNotes: string;
}

export default function QuotePage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<QuoteFormData>({
    origin: searchParams.get('origin') || '',
    destination: searchParams.get('destination') || '',
    containerType: searchParams.get('containerType') || '20DC',
    cargoType: '',
    weight: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    additionalNotes: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Burada normalde bir API çağrısı yapılacak
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simüle edilmiş API çağrısı
    
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fiyat Teklifi Al
          </h1>
          <p className="text-gray-300 text-lg mb-12">
            Yük detaylarınızı girin, size özel fiyat teklifimizi hemen iletelim.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Rota Bilgileri */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">Rota Bilgileri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Yükleme Limanı
                    </label>
                    <input
                      type="text"
                      value={formData.origin}
                      onChange={(e) => setFormData({...formData, origin: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Varış Limanı
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Yük Bilgileri */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">Yük Bilgileri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Konteyner Tipi
                    </label>
                    <select
                      value={formData.containerType}
                      onChange={(e) => setFormData({...formData, containerType: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    >
                      <option value="20DC">20' Standart</option>
                      <option value="40DC">40' Standart</option>
                      <option value="40HC">40' Yüksek</option>
                      <option value="20RF">20' Reefer</option>
                      <option value="40RF">40' Reefer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Yük Cinsi
                    </label>
                    <input
                      type="text"
                      value={formData.cargoType}
                      onChange={(e) => setFormData({...formData, cargoType: e.target.value})}
                      required
                      placeholder="ör: Tekstil, Elektronik, vb."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Toplam Ağırlık (kg)
                    </label>
                    <input
                      type="number"
                      value={formData.weight}
                      onChange={(e) => setFormData({...formData, weight: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* İletişim Bilgileri */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">İletişim Bilgileri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Firma Adı
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      İletişim Kişisi
                    </label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Ek Notlar */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">Ek Notlar</h2>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white resize-none"
                  placeholder="Eklemek istediğiniz detaylar..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-medium text-white transition-all ${
                  loading 
                    ? 'bg-blue-600/50 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'İşleniyor...' : 'Teklif İste'}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="text-5xl mb-6">✅</div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Talebiniz Alındı!
              </h2>
              <p className="text-gray-300">
                Fiyat teklifiniz en kısa sürede e-posta adresinize iletilecektir.
                Genellikle 1 saat içinde dönüş yapıyoruz.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 