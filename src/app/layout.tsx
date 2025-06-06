import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/Layout/layout.module.css";
import { ThemeProvider } from 'next-themes';
import Particles from "@/components/Particles/Particles";

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
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Google Analytics */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-D0CXX34WSV"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D0CXX34WSV');
            `}
          </Script>
        </head>

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Script
              src="//code.tidio.co/qscpfop7tuw9vaseqly4eopii2xudxpj.js"
              strategy="afterInteractive"
            />
            <Particles />
            <main className={styles.layout}>
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}

