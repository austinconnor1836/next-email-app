'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { RootState } from '../../lib/store';
import { toggleMenu } from '../../lib/slices/uiSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const HamburgerMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state: RootState) => state.ui.isMenuOpen);

  return (
    <IconButton onClick={() => dispatch(toggleMenu())} className="absolute top-16 z-10">
      {isMenuOpen ? (
        <CloseIcon style={{ transition: 'transform 0.3s ease-in-out', transform: 'rotate(0deg)' }} />
      ) : (
        <MenuIcon style={{ transition: 'transform 0.3s ease-in-out', transform: 'rotate(0deg)' }} />
      )}
    </IconButton>
  );
};

export default HamburgerMenu;
