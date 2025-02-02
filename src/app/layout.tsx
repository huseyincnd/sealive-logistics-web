import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// @ts-ignore
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
// @ts-ignore
import { FaChevronDown } from 'react-icons/fa';
// @ts-ignore
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeaLive Lojistik - Profesyonel Lojistik Çözümler",
  description: "SeaLive Lojistik olarak deniz, kara taşımacılığı ve depolama hizmetleri sunuyoruz. Güvenilir ve profesyonel lojistik çözümler için bizi tercih edin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {/* Main Header */}
        <header className="fixed w-full z-50 bg-black/5 backdrop-blur-md supports-[backdrop-filter]:bg-white/[0.01]">
          <nav className="container mx-auto">
            <div className="flex items-center justify-between h-16 px-4">
              {/* Logo */}
              <Link href="/" className="text-2xl font-bold text-white">
                SeaLive
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/" className="px-4 py-2 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-colors">
                  Ana Sayfa
                </Link>

                <div className="group relative">
                  <Link href="/hizmetler" className="px-4 py-2 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-colors flex items-center">
                    Hizmetler
                    <FaChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="px-2 pt-2 pb-4 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-xl ring-1 ring-white/10">
                      <div className="space-y-1">
                        <Link href="/hizmetler/deniz-tasimaciligi" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-xl transition-colors">
                          Deniz Taşımacılığı
                        </Link>
                        <Link href="/hizmetler/kara-tasimaciligi" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-xl transition-colors">
                          Kara Taşımacılığı
                        </Link>
                        <Link href="/hizmetler/depolama" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-xl transition-colors">
                          Depolama
                        </Link>
                        <Link href="/hizmetler/gumrukleme" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-xl transition-colors">
                          Gümrükleme
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/hakkimizda" className="px-4 py-2 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-colors">
                  Hakkımızda
                </Link>

                <Link href="/kariyer" className="px-4 py-2 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-colors">
                  Kariyer
                </Link>

                <Link href="/sss" className="px-4 py-2 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-colors">
                  SSS
                </Link>

                <Link href="/iletisim" className="px-4 py-2 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-colors">
                  İletişim
                </Link>

                <Link href="/teklif-al" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Teklif Al
                </Link>
              </div>

              {/* Language Selector */}
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <button className="text-gray-300 hover:text-white transition-colors"></button>
                <span className="text-gray-500"></span>
                <button className="text-gray-300 hover:text-white transition-colors"></button>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-full hover:bg-gray-800/50 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu (Hidden by default) */}
          <div className="md:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-lg">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg">
                Ana Sayfa
              </Link>
              <div className="space-y-1 pl-4">
                <div className="px-3 py-2 text-base font-medium text-white">Hizmetler</div>
                <Link href="/hizmetler/deniz-tasimaciligi" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-lg">
                  Deniz Taşımacılığı
                </Link>
                <Link href="/hizmetler/kara-tasimaciligi" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-lg">
                  Kara Taşımacılığı
                </Link>
                <Link href="/hizmetler/depolama" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-lg">
                  Depolama
                </Link>
                <Link href="/hizmetler/gumrukleme" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-lg">
                  Gümrükleme
                </Link>
              </div>
              <Link href="/hakkimizda" className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg">
                Hakkımızda
              </Link>
              <Link href="/kariyer" className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg">
                Kariyer
              </Link>
              <Link href="/sss" className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg">
                SSS
              </Link>
              <Link href="/iletisim" className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10 rounded-lg">
                İletişim
              </Link>
              <Link href="/teklif-al" className="block px-3 py-2 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                Teklif Al
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
