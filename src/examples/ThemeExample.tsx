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
  colorPalette,
  spacing,
} from '../index';

const { Title, Text } = Typography;

// Example component that uses the theme
const ThemedComponents: React.FC = () => {
  const { theme: currentTheme, isDark, toggleDarkMode } = useTheme();

  return (
    <Space direction="vertical" size="large" style={{ width: '100%', padding: spacing.lg }}>
      <Card
        title="Theme Configuration Example"
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

// Example usage with ConfigProvider
const ThemeExample: React.FC = () => {
  return (
    <ConfigProvider theme="light">
      <ThemedComponents />
    </ConfigProvider>
  );
};

export default ThemeExample;
