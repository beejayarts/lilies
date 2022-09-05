import React from "react";
import "./hero.css";
import heroImg from "../../assets/hero-img.jpg";
import google_icon from "../../assets/Google Play Badge.png";
import apple_icon from "../../assets/apple.png";

const Hero = () => {
  return (
    <section
      id="heroSection"
      className="md:max-w-7xl xl:max-w-screen-2xl max-w-sm  bg-lilybrown"
    >
      <div className="hero_section_container pt-40 flex flex-col md:flex-row items-center gap-16 justify-between ">
        <div className="hero_text  text-center md:text-left px-5 ">
          <h1 className=" text-white text-4xl md:text-6xl font-bold font-sans ">
            Order <span className="text-lilybrown">food</span> anytime,{" "}
            <br></br> anywhere
          </h1>
          <p className="text-white pt-8 md:leading-7 max-w-md">
            Browse from our list of specials to place your order and have food
            delivered to you no time. Affordable, tasty and fast!
          </p>
          <div className="app-icons md:flex md:gap-8 md:mt-8 mt-5">
            <img
              src={google_icon}
              alt="google"
              className=" mx-auto md:mx-0 mt-2 md:mt-0"
            />
            <img
              src={apple_icon}
              alt="google"
              className=" mx-auto md:mx-0 mt-4 md:mt-0"
            />
          </div>
        </div>
        <div className="hero_img w-60 md:w-96 mt-12 md:mt-0">
          <img
            className="w-full rounded-full object-cover"
            alt="hero"
            src={heroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
