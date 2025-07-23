import React, { FC } from "react";

interface HeroSubProps {
  title: string;
}

const HeroSub: FC<HeroSubProps> = ({ title }) => {
  return (
    <>
      <section className="relative py-40 mt-28 ">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1950&q=80"
            alt="Tech Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center text-center h-full container mx-auto lg:max-w-screen-xl px-4">
          <h2 className="text-white md:text-56 text-36 font-medium">Contact Us</h2>
        </div>
      </section>
    </>
  );
};

export default HeroSub;
