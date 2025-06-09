import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd/es/button';
import './CustomButton.scss';

export interface CustomButtonProps extends AntButtonProps {
  /** Custom variant for special styling */
  customVariant?: 'gradient' | 'glow' | 'neon' | 'glass';
  /** Custom size options */
  customSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Enable animated hover effects */
  animated?: boolean;
  /** Custom color scheme */
  colorScheme?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  customVariant,
  customSize = 'md',
  animated = true,
  colorScheme = 'blue',
  className = '',
  children,
  ...props
}) => {
  const customClasses = [
    'custom-button',
    customVariant && `custom-button--${customVariant}`,
    `custom-button--${customSize}`,
    animated && 'custom-button--animated',
    `custom-button--${colorScheme}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return React.createElement(
    AntButton,
    {
      ...props,
      className: customClasses,
    },
    children
  );
};

export default CustomButton;
