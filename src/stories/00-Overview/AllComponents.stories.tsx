import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  // Layout Components
  Row,
  Col,
  Space,
  Card,
  Typography,
  Divider,

  // Basic Components
  Button,

  // Form Components
  Input,
  Select,
  DatePicker,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Rate,
  TimePicker,

  // Data Display Components
  Avatar,
  Badge,
  Tag,
  Timeline,
  Statistic,

  // Navigation Components
  Breadcrumb,
  Pagination,
  Steps,

  // Feedback Components
  Alert,
  Progress,
  Skeleton,
  Spin,

  // Other Components
  Flex,
} from '../../index';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const meta: Meta = {
  title: '00-Overview/All Components',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Complete overview of all available Ant Design components re-exported through @sachinrathore/ui-components',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const ComponentsOverview: StoryObj = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* Header */}
      <Card>
        <Title level={1}>🎨 Modern Components Library</Title>
        <Paragraph>
          Complete Ant Design component library re-exported as{' '}
          <Text code>@sachinrathore/ui-components</Text>
        </Paragraph>
        <Text type="secondary">
          All components maintain their original Ant Design API with enhanced theming support
        </Text>
      </Card>

      {/* Basic Components */}
      <Card title="📋 Basic Components" size="small">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card size="small" title="Button">
              <Space wrap>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button danger>Danger</Button>
              </Space>
            </Card>
          </Col>
          <Col span={6}>
            <Card size="small" title="Typography">
              <Space direction="vertical">
                <Title level={4}>Title</Title>
                <Text>Text content</Text>
                <Text type="secondary">Secondary text</Text>
              </Space>
            </Card>
          </Col>
          <Col span={6}>
            <Card size="small" title="Space & Divider">
              <Space direction="vertical">
                <Text>Item 1</Text>
                <Divider />
                <Text>Item 2</Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Form Components */}
      <Card title="📝 Form Components" size="small">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card size="small" title="Input">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Input placeholder="Basic input" />
                <Input.Search placeholder="Search input" />
                <Input.Password placeholder="Password input" />
              </Space>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Select & Pickers">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Select defaultValue="option1" style={{ width: '100%' }}>
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                </Select>
                <DatePicker style={{ width: '100%' }} />
                <TimePicker style={{ width: '100%' }} />
              </Space>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Controls">
              <Space direction="vertical">
                <Checkbox>Checkbox</Checkbox>
                <Radio>Radio</Radio>
                <Switch defaultChecked />
                <Slider defaultValue={30} />
                <Rate defaultValue={3} />
              </Space>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Data Display Components */}
      <Card title="📊 Data Display Components" size="small">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card size="small" title="Avatar & Badge">
              <Space>
                <Avatar>U</Avatar>
                <Badge count={5}>
                  <Avatar shape="square" size="large" />
                </Badge>
                <Badge dot>
                  <Avatar shape="square" size="large" />
                </Badge>
              </Space>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Tags & Timeline">
              <Space direction="vertical">
                <Space wrap>
                  <Tag color="blue">Tag 1</Tag>
                  <Tag color="green">Tag 2</Tag>
                  <Tag color="red">Tag 3</Tag>
                </Space>
                <Timeline>
                  <Timeline.Item>Create project</Timeline.Item>
                  <Timeline.Item>Solve problems</Timeline.Item>
                </Timeline>
              </Space>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Statistics">
              <Space>
                <Statistic title="Users" value={1128} />
                <Statistic title="Rate" value={93} suffix="%" />
              </Space>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Navigation Components */}
      <Card title="🧭 Navigation Components" size="small">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card size="small" title="Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
              </Breadcrumb>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Steps">
              <Steps current={1} size="small">
                <Steps.Step title="Finished" />
                <Steps.Step title="In Progress" />
                <Steps.Step title="Waiting" />
              </Steps>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Pagination">
              <Pagination defaultCurrent={1} total={50} size="small" />
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Feedback Components */}
      <Card title="💬 Feedback Components" size="small">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card size="small" title="Alert">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Alert message="Success message" type="success" />
                <Alert message="Info message" type="info" />
                <Alert message="Warning message" type="warning" />
              </Space>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Progress">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
              </Space>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Skeleton & Spin">
              <Space direction="vertical">
                <Skeleton.Avatar active />
                <Skeleton.Button active />
                <Spin size="small" />
              </Space>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Layout Components */}
      <Card title="📐 Layout Components" size="small">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card size="small" title="Grid System">
              <Row gutter={8}>
                <Col span={8}>
                  <div style={{ background: '#f0f0f0', padding: '8px', textAlign: 'center' }}>
                    Col-8
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ background: '#d9d9d9', padding: '8px', textAlign: 'center' }}>
                    Col-8
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ background: '#f0f0f0', padding: '8px', textAlign: 'center' }}>
                    Col-8
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card size="small" title="Flex Layout">
              <Flex gap="small" wrap="wrap">
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Complete Component List */}
      <Card title="📚 Complete Component Reference" size="small">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Title level={5}>Basic</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✅ Button</li>
              <li>✅ Typography</li>
              <li>✅ Space</li>
              <li>✅ Divider</li>
            </ul>
          </Col>
          <Col span={6}>
            <Title level={5}>Form</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✅ Input</li>
              <li>✅ Select</li>
              <li>✅ DatePicker</li>
              <li>✅ TimePicker</li>
              <li>✅ Checkbox</li>
              <li>✅ Radio</li>
              <li>✅ Switch</li>
              <li>✅ Slider</li>
              <li>✅ Rate</li>
              <li>✅ Upload</li>
              <li>✅ Form</li>
              <li>✅ AutoComplete</li>
              <li>✅ Cascader</li>
              <li>✅ ColorPicker</li>
              <li>✅ InputNumber</li>
              <li>✅ Mentions</li>
              <li>✅ Segmented</li>
              <li>✅ Transfer</li>
            </ul>
          </Col>
          <Col span={6}>
            <Title level={5}>Data Display</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✅ Table</li>
              <li>✅ List</li>
              <li>✅ Card</li>
              <li>✅ Avatar</li>
              <li>✅ Badge</li>
              <li>✅ Calendar</li>
              <li>✅ Carousel</li>
              <li>✅ Collapse</li>
              <li>✅ Descriptions</li>
              <li>✅ Empty</li>
              <li>✅ Image</li>
              <li>✅ Popover</li>
              <li>✅ QRCode</li>
              <li>✅ Statistic</li>
              <li>✅ Tag</li>
              <li>✅ Timeline</li>
              <li>✅ Tooltip</li>
              <li>✅ Tree</li>
              <li>✅ TreeSelect</li>
            </ul>
          </Col>
          <Col span={6}>
            <Title level={5}>Navigation & Feedback</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✅ Affix</li>
              <li>✅ Breadcrumb</li>
              <li>✅ Dropdown</li>
              <li>✅ Menu</li>
              <li>✅ Pagination</li>
              <li>✅ Steps</li>
              <li>✅ Alert</li>
              <li>✅ Drawer</li>
              <li>✅ Modal</li>
              <li>✅ Popconfirm</li>
              <li>✅ Progress</li>
              <li>✅ Result</li>
              <li>✅ Skeleton</li>
              <li>✅ Spin</li>
              <li>✅ Watermark</li>
              <li>✅ Message</li>
              <li>✅ Notification</li>
            </ul>
          </Col>
        </Row>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Title level={5}>Layout</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✅ Layout</li>
              <li>✅ Grid (Row/Col)</li>
              <li>✅ Flex</li>
            </ul>
          </Col>
          <Col span={8}>
            <Title level={5}>Utility</Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✅ Anchor</li>
              <li>✅ BackTop</li>
              <li>✅ ConfigProvider</li>
              <li>✅ FloatButton</li>
              <li>✅ Tour</li>
            </ul>
          </Col>
          <Col span={8}>
            <Title level={5}>Total Components</Title>
            <Statistic
              title="Available Components"
              value={60}
              suffix="+"
              valueStyle={{ color: '#3f8600' }}
            />
          </Col>
        </Row>
      </Card>
    </Space>
  ),
};
