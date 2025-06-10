import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navbar } from '../../components/Navbar';
import {
  HomeOutlined,
  DashboardOutlined,
  FileTextOutlined,
  TeamOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  BellOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Layout, Typography, Card, Space, message, Alert } from '../../index';

const { Content } = Layout;
const { Title, Text } = Typography;

const meta: Meta<typeof Navbar> = {
  title: '05-Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A collapsible sidebar navigation component that expands on hover. Features include smooth animations, lock/unlock hover behavior, and customizable menu items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Theme of the navbar',
    },
    defaultCollapsed: {
      control: { type: 'boolean' },
      description: 'Whether the navbar is collapsed by default',
    },
    width: {
      control: { type: 'number' },
      description: 'Width of the expanded navbar',
    },
    collapsedWidth: {
      control: { type: 'number' },
      description: 'Width of the collapsed navbar',
    },
    showLockItem: {
      control: { type: 'boolean' },
      description: 'Show lock/unlock toggle in bottom menu items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample actions
const handleMenuClick = (itemName: string) => {
  message.info(`Clicked on ${itemName}`);
};

// Sample items
const sampleTopItems = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    title: 'Dashboard',
    action: () => handleMenuClick('Dashboard'),
  },
  {
    key: 'home',
    icon: <HomeOutlined />,
    title: 'Home',
    action: () => handleMenuClick('Home'),
  },
  {
    key: 'documents',
    icon: <FileTextOutlined />,
    title: 'Documents',
    action: () => handleMenuClick('Documents'),
  },
  {
    key: 'team',
    icon: <TeamOutlined />,
    title: 'Team',
    action: () => handleMenuClick('Team'),
  },
  {
    key: 'notifications',
    icon: <BellOutlined />,
    title: 'Notifications',
    action: () => handleMenuClick('Notifications'),
  },
];

const sampleBottomItems = [
  {
    key: 'profile',
    icon: <UserOutlined />,
    title: 'Profile',
    action: () => handleMenuClick('Profile'),
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    title: 'Settings',
    action: () => handleMenuClick('Settings'),
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    title: 'Logout',
    action: () => handleMenuClick('Logout'),
  },
];

const SampleLogo = ({ collapsed = false }: { collapsed?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {collapsed ? (
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #1890ff, #52c41a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        M
      </div>
    ) : (
      <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #1890ff, #52c41a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            marginRight: 12,
          }}
        >
          M
        </div>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>ModernApp</Text>
      </div>
    )}
  </div>
);

const SampleContent = ({ title }: { title: string }) => (
  <div style={{ marginLeft: 60, minHeight: '100vh', transition: 'margin-left 0.3s ease' }}>
    <Content style={{ padding: '24px', background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title level={2}>{title}</Title>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Alert
            message="Navbar Features"
            description="This navbar includes smooth animations and a lock/unlock feature. Try hovering over the navbar to expand it, then use the lock icon to control the hover behavior."
            type="info"
            showIcon
          />

          <Card title="Welcome to the Dashboard">
            <Text>
              This is a sample content area. The navbar on the left will expand when you hover over
              it, showing the full menu items with text labels.
            </Text>
          </Card>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Card title="Feature 1" style={{ flex: 1, minWidth: 250 }}>
              <Text>Sample content for feature 1</Text>
            </Card>
            <Card title="Feature 2" style={{ flex: 1, minWidth: 250 }}>
              <Text>Sample content for feature 2</Text>
            </Card>
            <Card title="Feature 3" style={{ flex: 1, minWidth: 250 }}>
              <Text>Sample content for feature 3</Text>
            </Card>
          </div>

          <Card title="Instructions">
            <Space direction="vertical">
              <Text>
                • <strong>Hover Expansion:</strong> Hover over the navbar to expand it and see the
                full menu items
              </Text>
              <Text>
                • <strong>Lock Feature:</strong> Click the lock/unlock icon to control hover
                behavior
              </Text>
              <Text>
                • <strong>Manual Toggle:</strong> Click the toggle button at the bottom to
                permanently expand/collapse
              </Text>
              <Text>
                • <strong>Tooltips:</strong> Menu items show tooltips when collapsed
              </Text>
              <Text>
                • <strong>Smooth Animations:</strong> All transitions use smooth cubic-bezier
                animations
              </Text>
              <Text>
                • <strong>Responsive:</strong> Design collapses completely on mobile devices
              </Text>
            </Space>
          </Card>
        </Space>
      </div>
    </Content>
  </div>
);

export const Default: Story = {
  args: {
    topItems: sampleTopItems,
    bottomItems: sampleBottomItems,
    logo: <SampleLogo />,
    logoCollapsed: <SampleLogo collapsed />,
    theme: 'dark',
    defaultCollapsed: true,
    showLockItem: true,
  },
  render: args => (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar {...args} />
      <SampleContent title="Default Navbar with Lock Feature" />
    </Layout>
  ),
};

export const LightTheme: Story = {
  args: {
    topItems: sampleTopItems,
    bottomItems: sampleBottomItems,
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', color: '#1890ff' }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #1890ff, #52c41a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            marginRight: 12,
          }}
        >
          M
        </div>
        <Text style={{ color: '#1890ff', fontWeight: 'bold', fontSize: '18px' }}>ModernApp</Text>
      </div>
    ),
    logoCollapsed: (
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #1890ff, #52c41a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        M
      </div>
    ),
    theme: 'light',
    defaultCollapsed: true,
    showLockItem: true,
  },
  render: args => (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar {...args} />
      <SampleContent title="Light Theme Navbar" />
    </Layout>
  ),
};

