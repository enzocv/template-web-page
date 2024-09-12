import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="text-white hover:text-gray-400">
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
