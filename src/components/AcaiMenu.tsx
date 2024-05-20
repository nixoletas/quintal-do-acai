import React from "react";
import MenuCard from "./MenuCard";
import CompCard from "./CompCard";

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
    desc: "3 acompanhamentos + 3 frutas",
    price: "24.00",
  },
];

const acompanhamentos = [
  {
    img: "/complementos/granola.png",
    title: "Granola",
  },
  {
    img: "/complementos/leite-condensado.avif",
    title: "Leite condensado",
  },
  {
    img: "/complementos/leite-po.webp",
    title: "Leite em pó",
  },
  {
    img: "/complementos/pacoca.jpg",
    title: "Paçoca",
  },
  {
    img: "/complementos/chocolate.avif",
    title: "Chocolate",
  },
];

const frutas = [
  {
    img: "/complementos/morango.png",
    title: "Morango",
  },
  {
    img: "/complementos/banana.png",
    title: "Banana",
  },
  {
    img: "/complementos/kiwi.jpg",
    title: "Kiwi",
  },
  {
    img: "/complementos/uva.avif",
    title: "Uva",
  },
];

const Menu = () => {
  return (
    <div className="container pt-6">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-acai">Açaí</span> completinho!
        </h2>
        <p className="text-gray-700">
          Escolha seus tamanhos e acompanhamentos!
        </p>
      </div>
      <div className="justify-center pt-10">
        <div className="grid w-fit mx-auto sm:grid-cols-3 gap-4">
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
      <div className="justify-center pt-16">
          <h1 className="text-center pb-6 font-bold">Acompanhamentos</h1>
        <div className="grid w-auto mx-auto grid-cols-2 gap-2 max-w-xl">
          {acompanhamentos.map((item, index) => (
            <CompCard
              key={index}
              img={item.img}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="justify-center pt-16">
          <h1 className="text-center pb-6 font-bold">Frutas</h1>
        <div className="grid w-auto mx-auto grid-cols-2 gap-2 max-w-xl">
          {frutas.map((item, index) => (
            <CompCard
              key={index}
              img={item.img}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
