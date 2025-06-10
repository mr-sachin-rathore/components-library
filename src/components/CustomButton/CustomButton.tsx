import React from 'react';
import { Button, ButtonProps } from 'antd';
import { CSSProperties } from 'react';
import './CustomButton.scss';

export interface CustomButtonProps extends ButtonProps {
  /** Gradient variant for the button */
  gradient?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'none';
  /** Glass morphism effect */
  glassMorphism?: boolean;
  /** Enhanced glow effect on hover */
  glowEffect?: boolean;
  /** Animated loading with custom animation */
  animatedLoading?: boolean;
  /** Pulse animation */
  pulse?: boolean;
  /** Custom icon size */
  iconSize?: 'small' | 'medium' | 'large';
}

const gradientStyles: Record<string, CSSProperties> = {
  blue: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    color: '#fff',
  },
  purple: {
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    border: 'none',
    color: '#333',
  },
  green: {
    background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc8 100%)',
    border: 'none',
    color: '#333',
  },
  orange: {
    background: 'linear-gradient(135deg, #ffa726 0%, #ff7043 100%)',
    border: 'none',
    color: '#fff',
  },
  pink: {
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    border: 'none',
    color: '#333',
  },
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  gradient = 'none',
  glassMorphism = false,
  glowEffect = false,
  animatedLoading = false,
  pulse = false,
  iconSize = 'medium',
  className = '',
  style = {},
  children,
  loading,
  ...props
}) => {
  // Build CSS classes
  const cssClasses = [
    'custom-button',
    glassMorphism && 'custom-button--glass',
    glowEffect && 'custom-button--glow',
    animatedLoading && loading && 'custom-button--animated-loading',
    pulse && 'custom-button--pulse',
    `custom-button--icon-${iconSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Combine styles
  const combinedStyle: CSSProperties = {
    ...style,
    ...(gradient !== 'none' ? gradientStyles[gradient] : {}),
  };

  return (
    <Button {...props} loading={loading} className={cssClasses} style={combinedStyle}>
      {children}
    </Button>
  );
};

export default CustomButton;
