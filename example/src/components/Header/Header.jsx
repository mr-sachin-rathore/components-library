import React from 'react';
import { Layout, Typography, Space, Select, Switch, Tooltip } from 'modern-components';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;
const { Option } = Select;

const Header = ({ selectedTheme, setSelectedTheme, isDarkMode, setIsDarkMode }) => {
  return (
    <AntHeader
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Title
          level={3}
          style={{
            color: '#ffffff',
            margin: 0,
            fontWeight: 600,
          }}
        >
          📝 Modern Todo App
        </Title>
      </div>

      <Space size="middle">
        <Select
          value={selectedTheme}
          onChange={setSelectedTheme}
          style={{
            width: 150,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          size="small"
          variant="borderless"
          dropdownStyle={{
            backgroundColor: '#fff',
          }}
          popupClassName="header-theme-select"
        >
          <Option value="default">🎨 Default</Option>
          <Option value="green">🟢 Green</Option>
          <Option value="purple">🟣 Purple</Option>
          <Option value="orange">🟠 Orange</Option>
          <Option value="dark">🌚 Dark</Option>
        </Select>

        <Tooltip
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          placement="bottom"
        >
          <Switch
            checked={isDarkMode}
            onChange={setIsDarkMode}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            style={{
              backgroundColor: isDarkMode ? '#1890ff' : 'rgba(255, 255, 255, 0.2)',
            }}
          />
        </Tooltip>
      </Space>
    </AntHeader>
  );
};

export default Header;
