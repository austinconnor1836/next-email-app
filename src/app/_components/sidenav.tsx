// /app/posts/sidenav.tsx
'use client';

import React from 'react';
import cn from "classnames";

// Create the SidePanel component
const SidePanel: React.FC = () => {
  const items = ['Home', 'New Post', 'Categories', 'Archives'];

  // return <TemporaryDrawer />
  return (
    // <div className="w-64 h-screen bg-gray-100 shadow-lg">
    <div className="mt-2 w-64 h-screen shadow-lg">
      <div className="p-4 border-b border-gray-300 bg-gray-200">
        <h2 className="pt-3 text-lg font-bold text-gray-800">Navigation</h2>
      </div>
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
