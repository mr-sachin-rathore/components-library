import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Typography, Space, Card, Button, Alert, Empty } from '../../index';
import { PlusOutlined, ToolOutlined, RocketOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const meta: Meta = {
  title: '99-Custom/Custom Components',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Custom components that extend or modify Ant Design components with additional functionality, styling, or behavior.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const CustomComponentsOverview: StoryObj = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* Header */}
      <Card>
        <Title level={1}>🛠️ Custom Components</Title>
        <Paragraph>
          This section contains custom components that extend or modify Ant Design components with
          additional functionality, styling, or behavior specific to your application needs.
        </Paragraph>
        <Alert
          message="No Custom Components Yet"
          description="This section is ready for your custom components that will extend antd functionality."
          type="info"
          showIcon
        />
      </Card>

      {/* Current State */}
      <Card title="📋 Current Status" size="small">
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <span>
              No custom components have been created yet.
              <br />
              This is the place where you&apos;ll add components that extend antd functionality.
            </span>
          }
        >
          <Button type="primary" icon={<PlusOutlined />}>
            Add Custom Component
          </Button>
        </Empty>
      </Card>

      {/* Future Possibilities */}
      <Card title="🚀 Future Custom Component Ideas" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card size="small" type="inner" title="Enhanced Button Components">
            <Space direction="vertical">
              <Text>• Gradient Button with custom color schemes</Text>
              <Text>• Glass Morphism Button variants</Text>
              <Text>• Animated Loading Button with custom animations</Text>
              <Text>• Icon Button with tooltips and badges</Text>
            </Space>
          </Card>

          <Card size="small" type="inner" title="Advanced Data Display">
            <Space direction="vertical">
              <Text>• Enhanced Table with built-in filters and actions</Text>
              <Text>• Interactive Card with hover effects and animations</Text>
              <Text>• Custom Timeline with icons and media</Text>
              <Text>• Advanced Statistics with charts integration</Text>
            </Space>
          </Card>

          <Card size="small" type="inner" title="Smart Form Components">
            <Space direction="vertical">
              <Text>• Auto-complete Input with custom data sources</Text>
              <Text>• Multi-step Form Wizard</Text>
              <Text>• Dynamic Form Builder</Text>
              <Text>• Smart Validation Input with real-time feedback</Text>
            </Space>
          </Card>

          <Card size="small" type="inner" title="Layout Enhancements">
            <Space direction="vertical">
              <Text>• Responsive Dashboard Layout</Text>
              <Text>• Collapsible Sidebar with themes</Text>
              <Text>• Tabbed Content Area with drag & drop</Text>
              <Text>• Modal Manager for complex workflows</Text>
            </Space>
          </Card>
        </Space>
      </Card>

      {/* How to Add Custom Components */}
      <Card title="📖 How to Add Custom Components" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Alert
            message="Step-by-step Guide"
            description="Follow these steps to add your own custom components to this library:"
            type="success"
            showIcon
            icon={<ToolOutlined />}
          />

          <div>
            <Title level={5}>1. Create Component File</Title>
            <Paragraph>
              Create your component in <Text code>src/components/YourComponent/</Text>
            </Paragraph>
          </div>

          <div>
            <Title level={5}>2. Export from Index</Title>
            <Paragraph>
              Add your component export to <Text code>src/index.ts</Text>
            </Paragraph>
          </div>

          <div>
            <Title level={5}>3. Create Stories</Title>
            <Paragraph>
              Add Storybook stories in <Text code>src/stories/99-Custom/</Text>
            </Paragraph>
          </div>

          <div>
            <Title level={5}>4. Update Documentation</Title>
            <Paragraph>Document your component&apos;s API and usage examples</Paragraph>
          </div>
        </Space>
      </Card>

      {/* Examples Section */}
      <Card title="💡 Component Extension Examples" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Alert
            message="Example: Enhanced Button"
            description="You could create a custom Button that extends antd Button with gradient backgrounds, glass morphism effects, and custom animations."
            type="info"
            showIcon
          />

          <Alert
            message="Example: Smart Table"
            description="Create a Table component that includes built-in search, filters, export functionality, and custom cell renderers."
            type="info"
            showIcon
          />

          <Alert
            message="Example: Theme Components"
            description="Build components that automatically adapt to your custom themes with enhanced styling and behavior."
            type="info"
            showIcon
          />
        </Space>
      </Card>

      {/* Call to Action */}
      <Card>
        <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
          <RocketOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
          <Title level={3}>Ready to Build Custom Components?</Title>
          <Paragraph>
            Start extending antd components with your own custom functionality and styling. All the
            infrastructure is ready - just add your components!
          </Paragraph>
          <Space>
            <Button type="primary" size="large" icon={<PlusOutlined />}>
              Create First Component
            </Button>
            <Button size="large" icon={<ToolOutlined />}>
              View Documentation
            </Button>
          </Space>
        </Space>
      </Card>
    </Space>
  ),
};
