'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href ? "text-acai underline underline-offset-4" : "";
  };

  return (
    <nav className="container pt-6">
      <div className="flex justify-center items-center">
        <Link href="/">
        <Image className="mr-8 hover:scale-110 transition-all" src="/logo-quintal.png" width={50} height={50} alt="logo" />
        </Link>
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

export default Navbar;
