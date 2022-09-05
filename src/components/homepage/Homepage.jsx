import React from "react";
import Footer from "../footerComp/Footer";
import Hero from "../heroComp/Hero";
import MailSection from "../mailComp/MailSection";
import Meals from "../mealsComp/Meals";
import Navbar from "../navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <div className="font-[poppins] homepage_container max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <Meals />
        <MailSection />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
