import React from "react";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/agua.webp",
    title: "Água",
    desc: "c/ gás ou sem gás",
    price: "3.00",
  },
  {
    img: "/refriko.jpg",
    title: "Refriko",
    desc: "refrigerante",
    price: "3.00",
  },
  {
    img: "/coca-350.webp",
    title: "Coca 350ml",
    desc: "350ml",
    price: "6.00",
  },
  {
    img: "/coca-600.webp",
    title: "Coca 600ml",
    desc: "600ml",
    price: "8.00",
  },
  {
    img: "/laranja-500.jpg",
    title: "Suco de laranja",
    desc: "500ml",
    price: "10.00",
  },
  {
    img: "/suco-poupas.jpg",
    title: "Suco de poupa",
    desc: "500ml - uva, limão, maracujá",
    price: "10.00",
  },
  {
    img: "/cafe.jpg",
    title: "Café",
    desc: "Cafezinho que todo brasileiro ama!",
    price: "1.00",
  },
];

const Menu = () => {
  return (
    <div className="container pt-6">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-3xl font-bold text-acai">
          Bebidas
        </h2>
        <p className="text-gray-700">
          Pra acompanhar um pastelizinho!
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
