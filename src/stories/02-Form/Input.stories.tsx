import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input, Space, Card, Form, Button } from '../../index';
import {
  UserOutlined,
  LockOutlined,
  SearchOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons';

const meta: Meta<typeof Input> = {
  title: 'Antd Components/Form/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    status: {
      control: 'select',
      options: ['error', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'borderless', 'filled'],
    },
    disabled: {
      control: 'boolean',
    },
    allowClear: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Basic usage',
    size: 'middle',
  },
};

export const InputSizes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Input Sizes" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input size="large" placeholder="Large size" />
          <Input placeholder="Default size" />
          <Input size="small" placeholder="Small size" />
        </Space>
      </Card>
    </Space>
  ),
};

export const InputVariants: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Input Variants" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="Outlined (default)" variant="outlined" />
          <Input placeholder="Filled" variant="filled" />
          <Input placeholder="Borderless" variant="borderless" />
        </Space>
      </Card>
    </Space>
  ),
};

export const InputWithIcons: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Input with Icons" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="Enter your username" prefix={<UserOutlined />} />
          <Input placeholder="Enter your password" prefix={<LockOutlined />} type="password" />
          <Input placeholder="Search..." suffix={<SearchOutlined />} />
          <Input placeholder="With clear button" allowClear suffix={<SearchOutlined />} />
        </Space>
      </Card>
    </Space>
  ),
};

export const InputStates: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Input States" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="Normal input" />
          <Input placeholder="Disabled input" disabled />
          <Input placeholder="Error status" status="error" />
          <Input placeholder="Warning status" status="warning" />
          <Input placeholder="With clear button" allowClear />
          <Input placeholder="Read only" readOnly value="Read only value" />
        </Space>
      </Card>
    </Space>
  ),
};

export const InputSearch: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Search Input" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input.Search placeholder="Input search text" onSearch={value => console.log(value)} />
          <Input.Search
            placeholder="Input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          <Input.Search
            placeholder="Input search text"
            enterButton={<SearchOutlined />}
            onSearch={value => console.log(value)}
          />
          <Input.Search
            placeholder="Input search text"
            loading
            enterButton="Search"
            onSearch={value => console.log(value)}
          />
        </Space>
      </Card>
    </Space>
  ),
};

export const InputPassword: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Password Input" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input.Password placeholder="Input password" />
          <Input.Password
            placeholder="Input password with custom icons"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Input.Password
            placeholder="Visible password by default"
            visibilityToggle={{
              visible: true,
              onVisibleChange: visible => console.log(visible),
            }}
          />
        </Space>
      </Card>
    </Space>
  ),
};

export const TextArea: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Text Area" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input.TextArea rows={4} placeholder="Basic textarea" />
          <Input.TextArea
            rows={4}
            placeholder="Auto resize"
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
          <Input.TextArea rows={4} placeholder="With character count" showCount maxLength={100} />
          <Input.TextArea rows={4} placeholder="Disabled textarea" disabled />
        </Space>
      </Card>
    </Space>
  ),
};

export const InputGroup: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Input Group" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input.Group size="large">
            <Input style={{ width: '20%' }} defaultValue="0571" />
            <Input style={{ width: '30%' }} defaultValue="26888888" />
          </Input.Group>

          <Input.Group compact>
            <Input style={{ width: '20%' }} defaultValue="https://" />
            <Input style={{ width: '50%' }} defaultValue="mysite" />
            <Input style={{ width: '30%' }} defaultValue=".com" />
          </Input.Group>

          <Input.Group compact>
            <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
            <Button type="primary">Submit</Button>
          </Input.Group>
        </Space>
      </Card>
    </Space>
  ),
};

export const FormExample: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Input in Form" size="small" style={{ maxWidth: 400 }}>
        <Form layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="Email address" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea
              rows={4}
              placeholder="Tell us about yourself..."
              showCount
              maxLength={200}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  ),
};

export const Interactive: Story = {
  args: {
    placeholder: 'Interactive Input',
    allowClear: true,
    size: 'middle',
  },
};
