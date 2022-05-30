import React, { useState } from "react";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import NavbarComponent from "./NavbarComponent";
import RecentWork from "./RecentWorkComponent";
import Testimony from "./TestimonyComponent";



function Main() {
  return (
    <div>
      <div>    
        <NavbarComponent />
        <Home />
        <RecentWork/>
        <About />
        <Testimony />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
