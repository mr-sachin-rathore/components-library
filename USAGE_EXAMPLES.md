# CSS Utilities Usage Examples

This document provides practical examples of how to use the CSS utilities from `modern-components` in your projects.

## Installation & Setup

```bash
npm install modern-components
```

## Import Options

### Option 1: Import Complete Bundle

```css
/* In your main CSS file or component */
@import 'modern-components/dist/styles/index.css';
```

### Option 2: Import Individual Files (Recommended)

```css
/* Import only what you need */
@import 'modern-components/dist/styles/variables.css'; /* CSS custom properties */
@import 'modern-components/dist/styles/utilities.css'; /* Utility classes */
@import 'modern-components/dist/styles/responsive.css'; /* Responsive utilities */
```

### Option 3: Import in JavaScript/TypeScript

```tsx
// In your main App.tsx or index.tsx
import 'modern-components/dist/styles/index.css';

// Or import individual files
import 'modern-components/dist/styles/utilities.css';
```

## Practical Examples

### 1. Layout & Spacing

```tsx
import React from 'react';
import { Card } from 'modern-components';

function ProductCard() {
  return (
    <Card className="m-3 p-4 shadow border-radius">
      <div className="d-flex justify-between align-center mb-3">
        <h3 className="m-0 text-primary">Product Name</h3>
        <span className="bg-success text-white px-2 py-1 border-radius">$29.99</span>
      </div>
      <p className="text-secondary mb-3">Product description goes here...</p>
      <div className="d-flex justify-end">
        <button className="bg-primary text-white px-3 py-2 border-radius cursor-pointer">
          Add to Cart
        </button>
      </div>
    </Card>
  );
}
```

### 2. Responsive Grid Layout

```tsx
import React from 'react';

function ResponsiveGallery() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Image Gallery</h1>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="bg-gray-100 border-radius p-3 mb-3 text-center">
            <div className="bg-primary" style={{ height: '200px', marginBottom: '1rem' }}></div>
            <h4 className="text-dark">Image 1</h4>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="bg-gray-100 border-radius p-3 mb-3 text-center">
            <div className="bg-success" style={{ height: '200px', marginBottom: '1rem' }}></div>
            <h4 className="text-dark">Image 2</h4>
          </div>
        </div>
        {/* More grid items... */}
      </div>
    </div>
  );
}
```

### 3. Using CSS Variables for Custom Theming

```css
/* styles/custom-theme.css */
:root {
  --color-primary: #8b5cf6; /* Purple */
  --color-success: #10b981; /* Emerald */
  --border-radius-lg: 12px;
  --space-custom: 18px;
}

.custom-button {
  background: var(--color-primary);
  color: white;
  padding: var(--space-md) var(--space-lg);
  border: none;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-lg);
  font-size: var(--font-size-lg);
  cursor: pointer;
  transition: all var(--motion-duration-mid) var(--motion-ease-out);
}

.custom-button:hover {
  background: var(--color-primary-dark);
  box-shadow: var(--box-shadow-xl);
  transform: translateY(-2px);
}
```

### 4. Dark Mode Support

```tsx
import React, { useState } from 'react';
import { Switch } from 'modern-components';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={`min-h-100 p-4 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="d-flex justify-between align-center mb-4">
        <h1>My App</h1>
        <div className="d-flex align-center">
          <span className="mr-2">Dark Mode</span>
          <Switch checked={isDark} onChange={setIsDark} />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="bg-primary p-4 border-radius mb-3">
            <h3 className="text-white">Card 1</h3>
            <p className="text-white">This card adapts to the theme automatically.</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="shadow p-4 border-radius mb-3"
            style={{ background: 'var(--color-bg-container)' }}
          >
            <h3 style={{ color: 'var(--color-text-primary)' }}>Card 2</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              This card uses CSS variables for theming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 5. Responsive Navigation

```tsx
import React, { useState } from 'react';
import { Button } from 'modern-components';

function ResponsiveNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-bottom p-3">
      <div className="container">
        <div className="d-flex justify-between align-center">
          <h2 className="text-primary m-0">Brand</h2>

          {/* Desktop Menu */}
          <div className="d-none d-md-flex align-center">
            <a href="#" className="text-decoration-none text-dark mx-3">
              Home
            </a>
            <a href="#" className="text-decoration-none text-dark mx-3">
              About
            </a>
            <a href="#" className="text-decoration-none text-dark mx-3">
              Services
            </a>
            <a href="#" className="text-decoration-none text-dark mx-3">
              Contact
            </a>
            <Button type="primary" className="ml-3">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="d-md-none bg-transparent border-0 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="d-md-none mt-3 pt-3 border-top">
            <div className="d-flex flex-column">
              <a href="#" className="text-decoration-none text-dark py-2">
                Home
              </a>
              <a href="#" className="text-decoration-none text-dark py-2">
                About
              </a>
              <a href="#" className="text-decoration-none text-dark py-2">
                Services
              </a>
              <a href="#" className="text-decoration-none text-dark py-2">
                Contact
              </a>
              <Button type="primary" className="mt-2 w-100">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
```

### 6. Form Layout with Utilities

```tsx
import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'modern-components';

function ContactForm() {
  return (
    <div className="container py-5">
      <div className="row justify-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="bg-white shadow-lg border-radius p-4">
            <h2 className="text-center text-primary mb-4">Contact Us</h2>

            <Form layout="vertical">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <Form.Item label="First Name" className="mb-3">
                    <Input placeholder="John" className="w-100" />
                  </Form.Item>
                </div>
                <div className="col-12 col-sm-6">
                  <Form.Item label="Last Name" className="mb-3">
                    <Input placeholder="Doe" className="w-100" />
                  </Form.Item>
                </div>
              </div>

              <Form.Item label="Email" className="mb-3">
                <Input type="email" placeholder="john@example.com" className="w-100" />
              </Form.Item>

              <div className="row">
                <div className="col-12 col-sm-6">
                  <Form.Item label="Subject" className="mb-3">
                    <Select placeholder="Select subject" className="w-100">
                      <Select.Option value="general">General Inquiry</Select.Option>
                      <Select.Option value="support">Support</Select.Option>
                      <Select.Option value="sales">Sales</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-12 col-sm-6">
                  <Form.Item label="Preferred Date" className="mb-3">
                    <DatePicker className="w-100" />
                  </Form.Item>
                </div>
              </div>

              <Form.Item label="Message" className="mb-4">
                <Input.TextArea rows={4} placeholder="Your message..." className="w-100" />
              </Form.Item>

              <div className="d-flex justify-between align-center">
                <Button type="default">Cancel</Button>
                <Button type="primary">Send Message</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Tips for Best Practices

1. **Start with Variables**: Import `variables.css` first to get access to CSS custom properties
2. **Selective Imports**: Only import the utility files you actually use to keep bundle size small
3. **Responsive First**: Use responsive classes (`col-md-6`, `d-lg-block`) for better mobile experience
4. **Consistent Spacing**: Stick to the spacing scale (`m-1` to `m-5`) for visual consistency
5. **Theme Integration**: Use CSS variables in your custom styles to integrate with the theme system
6. **Performance**: Consider using CSS-in-JS solutions like styled-components with these utilities for better performance in large applications

## Browser Support

The CSS utilities support all modern browsers that support:

- CSS Custom Properties (CSS Variables)
- Flexbox
- CSS Grid (for advanced grid features)

For IE11 support, you may need to provide fallbacks for CSS custom properties.
