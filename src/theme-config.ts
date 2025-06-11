import { theme } from 'antd';
import type { ThemeConfig } from 'antd/es/config-provider/context';

// Predefined color palette
export const colorPalette = {
  // Primary colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  // Success colors
  success: {
    50: '#f0fff4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  // Warning colors
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  // Error colors
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  // Custom brand colors
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
};

// Predefined spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 80,
  '5xl': 96,
  '6xl': 128,
};

// Predefined background colors
export const backgrounds = {
  light: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    accent: '#e2e8f0',
    hover: '#f1f5f9',
    active: '#e2e8f0',
  },
  dark: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155',
    accent: '#475569',
    hover: '#334155',
    active: '#475569',
  },
};

// Default theme configuration with predefined values
export const defaultThemeConfig: ThemeConfig = {
  token: {
    // Primary colors from our palette
    colorPrimary: colorPalette.primary[500],
    colorSuccess: colorPalette.success[500],
    colorWarning: colorPalette.warning[500],
    colorError: colorPalette.error[500],
    colorInfo: colorPalette.primary[500],

    // Background colors
    colorBgContainer: backgrounds.light.primary,
    colorBgLayout: backgrounds.light.secondary,
    colorBgElevated: backgrounds.light.primary,
    colorBgSpotlight: backgrounds.light.tertiary,

    // Text colors
    colorText: colorPalette.neutral[900],
    colorTextSecondary: colorPalette.neutral[600],
    colorTextTertiary: colorPalette.neutral[400],
    colorTextQuaternary: colorPalette.neutral[300],

    // Border colors
    colorBorder: colorPalette.neutral[200],
    colorBorderSecondary: colorPalette.neutral[100],

    // Font configuration
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeSM: 12,
    fontSizeXL: 20,
    fontWeightStrong: 600,

    // Border radius
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    borderRadiusXS: 4,

    // Spacing using our predefined scale
    sizeUnit: 4,
    sizeStep: 4,
    sizeXXL: spacing['3xl'],
    sizeXL: spacing['2xl'],
    sizeLG: spacing.xl,
    sizeMD: spacing.lg,
    size: spacing.md,
    sizeSM: spacing.sm,
    sizeXS: spacing.xs,

    // Box shadows
    boxShadow:
      '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    boxShadowSecondary: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

    // Motion
    motionDurationFast: '0.1s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',

    // Line height
    lineHeight: 1.5,
    lineHeightLG: 1.6,
    lineHeightSM: 1.4,

    // Layout
    wireframe: false,
  },
  components: {
    // Button component customization
    Button: {
      colorPrimary: colorPalette.primary[500],
      algorithm: true,
      fontWeight: 600,
      borderRadius: 8,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
    // Input component customization
    Input: {
      colorBgContainer: backgrounds.light.primary,
      borderRadius: 8,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
    // Card component customization
    Card: {
      colorBgContainer: backgrounds.light.primary,
      borderRadius: 12,
    },
    // Select component customization
    Select: {
      colorBgContainer: backgrounds.light.primary,
      borderRadius: 8,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
    // Table component customization
    Table: {
      colorBgContainer: backgrounds.light.primary,
      borderRadius: 8,
    },
    // Layout component customization
    Layout: {
      colorBgHeader: backgrounds.light.primary,
      colorBgBody: backgrounds.light.secondary,
      colorBgTrigger: backgrounds.light.tertiary,
    },
    // Typography component customization
    Typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      fontWeightStrong: 600,
    },
  },
};

// Helper function to create custom themes
export const createCustomTheme = (customConfig: Partial<ThemeConfig> = {}): ThemeConfig => {
  return {
    ...defaultThemeConfig,
    ...customConfig,
    token: {
      ...defaultThemeConfig.token,
      ...customConfig.token,
    },
    components: {
      ...defaultThemeConfig.components,
      ...customConfig.components,
    },
  };
};

// Pre-defined theme variants
export const darkThemeConfig: ThemeConfig = createCustomTheme({
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgContainer: backgrounds.dark.primary,
    colorBgLayout: backgrounds.dark.secondary,
    colorBgElevated: backgrounds.dark.primary,
    colorBgSpotlight: backgrounds.dark.tertiary,
    colorText: colorPalette.neutral[50],
    colorTextSecondary: colorPalette.neutral[300],
    colorTextTertiary: colorPalette.neutral[400],
    colorTextQuaternary: colorPalette.neutral[500],
    colorBorder: colorPalette.neutral[700],
    colorBorderSecondary: colorPalette.neutral[800],
  },
  components: {
    Input: {
      colorBgContainer: backgrounds.dark.primary,
    },
    Card: {
      colorBgContainer: backgrounds.dark.primary,
    },
    Select: {
      colorBgContainer: backgrounds.dark.primary,
    },
    Table: {
      colorBgContainer: backgrounds.dark.primary,
    },
    Layout: {
      colorBgHeader: backgrounds.dark.primary,
      colorBgBody: backgrounds.dark.secondary,
      colorBgTrigger: backgrounds.dark.tertiary,
    },
  },
});

// Export theme algorithms
export { theme };
