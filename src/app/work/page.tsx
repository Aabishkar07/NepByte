"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "all", label: "All" },
  { id: "website", label: "Website" },
  { id: "graphics", label: "Graphics" },
];

// Portfolio items (some have category "app", but they won't show as app tab removed)
const portfolioItems = [
  {
    id: 1,
    title: "Organization Website",
    category: "website",
    description:
      "MHSNepal Mental Health Counselling",
    image: "/images/portfolio/mhsn.jpg",
    href: "https://mhsnepal.org/",
  },
  // {
  //   id: 2,
  //   title: "Social Media App",
  //   category: "app",
  //   description:
  //     "A mobile app enabling real-time social interactions and media sharing.",
  //   image: "/portfolio/social-app.jpg",
  // },
  // {
  //   id: 3,
  //   title: "Corporate Website",
  //   category: "website",
  //   description: "A sleek website for a multinational company with responsive design.",
  //   image: "/portfolio/corporate-website.jpg",
  // },
  // {
  //   id: 4,
  //   title: "Logo & Branding",
  //   category: "graphics",
  //   description: "Creative branding solutions with memorable logos.",
  //   image: "/portfolio/branding.jpg",
  // },
  // {
  //   id: 5,
  //   title: "Analytics Dashboard",
  //   category: "website",
  //   description: "Custom dashboard providing actionable business insights in real-time.",
  //   image: "/portfolio/analytics-dashboard.jpg",
  // },
  // {
  //   id: 6,
  //   title: "Travel Booking App",
  //   category: "app",
  //   description: "Full-featured booking app with user reviews and secure payments.",
  //   image: "/portfolio/travel-portal.jpg",
  // },
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("all");

  // Filter portfolio items based on active tab, ignore app category now
  const filteredItems =
    activeTab === "all"
      ? portfolioItems.filter(item => item.category !== "app")
      : portfolioItems.filter(
          (item) => item.category === activeTab
        );

  return (
    <div className="min-h-screen pt-44 bg-darkmode text-white py-16 px-6">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        {/* Banner Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Our Portfolio
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-lg">
            Explore our collection of innovative and creative projects in web development and graphic design.
          </p>
        </section>

        {/* Tab Navigation */}
        <nav className="flex justify-center space-x-8 mb-12 border-b border-white/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 font-semibold text-lg transition-colors duration-300
                ${
                  activeTab === tab.id
                    ? "text-blue-400"
                    : "text-white hover:text-blue-300"
                }
              `}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Portfolio Grid */}
        <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map(({ id, title, description, image , href }) => (
              <a
    key={id}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
             <motion.div
                key={id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-slate-300 text-sm">{description}</p>
                </div>
              </motion.div>
              </a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
  