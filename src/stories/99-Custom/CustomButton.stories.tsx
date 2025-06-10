import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CustomButton, Space, Card } from '../../index';
import {
  SearchOutlined,
  DownloadOutlined,
  HeartOutlined,
  StarOutlined,
  ThunderboltOutlined,
  RocketOutlined,
  FireOutlined,
  CrownOutlined,
} from '@ant-design/icons';

const meta: Meta<typeof CustomButton> = {
  title: '99-Custom/Custom Button',
  component: CustomButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'An enhanced button component that extends Ant Design Button with gradient backgrounds, glass morphism effects, glow animations, and custom styling options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gradient: {
      control: 'select',
      options: ['none', 'blue', 'purple', 'green', 'orange', 'pink'],
    },
    glassMorphism: {
      control: 'boolean',
    },
    glowEffect: {
      control: 'boolean',
    },
    animatedLoading: {
      control: 'boolean',
    },
    pulse: {
      control: 'boolean',
    },
    iconSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'text', 'link'],
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
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    children: 'Custom Button',
    gradient: 'blue',
    size: 'middle',
  },
};

export const GradientVariants: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Gradient Button Variants" size="small">
        <Space wrap>
          <CustomButton gradient="blue">Blue Gradient</CustomButton>
          <CustomButton gradient="purple">Purple Gradient</CustomButton>
          <CustomButton gradient="green">Green Gradient</CustomButton>
          <CustomButton gradient="orange">Orange Gradient</CustomButton>
          <CustomButton gradient="pink">Pink Gradient</CustomButton>
          <CustomButton gradient="none" type="primary">
            No Gradient
          </CustomButton>
        </Space>
      </Card>
    </Space>
  ),
};

export const GlassMorphism: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px',
          borderRadius: '12px',
        }}
      >
        <Card title="Glass Morphism Buttons" size="small">
          <Space wrap>
            <CustomButton glassMorphism>Glass Button</CustomButton>
            <CustomButton glassMorphism size="large">
              Large Glass
            </CustomButton>
            <CustomButton glassMorphism icon={<SearchOutlined />}>
              With Icon
            </CustomButton>
            <CustomButton glassMorphism shape="round">
              Round Glass
            </CustomButton>
            <CustomButton glassMorphism loading>
              Loading Glass
            </CustomButton>
          </Space>
        </Card>
      </div>
    </Space>
  ),
};

export const GlowEffects: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div style={{ background: '#1a1a1a', padding: '40px', borderRadius: '12px' }}>
        <Card title="Glow Effect Buttons" size="small">
          <Space wrap>
            <CustomButton glowEffect gradient="blue">
              Blue Glow
            </CustomButton>
            <CustomButton glowEffect gradient="purple">
              Purple Glow
            </CustomButton>
            <CustomButton glowEffect gradient="green">
              Green Glow
            </CustomButton>
            <CustomButton glowEffect gradient="orange">
              Orange Glow
            </CustomButton>
            <CustomButton glowEffect gradient="pink">
              Pink Glow
            </CustomButton>
          </Space>
        </Card>
      </div>
    </Space>
  ),
};

export const AnimatedFeatures: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Animated Features" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Space wrap>
            <CustomButton pulse gradient="blue">
              Pulse Animation
            </CustomButton>
            <CustomButton animatedLoading loading gradient="purple">
              Animated Loading
            </CustomButton>
            <CustomButton pulse glowEffect gradient="green">
              Pulse + Glow
            </CustomButton>
            <CustomButton glassMorphism pulse>
              Glass + Pulse
            </CustomButton>
          </Space>
        </Space>
      </Card>
    </Space>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Custom Buttons with Icons" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Space wrap>
            <CustomButton gradient="blue" icon={<SearchOutlined />} iconSize="small">
              Search
            </CustomButton>
            <CustomButton gradient="green" icon={<DownloadOutlined />} iconSize="medium">
              Download
            </CustomButton>
            <CustomButton gradient="orange" icon={<FireOutlined />} iconSize="large">
              Fire
            </CustomButton>
          </Space>

          <Space wrap>
            <CustomButton
              glassMorphism
              icon={<HeartOutlined />}
              shape="circle"
              iconSize="medium"
            />
            <CustomButton
              glowEffect
              gradient="pink"
              icon={<StarOutlined />}
              shape="round"
              iconSize="medium"
            >
              Favorite
            </CustomButton>
            <CustomButton
              pulse
              gradient="purple"
              icon={<ThunderboltOutlined />}
              iconSize="large"
            >
              Lightning
            </CustomButton>
          </Space>
        </Space>
      </Card>
    </Space>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Custom Button Sizes" size="small">
        <Space wrap align="center">
          <CustomButton gradient="blue" size="small">
            Small
          </CustomButton>
          <CustomButton gradient="blue" size="middle">
            Middle
          </CustomButton>
          <CustomButton gradient="blue" size="large">
            Large
          </CustomButton>
        </Space>
      </Card>
    </Space>
  ),
};

export const ButtonShapes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Custom Button Shapes" size="small">
        <Space wrap>
          <CustomButton gradient="purple">Default</CustomButton>
          <CustomButton gradient="purple" shape="round">
            Round
          </CustomButton>
          <CustomButton gradient="purple" shape="circle" icon={<RocketOutlined />} />
        </Space>
      </Card>
    </Space>
  ),
};

export const CombinedEffects: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Combined Effects" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Space wrap>
            <CustomButton gradient="blue" glowEffect pulse icon={<CrownOutlined />}>
              Premium
            </CustomButton>
            <CustomButton
              glassMorphism
              glowEffect
              pulse
              icon={<StarOutlined />}
              iconSize="large"
            >
              VIP
            </CustomButton>
            <CustomButton
              gradient="orange"
              glowEffect
              animatedLoading
              loading
              icon={<RocketOutlined />}
            >
              Launching
            </CustomButton>
          </Space>
        </Space>
      </Card>
    </Space>
  ),
};

export const ButtonStates: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Button States" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Space wrap>
            <CustomButton gradient="blue">Normal</CustomButton>
            <CustomButton gradient="blue" loading>
              Loading
            </CustomButton>
            <CustomButton gradient="blue" disabled>
              Disabled
            </CustomButton>
            <CustomButton gradient="blue" danger>
              Danger
            </CustomButton>
          </Space>

          <Space wrap>
            <CustomButton glassMorphism>Glass Normal</CustomButton>
            <CustomButton glassMorphism loading animatedLoading>
              Glass Loading
            </CustomButton>
            <CustomButton glassMorphism disabled>
              Glass Disabled
            </CustomButton>
          </Space>
        </Space>
      </Card>
    </Space>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Custom Button',
    gradient: 'blue',
    glassMorphism: false,
    glowEffect: true,
    animatedLoading: false,
    pulse: false,
    iconSize: 'medium',
    size: 'middle',
  },
}; 