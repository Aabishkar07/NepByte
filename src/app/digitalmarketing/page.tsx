"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-darkmode text-white pt-44 pb-20 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mb-6">
          Digital Marketing Services
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          Boost your brand awareness, engage your audience, and increase conversions with our cutting-edge digital marketing strategies.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/portfolio/icon-wallet.svg"
            alt="Social Media Marketing"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Social Media Marketing</h2>
          <p className="text-slate-300">
            Engage your target audience on platforms like Facebook, Instagram, and LinkedIn with tailored campaigns and content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/portfolio/icon-wallet.svg"
            alt="Email Marketing"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Email Marketing</h2>
          <p className="text-slate-300">
            Nurture leads and build lasting customer relationships with personalized and effective email campaigns.
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elevate Your Brand. Drive Results.
          </h2>
          <p className="text-slate-400 mb-6">
            Let us craft and execute your digital marketing plan to maximize your online impact.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 font-semibold transition-all"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
