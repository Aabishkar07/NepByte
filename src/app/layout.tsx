import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { Metadata } from "next";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nepbyte.com'),
  title: {
    default: 'NepByte - IT & Software Development Company',
    template: '%s | NepByte'
  },
  description: 'NepByte is a premier IT company in Kathmandu offering web development, app development, SEO, UI/UX design, and digital marketing services.',
  generator: 'Next.js',
  applicationName: 'NepByte',
  referrer: 'origin-when-cross-origin',
  keywords: ['IT company', 'software development', 'web development', 'app development', 'SEO', 'digital marketing', 'Kathmandu', 'Nepal'],
  authors: [{ name: 'NepByte IT Solutions' }],
  creator: 'NepByte IT Solutions',
  publisher: 'NepByte IT Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NepByte IT Solutions",
              "url": "https://nepbyte.com",
              "logo": "https://nepbyte.com/images/logo/logo.png",
              "sameAs": [
                "https://www.facebook.com/nepbyte",
                "https://www.instagram.com/nepbyte",
                "https://www.linkedin.com/company/nepbyte"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+9779865412365",
                "contactType": "customer service",
                "email": "nepbyte.it@gmail.com"
              },
              "description": "NepByte is a premier IT company in Kathmandu offering web development, app development, SEO, UI/UX design, and digital marketing services."
            })
          }}
        />
      </head>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
