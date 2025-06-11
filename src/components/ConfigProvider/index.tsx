import React, { createContext, useContext, ReactNode } from 'react';
import { ConfigProvider as AntConfigProvider } from 'antd';
import type { ConfigProviderProps as AntConfigProviderProps } from 'antd/es/config-provider';
import type { ThemeConfig } from 'antd/es/config-provider/context';
import {
  defaultThemeConfig,
  darkThemeConfig,
  colorPalette,
  spacing,
  backgrounds,
  createCustomTheme,
} from '../../theme-config';

// Extended theme context interface
interface ThemeContextType {
  theme: ThemeConfig;
  isDark: boolean;
  colorPalette: typeof colorPalette;
  spacing: typeof spacing;
  backgrounds: typeof backgrounds;
  setTheme: (theme: ThemeConfig) => void;
  toggleDarkMode: () => void;
  createCustomTheme: typeof createCustomTheme;
}

// Create theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook to use theme - similar to Ant Design's useToken
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ConfigProvider');
  }
  return context;
};

// Extended ConfigProvider props
interface ConfigProviderProps extends Omit<AntConfigProviderProps, 'theme'> {
  children: ReactNode;
  theme?: ThemeConfig | 'light' | 'dark' | 'auto';
  darkMode?: boolean;
}

// Main ConfigProvider component - similar to Ant Design's ConfigProvider
export const ConfigProvider: React.FC<ConfigProviderProps> = ({
  children,
  theme = 'light',
  darkMode = false,
  ...antdProps
}) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeConfig>(() => {
    if (typeof theme === 'object') return theme;
    if (theme === 'dark' || darkMode) return darkThemeConfig;
    return defaultThemeConfig;
  });

  const [isDark, setIsDark] = React.useState(() => {
    if (typeof theme === 'object') return false; // Custom theme, assume light
    return theme === 'dark' || darkMode;
  });

  // Update theme when props change
  React.useEffect(() => {
    if (typeof theme === 'object') {
      setCurrentTheme(theme);
      setIsDark(false); // Custom theme, assume light
    } else if (theme === 'dark' || darkMode) {
      setCurrentTheme(darkThemeConfig);
      setIsDark(true);
    } else {
      setCurrentTheme(defaultThemeConfig);
      setIsDark(false);
    }
  }, [theme, darkMode]);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setCurrentTheme(newIsDark ? darkThemeConfig : defaultThemeConfig);
  };

  const setTheme = (newTheme: ThemeConfig) => {
    setCurrentTheme(newTheme);
  };

  const contextValue: ThemeContextType = {
    theme: currentTheme,
    isDark,
    colorPalette,
    spacing,
    backgrounds,
    setTheme,
    toggleDarkMode,
    createCustomTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <AntConfigProvider theme={currentTheme} {...antdProps}>
        {children}
      </AntConfigProvider>
    </ThemeContext.Provider>
  );
};

// Export theme configurations for direct access (similar to Ant Design's theme export)
export const theme = {
  defaultAlgorithm: defaultThemeConfig,
  darkAlgorithm: darkThemeConfig,
  colorPalette,
  spacing,
  backgrounds,
  createCustomTheme,
};

// Export individual configurations
export {
  defaultThemeConfig as defaultTheme,
  darkThemeConfig as darkTheme,
  colorPalette,
  spacing,
  backgrounds,
  createCustomTheme,
} from '../../theme-config';
