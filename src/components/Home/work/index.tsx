"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: true });

  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, staggerChildren: 0.2 }
  };

  const slideUpAnimation = {
    initial: { y: 60, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  const slideInFromRight = {
    initial: { x: 80, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 },
    transition: { duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  const services = [
    "Web Development", "Mobile Apps", "SEO Optimization", 
    "UI/UX Design", "Graphic Design", "Digital Marketing",
    "Domain & Hosting"
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="work">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto lg:max-w-screen-xl px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref} 
          {...containerAnimation}
          className="grid grid-cols-12 items-center gap-8 lg:gap-16"
        >
          {/* Content Section */}
          <motion.div
            {...slideUpAnimation}
            className="lg:col-span-7 col-span-12 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            >
              <span className="text-primary text-sm font-medium">🚀 IT Solutions Partner</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight"
            >
              Work with{" "}
              <span className="relative">
                <span className="text-primary">NepByte</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500 origin-left"
                />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-muted text-lg leading-relaxed mb-8"
            >
              <p className="mb-6">
                NepByte is a <strong className="text-white">skilled and innovative IT Company</strong> in Kathmandu 
                that provides comprehensive digital solutions to accelerate your business growth. We offer 
                premium services including web development, mobile applications, SEO, UI/UX design, 
                and digital marketing – all under one roof.
              </p>
              
              <p className="mb-6">
                Our expert team understands your unique business requirements. Whether you're a startup 
                or an established enterprise, we create tailored solutions, enhance your online presence, 
                and help you reach more customers effectively.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-white font-semibold mb-4 text-xl">Our Services</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted text-sm font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,123,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 pt-6 border-t border-white/10"
            >
              <p className="text-muted text-sm">
                ⭐ <strong className="text-white">Trusted by 100+ Nepali businesses</strong> • 
                On-time delivery • Expert support
              </p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            {...slideInFromRight} 
            className="lg:col-span-5 col-span-12 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={inView ? { rotate: 180, scale: 1 } : { rotate: 0, scale: 0.8 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute -top-8 -right-8 w-24 h-24 border-4 border-primary/30 rounded-full"
              />
              
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={inView ? { rotate: -90, scale: 1 } : { rotate: 0, scale: 0.8 }}
                transition={{ duration: 1.5, delay: 0.7 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-lg"
              />

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <motion.div
                  initial={{ scale: 0.9, rotateY: -15 }}
                  animate={inView ? { scale: 1, rotateY: 0 } : { scale: 0.9, rotateY: -15 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <Image
                    src={`${getImagePrefix()}images/work/img-work-with-us.png`}
                    alt="NepByte IT Solutions"
                    width={600}
                    height={425}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-4 right-8 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  100+ Projects
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    x: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-4 -left-4 bg-blue-600 text-white px-3 py-2 rounded-full text-xs font-medium shadow-lg"
                >
                  5⭐ Rating
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;