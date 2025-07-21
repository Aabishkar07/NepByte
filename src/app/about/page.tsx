"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Search,
  TrendingUp,
  Users,
  Zap,
  Award,
  Globe,
  Heart,
  MessageCircle,
  Mail,
  Phone,
  X,
  CheckCircle,
  Rocket,
  Target,
  Eye,
  Star,
} from "lucide-react";

export default function AboutUs() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const team = [
    {
      name: "Aabishkar Shrestha",
      role: "Lead Full Stack Developer",
      specialty: "React, Laravel, MySql",
      color: "from-blue-500 to-purple-600",
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: "Anup Kasula",
      role: "Senior Full Stack Developer",
      specialty: "Next.js, Laravel, Database Design",
      color: "from-green-500 to-teal-600",
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: "Aryan Mansoor",
      role: "SEO & Analytics Specialist",
      specialty: "Technical SEO, Performance Optimization",
      color: "from-orange-500 to-red-600",
      icon: <Search className="w-6 h-6" />,
    },
    {
      name: "Rohan Shrestha",
      role: "UI/UX & Creative Director",
      specialty: "Design Systems, User Research",
      color: "from-pink-500 to-rose-600",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      name: "Ujjwal Singh",
      role: "Business Head & Project Manager",
      specialty: "Strategy, Client Relations",
      color: "from-indigo-500 to-purple-600",
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "Naresh Kumar Dhakal",
      role: "Marketing & Growth Advisor",
      specialty: "Digital Marketing, Brand Strategy",
      color: "from-yellow-500 to-orange-600",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric",
      description:
        "Your success is our success. We build lasting partnerships through exceptional service.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed & Quality",
      description:
        "Fast delivery without compromising on quality. We optimize every step of development.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We set high standards and consistently deliver exceptional results that exceed expectations.",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const achievements = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "4.9/5", label: "Client Satisfaction" },
    { number: "100%", label: "On-Time Delivery" },
  ];

  const services = [
    "Full-Stack Web Development",
    "Mobile App Development",
    "UI/UX Design & Prototyping",
    "SEO & Performance Optimization",
    "Digital Marketing & Growth",
    "Cloud Solutions & DevOps",
    "E-commerce Solutions",
    "MVP Development & Consulting",
  ];

  return (
    <div className="min-h-screen bg-darkmode pt-32 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
      ></div>

      <div className="container mx-auto lg:max-w-screen-xl  px-6 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div {...fadeIn} className="text-center max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                About NepByte
              </h1>
            </div>
          </motion.div>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
          >
            We're not just developers — we're digital architects, crafting tomorrow's solutions today.
            Our passionate team transforms ambitious visions into powerful, scalable digital experiences
            that drive real business growth.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  {item.number}
                </div>
                <div className="text-slate-300 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div {...fadeIn} className="space-y-12">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                To empower businesses with intelligent, scalable technology solutions that drive innovation
                and sustainable growth. We bridge the gap between complex technical challenges and
                elegant user experiences, ensuring every project delivers measurable impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                To become the global standard for technology excellence — recognized not just for
                the exceptional software we create, but for the transformative partnerships we build
                and the futures we help shape through innovation.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="relative">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-1">
              <div className="bg-slate-800 rounded-xl p-8 h-full">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg p-4 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-blue-400" />
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg p-4 flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-purple-400" />
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/20 to-transparent rounded-lg p-4 flex items-center justify-center">
                    <Award className="w-16 h-16 text-pink-400" />
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500/20 to-transparent rounded-lg p-4 flex items-center justify-center">
                    <Star className="w-16 h-16 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div {...fadeIn} className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we build
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <div className={`bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 h-full hover:bg-white/10 transition-all duration-300`}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div {...fadeIn} className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Talented individuals united by passion for technology and commitment to excellence
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div
                    className={`w-20 h-20 rounded-xl bg-gradient-to-r ${member.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{member.icon}</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                    <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                    <p className="text-slate-400 text-sm">{member.specialty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div {...fadeIn} className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Do Best</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          {...fadeIn}
          className="text-center bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-12 border border-white/10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Ideas?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're launching a startup or scaling an enterprise, we're here to turn your
            vision into reality with cutting-edge technology and exceptional design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/5"
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={() => setIsContactOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 rounded-3xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
              aria-label="Close contact form"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
