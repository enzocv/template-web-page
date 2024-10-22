import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import useWindowSize from "../../hooks/useWindowSize";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (width > 767 && isOpen) toggleMenu();
  }, [width, isOpen]);

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-20">
      {/* <div className="container mx-auto flex justify-between items-center"> */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Página</h1>
        <div className="md:flex md:items-center">
          <Nav isOpen={isOpen} />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
