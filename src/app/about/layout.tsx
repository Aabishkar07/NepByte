import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NepByte - IT & Software Development Company",
  description: "Learn about NepByte, a leading IT company in Kathmandu with a team of experienced developers, designers, and digital marketers dedicated to delivering innovative digital solutions.",
  keywords: "about NepByte, IT company team, software development team, Kathmandu IT experts, web developers Nepal",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Us | NepByte - IT & Software Development Company",
    description: "Meet our team of experienced IT professionals dedicated to transforming your business with innovative digital solutions.",
    url: 'https://nepbyte.com/about',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'NepByte Team',
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}