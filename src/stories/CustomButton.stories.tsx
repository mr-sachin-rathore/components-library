import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CustomButton } from '../components/CustomButton';
import { Space, Row, Col, Card } from '../index';

const meta: Meta<typeof CustomButton> = {
  title: 'Custom Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A custom button component that extends Ant Design Button with additional styling variants, sizes, and animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    customVariant: {
      control: 'select',
      options: ['gradient', 'glow', 'neon', 'glass'],
      description: 'Custom visual style variant',
    },
    customSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Custom size options',
    },
    colorScheme: {
      control: 'select',
      options: ['blue', 'purple', 'green', 'orange', 'pink'],
      description: 'Color scheme for the button',
    },
    animated: {
      control: 'boolean',
      description: 'Enable hover animations',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

// Default story
export const Default: Story = {
  args: {
    children: 'Custom Button',
    customSize: 'md',
    animated: true,
    colorScheme: 'blue',
  },
};

// Gradient variants
export const GradientVariants: Story = {
  render: () => (
    <Space direction="vertical" size="large">
      <Card title="Gradient Buttons" size="small">
        <Space wrap>
          <CustomButton customVariant="gradient" colorScheme="blue">
            Blue Gradient
          </CustomButton>
          <CustomButton customVariant="gradient" colorScheme="purple">
            Purple Gradient
          </CustomButton>
          <CustomButton customVariant="gradient" colorScheme="green">
            Green Gradient
          </CustomButton>
          <CustomButton customVariant="gradient" colorScheme="orange">
            Orange Gradient
          </CustomButton>
          <CustomButton customVariant="gradient" colorScheme="pink">
            Pink Gradient
          </CustomButton>
        </Space>
      </Card>
    </Space>
  ),
};

// Glow variants
export const GlowVariants: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a', padding: '24px', borderRadius: '8px' }}>
      <Card title="Glow Effect Buttons" size="small">
        <Space wrap>
          <CustomButton customVariant="glow" colorScheme="blue">
            Blue Glow
          </CustomButton>
          <CustomButton customVariant="glow" colorScheme="purple">
            Purple Glow
          </CustomButton>
          <CustomButton customVariant="glow" colorScheme="green">
            Green Glow
          </CustomButton>
          <CustomButton customVariant="glow" colorScheme="orange">
            Orange Glow
          </CustomButton>
          <CustomButton customVariant="glow" colorScheme="pink">
            Pink Glow
          </CustomButton>
        </Space>
      </Card>
    </div>
  ),
};

// Neon variants
export const NeonVariants: Story = {
  render: () => (
    <div style={{ background: '#0a0a0a', padding: '24px', borderRadius: '8px' }}>
      <Card title="Neon Style Buttons" size="small">
        <Space wrap>
          <CustomButton customVariant="neon" colorScheme="blue">
            Neon Blue
          </CustomButton>
          <CustomButton customVariant="neon" colorScheme="purple">
            Neon Purple
          </CustomButton>
          <CustomButton customVariant="neon" colorScheme="green">
            Neon Green
          </CustomButton>
          <CustomButton customVariant="neon" colorScheme="orange">
            Neon Orange
          </CustomButton>
          <CustomButton customVariant="neon" colorScheme="pink">
            Neon Pink
          </CustomButton>
        </Space>
      </Card>
    </div>
  ),
};

// Glass variants
export const GlassVariants: Story = {
  render: () => (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '24px',
        borderRadius: '8px',
      }}
    >
      <Card
        title="Glass Morphism Buttons"
        size="small"
        style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
      >
        <Space wrap>
          <CustomButton customVariant="glass" colorScheme="blue">
            Glass Blue
          </CustomButton>
          <CustomButton customVariant="glass" colorScheme="purple">
            Glass Purple
          </CustomButton>
          <CustomButton customVariant="glass" colorScheme="green">
            Glass Green
          </CustomButton>
        </Space>
      </Card>
    </div>
  ),
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <Card title="Custom Size Variants" size="small">
      <Space direction="vertical" align="start">
        <CustomButton customSize="xs" customVariant="gradient" colorScheme="blue">
          Extra Small (xs)
        </CustomButton>
        <CustomButton customSize="sm" customVariant="gradient" colorScheme="purple">
          Small (sm)
        </CustomButton>
        <CustomButton customSize="md" customVariant="gradient" colorScheme="green">
          Medium (md) - Default
        </CustomButton>
        <CustomButton customSize="lg" customVariant="gradient" colorScheme="orange">
          Large (lg)
        </CustomButton>
        <CustomButton customSize="xl" customVariant="gradient" colorScheme="pink">
          Extra Large (xl)
        </CustomButton>
      </Space>
    </Card>
  ),
};

// Animation comparison
export const AnimationComparison: Story = {
  render: () => (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Card title="With Animation (Default)" size="small">
          <Space wrap>
            <CustomButton customVariant="gradient" animated={true} colorScheme="blue">
              Animated
            </CustomButton>
            <CustomButton customVariant="glow" animated={true} colorScheme="purple">
              Animated Glow
            </CustomButton>
          </Space>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Without Animation" size="small">
          <Space wrap>
            <CustomButton customVariant="gradient" animated={false} colorScheme="blue">
              Static
            </CustomButton>
            <CustomButton customVariant="glow" animated={false} colorScheme="purple">
              Static Glow
            </CustomButton>
          </Space>
        </Card>
      </Col>
    </Row>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card title="Complete CustomButton Showcase" size="small">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <h4>Gradient Variants</h4>
            <Space wrap>
              {(['blue', 'purple', 'green', 'orange', 'pink'] as const).map(color => (
                <CustomButton
                  key={`gradient-${color}`}
                  customVariant="gradient"
                  colorScheme={color}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </CustomButton>
              ))}
            </Space>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
          <Col span={24}>
            <h4>Glow Variants</h4>
            <div style={{ background: '#1a1a1a', padding: '16px', borderRadius: '8px' }}>
              <Space wrap>
                {(['blue', 'purple', 'green', 'orange', 'pink'] as const).map(color => (
                  <CustomButton key={`glow-${color}`} customVariant="glow" colorScheme={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </CustomButton>
                ))}
              </Space>
            </div>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
          <Col span={24}>
            <h4>Size Variants (Gradient Blue)</h4>
            <Space wrap align="center">
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
                <CustomButton
                  key={`size-${size}`}
                  customSize={size}
                  customVariant="gradient"
                  colorScheme="blue"
                >
                  {size.toUpperCase()}
                </CustomButton>
              ))}
            </Space>
          </Col>
        </Row>
      </Card>
    </Space>
  ),
};
