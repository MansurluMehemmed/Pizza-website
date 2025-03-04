import React from "react";
import MenuCard from "../layouts/MenuCard";

const OtherMenu = () => {
  const menuData = [
    {
      id: 7,
      name: "Four Cheese",
      description: "Mozzarella, cheddar, parmesan, and gorgonzola.",
      image:
        "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg",
      price: "10.99",
    },
    {
      id: 8,
      name: "Supreme",
      description: "Combination of meats, veggies, and cheese.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOd-yzw835koYdEr8v0ecT5lvreJgMrz76g&s",
      price: "15.99",
    },
    {
      id: 9,
      name: "Buffalo Chicken",
      description: "Spicy buffalo sauce with grilled chicken and blue cheese.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-ma_10HZavVpuYtXE22bpS6GNohRiuWx-w&s",
      price: "16.99",
    },
    {
      id: 10,
      name: "Mushroom Truffle",
      description: "Truffle oil, mushrooms, and mozzarella.",
      image:
        "https://cookingwithcarbs.com/wp-content/uploads/2021/06/Crimini-Shiitake-and-Oyster-mushroom-pizza-final-5-min.jpg",
      price: "13.99",
    },
  ];
  return (
    <div className="min-h-screen container flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold text-center mt-20 md:mt-10 mb-3">
        Other Menu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-5 px-0 md:px-10">
        {menuData.map(item => {
            
          return <MenuCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />;
        


        })}
      </div>
    </div>
  );
};

export default OtherMenu;
