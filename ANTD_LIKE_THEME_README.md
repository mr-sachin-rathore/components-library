# Ant Design-like Theme Configuration System

This component library provides an enhanced `ConfigProvider` that extends Ant Design's ConfigProvider with predefined themes, colors, and spacing - maintaining the same familiar API you know from Ant Design.

## Features

✅ **Ant Design-like API**: Same familiar `ConfigProvider` and theme patterns  
✅ **Predefined Themes**: Built-in light/dark themes with consistent styling  
✅ **Zero Configuration**: Works out of the box with sensible defaults  
✅ **Custom Themes**: Full support for custom theme objects like Ant Design  
✅ **Enhanced useTheme Hook**: Access colors, spacing, and theme utilities  
✅ **Drop-in Replacement**: Same API as Ant Design's ConfigProvider

## Quick Start

### 1. Basic Usage (Zero Configuration)

Components automatically get consistent styling - no ConfigProvider needed:

```tsx
import { Button, Card, Input, Space } from 'modern-components';

function MyApp() {
  return (
    <Space direction="vertical">
      <Card title="Auto-styled Card">
        <Input placeholder="Auto-styled input" />
        <Button type="primary">Auto-styled button</Button>
      </Card>
    </Space>
  );
}
```

### 2. With ConfigProvider (Ant Design Pattern)

Use ConfigProvider just like Ant Design for theme control:

```tsx
import { ConfigProvider, Button, Card } from 'modern-components';

function App() {
  return (
    <ConfigProvider theme="dark">
      <Card title="Dark themed card">
        <Button type="primary">Dark themed button</Button>
      </Card>
    </ConfigProvider>
  );
}
```

### 3. Custom Theme (Exactly like Ant Design)

```tsx
import { ConfigProvider, theme } from 'modern-components';

const customTheme = theme.createCustomTheme({
  token: {
    colorPrimary: '#ff6b35',
    borderRadius: 12,
  },
  components: {
    Button: {
      borderRadius: 20,
    },
  },
});

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <YourApp />
    </ConfigProvider>
  );
}
```

## API Reference

### ConfigProvider

Extends Ant Design's ConfigProvider with enhanced theme support:

```tsx
interface ConfigProviderProps {
  children: ReactNode;
  theme?: ThemeConfig | 'light' | 'dark' | 'auto';
  darkMode?: boolean;
  // ... all other Ant Design ConfigProvider props
}
```

**Theme Options:**

- `'light'` - Predefined light theme (default)
- `'dark'` - Predefined dark theme
- `ThemeConfig` - Custom theme object (same as Ant Design)
- `'auto'` - Auto-detect system preference (coming soon)

### useTheme Hook

Enhanced hook for accessing theme data:

```tsx
const {
  theme, // Current ThemeConfig object
  isDark, // Boolean: is dark mode active
  colorPalette, // Predefined color palette
  spacing, // Predefined spacing scale
  backgrounds, // Background color variants
  setTheme, // Function to set custom theme
  toggleDarkMode, // Function to toggle dark/light
  createCustomTheme, // Helper to create custom themes
} = useTheme();
```

### theme Object

Similar to Ant Design's theme export:

```tsx
import { theme } from 'modern-components';

// Pre-built themes
theme.defaultAlgorithm; // Light theme config
theme.darkAlgorithm; // Dark theme config

// Design tokens
theme.colorPalette; // Color system
theme.spacing; // Spacing scale
theme.backgrounds; // Background variants

// Utilities
theme.createCustomTheme; // Theme creation helper
```

## Usage Examples

### 1. Predefined Themes

```tsx
// Light theme (default)
<ConfigProvider theme="light">
  <App />
</ConfigProvider>

// Dark theme
<ConfigProvider theme="dark">
  <App />
</ConfigProvider>
```

### 2. Accessing Design Tokens

