import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Button } from "react-scroll";
import Menu from "./components/Menu";
import About from "./components/About";
import OtherMenu from "./components/OtherMenu";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div >
      <Navbar />
      <div id="home">
        <Hero />
       
      </div>
      <div id="speciality">
        <Menu/>
      </div>
      <div id="about">
        <About/> 
      </div>
      <div id="menu">
        <OtherMenu/>    
      </div>
      <div id="review">
        <Review/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
