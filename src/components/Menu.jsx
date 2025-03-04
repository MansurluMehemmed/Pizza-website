import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      name: "Margherita",
      description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/640px-Pizza_Margherita_stu_spivack.jpg",
      price:"16.99"
    },
    {
      id: 2,
      name: "Pepperoni",
      description:
        "Topped with tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2f38jmDq8OZhG72KpH345LC9teABsdTXrqg&s",
      price:"19.99"

    },
    {
      id: 3,
      name: "BBQ Chicken",
      description:
        "BBQ sauce base with grilled chicken, red onions, and mozzarella cheese.",
      image: "https://sallysbakingaddiction.com/wp-content/uploads/2014/03/barbecue-bbq-chicken-pizza.jpg",
      price:"12.99"

    },
    {
      id: 4,
      name: "Hawaiian",
      description: "Tomato sauce, mozzarella, ham, and pineapple.",
      image: "https://rozalindapizza.ch/wp-content/uploads/2024/10/u-27.webp",
      price:"17.99"

    },
    {
      id: 5,
      name: "Veggie",
      description: "Loaded with mushrooms, bell peppers, onions, and olives.",
      image: "https://www.tasteofhome.com/wp-content/uploads/2018/02/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b.jpg",
      price:"19"

    },
    {
      id: 6,
      name: "Meat Lovers",
      description: "Pepperoni, sausage, ham, bacon, and ground beef.",
      image: "https://www.thecookierookie.com/wp-content/uploads/2023/09/meat-lovers-pizza-recipe-3.jpg",
      price:"14.99"

    },
    
    
  ];
  return (
    <div className="min-h-screen container flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-semibold text-center pt-24">Our Speciality</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10 ">
        {menuData.map(item=>(
            <MenuCard key={item.id} 
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            />
        ))}
      </div>
    </div>
  );
};

export default Menu;
