// /app/posts/sidenav.tsx
'use client';

import React from 'react';
import cn from "classnames";

// Define the props interface
interface SidePanelProps {
  items: string[];
  onSelectItem?: (item: string) => void;
}

// Create the SidePanel component
const SidePanel: React.FC<SidePanelProps> = (props: SidePanelProps) => {
  const { items } = props;

  // return <TemporaryDrawer />
  return (
    // <div className="w-64 h-screen bg-gray-100 shadow-lg">
    <div className="w-64 h-screen shadow-lg">
      <ul className="p-2 space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-2 rounded-md cursor-pointer hover:bg-blue-100 transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanel;
