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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}