import React from 'react';

interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})`, height: '36rem' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-2xl">{subtitle}</p>
        <button
          onClick={onButtonClick}
          className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