export const WithoutLockItem: Story = {
  args: {
    topItems: sampleTopItems,
    bottomItems: sampleBottomItems,
    logo: <SampleLogo />,
    logoCollapsed: <SampleLogo collapsed />,
    theme: 'dark',
    defaultCollapsed: true,
    showLockItem: false,
  },
  render: args => (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar {...args} />
      <SampleContent title="Navbar without Lock Item" />
    </Layout>
  ),
};

export const AlwaysExpanded: Story = {
  args: {
    topItems: sampleTopItems,
    bottomItems: sampleBottomItems,
    logo: <SampleLogo />,
    logoCollapsed: <SampleLogo collapsed />,
    theme: 'dark',
    defaultCollapsed: false,
    showLockItem: true,
  },
  render: args => (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar {...args} />
      <div style={{ marginLeft: 240, transition: 'margin-left 0.3s ease' }}>
        <SampleContent title="Always Expanded Navbar" />
      </div>
    </Layout>
  ),
};

export const EcommerceExample: Story = {
  args: {
    topItems: [
      {
        key: 'dashboard',
        icon: <DashboardOutlined />,
        title: 'Dashboard',
        action: () => handleMenuClick('Dashboard'),
      },
      {
        key: 'products',
        icon: <ShoppingCartOutlined />,
        title: 'Products',
        action: () => handleMenuClick('Products'),
      },
      {
        key: 'orders',
        icon: <FileTextOutlined />,
        title: 'Orders',
        action: () => handleMenuClick('Orders'),
      },
      {
        key: 'customers',
        icon: <TeamOutlined />,
        title: 'Customers',
        action: () => handleMenuClick('Customers'),
      },
      {
        key: 'analytics',
        icon: <SearchOutlined />,
        title: 'Analytics',
        action: () => handleMenuClick('Analytics'),
      },
      {
        key: 'wishlist',
        icon: <HeartOutlined />,
        title: 'Wishlist',
        action: () => handleMenuClick('Wishlist'),
      },
    ],
    bottomItems: [
      {
        key: 'profile',
        icon: <UserOutlined />,
        title: 'Profile',
        action: () => handleMenuClick('Profile'),
      },
      {
        key: 'settings',
        icon: <SettingOutlined />,
        title: 'Settings',
        action: () => handleMenuClick('Settings'),
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        title: 'Logout',
        action: () => handleMenuClick('Logout'),
      },
    ],
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <ShoppingCartOutlined style={{ fontSize: '24px', marginRight: 12 }} />
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>ShopAdmin</Text>
      </div>
    ),
    logoCollapsed: <ShoppingCartOutlined style={{ fontSize: '20px', color: 'white' }} />,
    theme: 'dark',
    defaultCollapsed: true,
    showLockItem: true,
  },
  render: args => (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar {...args} />
      <SampleContent title="E-commerce Admin Panel" />
    </Layout>
  ),
};

export const MinimalExample: Story = {
  args: {
    topItems: [
      {
        key: 'home',
        icon: <HomeOutlined />,
        title: 'Home',
        action: () => handleMenuClick('Home'),
      },
      {
        key: 'search',
        icon: <SearchOutlined />,
        title: 'Search',
        action: () => handleMenuClick('Search'),
      },
      {
        key: 'menu',
        icon: <MenuOutlined />,
        title: 'Menu',
        action: () => handleMenuClick('Menu'),
      },
    ],
    bottomItems: [
      {
        key: 'settings',
        icon: <SettingOutlined />,
        title: 'Settings',
        action: () => handleMenuClick('Settings'),
      },
    ],
    theme: 'dark',
    defaultCollapsed: true,
    width: 200,
    collapsedWidth: 50,
    showLockItem: true,
  },
  render: args => (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar {...args} />
      <div style={{ marginLeft: 50, transition: 'margin-left 0.3s ease' }}>
        <SampleContent title="Minimal Navbar" />
      </div>
    </Layout>
  ),
};
