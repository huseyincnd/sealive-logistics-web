'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// @ts-ignore
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
// @ts-ignore
import { FaChevronDown } from 'react-icons/fa';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="fixed w-full z-[60]">
        {/* Blur Background */}
        <div className="absolute inset-0 backdrop-blur-lg bg-white/[0.02]" />
        
        <nav className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-white relative z-[70]">
              SeaLive
            </Link>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center justify-center space-x-6 mx-auto">
              <Link href="/" className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 group px-3 py-4">
                <span>Ana Sayfa</span>
                <span className="absolute bottom-3 left-3 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-24px)] transition-all duration-200 opacity-0 group-hover:opacity-100"></span>
              </Link>

              <div className="group relative">
                <Link href="/hizmetler" className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 flex items-center group px-3 py-4">
                  <span>Hizmetler</span>
                  <FaChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                  <span className="absolute bottom-3 left-3 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-24px)] transition-all duration-200 opacity-0 group-hover:opacity-100"></span>
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="px-2 pt-2 pb-4 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-xl ring-1 ring-white/10">
                    <div className="space-y-1">
                      <Link href="/hizmetler/deniz-tasimaciligi" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-all duration-200">
                        Deniz Taşımacılığı
                      </Link>
                      <Link href="/hizmetler/kara-tasimaciligi" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-all duration-200">
                        Kara Taşımacılığı
                      </Link>
                      <Link href="/hizmetler/depolama" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-all duration-200">
                        Depolama
                      </Link>
                      <Link href="/hizmetler/gumrukleme" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-all duration-200">
                        Gümrükleme
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/hakkimizda" className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 group px-3 py-4">
                <span>Hakkımızda</span>
                <span className="absolute bottom-3 left-3 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-24px)] transition-all duration-200 opacity-0 group-hover:opacity-100"></span>
              </Link>

              <Link href="/kariyer" className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 group px-3 py-4">
                <span>Kariyer</span>
                <span className="absolute bottom-3 left-3 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-24px)] transition-all duration-200 opacity-0 group-hover:opacity-100"></span>
              </Link>

              <Link href="/sss" className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 group px-3 py-4">
                <span>SSS</span>
                <span className="absolute bottom-3 left-3 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-24px)] transition-all duration-200 opacity-0 group-hover:opacity-100"></span>
              </Link>

              <Link href="/iletisim" className="relative text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 group px-3 py-4">
                <span>İletişim</span>
                <span className="absolute bottom-3 left-3 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-24px)] transition-all duration-200 opacity-0 group-hover:opacity-100"></span>
              </Link>

              <Link href="/teklif-al" className="text-white bg-blue-600 hover:bg-blue-500 text-sm font-medium transition-all duration-200 rounded-full px-6 py-2.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 hover:scale-105">
                Teklif Al
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none relative z-[70]"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  } 
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out z-[65] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="px-2 pt-20 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-4 py-3 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ana Sayfa
            </Link>

            {/* Hizmetler Dropdown */}
            <div className="space-y-1">
              <div className="flex items-center px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors">
                <Link 
                  href="/hizmetler"
                  className="flex-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hizmetler
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <div className={`space-y-1 overflow-hidden transition-all duration-200 ease-in-out ${isServicesOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <Link 
                  href="/hizmetler/deniz-tasimaciligi" 
                  className="block px-8 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Deniz Taşımacılığı
                </Link>
                <Link 
                  href="/hizmetler/kara-tasimaciligi" 
                  className="block px-8 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kara Taşımacılığı
                </Link>
                <Link 
                  href="/hizmetler/depolama" 
                  className="block px-8 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Depolama
                </Link>
                <Link 
                  href="/hizmetler/gumrukleme" 
                  className="block px-8 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gümrükleme
                </Link>
              </div>
            </div>

            <Link 
              href="/hakkimizda" 
              className="block px-4 py-3 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/kariyer" 
              className="block px-4 py-3 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kariyer
            </Link>
            <Link 
              href="/sss" 
              className="block px-4 py-3 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SSS
            </Link>
            <Link 
              href="/iletisim" 
              className="block px-4 py-3 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
            <Link 
              href="/teklif-al" 
              className="block px-4 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="text-2xl font-bold">
                SeaLive
              </Link>
              <p className="text-gray-400 text-sm">
                Dünya çapında deniz, kara taşımacılığı ve lojistik çözümleri sunan güvenilir çözüm ortağınız.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/hizmetler" className="text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link>
                </li>
                <li>
                  <Link href="/kariyer" className="text-gray-400 hover:text-white transition-colors">Kariyer</Link>
                </li>
                <li>
                  <Link href="/sss" className="text-gray-400 hover:text-white transition-colors">SSS</Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Hizmetler</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/hizmetler/deniz-tasimaciligi" className="text-gray-400 hover:text-white transition-colors">Deniz Taşımacılığı</Link>
                </li>
                <li>
                  <Link href="/hizmetler/kara-tasimaciligi" className="text-gray-400 hover:text-white transition-colors">Kara Taşımacılığı</Link>
                </li>
                <li>
                  <Link href="/hizmetler/depolama" className="text-gray-400 hover:text-white transition-colors">Depolama</Link>
                </li>
                <li>
                  <Link href="/hizmetler/gumrukleme" className="text-gray-400 hover:text-white transition-colors">Gümrükleme</Link>
                </li>
                <li>
                  <Link href="/hizmetler/sigorta" className="text-gray-400 hover:text-white transition-colors">Sigorta</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">İletişim</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="text-gray-400">İstanbul, Türkiye</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:info@sealive.com" className="text-gray-400 hover:text-white transition-colors">info@sealive.com</a>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href="tel:+902121234567" className="text-gray-400 hover:text-white transition-colors">+90 (212) 123 45 67</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} SeaLive Lojistik. Tüm hakları saklıdır.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
                <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-white transition-colors">
                  Kullanım Koşulları
                </Link>
                <Link href="/cerez-politikasi" className="text-gray-400 hover:text-white transition-colors">
                  Çerez Politikası
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 