'use client';

import React from 'react';
import SidePanel from '@/app/_components/sidenav';

// Define the main component for the page
const SidePanelPage: React.FC = () => {
  // Define the items to be displayed in the side panel
  const navigationItems = ['Dashboard', 'Projects', 'Tasks', 'Settings'];

  // Handle item selection from the side panel
  const handleSelectItem = (item: string) => {
    alert(`Selected: ${item}`);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Navigation Side Panel */}
      <SidePanel items={navigationItems} onSelectItem={handleSelectItem} />

      {/* Main Content Area */}
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold text-gray-800">Main Content</h1>
        <p className="mt-4 text-gray-600">
          This is the main content area. Select an item from the navigation panel to see more details.
        </p>
      </div>
    </div>
  );
};

export default SidePanelPage;
