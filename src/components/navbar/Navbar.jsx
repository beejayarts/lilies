import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="relative">
      <div className="flex justify-between px-6 mx-auto mt-5 align-center md:max-w-7xl">
        <div className="brand-logo w-16 cursor-pointer">
          <img src={logo} alt="busines branding" className="w-full " />
        </div>
        <div className="menu_links">
          <ul className="flex flex-col gap-8 text-center md:flex-row align-center md:flex-end text-lilybrown">
            <li className="list-none md:mr-5">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="list-none md:mr-5">
              <Link to="/login">Login</Link>
            </li>
            <li className="list-none md:mr-5">
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
