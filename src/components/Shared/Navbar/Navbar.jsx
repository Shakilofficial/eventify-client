import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/services", text: "Services" },
    { id: 3, path: "/blog", text: "Blog" },
    { id: 4, path: "/contact", text: "Contact" },
  ];

  return (
    <div className="font-mons font-semibold bg-gradient-to-r from-amber-50 to-amber-100 flex justify-between items-center h-20 w-full mx-auto px-4 text-amber-900 rounded-md">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:justify-between">
        {navItems.map((item) => (
          <Link to={item.path} key={item.id}>
            <li className="p-2 hover:bg-[#f9e19e] rounded-md m-2 cursor-pointer duration-300 hover:text-black">
              {item.text}
            </li>
          </Link>
        ))}
        <button className="p-2 bg-amber-600 text-white rounded-md my-2 md:ml-14 cursor-pointer duration-300 hover:text-black">
          <Link to="/login"></Link>
          Get Started
        </button>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <Logo />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={item.path} key={item.id}>
            <li className="p-4 hover:bg-[#ffebb3] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
              {item.text}
            </li>
          </Link>
        ))}
        <button className="p-2 bg-amber-600 rounded-md ml-4 cursor-pointer duration-300 hover:text-black">
          <Link to="/login"></Link>
          Get Started
        </button>
      </ul>
    </div>
  );
};

export default Navbar;