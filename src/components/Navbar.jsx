import { useState } from "react";
import { links } from "../data";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lightMain fixed w-full z-10 top-0 flex-no-wrap items-center justify-between  py-2 shadow-md shadow-black/5 ">
      <div className="max-w-7xl  m-2 px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold">
              Kamila<span className="text-main">Samczuk</span>
            </h2>

            <div className="hidden md:block ml-10 flex gap-x-3">
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <a
                    key={id}
                    href={href}
                    className="uppercase text-lg tracking-wide hover:text-main  px-3 py-2"
                  >
                    {text}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="text-black hover:text-main focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="md:block">
            <div className="flex items-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-3 py-2"
              >
                <FaGithubSquare className="h-8 w-8 text-lightAccent hover:text-main duration-300" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-3 py-2"
              >
                <FaLinkedin className="h-8 w-8 text-lightAccent hover:text-main duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className=" block px-3 py-2 capitalize text-lg tracking-wide hover:text-main duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
