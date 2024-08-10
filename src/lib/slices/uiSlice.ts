// lib/slices/uiSlice.ts
import { createAppSlice } from '../createAppSlice';

interface UIState {
  isMenuOpen: boolean;
  theme: 'light' | 'dark';
}

const initialState: UIState = {
  isMenuOpen: true,
  theme: 'dark',
};

export const uiSlice = createAppSlice({
  name: 'ui',
  initialState,
  reducers: (create) => ({
    toggleMenu: create.reducer((state) => {
      state.isMenuOpen = !state.isMenuOpen;
    }),
    toggleTheme: create.reducer((state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }),
  }),
  selectors: {
    selectIsMenuOpen: (state) => state.isMenuOpen,
    selectTheme: (state) => state.theme,
  }
});

export const { toggleMenu, toggleTheme } = uiSlice.actions;
// export default uiSlice.reducer;
export const { selectIsMenuOpen, selectTheme } = uiSlice.selectors;
