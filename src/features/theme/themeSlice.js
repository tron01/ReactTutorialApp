import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  const saved = localStorage.getItem('app-theme');
  if (saved) return saved;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
      localStorage.setItem('app-theme', state.value);
    },
    setTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('app-theme', state.value);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
