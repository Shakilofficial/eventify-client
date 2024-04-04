import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = useAuth();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  const NavButton = () => {
    return (
      <div className="flex items-center">
        {user && user.photoURL && (
          <img
            className="rounded-full object-cover h-8 w-8 ml-4"
            referrerPolicy="no-referrer"
            src={user.photoURL}
            alt="profile"
          />
        )}
        {user ? (
          <button
            className="p-2 bg-gradient-to-r from-rose-400 to-amber-300 text-white rounded-md my-2 ml-5 md:ml-14 cursor-pointer duration-300 hover:text-black"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <Link
            className="p-2 bg-gradient-to-r from-rose-400 to-amber-300 text-white rounded-md my-2 ml-5 md:ml-14 cursor-pointer duration-300 hover:text-black"
            to="/login"
          >
            Get Started
          </Link>
        )}
      </div>
    );
  };

  const navItems = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/services", text: "Services" },
    { id: 3, path: "/blog", text: "Blog" },
    { id: 4, path: "/contact", text: "Contact" },
  ];

  return (
    <div className="font-mons font-semibold bg-gradient-to-r from-rose-50 to-amber-100 flex justify-between items-center h-20 w-full mx-auto px-4 text-amber-900 rounded-md relative">
      <Logo />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:justify-between">
        {navItems.map((item) => (
          <Link to={item.path} key={item.id}>
            <li className="px-3 py-2 hover:bg-gradient-to-l from-rose-300 to-amber-200 rounded-md m-2 cursor-pointer duration-300 hover:text-black">
              {item.text}
            </li>
          </Link>
        ))}
        <NavButton />
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
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
        <NavButton />
      </ul>
    </div>
  );
};

export default Navbar;
