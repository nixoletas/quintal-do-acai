import React from "react";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/acai.jpeg",
    title: "300ml",
    desc: "2 acompanhamentos + 2 frutas",
    price: "15.00",
  },
  {
    img: "/acai.jpeg",
    title: "500ml",
    desc: "2 acompanhamentos + 2 frutas",
    price: "19.00",
  },
  {
    img: "/acai.jpeg",
    title: "700ml",
    desc: "3 acompanhamentos + 2 frutas",
    price: "24.00",
  },
];

const Menu = () => {
  return (
    <div className="container pt-6">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Nosso <span className="text-accent">açaí</span> completinho!
        </h2>
        <p className="text-gray-700">
          Escolha seus tamanhos e complementos! 😝
        </p>
      </div>
      <div className="justify-center pt-10">
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
