'use client';

import React, { useState, useEffect } from 'react';
import ContextMenu from '@/app/_components/custom-context-menu'; // Import the ContextMenu component

const UppercaseTextPage: React.FC = () => {
  const [selectedText, setSelectedText] = useState('');
  const [text, setText] = useState(`Enter some text or don't.`);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);

  // Function to convert the selected text to uppercase
  const handleUpperCase = () => {
    if (selectedText) {
      const newText = text.replace(selectedText, selectedText.toUpperCase());
      setText(newText);
      setSelectedText(newText);
    }
    setContextMenuVisible(false);
    alert()
  };

  // Function to convert text to uppercase and copy it to clipboard
  const handleCopyUpperCase = () => {
    if (selectedText) {
      const newText = text.replace(selectedText, selectedText.toUpperCase());
      navigator.clipboard.writeText(newText).then(() => {
        alert(`"${newText}" copied to clipboard!`);
      });
      setText(newText);
      setSelectedText(newText);
    }
    setContextMenuVisible(false);
  };

  // Function to copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`"${text}" copied to clipboard!`);
    });
    setContextMenuVisible(false);
  };

  // Function to detect text selection
  const handleSelection = () => {
    const inputElement = document.getElementById('text-input') as HTMLInputElement;
    const start = inputElement.selectionStart ?? 0;
    const end = inputElement.selectionEnd ?? 0;
    const selection = text.slice(start, end);
    setSelectedText(selection);
  };

  // Add a context menu event listener
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      if (selectedText) {
        setContextMenuVisible(true);
      }
    };

    const handleClick = () => {
      setContextMenuVisible(false);
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClick);
    };
  }, [selectedText]);

  useEffect(() => setSelectedText(text), []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <input
          id="text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onMouseUp={handleSelection}
          className="w-96 p-4 text-lg text-center border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Use the ContextMenu component */}
        <ContextMenu
          visible={true}
          onCopy={handleCopy}
          onCopyUpperCase={handleCopyUpperCase}
        />
      </div>
    </div>
  );
};

export default UppercaseTextPage;
