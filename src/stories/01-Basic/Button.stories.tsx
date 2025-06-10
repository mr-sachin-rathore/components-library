import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Space, Card } from '../../index';
import {
  SearchOutlined,
  DownloadOutlined,
  PoweroffOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const meta: Meta<typeof Button> = {
  title: 'Antd Components/Basic/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'text', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'round'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    danger: {
      control: 'boolean',
    },
    ghost: {
      control: 'boolean',
    },
    block: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    type: 'default',
    size: 'middle',
  },
};

export const ButtonTypes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Button Types" size="small">
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </Card>
    </Space>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Button Sizes" size="small">
        <Space wrap align="center">
          <Button type="primary" size="large">
            Large Button
          </Button>
          <Button type="primary" size="middle">
            Middle Button
          </Button>
          <Button type="primary" size="small">
            Small Button
          </Button>
        </Space>
      </Card>
    </Space>
  ),
};

export const ButtonStates: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Button States" size="small">
        <Space wrap>
          <Button type="primary">Normal</Button>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" disabled>
            Disabled
          </Button>
          <Button type="primary" danger>
            Danger
          </Button>
          <Button type="primary" ghost>
            Ghost
          </Button>
        </Space>
      </Card>
    </Space>
  ),
};

export const ButtonShapes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Button Shapes" size="small">
        <Space wrap>
          <Button type="primary">Default</Button>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <Button type="primary" shape="round">
            Round Button
          </Button>
          <Button type="primary" shape="round" icon={<SearchOutlined />}>
            Round with Icon
          </Button>
        </Space>
      </Card>
    </Space>
  ),
};

export const ButtonsWithIcons: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Buttons with Icons" size="small">
        <Space wrap>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button type="primary" icon={<DownloadOutlined />}>
            Download
          </Button>
          <Button type="primary" icon={<PlusOutlined />}>
            Add New
          </Button>
          <Button type="primary" icon={<EditOutlined />}>
            Edit
          </Button>
          <Button danger icon={<DeleteOutlined />}>
            Delete
          </Button>
        </Space>
      </Card>
    </Space>
  ),
};

export const BlockButtons: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Block Buttons" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button type="primary" block>
            Primary Block Button
          </Button>
          <Button block>Default Block Button</Button>
          <Button type="dashed" block>
            Dashed Block Button
          </Button>
        </Space>
      </Card>
    </Space>
  ),
};

export const LoadingButtons: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Loading Buttons" size="small">
        <Space wrap>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" loading icon={<PoweroffOutlined />}>
            Loading with Icon
          </Button>
          <Button type="primary" loading={false} icon={<PoweroffOutlined />}>
            Not Loading
          </Button>
        </Space>
      </Card>
    </Space>
  ),
};

export const GhostButtons: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div style={{ padding: '24px', background: '#001529' }}>
        <Card title="Ghost Buttons (on dark background)" size="small">
          <Space wrap>
            <Button type="primary" ghost>
              Primary Ghost
            </Button>
            <Button ghost>Default Ghost</Button>
            <Button type="dashed" ghost>
              Dashed Ghost
            </Button>
            <Button type="primary" ghost danger>
              Danger Ghost
            </Button>
          </Space>
        </Card>
      </div>
    </Space>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Button Groups" size="small">
        <Space direction="vertical" size="middle">
          <Button.Group>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </Button.Group>

          <Button.Group>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
          </Button.Group>

          <Button.Group>
            <Button type="primary" icon={<UserOutlined />}>
              Users
            </Button>
            <Button type="primary" icon={<SettingOutlined />}>
              Settings
            </Button>
          </Button.Group>
        </Space>
      </Card>
    </Space>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Button',
    type: 'primary',
    size: 'middle',
  },
};
