import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapPin, FaMapSigns } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-20 container mb-32">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <div className="flex gap-8 pl-2 text-acai text-2xl pt-10">
            <Link href="https://maps.app.goo.gl/eTarQ9RpQyXifXXW9">
            <FaMapPin href="https://maps.app.goo.gl/eTarQ9RpQyXifXXW9" />
            </Link>
          </div>
          <h2 className="pl-2 text-xl font-bold">Sobre nós</h2>
          <p className="pl-2 text-left">
            Somos o Quintal do açaí, trazendo o melhor açaí para você!
            Fazemos por amor e com amor! ❤️
          </p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
