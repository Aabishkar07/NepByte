import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NepByte - IT & Software Development Company",
  description: "Get in touch with NepByte IT Solutions for web development, app development, SEO, and digital marketing services in Kathmandu, Nepal.",
  keywords: "contact NepByte, IT company contact, software development contact, Kathmandu IT company, web development inquiry",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Us | NepByte - IT & Software Development Company",
    description: "Reach out to our team for innovative IT solutions tailored to your business needs.",
    url: 'https://nepbyte.com/contact',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'NepByte Contact',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}