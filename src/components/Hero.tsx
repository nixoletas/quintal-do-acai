import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="flex justify-center pt-2">
      <Image
        className="w-auto h-10 flex justify-center"
        src="/hero2.png"
        width={600}
        height={600}
        alt="hero_bg"
      />
    </div>
  );
};

export default Hero;
