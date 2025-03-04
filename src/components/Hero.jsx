import React from "react";
import img from '../assets/img/hero.png'
import Button  from "../layouts/Button";
const Hero = () => {
  return (
    <div  className="h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center md:gap-8">
      <div className="w-full md:w-2/4 text-center md:text-start mt-16 space-y-4">
        <h1 className="text-2xl lg:text-7xl font-bold leading-tight">
          Autentic <span className="text-yellow-500">Pizzas</span> Timeless Flavors
        </h1>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse itaque
          neque in libero laudantium quisquam exercitationem quod tenetur non,
          consectetur magnam vitae, accusantium nostrum, consequatur dignissimos
          autem temporibus facilis. Architecto?
        </p>
        <Button title="Read More"/>
      </div>
      <div className="mt-14">
        <img className="animate-spin-slow w-56 lg:w-96" src={img} alt="heroimg" />
      </div>
    </div>
  );
};

export default Hero;
