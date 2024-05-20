import React from "react";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/caldo.jpg",
    title: "300ml",
    desc: "Caldo de cana refrescante",
    price: "8.00",
  },
  {
    img: "/caldo.jpg",
    title: "500ml",
    desc: "Caldo de cana refrescante",
    price: "10.00",
  },
  {
    img: "/caldo.jpg",
    title: "1L",
    desc: "Caldo de cana refrescante",
    price: "18.00",
  },
  {
    img: "/caldo.jpg",
    title: "1,5L",
    desc: "Caldo de cana refrescante",
    price: "27.00",
  },
  {
    img: "/caldo.jpg",
    title: "2L",
    desc: "Caldo de cana refrescante",
    price: "35.00",
  },
];

const Menu = () => {
  return (
    <div className="container pt-6">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-acai">Caldo de cana </span>pra refrescar!
        </h2>
        <p className="text-gray-700">
          Sempre é bom! 😝
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
