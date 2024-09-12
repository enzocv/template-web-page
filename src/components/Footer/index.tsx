import React from 'react';

interface FooterProps {
  year: number;
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ year, copyright }) => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {year} {copyright}</p>
    </footer>
  );
};

export default Footer;
