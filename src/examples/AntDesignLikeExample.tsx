import React from 'react';
import {
  Button,
  Card,
  Input,
  Space,
  Typography,
  Switch,
  ConfigProvider,
  useTheme,
  theme,
  colorPalette,
  spacing,
} from '../index';

const { Title, Text } = Typography;

// Example component that uses the theme - similar to Ant Design pattern
const ThemedComponents: React.FC = () => {
  const { theme: currentTheme, isDark, toggleDarkMode } = useTheme();

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', padding: spacing.lg }}>
      <Card
        title="Ant Design-like Theme Configuration"
        style={{ borderRadius: currentTheme.token?.borderRadius }}
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div>
            <Text strong>Theme Mode:</Text>
            <div style={{ marginTop: spacing.sm }}>
              <Switch
                checked={isDark}
                onChange={toggleDarkMode}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
            </div>
          </div>

          <div>
            <Title level={4}>Color Palette</Title>
            <Space wrap>
              {Object.entries(colorPalette).map(([key, colors]) => (
                <div key={key} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: colors[500],
                      borderRadius: 8,
                      border: '2px solid #ccc',
                      marginBottom: 4,
                    }}
                    title={`${key} Color`}
                  />
                  <Text style={{ fontSize: 12 }}>{key}</Text>
                </div>
              ))}
            </Space>
          </div>

          <div>
            <Title level={4}>Pre-configured Components</Title>
            <Space wrap>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button danger>Danger</Button>
              <Button type="dashed">Dashed</Button>
            </Space>
            <div style={{ marginTop: spacing.md }}>
              <Input placeholder="Auto-styled input with consistent theming" />
            </div>
          </div>
        </Space>
      </Card>
    </Space>
  );
};

// Example 1: Basic usage with predefined themes (like Ant Design)
const BasicExample: React.FC = () => {
  return (
    <ConfigProvider theme="light">
      <ThemedComponents />
    </ConfigProvider>
  );
};

// Example 2: Dark mode
const DarkExample: React.FC = () => {
  return (
    <ConfigProvider theme="dark">
      <ThemedComponents />
    </ConfigProvider>
  );
};

// Example 3: Custom theme (like Ant Design's theme prop)
const CustomExample: React.FC = () => {
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

  return (
    <ConfigProvider theme={customTheme}>
      <ThemedComponents />
    </ConfigProvider>
  );
};

// Main example component showing all patterns
const AntDesignLikeExample: React.FC = () => {
  const [mode, setMode] = React.useState<'basic' | 'dark' | 'custom'>('basic');

  const renderExample = () => {
    switch (mode) {
      case 'dark':
        return <DarkExample />;
      case 'custom':
        return <CustomExample />;
      default:
        return <BasicExample />;
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Card title="Ant Design-like ConfigProvider Examples" style={{ marginBottom: 24 }}>
        <Space>
          <Button type={mode === 'basic' ? 'primary' : 'default'} onClick={() => setMode('basic')}>
            Basic Theme
          </Button>
          <Button type={mode === 'dark' ? 'primary' : 'default'} onClick={() => setMode('dark')}>
            Dark Theme
          </Button>
          <Button
            type={mode === 'custom' ? 'primary' : 'default'}
            onClick={() => setMode('custom')}
          >
            Custom Theme
          </Button>
        </Space>
      </Card>

      {renderExample()}
    </div>
  );
};

export default AntDesignLikeExample;
