import React from 'react';
import './NavStyles.css';
import NavItem from '../NavItem';

interface NavProps {
  isOpen: boolean;
}

const dataNavegacion = [
  {
    id: 1,
    title: 'Inicio',
    path: '/'
  },
  {
    id: 2,
    title: 'Nosotros',
    path: '/notros'
  },
  {
    id: 3,
    title: 'Contacto',
    path: '/contacto'
  },
]

const Nav: React.FC<NavProps> = ({ isOpen }) => {
  return (
    <nav
      className={`fixed right-0 w-full h-screen bg-gray-800 text-white transform transition-transform duration-300 ease-in-out top-[62px] ${isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:relative md:translate-x-0 md:flex md:items-center md:bg-transparent md:h-auto`}
      style={{ zIndex: 10 }}
    >
      <ul className="flex flex-col items-center h-full md:flex-row sm:nav-ul">
        {dataNavegacion.map(item => (
          <NavItem key={item.id} to={item.path} label={item.title} isOpen={isOpen} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
