"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-darkmode text-white pt-44 pb-20 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 mb-6">
          SEO Services
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          Improve your online visibility, rank higher on Google, and drive more traffic to your website with our expert SEO strategies.
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
            alt="On-Page SEO"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">On-Page Optimization</h2>
          <p className="text-slate-300">
            We optimize your website's content, meta tags, speed, and structure to meet Google’s ranking criteria.
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
            alt="Off-Page SEO"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Off-Page SEO & Backlinks</h2>
          <p className="text-slate-300">
Our SEO experts offer SEO services in Nepal. Get local SEO and technical SEO built into your services, and let us help you build backlink profiles. We also offer digital marketing solutions, and our campaigns work. Social media ads, google ads, and email marketing minimize the financial impact to generate brand growth.          </p>
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
            Rank Higher. Grow Faster.
          </h2>
          <p className="text-slate-400 mb-6">
            Let us optimize your site for success and help you reach the top of search results.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 font-semibold transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
