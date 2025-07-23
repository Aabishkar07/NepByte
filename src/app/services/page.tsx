"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Add at the top of the file, after "use client" and before other imports
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | NepByte - IT & Software Development Company",
  description: "Explore NepByte's comprehensive IT services including web development, app development, SEO, UI/UX design, graphic design, and digital marketing solutions tailored for your business.",
  keywords: "IT services, web development, app development, SEO services, UI/UX design, graphic design, digital marketing, Kathmandu IT company",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Our Services | NepByte - IT & Software Development Company",
    description: "Discover our full range of IT and software development services designed to help your business grow in the digital landscape.",
    url: 'https://nepbyte.com/services',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'NepByte Services',
      },
    ],
  },
};

const services = [
  {
    title: "Domain & Hosting",
    short: "Reliable & Secure",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-blue-600 bg-opacity-20",
  },
  {
    title: "App Development",
    short: "Custom Mobile & Web Apps",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-green-600 bg-opacity-20",
  },
  {
    title: "Web Development",
    short: "Modern & Responsive",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-purple-600 bg-opacity-20",
  },
  {
    title: "UI/UX Design",
    short: "User-Friendly Interfaces",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-pink-600 bg-opacity-20",
  },
  {
    title: "Graphic Designing",
    short: "Creative & Impactful",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-yellow-500 bg-opacity-20",
  },
  {
    title: "SEO",
    short: "Boost Your Rankings",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-red-600 bg-opacity-20",
  },
  {
    title: "Digital Marketing",
    short: "Grow Your Business",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-teal-600 bg-opacity-20",
  },
];

const pricingPlans = [
  {
    name: "Silver",
    price: "Rs. 9,999/mo",
    color: "from-slate-700 to-slate-800",
    features: [
      "Social Media Management (2 platforms)",
      "Basic Content Creation",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Gold",
    price: "Rs. 19,999/mo",
    color: "from-yellow-500 to-yellow-600",
    features: [
      "Social Media Management (4 platforms)",
      "Graphic Design & Ad Creatives",
      "Weekly Performance Report",
      "Basic Paid Ads Management",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    price: "Rs. 29,999/mo",
    color: "from-purple-600 to-indigo-700",
    features: [
      "All-in-One Marketing Strategy",
      "Paid Ads (Google, FB, IG)",
      "SEO Optimization",
      "Daily Content & Engagement",
      "Dedicated Account Manager",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-darkmode text-white pt-44 pb-20 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
          Our Services
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          At NauloTech, we deliver impactful digital solutions tailored to your business. Explore our full-service offerings to grow your digital presence.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 ${service.background}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 p-2 bg-white/10 rounded-full flex items-center justify-center">
                <Image src={service.icon} alt={service.title} width={30} height={30} />
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-slate-300">{service.short}</p>
          </motion.div>
        ))}
      </section>

      {/* Digital Marketing Pricing */}
      <section className="text-center max-w-5xl mx-auto mb-24">
        <h2 className="text-4xl font-bold mb-4">Digital Marketing Packages</h2>
        <p className="text-slate-400 mb-12 text-lg">
          Choose the perfect plan to elevate your brand, reach more people, and grow your business.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl border border-white/10 p-6 shadow-xl backdrop-blur-lg ${
                plan.popular ? "scale-105 bg-white/10 border-yellow-400" : "bg-white/5"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-3xl font-extrabold mb-6 bg-gradient-to-r text-transparent bg-clip-text ${plan.color}">
                {plan.price}
              </p>
              <ul className="text-slate-300 space-y-2 mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-400 mb-6">
            Whether it's your first project or you're scaling up, we're ready to help you succeed.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}
