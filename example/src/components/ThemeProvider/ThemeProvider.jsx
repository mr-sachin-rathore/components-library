import React, { createContext, useContext, useEffect } from 'react';
import { ConfigProvider } from 'modern-components';
import { useTheme } from '../../hooks';

const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const themeHook = useTheme();
  const { isDarkMode, selectedTheme } = themeHook;
  const currentTheme = themeHook.getTheme();

  // Add theme class to body for better CSS targeting
  useEffect(() => {
    const isCurrentlyDark = isDarkMode || selectedTheme === 'dark';
    document.body.className = isCurrentlyDark ? 'theme-dark' : 'theme-light';
  }, [isDarkMode, selectedTheme]);

  return (
    <ThemeContext.Provider value={themeHook}>
      <ConfigProvider theme={currentTheme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
