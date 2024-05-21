import React from "react";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/pastel.jpg",
    title: "Carne",
    desc: "Pastelizinho de carne",
    price: "10.00",
  },
  {
    img: "/pastel.jpg",
    title: "Frango",
    desc: "Pastelizinho de frango",
    price: "10.00",
  },
  {
    img: "/pastel.jpg",
    title: "Queijo",
    desc: "Pastelizinho de queijo",
    price: "10.00",
  },
  {
    img: "/pastel.jpg",
    title: "Pizza",
    desc: "Pastelizinho de pizza",
    price: "10.00",
  },
  {
    img: "/pastel.jpg",
    title: "Carne c/ queijo ou catupiry",
    desc: "Pastel de carne + queijo ou catupiry",
    price: "12.00",
  },
  {
    img: "/pastel.jpg",
    title: "Frango c/ queijo ou catupiry",
    desc: "Pastel de frango + queijo ou catupiry",
    price: "12.00",
  },
  {
    img: "/pastel.jpg",
    title: "Palmito c/ carne",
    desc: "Pastel de palmito com carne",
    price: "13.00",
  },
  {
    img: "/pastel.jpg",
    title: "Palmito c/ queijo",
    desc: "Pastel de palmito com queijo",
    price: "13.00",
  },
  {
    img: "/cafe.jpg",
    title: "Café",
    desc: "Cafezinho que todo brasileiro ama!",
    price: "1.00",
  },
  
];

const pasteisDoces = [
  {
    img: "/pastel.jpg",
    title: "Nuttela",
    desc: "Pastel doce de Nuttela",
    price: "14.00",
  },
  {
    img: "/pastel.jpg",
    title: "Nuttela c/ morango",
    desc: "Pastel doce de Nuttela com morango",
    price: "16.00",
  },
  {
    img: "/pastel.jpg",
    title: "Banana c/ canela",
    desc: "Pastel doce de banana com canela",
    price: "10.00",
  },
  {
    img: "/pastel.jpg",
    title: "Banana c/ canela e queijo",
    desc: "Pastel doce de banana com canela e queijo",
    price: "14.00",
  },
]

const Menu = () => {
  return (
    <div className="container pt-6">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Delicioso <span className="text-acai">pastel!</span>
        </h2>
        <p className="text-gray-700">
          Escolha seus sabores!
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
          <h1 className="text-center font-bold pt-12">Pastéis doces</h1>
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4 pt-12">
          {pasteisDoces.map((item, index) => (
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
