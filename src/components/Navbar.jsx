import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="hoobank" className="h-[32px] w-[124px]" />

      <ul className="hidden flex-1 list-none items-center justify-end gap-10 sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins cursor-pointer text-[16px] font-normal ${active === nav.title ? "text-white" : "text-dimWhite"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"} bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          onClick={() => setActive(nav.title)}
        >
          <ul className="flex list-none flex-col justify-end gap-4">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-[16px] font-medium ${active === nav.title ? "text-white" : "text-dimWhite"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
