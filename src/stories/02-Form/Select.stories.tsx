import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select, Space, Card, Tag } from '../../index';
import { UserOutlined } from '@ant-design/icons';

const { Option, OptGroup } = Select;

const meta: Meta<typeof Select> = {
  title: 'Antd Components/Form/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Select component to select value from options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'borderless', 'filled'],
    },
    mode: {
      control: 'select',
      options: ['multiple', 'tags'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    allowClear: {
      control: 'boolean',
    },
    showSearch: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: 'Select a person',
    style: { width: 200 },
    children: [
      <Option key="jack" value="jack">
        Jack
      </Option>,
      <Option key="lucy" value="lucy">
        Lucy
      </Option>,
      <Option key="tom" value="tom">
        Tom
      </Option>,
    ],
  },
};

export const BasicSelect: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Basic Select" size="small">
        <Space wrap>
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          <Select defaultValue="lucy" style={{ width: 120 }} disabled>
            <Option value="lucy">Lucy</Option>
          </Select>

          <Select defaultValue="lucy" style={{ width: 120 }} loading>
            <Option value="lucy">Lucy</Option>
          </Select>

          <Select placeholder="Select a person" allowClear style={{ width: 200 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Space>
      </Card>
    </Space>
  ),
};

export const SelectSizes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Select Sizes" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select size="large" defaultValue="large" style={{ width: 200 }}>
            <Option value="large">Large</Option>
          </Select>

          <Select defaultValue="default" style={{ width: 200 }}>
            <Option value="default">Default</Option>
          </Select>

          <Select size="small" defaultValue="small" style={{ width: 200 }}>
            <Option value="small">Small</Option>
          </Select>
        </Space>
      </Card>
    </Space>
  ),
};

export const SelectVariants: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Select Variants" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select defaultValue="outlined" variant="outlined" style={{ width: 200 }}>
            <Option value="outlined">Outlined</Option>
          </Select>

          <Select defaultValue="filled" variant="filled" style={{ width: 200 }}>
            <Option value="filled">Filled</Option>
          </Select>

          <Select defaultValue="borderless" variant="borderless" style={{ width: 200 }}>
            <Option value="borderless">Borderless</Option>
          </Select>
        </Space>
      </Card>
    </Space>
  ),
};

export const SearchableSelect: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Searchable Select" size="small">
        <Space wrap>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'tom', label: 'Tom' },
            ]}
            style={{ width: 200 }}
          />

          <Select
            showSearch
            placeholder="Search with custom filter"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.children ?? '').toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{ width: 200 }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Space>
      </Card>
    </Space>
  ),
};

export const MultipleSelect: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Multiple Select" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
          >
            {Array.from({ length: 26 }, (_, i) => (
              <Option key={`a${i + 10}`} value={`a${i + 10}`}>
                {`a${i + 10}`}
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            disabled
            style={{ width: '100%' }}
            placeholder="Disabled multiple"
            defaultValue={['a10', 'c12']}
          >
            {Array.from({ length: 26 }, (_, i) => (
              <Option key={`b${i + 10}`} value={`b${i + 10}`}>
                {`b${i + 10}`}
              </Option>
            ))}
          </Select>
        </Space>
      </Card>
    </Space>
  ),
};

export const TagsSelect: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Tags Select" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Tags Mode"
            options={[
              { value: 'gold', label: 'Gold' },
              { value: 'lime', label: 'Lime' },
              { value: 'green', label: 'Green' },
              { value: 'cyan', label: 'Cyan' },
            ]}
          />

          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Custom Tag Render"
            tagRender={props => {
              const { label, value, closable, onClose } = props;
              const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
                event.preventDefault();
                event.stopPropagation();
              };
              return (
                <Tag
                  color={value as string}
                  onMouseDown={onPreventMouseDown}
                  closable={closable}
                  onClose={onClose}
                  style={{ marginRight: 3 }}
                >
                  {label}
                </Tag>
              );
            }}
            options={[
              { value: 'gold', label: 'Gold' },
              { value: 'lime', label: 'Lime' },
              { value: 'green', label: 'Green' },
              { value: 'cyan', label: 'Cyan' },
            ]}
          />
        </Space>
      </Card>
    </Space>
  ),
};

export const OptGroupSelect: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Option Groups" size="small">
        <Select defaultValue="lucy" style={{ width: 200 }}>
          <OptGroup label="Manager">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </OptGroup>
          <OptGroup label="Engineer">
            <Option value="Tom">Tom</Option>
          </OptGroup>
        </Select>
      </Card>
    </Space>
  ),
};

export const CustomSelect: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Customized Select" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select
            placeholder="Select with custom dropdown style"
            style={{ width: '100%' }}
            dropdownStyle={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>

          <Select
            placeholder="Select with prefix icon"
            style={{ width: '100%' }}
            suffixIcon={<UserOutlined />}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Space>
      </Card>
    </Space>
  ),
};

export const LoadingSelect: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Loading Select" size="small">
        <Space wrap>
          <Select placeholder="Loading state" loading style={{ width: 200 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>

          <Select mode="multiple" placeholder="Multiple loading" loading style={{ width: 300 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Space>
      </Card>
    </Space>
  ),
};

export const Interactive: Story = {
  args: {
    placeholder: 'Interactive Select',
    style: { width: 200 },
    allowClear: true,
    showSearch: true,
    children: [
      <Option key="react" value="react">
        React
      </Option>,
      <Option key="vue" value="vue">
        Vue
      </Option>,
      <Option key="angular" value="angular">
        Angular
      </Option>,
    ],
  },
};
