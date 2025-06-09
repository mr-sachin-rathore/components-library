import { useState } from 'react';
import { theme } from 'modern-components';

const { darkAlgorithm, defaultAlgorithm, compactAlgorithm } = theme;

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('default');

  const getTheme = () => {
    // Define color schemes for different themes
    const colorSchemes = {
      default: {
        colorPrimary: '#1677ff',
      },
      green: {
        colorPrimary: '#52c41a',
        colorSuccess: '#52c41a',
      },
      purple: {
        colorPrimary: '#722ed1',
        colorSuccess: '#722ed1',
      },
      orange: {
        colorPrimary: '#fa8c16',
        colorSuccess: '#fa8c16',
      },
    };

    // Determine algorithm based on dark mode or dark theme
    let algorithm = defaultAlgorithm;
    if (isDarkMode || selectedTheme === 'dark') {
      algorithm = darkAlgorithm;
    }

    // Get the color scheme for the selected theme
    const themeColors =
      selectedTheme === 'dark'
        ? colorSchemes.default
        : colorSchemes[selectedTheme] || colorSchemes.default;

    return {
      algorithm,
      token: {
        ...themeColors,
        // Optional: customize other design tokens
        borderRadius: 6,
        wireframe: false,
      },
      components: {
        // Optional component-level customizations
        Layout: {
          headerBg: isDarkMode || selectedTheme === 'dark' ? '#001529' : '#001529',
        },
      },
    };
  };

  return {
    isDarkMode,
    setIsDarkMode,
    selectedTheme,
    setSelectedTheme,
    getTheme,
  };
};
