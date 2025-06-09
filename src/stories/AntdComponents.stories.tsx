import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Button,
  Card,
  Input,
  Select,
  DatePicker,
  Switch,
  Slider,
  Typography,
  Space,
  Divider,
  Row,
  Col,
  Tag,
  Alert,
  Badge,
  Avatar,
  ConfigProvider,
  Layout,
  Menu,
  Breadcrumb,
  Steps,
  Table,
  Form,
  Checkbox,
  Radio,
  Rate,
  Upload,
  Progress,
  Spin,
  Tooltip,
  Modal,
  message,
  notification,
} from '../index';

import { defaultTheme, darkTheme, greenTheme, purpleTheme } from '../theme';

const { Title, Text, Paragraph } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
const { Step } = Steps;

const meta: Meta = {
  title: 'Ant Design Components',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'All Ant Design components re-exported through @sachinrathore/ui-components with theme customization support.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Sample data for tables
const tableData = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' },
];

const tableColumns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

// Basic Components showcase
export const BasicComponents: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Buttons" size="small">
        <Space wrap>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <Button type="link">Link</Button>
          <Button danger>Danger</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </Space>
      </Card>

      <Card title="Typography" size="small">
        <Space direction="vertical">
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          <Text>Ant Design (default)</Text>
          <Text type="secondary">Ant Design (secondary)</Text>
          <Text type="success">Ant Design (success)</Text>
          <Text type="warning">Ant Design (warning)</Text>
          <Text type="danger">Ant Design (danger)</Text>
          <Text disabled>Ant Design (disabled)</Text>
          <Text mark>Ant Design (mark)</Text>
          <Text code>Ant Design (code)</Text>
          <Text keyboard>Ant Design (keyboard)</Text>
          <Text underline>Ant Design (underline)</Text>
          <Text delete>Ant Design (delete)</Text>
          <Text strong>Ant Design (strong)</Text>
          <Text italic>Ant Design (italic)</Text>
        </Space>
      </Card>

      <Card title="Input Components" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="Basic usage" />
          <Input.Search placeholder="Search input" />
          <Input.Password placeholder="Password input" />
          <Input.TextArea rows={4} placeholder="Textarea" />
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <DatePicker />
          <Switch defaultChecked />
          <Slider defaultValue={30} />
        </Space>
      </Card>

      <Card title="Data Display" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space wrap>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </Space>

          <Space>
            <Badge count={5}>
              <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={0} showZero>
              <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={<span style={{ color: '#f5222d' }}>99+</span>}>
              <Avatar shape="square" size="large" />
            </Badge>
          </Space>

          <Alert message="Success Tips" type="success" showIcon />
          <Alert message="Informational Notes" type="info" showIcon />
          <Alert message="Warning" type="warning" showIcon closable />
          <Alert message="Error" type="error" showIcon />
        </Space>
      </Card>
    </Space>
  ),
};

// Form Components
export const FormComponents: Story = {
  render: () => (
    <Card title="Form Example" style={{ maxWidth: 600 }}>
      <Form layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Skills" name="skills">
          <Checkbox.Group>
            <Checkbox value="react">React</Checkbox>
            <Checkbox value="vue">Vue</Checkbox>
            <Checkbox value="angular">Angular</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="Rating" name="rating">
          <Rate />
        </Form.Item>

        <Form.Item label="Upload" name="upload">
          <Upload>
            <Button>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button">Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  ),
};

// Layout Components
export const LayoutComponents: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Layout>
        <Header style={{ color: 'white', textAlign: 'center' }}>Header</Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ padding: 24, margin: 0, minHeight: 280, background: '#fff' }}>
              Content
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </div>
  ),
};

// Navigation Components
export const NavigationComponents: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Steps" size="small">
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </Card>

      <Card title="Table" size="small">
        <Table dataSource={tableData} columns={tableColumns} pagination={false} />
      </Card>

      <Card title="Progress & Feedback" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />

          <Space>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>

          <Space>
            <Tooltip title="prompt text">
              <span>Tooltip will show on mouse enter.</span>
            </Tooltip>
            <Button onClick={() => message.success('This is a success message')}>
              Show Message
            </Button>
            <Button
              onClick={() =>
                notification.open({
                  message: 'Notification Title',
                  description: 'This is the content of the notification.',
                })
              }
            >
              Show Notification
            </Button>
          </Space>
        </Space>
      </Card>
    </Space>
  ),
};

// Theme Examples
export const ThemeExamples: Story = {
  render: () => (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <ConfigProvider theme={defaultTheme}>
          <Card title="Default Theme" size="small">
            <Space direction="vertical">
              <Button type="primary">Primary Button</Button>
              <Alert message="Success Tips" type="success" showIcon />
              <Progress percent={75} />
            </Space>
          </Card>
        </ConfigProvider>
      </Col>

      <Col span={12}>
        <ConfigProvider theme={darkTheme}>
          <Card title="Dark Theme" size="small" style={{ background: '#141414', color: 'white' }}>
            <Space direction="vertical">
              <Button type="primary">Primary Button</Button>
              <Alert message="Success Tips" type="success" showIcon />
              <Progress percent={75} />
            </Space>
          </Card>
        </ConfigProvider>
      </Col>

      <Col span={12}>
        <ConfigProvider theme={greenTheme}>
          <Card title="Green Theme" size="small">
            <Space direction="vertical">
              <Button type="primary">Primary Button</Button>
              <Alert message="Success Tips" type="success" showIcon />
              <Progress percent={75} />
            </Space>
          </Card>
        </ConfigProvider>
      </Col>

      <Col span={12}>
        <ConfigProvider theme={purpleTheme}>
          <Card title="Purple Theme" size="small">
            <Space direction="vertical">
              <Button type="primary">Primary Button</Button>
              <Alert message="Success Tips" type="success" showIcon />
              <Progress percent={75} />
            </Space>
          </Card>
        </ConfigProvider>
      </Col>
    </Row>
  ),
};
