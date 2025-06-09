import { theme } from 'antd';
import type { ThemeConfig } from 'antd/es/config-provider/context';

// Default theme configuration that can be customized
export const defaultTheme: ThemeConfig = {
  token: {
    // Primary colors
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',

    // Font
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    fontSize: 14,

    // Border radius
    borderRadius: 6,

    // Spacing
    sizeUnit: 4,
    sizeStep: 4,

    // Layout
    wireframe: false,
  },
  components: {
    // Component-specific theme overrides can be added here
    // Example:
    // Button: {
    //   colorPrimary: '#00b96b',
    // },
  },
};

// Helper function to create custom themes
export const createCustomTheme = (customConfig: Partial<ThemeConfig> = {}): ThemeConfig => {
  return {
    ...defaultTheme,
    ...customConfig,
    token: {
      ...defaultTheme.token,
      ...customConfig.token,
    },
    components: {
      ...defaultTheme.components,
      ...customConfig.components,
    },
  };
};

// Pre-defined theme variants
export const darkTheme: ThemeConfig = createCustomTheme({
  algorithm: theme.darkAlgorithm,
});

export const compactTheme: ThemeConfig = createCustomTheme({
  algorithm: theme.compactAlgorithm,
});

// Popular color themes
export const greenTheme: ThemeConfig = createCustomTheme({
  token: {
    colorPrimary: '#52c41a',
  },
});

export const purpleTheme: ThemeConfig = createCustomTheme({
  token: {
    colorPrimary: '#722ed1',
  },
});

export const redTheme: ThemeConfig = createCustomTheme({
  token: {
    colorPrimary: '#f5222d',
  },
});

export const orangeTheme: ThemeConfig = createCustomTheme({
  token: {
    colorPrimary: '#fa541c',
  },
});

// Re-export theme algorithms
export { theme };
