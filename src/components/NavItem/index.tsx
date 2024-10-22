import React from 'react';
import { Link } from 'react-router-dom';
import './NavItemStyles.css'

interface NavItemProps {
  to: string;
  label: string;
  isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, isOpen }) => {
  return (
    <li className={`w-full text-center items-center hover:bg-slate-200/5 ${isOpen ? 'link-item' : 'li-item'}`}>
      <Link to={to} className={`text-white hover:text-gray-400 w-full h-full item-root`}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
