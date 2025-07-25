// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { pricedeta } from "@/app/api/data";
// import Image from "next/image";
// import { getImagePrefix } from "@/utils/utils";

// const CardSlider = () => {
//   const settings = {
//     autoplay: true,
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplaySpeed: 2000,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     cssEase: "ease-in-out",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="mt-16 lg:-mt-16">
//       <Slider {...settings}>
//         {pricedeta.map((item, index) => (
//           <div key={index} className="pr-4">
//             <div className="bg-dark_grey bg-opacity-80 rounded-xl h-full min-h-[155px] px-5 py-6 flex flex-col justify-between">
//               {/* Icon + Title + Description */}
//               <div className="flex items-center gap-4 mb-4">
//                 <div
//                   className={`${item.background} ${item.padding} rounded-full flex-shrink-0`}
//                 >
//                   <Image
//                     src={`${getImagePrefix()}${item.icon}`}
//                     alt={item.title}
//                     width={item.width}
//                     height={item.height}
//                   />
//                 </div>
//                 <div className="text-white text-sm leading-snug">
//                   <p className="text-[16px] font-bold mb-1">{item.title}</p>
//                   <p className="text-white/80 text-xs font-normal">{item.short}</p>
//                 </div>
//               </div>

//               {/* Price and Mark */}
//               {(item.price || item.mark) && (
//                 <div className="flex justify-between items-center pt-3 border-t border-white/10">
//                   <p className="text-16 font-bold text-white">{item.price}</p>
//                   <span className="text-error text-xs">{item.mark}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CardSlider;


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Domain & Hosting",
    short: "We provide domain registration and web hosting services in Nepal. You can build your website using fast servers with high security and quality to keep your website live.",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-blue-600 bg-opacity-20",
    href: "/domain",
  },
  {
    title: "App Development",
    short: "We build custom mobile and web applications that are fast, scalable, and user-friendly — tailored to your unique business needs.",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-green-600 bg-opacity-20",
    href: "/appdev",
  },
  {
    title: "Web Development",
    short: "We create fast, responsive, and modern websites that perform well on every device and help grow your business online.",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-purple-600 bg-opacity-20",
    href: "/webiste",
  },
  {
    title: "UI/UX Design",
    short: "We design clean, intuitive, and visually stunning interfaces that give users the best possible experience across web and mobile platforms.",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-pink-600 bg-opacity-20",
    href: "/uiux",
  },
  {
    title: "Graphic Designing",
    short: "Our  graphic designers can create beautiful logos, websites, apps, and graphics for social media. We want the design to be clean, modern, and easy to understand, so it remains visually engaging.",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-yellow-500 bg-opacity-20",
    href: "/graphics",
  },
  {
    title: "SEO",
    short: "Improve your online visibility, rank higher on Google, and drive more traffic to your website with our expert SEO strategies.",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-red-600 bg-opacity-20",
    href: "/seo",
  },
  {
    title: "Digital Marketing",
    short: "Boost your brand awareness, engage your audience, and increase conversions with our cutting-edge digital marketing strategies.",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-teal-600 bg-opacity-20",
    href: "/digitalmarketing",
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

export default function CardSlider() {
  return (
    <div className="min-h-screen bg-darkmode text-white  px-6">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        {/* <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6"> */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-primary bg-clip-text  mb-6">
          Our Services
        </h1>
        <p className="text-slate-300 text-lg md:text-xl">
          NepByte offers a full range of IT services that help your business
          grow in today’s digital world:{" "}
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-slate-300 text-justify">{service.short}</p>
            <a
              href={service.href}
              className="inline-flex items-center pt-3 text-white  font-semibold hover:text-blue-800 transition duration-300 group"
            >
              Learn More
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>
        ))}
      </section>


    </div>
  );
}
