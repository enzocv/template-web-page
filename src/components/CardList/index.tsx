// src/components/CardList.tsx
import React from 'react';
import Card from '../Card';

interface CardListProps {
  cards: Array<{
    image: string;
    title: string;
    description?: string;
  }>;
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
