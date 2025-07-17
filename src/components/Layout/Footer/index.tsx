import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
<footer className="pt-16 bg-darkmode">
  <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
    <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">

      {/* Company Info */}
      <div className="lg:col-span-4 md:col-span-6 col-span-6">
        <Logo />
        <div className="flex gap-6 items-center mt-8">
          <Link href="#" className="group">
            <Icon icon="fa6-brands:facebook-f" width="24" height="24" className="text-white group-hover:text-primary" />
          </Link>
          <Link href="#" className="group">
            <Icon icon="fa6-brands:instagram" width="24" height="24" className="text-white group-hover:text-primary" />
          </Link>
          <Link href="#" className="group">
            <Icon icon="fa6-brands:x-twitter" width="24" height="24" className="text-white group-hover:text-primary" />
          </Link>
        </div>
        <h3 className="text-white text-24 font-medium sm:mt-20 mt-12">
          © 2025 NepByte IT Solutions
        </h3>
        <h3 className="text-white text-18 font-normal mt-4">
          Email: <a href="mailto:nepbyte.it@gmail.com" className="hover:text-primary">nepbyte.it@gmail.com</a>
        </h3>
        <h3 className="text-white text-18 font-normal mt-2">
          Phone: <a href="tel:+9779865412365" className="hover:text-primary">9865412365</a>
        </h3>
      </div>

      {/* Links */}
      <div className="lg:col-span-2 md:col-span-3 col-span-6">
        <h4 className="text-white mb-4 font-medium text-24">Links</h4>
        <ul>
          {headerData.map((item, index) => (
            <li key={index} className="pb-4">
              <Link href={item.href} className="text-white hover:text-primary text-17">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Information */}
      <div className="lg:col-span-2 md:col-span-3 col-span-6">
        <h4 className="text-white mb-4 font-medium text-24">Information</h4>
        <ul>
          {footerlabels.map((item, index) => (
            <li key={index} className="pb-4">
              <Link href={item.herf} className="text-white hover:text-primary text-17">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services Section (replacing Subscribe) */}
      <div className="lg:col-span-4 md:col-span-4 col-span-6">
        <h3 className="text-white text-24 font-medium">Our Services</h3>
        <ul className="mt-5 space-y-4">
            <li className="text-muted text-17 hover:text-primary transition">
            <Link href="/services/it-consulting">SEO & Digital Marketing</Link>
          </li>
          <li className="text-muted text-17 hover:text-primary transition">
            <Link href="/services/web-development">Web Development</Link>
          </li>
          <li className="text-muted text-17 hover:text-primary transition">
            <Link href="/services/mobile-apps">Mobile App Development</Link>
          </li>
          <li className="text-muted text-17 hover:text-primary transition">
            <Link href="/services/cloud-solutions">Domain & Hosting</Link>
          </li>
          <li className="text-muted text-17 hover:text-primary transition">
            <Link href="/services/ui-ux-design">UI/UX Design</Link>
          </li>
           <li className="text-muted text-17 hover:text-primary transition">
            <Link href="/services/ui-ux-design">Graphic Designing</Link>
          </li>
       
        </ul>
      </div>

    </div>
  </div>
</footer>
  );
};

export default Footer;
