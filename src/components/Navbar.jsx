import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import Logo from "../assets/logo.jpeg";
import Search_Icon from "../assets/search.svg";
import User_Icon from "../assets/user.svg";
import Cart_Icon from "../assets/cart.svg";
import Menu_Icon from "../assets/menu.svg";
import Dropdown_Icon from "../assets/dropdown.svg";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch } = useContext(ShopContext)

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={Logo} className="w-24 rounded-full" alt="logo" />
      </Link>

      <ul className="text-gray-700 hidden gap-5 text-sm sm:flex ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="hidden w-2/4 h-[1.5px] border-none bg-gray-700" />
        </NavLink>

        <NavLink to="/Collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="hidden w-2/4 h-[1.5px] border-none bg-gray-700" />
        </NavLink>

        <NavLink to="/About" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="hidden w-2/4 h-[1.5px] border-none bg-gray-700" />
        </NavLink>

        <NavLink to="/Contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="hidden w-2/4 h-[1.5px] border-none bg-gray-700" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={Search_Icon} className="w-5 cursor-pointer" alt="search" />
        <div className="group relative">
          <img src={User_Icon} className="w-5 cursor-pointer" alt="user" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-point hover:text-black">My Profile</p>
              <p className="cursor-point hover:text-black">Orders</p>
              <p className="cursor-point hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={Cart_Icon}
            className="w-5 min-w-5 cursor-pointer"
            alt="cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4  text-center leading-4 bg-black text-white text-[8px] rounded-full aspect-square">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={Menu_Icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu"
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 ring-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="cursor-pointer flex items-center gap-4 p-3"
          >
            <img src={Dropdown_Icon} alt="dropdown" className="h-4" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
