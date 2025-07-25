"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-darkmode text-white pt-44 pb-20 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-6">
          Graphic Designing
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
Our Kathmandu graphic designers can create beautiful logos, websites, apps, and graphics for social media. We want the design to be clean, modern, and easy to understand, so it remains visually engaging.        </p>
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
            alt="Brand Design"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Brand Identity</h2>
          <p className="text-slate-300">
            We design logos, color schemes, typography, and brand guidelines to ensure consistency across all platforms.
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
            alt="Marketing Graphics"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Marketing Materials</h2>
          <p className="text-slate-300">
            From social media posts to brochures and banners — we create designs that attract, inform, and convert.
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
            Let's Design Your Brand Story
          </h2>
          <p className="text-slate-400 mb-6">
            Our graphic designers bring creativity and strategy together to build your visual identity.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 font-semibold transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