```tsx
import { useTheme, colorPalette, spacing } from 'modern-components';

function MyComponent() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: spacing.lg, // 24px
        backgroundColor: colorPalette.primary[500], // #0ea5e9
        borderRadius: theme.token?.borderRadius, // 8px
      }}
    >
      Styled with design tokens
    </div>
  );
}
```

### 3. Theme Toggle

```tsx
import { ConfigProvider, useTheme, Button } from 'modern-components';

function ThemeToggle() {
  const { isDark, toggleDarkMode } = useTheme();

  return <Button onClick={toggleDarkMode}>{isDark ? 'Light Mode' : 'Dark Mode'}</Button>;
}

function App() {
  return (
    <ConfigProvider theme="light">
      <ThemeToggle />
    </ConfigProvider>
  );
}
```

### 4. Custom Theme Creation

```tsx
import { ConfigProvider, theme } from 'modern-components';

// Create custom theme using helper
const brandTheme = theme.createCustomTheme({
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    borderRadius: 8,
    fontSize: 16,
  },
  components: {
    Button: {
      borderRadius: 12,
      controlHeight: 44,
    },
    Card: {
      borderRadius: 16,
    },
  },
});

function App() {
  return (
    <ConfigProvider theme={brandTheme}>
      <YourApp />
    </ConfigProvider>
  );
}
```

## Predefined Design System

### Color Palette

Complete color system with 50-900 shades:

```tsx
import { colorPalette } from 'modern-components';

// Primary colors
colorPalette.primary[500]; // #0ea5e9
colorPalette.primary[100]; // Light variant
colorPalette.primary[900]; // Dark variant

// Semantic colors
colorPalette.success[500]; // #22c55e
colorPalette.warning[500]; // #f59e0b
colorPalette.error[500]; // #ef4444
colorPalette.neutral[500]; // #737373
```

### Spacing Scale

Consistent spacing system:

```tsx
import { spacing } from 'modern-components';

spacing.xs; // 4px
spacing.sm; // 8px
spacing.md; // 16px
spacing.lg; // 24px
spacing.xl; // 32px
spacing['2xl']; // 48px
spacing['3xl']; // 64px
// ... up to 6xl (128px)
```

### Background Colors

Theme-aware backgrounds:

```tsx
import { backgrounds } from 'modern-components';

// Light mode
backgrounds.light.primary; // #ffffff
backgrounds.light.secondary; // #f8fafc
backgrounds.light.tertiary; // #f1f5f9

// Dark mode
backgrounds.dark.primary; // #0f172a
backgrounds.dark.secondary; // #1e293b
backgrounds.dark.tertiary; // #334155
```

## Pre-configured Components

All components are automatically styled with the theme:

```tsx
// Buttons with consistent styling
<Button type="primary">Primary</Button>
<Button>Default</Button>
<Button danger>Danger</Button>

// Forms with consistent heights and styling
<Input placeholder="Consistent styling" />
<Select placeholder="Consistent styling">
  <Option value="1">Option 1</Option>
</Select>

// Cards with consistent backgrounds and borders
<Card title="Consistent Card">
  Content with proper spacing
</Card>
```

## Migration from Ant Design

Replace Ant Design's ConfigProvider with ours - the API is identical:

```tsx
// Before (Ant Design)
import { ConfigProvider } from 'antd';

<ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
  <App />
</ConfigProvider>;

// After (Modern Components)
import { ConfigProvider } from 'modern-components';

<ConfigProvider theme={{ token: { colorPrimary: '#1890ff' } }}>
  <App />
</ConfigProvider>;
```

**Benefits of switching:**

- Same familiar API
- Pre-configured design system
- Better defaults out of the box
- Enhanced theming capabilities
- Access to design tokens

## TypeScript Support

Full TypeScript support with the same types as Ant Design:

```tsx
import type { ThemeConfig, ConfigProviderProps } from 'modern-components';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
  },
};
```

This system gives you the familiar Ant Design ConfigProvider experience while providing enhanced theming capabilities and a consistent design system out of the box!
