"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24">
              <Image
                src={`${getImagePrefix()}images/icons/icon-bag.svg`}
                alt="icon"
                width={40}
                height={40}
              />
              <p className="text-white sm:text-28 text-18 mb-0">
                Where Ideas Go <span className="text-primary">Digital</span>
              </p>
            </div>
            <h1 className="font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[39px] text-center lg:text-start text-white mb-4">
              Welcome to NepByte –{" "}
              <span className="text-primary">Your Reliable</span> IT Company{" "}
              <span className="text-white">in Kathmandu !</span>
            </h1>

            <p className="text-white/80 text-center lg:text-start text-base sm:text-lg max-w-[90%] lg:max-w-[85%] mb-8 leading-relaxed">
              We specialize in turning your business vision into digital
              reality. From web development to custom software solutions — we're
              your full-service IT partner.
            </p>

            <div className="flex items-center md:justify-start justify-center gap-8">
              <button
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-white py-2 px-7 z-50"
                onClick={() => setIsBuyingOpen(true)}
              >
                Your Vision Our Code
              </button>
              <button
                className="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7"
                onClick={() => setIsSellingOpen(true)}
              >
                Contact us
              </button>
            </div>

            <div className="flex gap-4 items-center mt-8">
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
              >
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="26"
                  height="26"
                  className="text-white group-hover:text-primary transition duration-300"
                />
              </Link>
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/26 transition duration-300"
              >
                <Icon
                  icon="fa6-brands:instagram"
                  width="26"
                  height="26"
                  className="text-white group-hover:text-primary transition duration-300"
                />
              </Link>
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/26 transition duration-300"
              >
                <Icon
                  icon="fa6-brands:linkedin-in"
                  width="26"
                  height="26"
                  className="text-white group-hover:text-primary transition duration-300"
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-7 lg:block hidden"
          >
            <div className="ml-20 -mr-64">
              <Image
                src={`${getImagePrefix()}images/hero/banner-image.png`}
                alt="Banner"
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
        <CardSlider />
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-black from-50% to-black to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>

      {/* Modals for Buy and Sell */}
      {isBuying && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md">
            <button
              onClick={() => setIsBuyingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Vision Modal"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              Your Vision & Our Code
            </h2>
            <p className="text-lg">
              We bring your ideas to life with smart code and creative solutions
              that connect with your audience. Passionate developers delivering
              clean, efficient, and scalable software tailored to your business
              needs.
            </p>
          </div>
        </div>
      )}
      {isSelling && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md">
            <button
              onClick={() => setIsSellingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Contact Modal"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg mb-2">
              Phone:{" "}
              <a href="tel:+977-1234567890" className="underline text-primary">
                +977-1234567890
              </a>
            </p>
            <p className="text-lg">
              Email:{" "}
              <a
                href="mailto:info@nepbyte.com"
                className="underline text-primary"
              >
                info@nepbyte.com
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
