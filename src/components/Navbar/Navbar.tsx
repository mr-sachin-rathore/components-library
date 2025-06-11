import React, { useState, ReactNode, useCallback, useMemo, useRef, useEffect } from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './Navbar.scss';

const { Sider } = Layout;

export interface NavbarItem {
  key: string;
  icon: ReactNode;
  title: string;
  action?: () => void;
  component?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
}

export interface NavbarProps {
  logo?: ReactNode;
  logoCollapsed?: ReactNode;
  topItems?: NavbarItem[];
  bottomItems?: NavbarItem[];
  defaultCollapsed?: boolean;
  width?: number;
  collapsedWidth?: number;
  theme?: 'light' | 'dark';
  className?: string;
  style?: React.CSSProperties;
  showLockItem?: boolean;
  selectedKeys?: string[];
  onSelect?: (key: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  logoCollapsed,
  topItems = [],
  bottomItems = [],
  defaultCollapsed = true,
  width = 240,
  collapsedWidth = 60,
  theme = 'dark',
  className = '',
  style,
  showLockItem = true,
  selectedKeys,
  onSelect,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [isHovering, setIsHovering] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  // Use refs to track hover timeouts and prevent flickering
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  const leaveTimeoutRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Stable computed value for expansion state
  const isExpanded = useMemo(() => {
    if (isLocked) return false;
    return !collapsed || isHovering;
  }, [collapsed, isHovering, isLocked]);

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = undefined;
    }

    // Only set hover if collapsed and not locked
    if (collapsed && !isLocked && !isHovering) {
      // Add a small delay to prevent rapid flickering
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovering(true);
      }, 50);
    }
  }, [collapsed, isLocked, isHovering]);

  const handleMouseLeave = useCallback(() => {
    // Clear any pending hover timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = undefined;
    }

    // Only handle leave if collapsed and currently hovering
    if (collapsed && isHovering && !isLocked) {
      // Add a delay to prevent immediate collapse when mouse briefly leaves
      leaveTimeoutRef.current = setTimeout(() => {
        setIsHovering(false);
      }, 100);
    }
  }, [collapsed, isHovering, isLocked]);

  const handleToggleCollapse = useCallback(() => {
    setCollapsed(!collapsed);
    if (!collapsed) {
      setIsHovering(false);
    }
  }, [collapsed]);

  const handleToggleLock = useCallback(() => {
    setIsLocked(!isLocked);
    if (isLocked) {
      setIsHovering(false);
    }
  }, [isLocked]);

  // Memoize menu items to prevent unnecessary re-renders
  const topMenuItems = useMemo((): MenuProps['items'] => {
    return topItems.map(item => {
      const showTooltip = collapsed && !isExpanded;

      return {
        key: item.key,
        icon: showTooltip ? (
          <Tooltip title={item.title} placement="right">
            <span className="navbar-icon">{item.icon}</span>
          </Tooltip>
        ) : (
          <span className="navbar-icon">{item.icon}</span>
        ),
        label: isExpanded ? <span className="navbar-label">{item.title}</span> : null,
        disabled: item.disabled,
        onClick: () => {
          if (onSelect) {
            onSelect(item.key);
          }
          if (item.action && !item.disabled) {
            item.action();
          }
        },
      };
    });
  }, [topItems, collapsed, isExpanded, onSelect]);

  const bottomMenuItems = useMemo((): MenuProps['items'] => {
    const items = [...bottomItems];

    if (showLockItem) {
      const lockItem: NavbarItem = {
        key: 'navbar-lock',
        icon: isLocked ? <LockOutlined /> : <UnlockOutlined />,
        title: isLocked ? 'Unlock Hover' : 'Lock Collapsed',
        action: handleToggleLock,
      };

      if (items.length > 0) {
        items.splice(-1, 0, lockItem);
      } else {
        items.push(lockItem);
      }
    }

    return items.map(item => {
      const showTooltip = collapsed && !isExpanded;

      return {
        key: item.key,
        icon: showTooltip ? (
          <Tooltip title={item.title} placement="right">
            <span className="navbar-icon">{item.icon}</span>
          </Tooltip>
        ) : (
          <span className="navbar-icon">{item.icon}</span>
        ),
        label: isExpanded ? (
          item.component ? (
            <div className="navbar-component-wrapper">
              <span className="navbar-label">{item.title}</span>
              {item.component}
            </div>
          ) : (
            <span className="navbar-label">{item.title}</span>
          )
        ) : null,
        disabled: item.disabled,
        onClick: item.component
          ? undefined
          : () => {
              if (item.key !== 'navbar-lock' && onSelect) {
                onSelect(item.key);
              }
              if (item.action && !item.disabled) {
                item.action();
              }
            },
        className: item.key === 'navbar-lock' ? 'navbar-lock-item' : undefined,
      };
    });
  }, [bottomItems, showLockItem, isLocked, handleToggleLock, collapsed, isExpanded, onSelect]);

  const logoDisplay = isExpanded ? logo : logoCollapsed || logo;

  return (
    <div ref={containerRef} className="navbar-wrapper">
      <Sider
        width={width}
        collapsedWidth={collapsedWidth}
        collapsed={!isExpanded}
        theme={theme}
        className={`navbar-container ${isLocked ? 'navbar-locked' : ''} ${className}`}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          ...style,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="navbar-content">
          {/* Logo Section */}
          {logoDisplay && <div className="navbar-logo">{logoDisplay}</div>}

          {/* Top Menu Items */}
          {topItems.length > 0 && (
            <div className="navbar-menu-section navbar-top-menu">
              <Menu
                theme={theme}
                mode="inline"
                items={topMenuItems}
                className="navbar-menu"
                inlineCollapsed={!isExpanded}
                selectedKeys={selectedKeys || []}
              />
            </div>
          )}

          {/* Spacer to push bottom items down */}
          <div className="navbar-spacer" />

          {/* Bottom Menu Items */}
          {(bottomItems.length > 0 || showLockItem) && (
            <div className="navbar-menu-section navbar-bottom-menu">
              <Menu
                theme={theme}
                mode="inline"
                items={bottomMenuItems}
                className="navbar-menu"
                inlineCollapsed={!isExpanded}
                selectedKeys={selectedKeys || []}
              />
            </div>
          )}

          {/* Toggle Button */}
          <div className="navbar-toggle">
            <div
              className="navbar-toggle-btn"
              onClick={handleToggleCollapse}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '40px',
                cursor: 'pointer',
                borderTop: theme === 'dark' ? '1px solid #303030' : '1px solid #f0f0f0',
              }}
            >
              {collapsed ? (
                <Tooltip title="Expand" placement="right">
                  <span style={{ fontSize: '16px', color: theme === 'dark' ? '#fff' : '#000' }}>
                    →
                  </span>
                </Tooltip>
              ) : (
                <span style={{ fontSize: '16px', color: theme === 'dark' ? '#fff' : '#000' }}>
                  ←
                </span>
              )}
            </div>
          </div>
        </div>
      </Sider>
    </div>
  );
};
