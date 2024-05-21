'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbottom = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href ? "text-white underline underline-offset-4" : "";
  };

  return (
    <nav className="container bottom-0 fixed p-2 backdrop-blur-xl w-screen bg-acai/70">
      <div className="flex justify-center items-center">
        <Image className="mr-8" src="/logo-quintal.png" width={50} height={50} alt="logo" />
        <ul className="flex gap-6 items-center font-semibold text-[14px]">
          <li className={isActive("/")}>
            <Link href="/">Pastel</Link>
          </li>
          <li className={isActive("/acai")}>
            <Link href="/acai">Açaí</Link>
          </li>
          <li className={isActive("/caldo")}>
            <Link href="/caldo">Garapa</Link>
          </li>
          <li className={isActive("/bebidas")}>
            <Link href="/bebidas">Bebidas</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbottom;
