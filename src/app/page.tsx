import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import { Metadata } from "next";
import FAQ from "@/components/Home/Faq";
import Blog from "@/components/Home/Blog";
export const metadata: Metadata = {
  title: "NepByte - Leading IT & Software Development Company in Kathmandu",
  description: "NepByte is a premier IT company in Kathmandu offering web development, app development, SEO, UI/UX design, and digital marketing services to transform your business vision into digital reality.",
  keywords: "IT company Kathmandu, software development, web development, app development, SEO, UI/UX design, digital marketing, NepByte",
  authors: [{ name: "NepByte IT Solutions" }],
  creator: "NepByte IT Solutions",
  publisher: "NepByte IT Solutions",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://nepbyte.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NepByte - Leading IT & Software Development Company in Kathmandu",
    description: "Transform your business with our expert web development, app development, SEO, and digital marketing services. Your reliable IT partner in Kathmandu.",
    url: 'https://nepbyte.com',
    siteName: 'NepByte',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'NepByte - IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "NepByte - IT & Software Development Company",
    description: "Your reliable IT partner in Kathmandu for web development, app development, SEO, and digital marketing services.",
    creator: '@nepbyte',
    images: ['/images/logo/logo.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'technology',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Blog />
      <FAQ />


    </main>
  );
}
