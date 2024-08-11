// /app/_components/ClientLayout.tsx
'use client';

import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ChatBot from './_components/chat/chatbot';
import ChatBar from './_components/chat/chatbar';
import NavBar from './_components/navbar';
import SidePanel from './_components/sidenav';
import { RootState, store } from './util/store';
import { Provider, useSelector } from 'react-redux';
import HamburgerMenu from './_components/hamburger';
import { ThemeSwitcher } from './_components/theme-switcher-og';
import { selectIsMenuOpen } from '@/lib/slices/uiSlice';
import { useAppSelector } from '@/lib/hooks';
import { usePathname } from 'next/navigation';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openChats, setOpenChats] = useState<number[]>([]);
  const [splitView, setSplitView] = useState(false);
  const [theme, setTheme] = useState('light');
  const isMenuOpen = useAppSelector(selectIsMenuOpen);

  const handleOpenChat = (id: number) => {
    if (!openChats.includes(id)) {
      setOpenChats((prevChats) => [...prevChats, id]);
    }
  };

  const handleCloseChat = (id: number) => {
    setOpenChats((prevChats) => prevChats.filter((chatId) => chatId !== id));
  };

  console.log('isMenuOpen', isMenuOpen);

  const pathname = usePathname();

  return (
    <div className={`relative h-screen overflow-hidden ${theme === 'dark' ? 'dark' : 'light'}`}>
      <>
        {isMenuOpen && pathname !== '/' ? (
          <div className="flex h-full">
            <SidePanel />
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
        ) : (
          <>
            {children}
            {openChats.map((chatId) => (
              <ChatBot key={chatId} id={chatId} onClose={handleCloseChat} />
            ))}
          </>
        )}
        <ChatBar openChats={openChats} onSelectChat={handleOpenChat} />
      </>
    </div>
  );
};

export default ClientLayout;
