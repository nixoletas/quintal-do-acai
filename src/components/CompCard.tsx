import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
}

const MenuCard: React.FC<propsType> = ({ img, title }) => {
  return (
    <div className="flex gap-2">
      <Image
        className="w-[30px] h-[30px]"
        src={img}
        width={80}
        height={80}
        alt="dish"
      />
      <div className="space-y-2">
        <div>
          <h2>{title}</h2>
        </div>

      </div>
    </div>
  );
};

export default MenuCard;
