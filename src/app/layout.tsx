import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from './client-layout';

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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
