"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-darkmode text-white pt-44 pb-20 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-6">
          UI/UX Design
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          We design clean, intuitive, and visually stunning interfaces that give users the best possible experience across web and mobile platforms.
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
            alt="UI Design"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">User Interface (UI) Design</h2>
          <p className="text-slate-300">
            We create visually beautiful interfaces that align with your brand identity while ensuring usability and accessibility.
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
            alt="UX Research"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">User Experience (UX) Design</h2>
          <p className="text-slate-300">
            Through research and prototyping, we build experiences that are easy to navigate, improve engagement, and boost conversions.
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
            Design That Makes a Difference
          </h2>
          <p className="text-slate-400 mb-6">
            Let us craft a user experience that your customers will love.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-semibold transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
