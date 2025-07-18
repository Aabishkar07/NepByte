import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Blogs", herf: "#" },
  { label: "Terms and Condition", herf: "#" },
  { label: "Privacy Policy", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price?: string;  // optional, removed or empty
  mark?: string;   // optional, removed or empty
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Domain & Hosting",
    short: "Reliable & Secure",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-blue-600 bg-opacity-20",
    price: "",   // no price
    mark: "",
    width: 30,
    height: 30,
    padding: "px-4 py-3",
  },
  {
    title: "App Development",
    short: "Custom Mobile & Web Apps",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-green-600 bg-opacity-20",
    price: "",
    mark: "",
    width: 30,
    height: 30,
    padding: "px-4 py-3",
  },
  {
    title: "Web Development",
    short: "Modern & Responsive",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-purple-600 bg-opacity-20",
    price: "",
    mark: "",
    width: 30,
    height: 30,
    padding: "px-4 py-3",
  },
  {
    title: "UI/UX Design",
    short: "User-Friendly Interfaces",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-pink-600 bg-opacity-20",
    price: "",
    mark: "",
    width: 30,
    height: 30,
    padding: "px-4 py-3",
  },
  {
    title: "Graphic Designing",
    short: "Creative & Impactful",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-yellow-500 bg-opacity-20",
    price: "",
    mark: "",
    width: 30,
    height: 30,
    padding: "px-4 py-3",
  },
  {
    title: "SEO",
    short: "Boost Your Rankings",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-red-600 bg-opacity-20",
    price: "",
    mark: "",
    width: 30,
    height: 30,
    padding: "px-4 py-3",
  },
  {
    title: "Digital Marketing",
    short: "Grow Your Business",
    icon: "/images/portfolio/icon-wallet.svg",
    background: "bg-teal-600 bg-opacity-20",
    price: "",
    mark: "",
    width: 30,
    height: 30,
    padding: "px-4 py-3",
  },
];


export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "SEO Optimization",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Campaign Analytics",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Social Media Management",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Robust Security" },
  { title: "Cost-Effective Solutions" },
  { title: "Built to Last" },
  { title: "User-Friendly Experience" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "24/7 Support",
    text: "Need help? Get your requests solved quickly via support team.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Cloud Solutions",
    text: "Secure, scalable cloud services tailored for your business",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "IT Consulting",
    text: "Strategic tech guidance to help you<br /> grow and optimize operations.",
    space: "lg:mt-4",
  },
];






// export const perksData: {
//   icon: string;
//   title: string;
//   text: string;
//   space: string;
// }[] = [
//   {
//     icon: "/images/perks/icon-support.svg",
//     title: "24/7 IT Support",
//     text: "Get real-time help from our expert team,<br /> any time, any day.",
//     space: "lg:mt-8",
//   },
//   {
//     icon: "/images/perks/icon-cloud.svg",
//     title: "Cloud Solutions",
//     text: "Secure, scalable cloud services<br /> tailored for your business.",
//     space: "lg:mt-14",
//   },
//   {
//     icon: "/images/perks/icon-consulting.svg",
//     title: "IT Consulting",
//     text: "Strategic tech guidance to help you<br /> grow and optimize operations.",
//     space: "lg:mt-4",
//   },
// ];









export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Planning",
    text: "Map the project's scope and architecture",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Refinement",
    text: "Refine and improve your solution",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Prototype",
    text: "Build a working prototype to test your product",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Support",
    text: "Deploy the product and ensure full support by us",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
