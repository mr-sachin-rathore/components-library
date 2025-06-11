# Centralized Theme Configuration System

This component library includes a centralized theme configuration system that automatically applies predefined colors, backgrounds, and spacing to all Ant Design components without requiring configuration in your consuming application.

## Features

✅ **Predefined Color Palette**: Consistent color system with 50-900 shades  
✅ **Standardized Spacing**: Consistent spacing scale from xs to 6xl  
✅ **Background Colors**: Light and dark mode background variants  
✅ **Auto-configured Components**: All components use consistent styling  
✅ **Zero Configuration**: Works out of the box  
✅ **Theme Provider**: Optional theme customization and dark mode

## Quick Start

### 1. Basic Usage (Zero Configuration)

Simply import and use components - they'll automatically have consistent styling:

```tsx
import { Button, Card, Input, Space } from 'modern-components';

function MyApp() {
  return (
    <Space direction="vertical">
      <Card title="My Card">
        <Input placeholder="Styled input" />
        <Button type="primary">Styled button</Button>
      </Card>
    </Space>
  );
}
```

### 2. With Theme Provider (Optional)

For advanced features like dark mode toggle and theme customization:

```tsx
import { ModernThemeProvider, Button, Card, useTheme } from 'modern-components';

function ThemedApp() {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <Card>
      <Button onClick={toggleDarkMode}>{isDark ? 'Light Mode' : 'Dark Mode'}</Button>
    </Card>
  );
}

function App() {
  return (
    <ModernThemeProvider defaultDark={false}>
      <ThemedApp />
    </ModernThemeProvider>
  );
}
```

## Predefined Configuration

### Color Palette

Access consistent colors throughout your app:

```tsx
import { colorPalette } from 'modern-components';

// Primary colors (50-900 shades)
colorPalette.primary[500]; // Main primary color
colorPalette.success[500]; // Success color
colorPalette.warning[500]; // Warning color
colorPalette.error[500]; // Error color
colorPalette.neutral[500]; // Neutral gray
```

### Spacing Scale

Consistent spacing values:

```tsx
import { spacing } from 'modern-components';

const styles = {
  padding: spacing.md, // 16px
  margin: spacing.lg, // 24px
  gap: spacing.sm, // 8px
};

// Available sizes: xs(4), sm(8), md(16), lg(24), xl(32), 2xl(48), 3xl(64), 4xl(80), 5xl(96), 6xl(128)
```

### Background Colors

Predefined backgrounds for light and dark modes:

```tsx
import { backgrounds } from 'modern-components';

const lightBg = backgrounds.light.primary; // #ffffff
const darkBg = backgrounds.dark.primary; // #0f172a
```

## Component Auto-Configuration

All components are automatically configured with:

- **Consistent border radius**: 8px (cards: 12px)
- **Standardized heights**: 40px (lg: 48px, sm: 32px)
- **Proper spacing**: Using the predefined spacing scale
- **Color consistency**: Using the color palette
- **Typography**: Consistent font family and weights

### Examples

```tsx
// Button - auto-configured with consistent styling
<Button type="primary">Styled Button</Button>

// Input - consistent height, border radius, padding
<Input placeholder="Auto-styled input" />

// Card - consistent background, border radius, padding
<Card title="Auto-styled card">Content</Card>

// All components work together seamlessly
<Space direction="vertical" size="middle">
  <Input placeholder="Search..." />
  <Button type="primary" size="large">Submit</Button>
</Space>
```

## Theme Customization

### Custom Theme Creation

```tsx
import { createCustomTheme, ModernThemeProvider } from 'modern-components';

const customTheme = createCustomTheme({
  token: {
    colorPrimary: '#ff6b35', // Custom primary color
    borderRadius: 12, // Custom border radius
  },
  components: {
    Button: {
      borderRadius: 20, // Custom button radius
    },
  },
});

function App() {
  return (
    <ModernThemeProvider theme={customTheme}>
      <YourApp />
    </ModernThemeProvider>
  );
}
```

### Using Theme Hook

```tsx
import { useTheme } from 'modern-components';

function MyComponent() {
  const { currentTheme, isDark, colorPalette, spacing, toggleDarkMode } = useTheme();

  return (
    <div
      style={{
        padding: spacing.lg,
        backgroundColor: colorPalette.primary[50],
      }}
    >
      <button onClick={toggleDarkMode}>Toggle {isDark ? 'Light' : 'Dark'} Mode</button>
    </div>
  );
}
```

## Pre-configured Component Examples

### Buttons

```tsx
// All buttons have consistent styling
<Button type="primary">Primary</Button>      // Uses colorPalette.primary[500]
<Button>Default</Button>                     // Consistent height/padding
<Button danger>Danger</Button>               // Uses colorPalette.error[500]
```

### Forms

```tsx
// Form components with consistent styling
<Form>
  <Form.Item>
    <Input placeholder="Consistent input styling" />
  </Form.Item>
  <Form.Item>
    <Select placeholder="Consistent select styling">
      <Option value="1">Option 1</Option>
    </Select>
  </Form.Item>
</Form>
```

### Cards and Layout

```tsx
// Cards with consistent backgrounds and spacing
<Card title="Styled Card">
  <Space direction="vertical" size="middle">
    <Typography.Text>Consistent typography</Typography.Text>
    <Button type="primary">Styled button</Button>
  </Space>
</Card>
```

## TypeScript Support

Full TypeScript support with proper type exports:

```tsx
import type { ThemeConfig, CustomButtonProps, NavbarProps } from 'modern-components';
```

## No Configuration Required

The beauty of this system is that **you don't need to configure anything**. Just import and use components - they'll automatically have:

- Consistent colors from the predefined palette
- Standardized spacing and sizing
- Proper typography
- Coordinated styling across all components
- Dark mode support (when using ThemeProvider)

## Migration from Standard Ant Design

If you're migrating from standard Ant Design:

1. Replace imports from `'antd'` to `'modern-components'`
2. Remove any existing theme configuration (it's handled automatically)
3. Optionally wrap your app with `ModernThemeProvider` for advanced features

```tsx
// Before
import { Button, ConfigProvider } from 'antd';

// After
import { Button } from 'modern-components';
// No ConfigProvider needed - styling is automatic!
```

This system ensures consistent design across your entire application while maintaining the full flexibility of Ant Design when needed.
