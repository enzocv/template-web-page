import React from 'react';
import NavItem from '../NavItem';

interface NavProps {
  isOpen: boolean;
}

const Nav: React.FC<NavProps> = ({ isOpen }) => {
  return (
    <nav
      className={`fixed right-0 w-full h-screen bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 top-[62px]' : 'translate-x-full top-0'
        } md:relative md:translate-x-0 md:flex md:items-center md:bg-transparent md:h-auto`}
      style={{ zIndex: 10 }}
    >
      <ul className="flex flex-col items-center justify-center h-full md:flex-row md:space-x-4">
        <NavItem to="/" label="Inicio" />
        <NavItem to="/nosotros" label="Nosotros" />
        <NavItem to="/contacto" label="Contacto" />
      </ul>
    </nav>
  );
};

export default Nav;
