# modern-components

A comprehensive React component library that re-exports all Ant Design components with enhanced theme customization capabilities.

## ✨ Features

- 🎨 **Complete Ant Design Export** - Access all Ant Design components through one library
- 🎯 **Full TypeScript Support** - All Ant Design types and interfaces included
- 🎭 **Enhanced Theme System** - Pre-built themes and easy customization helpers
- 📖 **Storybook Integration** - Interactive component documentation and examples
- 🌙 **Built-in Theme Variants** - Dark, compact, and color-based themes included
- 🔧 **Zero Configuration** - Works out of the box with all Ant Design features
- 🚀 **Future-Ready** - Easy to extend with custom components when needed

## 📦 Installation

```bash
npm install modern-components

# The library includes antd as a dependency, but you may want to install it explicitly for better control
npm install antd
```

## 🚀 Quick Start

```tsx
import React from 'react';
import { Button, Card, ConfigProvider } from 'modern-components';
import { greenTheme } from 'modern-components';

function App() {
  return (
    <ConfigProvider theme={greenTheme}>
      <Card title="Welcome to Modern Components">
        <p>All Ant Design components are available through this library!</p>
        <Button type="primary">Get Started</Button>
      </Card>
    </ConfigProvider>
  );
}

export default App;
```

## 📚 Available Components

This library exports **ALL** Ant Design components, including:

### Layout

- `Layout`, `Header`, `Footer`, `Content`, `Sider`

### Navigation

- `Menu`, `Breadcrumb`, `Pagination`, `Steps`

### Data Entry

- `Button`, `Input`, `Select`, `DatePicker`, `Form`, `Upload`, `Switch`, `Slider`, `Rate`, `Checkbox`, `Radio`, and more

### Data Display

- `Table`, `Card`, `List`, `Avatar`, `Badge`, `Tag`, `Timeline`, `Calendar`, `Tree`, and more

### Feedback

- `Alert`, `Modal`, `message`, `notification`, `Progress`, `Spin`, `Result`, and more

### General

- `Typography`, `Divider`, `Space`, `ConfigProvider`, and more

## 🎨 Theme Customization

### Pre-built Themes

```tsx
import {
  ConfigProvider,
  Button,
  defaultTheme,
  darkTheme,
  greenTheme,
  purpleTheme,
  redTheme,
  orangeTheme,
  compactTheme,
} from 'modern-components';

// Use a pre-built theme
function MyApp() {
  return (
    <ConfigProvider theme={darkTheme}>
      <Button type="primary">Dark Theme Button</Button>
    </ConfigProvider>
  );
}
```

### Custom Theme Creation

```tsx
import { ConfigProvider, Button, createCustomTheme } from 'modern-components';

const myCustomTheme = createCustomTheme({
  token: {
    colorPrimary: '#eb2f96',
    borderRadius: 8,
    fontSize: 16,
  },
  components: {
    Button: {
      colorPrimary: '#722ed1',
      borderRadius: 16,
    },
  },
});

function MyApp() {
  return (
    <ConfigProvider theme={myCustomTheme}>
      <Button type="primary">Custom Theme Button</Button>
    </ConfigProvider>
  );
}
```

### Available Pre-built Themes

- `defaultTheme` - Standard Ant Design theme
- `darkTheme` - Dark mode theme
- `compactTheme` - Compact size theme
- `greenTheme` - Green primary color theme
- `purpleTheme` - Purple primary color theme
- `redTheme` - Red primary color theme
- `orangeTheme` - Orange primary color theme

## 🔧 Advanced Usage

### Using All Component Features

Since this library is a complete re-export of Ant Design, you can use all features exactly as documented in the [Ant Design documentation](https://ant.design/):

```tsx
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  message,
  Table,
  Space,
} from 'modern-components';

const { Option } = Select;
const { RangePicker } = DatePicker;

function MyComplexForm() {
  const [form] = Form.useForm();

  const onFinish = values => {
    message.success('Form submitted successfully!');
    console.log('Form values:', values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item name="status" label="Status">
        <Select placeholder="Select status">
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </Form.Item>

      <Form.Item name="dateRange" label="Date Range">
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start Storybook for component development and testing
npm run storybook

# Build the library
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

## 📖 Storybook

View all components and their variations:

```bash
npm run storybook
```

Visit `http://localhost:6006` to:

- Browse all Ant Design components
- Test different themes
- View component examples
- Copy code snippets

## 🏗️ Building for Production

```bash
npm run build
```

This creates optimized builds for both CommonJS and ES modules with full TypeScript support.

## 🚀 Future Customization

This library is designed to be extended. When you need custom components, you can:

1. Create your own components that extend Ant Design components
2. Add them to this library
3. Maintain the same import structure

Example of future custom component:

```tsx
// Future custom component example
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/es/button';

interface CustomButtonProps extends ButtonProps {
  gradient?: boolean;
  glowing?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ gradient, glowing, ...props }) => {
  // Your custom implementation
  return <AntButton {...props} />;
};
```

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 👨‍💻 Author

**Sachin Rathore**

- React.js Frontend Developer
- 3+ years of experience
- Expert in React, TypeScript, and modern frontend development

## 🙏 Acknowledgments

- Built on the excellent [Ant Design](https://ant.design/) library
- Maintains full compatibility with Ant Design ecosystem
- Thanks to the Ant Design team for their amazing work

---

## 📱 Browser Support

Same as Ant Design:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 TypeScript Support

Full TypeScript support with all Ant Design types:

- Complete type definitions for all components
- Theme customization types
- Form validation types
- Table column types
- And much more!

## 🎯 Why Use This Library?

1. **Single Import Source** - All Ant Design components from one package
2. **Enhanced Themes** - Pre-built themes ready to use
3. **Easy Customization** - Simple theme creation helpers
4. **Future-Proof** - Easy to extend with custom components
5. **Consistent API** - Same as Ant Design, no learning curve
6. **Professional Setup** - Storybook, TypeScript, and build tools included
