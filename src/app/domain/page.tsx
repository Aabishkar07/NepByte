"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DomainHostingPage() {
  return (
    <div className="min-h-screen bg-darkmode text-white pt-44 pb-20 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
          Domain & Hosting
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
         We provide domain registration and web hosting services in Nepal. You can build your website using fast servers with high security and quality to keep your website live. Also, web hosting backup support is 24/7 and you can inquire or get support with a simple email.
Interested in having everything under one roof? Work with NepByte - Your IT company in Kathmandu.

        </p>
      </section>

      {/* Feature Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/portfolio/icon-wallet.svg"
            alt="Domain Hosting"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Secure Domains</h2>
          <p className="text-slate-300">
            Register your domain with confidence. We offer all major domain
            extensions and secure DNS.
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
            alt="Hosting"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Powerful Hosting</h2>
          <p className="text-slate-300">
            High-speed SSD hosting with 99.9% uptime, daily backups, and free
            SSL — everything your website needs.
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
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 mb-6">
            Let us handle your domain and hosting so you can focus on your
            business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
