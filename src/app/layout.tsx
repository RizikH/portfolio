import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ViewTransitions } from "next-view-transitions";
import LenisProvider from "@/components/Context/lenisContext";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/Layout/layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RizikH",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Script
            src="//code.tidio.co/qscpfop7tuw9vaseqly4eopii2xudxpj.js"
            strategy="afterInteractive"
          />
          <LenisProvider>
            <main className={styles.layout}>
              <Navbar />
              {children}
              <Footer />
            </main>
          </LenisProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
