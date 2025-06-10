import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Typography, Space, Card, Divider } from '../../index';
import { CopyOutlined, EditOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph, Link } = Typography;

const meta: Meta<typeof Typography> = {
  title: 'Antd Components/Basic/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Basic text writing, including headings, body text, lists, and more.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const AllTypography: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Typography Showcase" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Title>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          <Title level={5}>h5. Ant Design</Title>

          <Divider />

          <Text>Ant Design (default)</Text>
          <Text type="secondary">Ant Design (secondary)</Text>
          <Text type="success">Ant Design (success)</Text>
          <Text type="warning">Ant Design (warning)</Text>
          <Text type="danger">Ant Design (danger)</Text>
          <Text disabled>Ant Design (disabled)</Text>

          <Divider />

          <Text mark>Ant Design (mark)</Text>
          <Text code>Ant Design (code)</Text>
          <Text keyboard>Ant Design (keyboard)</Text>
          <Text underline>Ant Design (underline)</Text>
          <Text delete>Ant Design (delete)</Text>
          <Text strong>Ant Design (strong)</Text>
          <Text italic>Ant Design (italic)</Text>

          <Divider />

          <Paragraph>
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
          </Paragraph>

          <Paragraph>
            This is a long paragraph with some <Text strong>strong text</Text>, some{' '}
            <Text italic>italic text</Text> and some <Link href="#">link</Link> text. In addition,
            we add a mark which is <Text mark>highlighted</Text> and some{' '}
            <Text code>code text</Text> which is rendered as inline code.
          </Paragraph>
        </Space>
      </Card>
    </Space>
  ),
};

export const Titles: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Title Levels" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title>h1. Ant Design (level 1)</Title>
          <Title level={2}>h2. Ant Design (level 2)</Title>
          <Title level={3}>h3. Ant Design (level 3)</Title>
          <Title level={4}>h4. Ant Design (level 4)</Title>
          <Title level={5}>h5. Ant Design (level 5)</Title>
        </Space>
      </Card>
    </Space>
  ),
};

export const TextVariants: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Text Variants" size="small">
        <Space direction="vertical">
          <Text>Default Text</Text>
          <Text type="secondary">Secondary Text</Text>
          <Text type="success">Success Text</Text>
          <Text type="warning">Warning Text</Text>
          <Text type="danger">Danger Text</Text>
          <Text disabled>Disabled Text</Text>
        </Space>
      </Card>
    </Space>
  ),
};

export const TextDecorations: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Text Decorations" size="small">
        <Space direction="vertical">
          <Text mark>Marked Text</Text>
          <Text code>Code Text</Text>
          <Text keyboard>Keyboard Text</Text>
          <Text underline>Underlined Text</Text>
          <Text delete>Deleted Text</Text>
          <Text strong>Strong Text</Text>
          <Text italic>Italic Text</Text>
        </Space>
      </Card>
    </Space>
  ),
};

export const InteractiveText: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Interactive Text" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Paragraph copyable>This is a copyable text.</Paragraph>
          <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
          <Paragraph copyable={{ icon: [<CopyOutlined key="copy-icon" />], tooltips: false }}>
            Custom copy icon and remove tooltip.
          </Paragraph>

          <Paragraph editable={{ onChange: text => console.log('Editing:', text) }}>
            This is an editable text.
          </Paragraph>

          <Paragraph
            editable={{
              icon: <EditOutlined />,
              tooltip: 'click to edit text',
              onChange: text => console.log('Editing:', text),
            }}
          >
            Custom edit icon and tooltip text.
          </Paragraph>
        </Space>
      </Card>
    </Space>
  ),
};

export const EllipsisText: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Ellipsis Text" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Paragraph ellipsis>
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            This is a very long sentence that will be truncated with ellipsis when it exceeds the
            container width.
          </Paragraph>

          <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
          </Paragraph>

          <Paragraph
            ellipsis={{
              rows: 3,
              expandable: true,
              suffix: '--William Shakespeare',
              onExpand: function (event) {
                console.log('onExpand', event);
              },
            }}
          >
            To be, or not to be, that is a question: Whether it is nobler in the mind to suffer the
            slings and arrows of outrageous fortune, or to take arms against a sea of troubles, and
            by opposing end them? To die: to sleep; No more; and by a sleep to say we end the
            heart-ache and the thousand natural shocks that flesh is heir to, &apos;tis a
            consummation devoutly to be wish&apos;d.
          </Paragraph>
        </Space>
      </Card>
    </Space>
  ),
};

export const Links: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Links" size="small">
        <Space direction="vertical">
          <Link href="https://ant.design" target="_blank">
            Ant Design (default)
          </Link>
          <Link href="https://ant.design" target="_blank" type="secondary">
            Ant Design (secondary)
          </Link>
          <Link href="https://ant.design" target="_blank" type="success">
            Ant Design (success)
          </Link>
          <Link href="https://ant.design" target="_blank" type="warning">
            Ant Design (warning)
          </Link>
          <Link href="https://ant.design" target="_blank" type="danger">
            Ant Design (danger)
          </Link>
          <Link disabled>Ant Design (disabled)</Link>
        </Space>
      </Card>
    </Space>
  ),
};
