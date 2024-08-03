'use client';

import React from 'react';

interface ContextMenuProps {
  visible: boolean;
  onUpperCase: () => void;
  onCopy: () => void;
  onCopyUpperCase: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ visible, onUpperCase, onCopy, onCopyUpperCase }) => {
  return (
    <div
      className={`absolute w-80 bg-white border border-gray-300 shadow-md rounded-md ${
        visible ? 'block' : 'hidden'
      }`}
    >
      <ul>
        <li
          onClick={onUpperCase}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          Convert to Uppercase
        </li>
        <li
          onClick={onCopy}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          Copy to Clipboard
        </li>
        <li
          onClick={onCopyUpperCase}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          Convert to Upper Case & Copy to Clipboard
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
