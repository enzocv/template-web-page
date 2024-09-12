// components/TabContent.tsx
import React from 'react';

interface TabContentProps {
  title: string;
  content: string;
}

const TabContent: React.FC<TabContentProps> = ({ title, content }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TabContent;
