import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | NepByte - IT & Software Development Company",
  description: "Explore NepByte's portfolio of web development, app development, and graphic design projects showcasing our expertise and creativity.",
  keywords: "NepByte portfolio, web development projects, app development examples, graphic design portfolio, IT company work",
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: "Our Portfolio | NepByte - IT & Software Development Company",
    description: "Browse through our collection of innovative digital solutions we've created for clients across various industries.",
    url: 'https://nepbyte.com/work',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'NepByte Portfolio',
      },
    ],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}