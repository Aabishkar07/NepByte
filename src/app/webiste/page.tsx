"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-darkmode text-white pt-44 pb-20 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-6">
          Web Development
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          We create fast, responsive, and modern websites that perform well on every device and help grow your business online.
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
            alt="Responsive Websites"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Responsive Web Design</h2>
          <p className="text-slate-300">
            We build mobile-first websites that look and work great across all screen sizes — from phones to desktops.
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
            alt="Custom Web Solutions"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Custom Web Solutions</h2>
          <p className="text-slate-300">
We build secure, fast, responsive websites, in Kathmandu. From full e-commerce websites to custom builds, we will make it user-friendly, so your vision becomes a digital product.          </p>
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
            Need a Website That Works?
          </h2>
          <p className="text-slate-400 mb-6">
            Let us help you launch a stunning and high-performing website.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 font-semibold transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
