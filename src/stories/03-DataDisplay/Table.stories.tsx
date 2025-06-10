import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table, Space, Card, Button, Tag, Popconfirm } from '../../index';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  status: 'active' | 'inactive' | 'pending';
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    status: 'active',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    status: 'inactive',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    status: 'pending',
  },
  {
    key: '4',
    name: 'Jane Doe',
    age: 28,
    address: 'Chicago No. 2 Park Avenue',
    tags: ['designer', 'creative'],
    status: 'active',
  },
];

const expandedData = Array.from({ length: 50 }, (_, i) => ({
  key: `${i + 1}`,
  name: `User ${i + 1}`,
  age: 20 + (i % 40),
  address: `Address ${i + 1}`,
  tags: ['tag1', 'tag2'],
  status: ['active', 'inactive', 'pending'][i % 3] as 'active' | 'inactive' | 'pending',
}));

const basicColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a href="#">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="link" icon={<EyeOutlined />} size="small">
          View
        </Button>
        <Button type="link" icon={<EditOutlined />} size="small">
          Edit
        </Button>
        <Popconfirm title="Sure to delete?">
          <Button type="link" danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];

const meta: Meta<typeof Table> = {
  title: 'Antd Components/Data Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A table displays rows of data with sorting, filtering, and pagination functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    bordered: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: basicColumns,
    dataSource: data,
  },
};

export const BasicTable: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Basic Table" size="small">
        <Table columns={basicColumns} dataSource={data} />
      </Card>
    </Space>
  ),
};

export const TableSizes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Table Sizes" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div>
            <h4>Small Table</h4>
            <Table columns={basicColumns} dataSource={data} size="small" />
          </div>
          <div>
            <h4>Middle Table (Default)</h4>
            <Table columns={basicColumns} dataSource={data} size="middle" />
          </div>
          <div>
            <h4>Large Table</h4>
            <Table columns={basicColumns} dataSource={data} size="large" />
          </div>
        </Space>
      </Card>
    </Space>
  ),
};

export const BorderedTable: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Bordered Table" size="small">
        <Table
          columns={basicColumns}
          dataSource={data}
          bordered
          title={() => 'Header'}
          footer={() => 'Footer'}
        />
      </Card>
    </Space>
  ),
};

export const SortableTable: Story = {
  render: () => {
    const sortableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),
        sortDirections: ['descend', 'ascend'] as const,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a: DataType, b: DataType) => a.age - b.age,
        defaultSortOrder: 'descend' as const,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter: (a: DataType, b: DataType) => a.address.localeCompare(b.address),
      },
    ];

    return (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="Sortable Table" size="small">
          <Table columns={sortableColumns} dataSource={data} />
        </Card>
      </Space>
    );
  },
};

export const FilterableTable: Story = {
  render: () => {
    const filterableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
          { text: 'John', value: 'John' },
        ],
        onFilter: (value: string | number | boolean, record: DataType) =>
          record.name.indexOf(value as string) === 0,
        sorter: (a: DataType, b: DataType) => a.name.length - b.name.length,
        sortDirections: ['descend', 'ascend'] as const,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a: DataType, b: DataType) => a.age - b.age,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        filters: [
          { text: 'Active', value: 'active' },
          { text: 'Inactive', value: 'inactive' },
          { text: 'Pending', value: 'pending' },
        ],
        onFilter: (value: string | number | boolean, record: DataType) => record.status === value,
        render: (status: string) => {
          const color = status === 'active' ? 'green' : status === 'inactive' ? 'red' : 'orange';
          return <Tag color={color}>{status.toUpperCase()}</Tag>;
        },
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];

    return (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="Filterable & Sortable Table" size="small">
          <Table
            columns={filterableColumns.map((column) =>
              'sortDirections' in column && column.sortDirections
                ? { ...column, sortDirections: [...column.sortDirections] }
                : column,
            )}
            dataSource={data}
          />
        </Card>
      </Space>
    );
  },
};

export const PaginatedTable: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Paginated Table" size="small">
        <Table
          columns={basicColumns}
          dataSource={expandedData}
          pagination={{
            current: 1,
            pageSize: 10,
            total: expandedData.length,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
        />
      </Card>
    </Space>
  ),
};

export const SelectableTable: Story = {
  render: () => {
    const rowSelection = {
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
      }),
    };

    return (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="Selectable Table" size="small">
          <Table
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={basicColumns}
            dataSource={data}
          />
        </Card>
      </Space>
    );
  },
};

export const ExpandableTable: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Expandable Table" size="small">
        <Table
          columns={basicColumns}
          expandable={{
            expandedRowRender: record => (
              <p style={{ margin: 0 }}>
                Additional details for {record.name}: This user lives at {record.address} and has
                the following tags: {record.tags.join(', ')}.
              </p>
            ),
            rowExpandable: record => record.name !== 'Not Expandable',
          }}
          dataSource={data}
        />
      </Card>
    </Space>
  ),
};

export const LoadingTable: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Loading Table" size="small">
        <Table columns={basicColumns} dataSource={[]} loading />
      </Card>
    </Space>
  ),
};

export const EmptyTable: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Empty Table" size="small">
        <Table columns={basicColumns} dataSource={[]} />
      </Card>
    </Space>
  ),
};

export const FixedColumnsTable: Story = {
  render: () => {
    const fixedColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left' as const,
        width: 100,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150,
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150,
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150,
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150,
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right' as const,
        width: 100,
        render: () => <Button size="small">Action</Button>,
      },
    ];

    return (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="Fixed Columns Table" size="small">
          <Table columns={fixedColumns} dataSource={data} scroll={{ x: 1300 }} />
        </Card>
      </Space>
    );
  },
};

export const Interactive: Story = {
  args: {
    columns: basicColumns,
    dataSource: data,
    bordered: false,
    size: 'middle',
  },
};
