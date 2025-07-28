"use client";
import React, { useRef, useEffect } from "react";

const clientLogos = [
  { src: "/images/logo/logo.svg", alt: "Client 1" },
  { src: "/images/logo/logo-white.svg", alt: "Client 2" },
  { src: "/images/logo/main.png", alt: "Client 3" },
  { src: "/images/portfolio/mhsn.jpg", alt: "Client 4" },
  { src: "/images/portfolio/icon-mobileapp.svg", alt: "Client 5" },
  { src: "/images/portfolio/icon-vault.svg", alt: "Client 6" },
  { src: "/images/portfolio/icon-wallet.svg", alt: "Client 7" },
];

const SLIDE_INTERVAL = 2500;

const ClientCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollAmount = 0;
    const slide = () => {
      if (!scrollContainer) return;
      scrollAmount += 220; // width of one logo + gap
      if (scrollAmount > scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };
    const interval = setInterval(slide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sm:pt-24 pt-12 pb-28 relative z-1 overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-white sm:text-40 text-30 font-medium">
            Happy <span className="text-primary">Clients</span>
          </h2>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 px-4 py-6 transition-all duration-500 scrollbar-hide"
          style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col items-center bg-dark_grey bg-opacity-80 rounded-xl h-36 w-52 justify-center shadow-lg border border-white/10"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain mb-2"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel; 