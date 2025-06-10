import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Typography, Space, Card, Row, Col, Alert, Tag, Divider } from '../../index';

const { Title, Text, Paragraph } = Typography;

const meta: Meta = {
  title: '98-Utilities/CSS Utilities',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'CSS utility classes and custom properties that can be imported separately into your projects for consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const CSSUtilitiesOverview: StoryObj = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* Header */}
      <Card>
        <Title level={1}>🎨 CSS Utilities</Title>
        <Paragraph>
          A comprehensive collection of CSS utility classes and custom properties that you can
          import separately into your projects. These utilities provide consistent spacing, colors,
          typography, and responsive design patterns.
        </Paragraph>
        <Alert
          message="Selective Import Support"
          description="Import only the CSS utilities you need to keep your bundle size minimal."
          type="info"
          showIcon
        />
      </Card>

      {/* Available CSS Files */}
      <Card title="📁 Available CSS Files" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card size="small" type="inner" title="utilities.css">
            <Paragraph>
              <Text strong>Size:</Text> ~10KB <br />
              <Text strong>Contains:</Text> Utility classes for spacing, display, flexbox, text
              alignment, colors, borders, shadows, and more.
            </Paragraph>
            <Text code>import &apos;modern-components/dist/styles/utilities.css&apos;;</Text>
          </Card>

          <Card size="small" type="inner" title="responsive.css">
            <Paragraph>
              <Text strong>Size:</Text> ~15KB <br />
              <Text strong>Contains:</Text> Responsive utility classes, grid system, breakpoint
              utilities, and responsive variants of spacing and display classes.
            </Paragraph>
            <Text code>import &apos;modern-components/dist/styles/responsive.css&apos;;</Text>
          </Card>

          <Card size="small" type="inner" title="variables.css">
            <Paragraph>
              <Text strong>Size:</Text> ~10KB <br />
              <Text strong>Contains:</Text> CSS custom properties (variables) for colors, spacing,
              typography, shadows, breakpoints, and component tokens.
            </Paragraph>
            <Text code>import &apos;modern-components/dist/styles/variables.css&apos;;</Text>
          </Card>

          <Card size="small" type="inner" title="index.css (Complete Bundle)">
            <Paragraph>
              <Text strong>Size:</Text> ~35KB <br />
              <Text strong>Contains:</Text> All utility files combined into a single import.
            </Paragraph>
            <Text code>import &apos;modern-components/dist/styles/index.css&apos;;</Text>
          </Card>
        </Space>
      </Card>

      {/* Utility Classes Demo */}
      <Card title="🔧 Utility Classes Examples" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card size="small" type="inner" title="Spacing Utilities">
            <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '6px' }}>
              <div className="m-3 p-2 bg-primary text-white text-center border-radius">
                <Text style={{ color: 'white' }}>m-3 p-2 (margin & padding)</Text>
              </div>
              <div
                className="mt-2 mb-4 mx-auto p-3 bg-success text-center border-radius"
                style={{ maxWidth: '200px' }}
              >
                <Text style={{ color: 'white' }}>mt-2 mb-4 mx-auto</Text>
              </div>
            </div>
            <Paragraph style={{ marginTop: '12px' }}>
              <Text>Available classes:</Text> <Text code>m-0</Text> to <Text code>m-5</Text>,{' '}
              <Text code>p-0</Text> to <Text code>p-5</Text>, with directional variants (
              <Text code>mt-</Text>, <Text code>mr-</Text>, <Text code>mb-</Text>,{' '}
              <Text code>ml-</Text>, <Text code>mx-</Text>, <Text code>my-</Text>)
            </Paragraph>
          </Card>

          <Card size="small" type="inner" title="Display & Flexbox Utilities">
            <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '6px' }}>
              <div className="d-flex justify-between align-center p-2 bg-secondary border-radius">
                <Text>Left</Text>
                <Text>Center</Text>
                <Text>Right</Text>
              </div>
              <div className="d-flex flex-column align-center mt-2 p-2 bg-info border-radius">
                <Text style={{ color: 'white' }}>Flex Column</Text>
                <Text style={{ color: 'white' }}>Centered</Text>
              </div>
            </div>
            <Paragraph style={{ marginTop: '12px' }}>
              <Text>Classes:</Text> <Text code>d-flex</Text>, <Text code>justify-center</Text>,{' '}
              <Text code>align-center</Text>, <Text code>flex-column</Text>,{' '}
              <Text code>flex-wrap</Text>
            </Paragraph>
          </Card>

          <Card size="small" type="inner" title="Text & Color Utilities">
            <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '6px' }}>
              <div className="text-center text-primary font-weight-bold">
                <Text style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  Primary Bold Text (Centered)
                </Text>
              </div>
              <div className="text-right text-success mt-2">
                <Text style={{ color: 'var(--color-success)' }}>Success Text (Right)</Text>
              </div>
              <div className="text-left text-warning">
                <Text style={{ color: 'var(--color-warning)' }}>Warning Text (Left)</Text>
              </div>
            </div>
            <Paragraph style={{ marginTop: '12px' }}>
              <Text>Classes:</Text> <Text code>text-center</Text>, <Text code>text-primary</Text>,{' '}
              <Text code>font-weight-bold</Text>, <Text code>bg-primary</Text>
            </Paragraph>
          </Card>

          <Card size="small" type="inner" title="Shadow & Border Utilities">
            <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '6px' }}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <div className="shadow-sm p-3 bg-white border-radius text-center">
                    <Text>shadow-sm</Text>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="shadow p-3 bg-white border-radius text-center">
                    <Text>shadow</Text>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="shadow-lg p-3 bg-white border-radius text-center">
                    <Text>shadow-lg</Text>
                  </div>
                </Col>
              </Row>
            </div>
            <Paragraph style={{ marginTop: '12px' }}>
              <Text>Classes:</Text> <Text code>shadow-sm</Text>, <Text code>shadow</Text>,{' '}
              <Text code>shadow-lg</Text>, <Text code>border-radius</Text>
            </Paragraph>
          </Card>
        </Space>
      </Card>

      {/* Responsive Utilities */}
      <Card title="📱 Responsive Utilities" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Alert
            message="Responsive Breakpoints"
            description="xs: 0px, sm: 576px, md: 768px, lg: 992px, xl: 1200px"
            type="info"
            showIcon
          />

          <Card size="small" type="inner" title="Responsive Display">
            <Paragraph>Hide/show elements at different screen sizes:</Paragraph>
            <Space wrap>
              <Tag color="blue">d-xs-none</Tag>
              <Tag color="green">d-sm-block</Tag>
              <Tag color="orange">d-md-flex</Tag>
              <Tag color="red">d-lg-none</Tag>
              <Tag color="purple">d-xl-block</Tag>
            </Space>
          </Card>

          <Card size="small" type="inner" title="Responsive Grid">
            <Paragraph>12-column grid system with responsive breakpoints:</Paragraph>
            <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '6px' }}>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    style={{
                      background: '#1890ff',
                      color: 'white',
                      padding: '8px',
                      textAlign: 'center',
                      borderRadius: '4px',
                    }}
                  >
                    col-12 col-md-6 col-lg-4
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    style={{
                      background: '#52c41a',
                      color: 'white',
                      padding: '8px',
                      textAlign: 'center',
                      borderRadius: '4px',
                    }}
                  >
                    col-12 col-md-6 col-lg-4
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                  <div
                    style={{
                      background: '#faad14',
                      color: 'white',
                      padding: '8px',
                      textAlign: 'center',
                      borderRadius: '4px',
                    }}
                  >
                    col-12 col-md-12 col-lg-4
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card size="small" type="inner" title="Responsive Spacing">
            <Paragraph>Different spacing at different breakpoints:</Paragraph>
            <Space wrap>
              <Tag color="blue">m-2 m-md-4</Tag>
              <Tag color="green">p-1 p-sm-2 p-lg-3</Tag>
              <Tag color="orange">text-center text-md-left</Tag>
            </Space>
          </Card>
        </Space>
      </Card>

      {/* CSS Variables */}
      <Card title="🎨 CSS Variables (Custom Properties)" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card size="small" type="inner" title="Color Variables">
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <div
                  style={{
                    background: 'var(--color-primary)',
                    height: '40px',
                    borderRadius: '4px',
                  }}
                ></div>
                <Text code>--color-primary</Text>
              </Col>
              <Col span={6}>
                <div
                  style={{
                    background: 'var(--color-success)',
                    height: '40px',
                    borderRadius: '4px',
                  }}
                ></div>
                <Text code>--color-success</Text>
              </Col>
              <Col span={6}>
                <div
                  style={{
                    background: 'var(--color-warning)',
                    height: '40px',
                    borderRadius: '4px',
                  }}
                ></div>
                <Text code>--color-warning</Text>
              </Col>
              <Col span={6}>
                <div
                  style={{ background: 'var(--color-error)', height: '40px', borderRadius: '4px' }}
                ></div>
                <Text code>--color-error</Text>
              </Col>
            </Row>
          </Card>

          <Card size="small" type="inner" title="Spacing Variables">
            <Space direction="vertical">
              <Text>
                <Text code>--space-xs</Text>: 4px
              </Text>
              <Text>
                <Text code>--space-sm</Text>: 8px
              </Text>
              <Text>
                <Text code>--space-md</Text>: 12px
              </Text>
              <Text>
                <Text code>--space-lg</Text>: 16px
              </Text>
              <Text>
                <Text code>--space-xl</Text>: 20px
              </Text>
            </Space>
          </Card>

          <Card size="small" type="inner" title="Typography Variables">
            <Space direction="vertical">
              <Text style={{ fontSize: 'var(--font-size-xs)' }}>Font Size XS (--font-size-xs)</Text>
              <Text style={{ fontSize: 'var(--font-size-sm)' }}>Font Size SM (--font-size-sm)</Text>
              <Text style={{ fontSize: 'var(--font-size-lg)' }}>Font Size LG (--font-size-lg)</Text>
              <Text style={{ fontSize: 'var(--font-size-xl)' }}>Font Size XL (--font-size-xl)</Text>
            </Space>
          </Card>
        </Space>
      </Card>

      {/* Usage Examples */}
      <Card title="💻 Usage Examples" size="small">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card size="small" type="inner" title="Import Individual Files">
            <Paragraph>
              <Text strong>Option 1: Import specific utilities</Text>
            </Paragraph>
            <div style={{ background: '#1f1f1f', padding: '16px', borderRadius: '6px' }}>
              <Text code style={{ color: '#fff', background: 'transparent' }}>
                {`// Import only spacing and display utilities
import 'modern-components/dist/styles/utilities.css';

// Import responsive utilities  
import 'modern-components/dist/styles/responsive.css';

// Import CSS variables for theming
import 'modern-components/dist/styles/variables.css';`}
              </Text>
            </div>
          </Card>

          <Card size="small" type="inner" title="Import Complete Bundle">
            <Paragraph>
              <Text strong>Option 2: Import everything at once</Text>
            </Paragraph>
            <div style={{ background: '#1f1f1f', padding: '16px', borderRadius: '6px' }}>
              <Text code style={{ color: '#fff', background: 'transparent' }}>
                {`// Import all utilities in one file
import 'modern-components/dist/styles/index.css';`}
              </Text>
            </div>
          </Card>

          <Card size="small" type="inner" title="Using in Components">
            <Paragraph>
              <Text strong>Example: Using utility classes</Text>
            </Paragraph>
            <div style={{ background: '#1f1f1f', padding: '16px', borderRadius: '6px' }}>
              <Text code style={{ color: '#fff', background: 'transparent' }}>
                {`<div className="d-flex justify-between align-center p-3 m-2 bg-primary text-white shadow border-radius">
  <span>Left Content</span>
  <span>Right Content</span>
</div>`}
              </Text>
            </div>
          </Card>

          <Card size="small" type="inner" title="Using CSS Variables">
            <Paragraph>
              <Text strong>Example: Custom styling with variables</Text>
            </Paragraph>
            <div style={{ background: '#1f1f1f', padding: '16px', borderRadius: '6px' }}>
              <Text code style={{ color: '#fff', background: 'transparent' }}>
                {`.custom-component {
  background: var(--color-primary);
  padding: var(--space-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-lg);
  font-size: var(--font-size-lg);
}`}
              </Text>
            </div>
          </Card>
        </Space>
      </Card>

      {/* Benefits */}
      <Card title="✨ Benefits" size="small">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card size="small" type="inner">
              <Title level={5}>🚀 Performance</Title>
              <Text>Import only what you need to keep bundle sizes minimal</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" type="inner">
              <Title level={5}>🎨 Consistency</Title>
              <Text>Maintain design consistency across your entire application</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" type="inner">
              <Title level={5}>📱 Responsive</Title>
              <Text>Built-in responsive utilities for all screen sizes</Text>
            </Card>
          </Col>
        </Row>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card size="small" type="inner">
              <Title level={5}>🔧 Customizable</Title>
              <Text>CSS variables make theming and customization easy</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" type="inner">
              <Title level={5}>⚡ Fast Development</Title>
              <Text>Rapid prototyping with utility-first approach</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" type="inner">
              <Title level={5}>🌙 Dark Mode Ready</Title>
              <Text>Built-in support for dark theme variables</Text>
            </Card>
          </Col>
        </Row>
      </Card>
    </Space>
  ),
};
