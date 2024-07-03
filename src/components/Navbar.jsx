import { useState } from "react";
import { links } from "../data";
import { CiMenuBurger } from "react-icons/ci";

import SocialButtonComponent from "./SocialButtonComponent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lightMain fixed w-screen z-10 top-0 flex-no-wrap items-center justify-between  shadow-md shadow-black/5 ">
      <div className="max-w-7xl  m-2 pr-1 pl-1">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h2 className="text-3xl">
              Kamila<span className="text-main">Samczuk</span>
            </h2>

            <div className="hidden md:block ml-10 flex gap-x-3">
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <a
                    key={id}
                    href={href}
                    className="uppercase text-md font-thin tracking-wide hover:text-main  px-3 py-2"
                  >
                    {text}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="md:hidden items-center">
            <button
              onClick={toggleNavbar}
              className={`transform transition-transform duration-200 active:rotate-90 md:hidden flex${
                isOpen ? "rotate-90" : "rotate-0"
              }  ease-in-out mr-1 ml-2 text-black hover:text-main focus:outline-none`}
            >
              <CiMenuBurger />
            </button>
          </div>
          <div className="lg:block ">
            <SocialButtonComponent />
          </div>
        </div>
      </div>
      {/* Mobile menu */}

      <div
        className={`transition duration-300 linear ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 hidden translate-y-1"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className=" block px-3 py-2 capitalize text-lg tracking-wide hover:text-main duration-300"
                onClick={toggleNavbar}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
