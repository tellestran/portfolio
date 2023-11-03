import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-md">
      <h1 className="w-full text-xl font-bold text-[#1e30f3]">
        Start Bootstrap
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 ">
          <Link className="text-[#6c757d] no-underline" to="/">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-[#6c757d] no-underline" to="/project">
            Project
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-[#6c757d] no-underline" to="/resume">
            Resume
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-[#6c757d] no-underline" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r white bg-[white] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className=" py-9 px-4 w-full text-xl font-bold text-[#1e30f3]">
          Start Bootstrap
        </h1>
        <li className="p-4 ">
          <Link className="text-[#6c757d] no-underline" to="/">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-[#6c757d] no-underline" to="/project">
            Project
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-[#6c757d] no-underline" to="/resume">
            Resume
          </Link>
        </li>
        <li className="p-4">
          <Link className="text-[#6c757d] no-underline" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
