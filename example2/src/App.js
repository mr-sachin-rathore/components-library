import React, { useState, useEffect, useMemo } from 'react';
import {
  Layout,
  Menu,
  Row,
  Col,
  Card,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Calendar,
  Switch,
  Checkbox,
  Radio,
  Table,
  Tabs,
  Collapse,
  Modal,
  Pagination,
  Tooltip,
  Popover,
  Badge,
  Tag,
  Avatar,
  Progress,
  Steps,
  Alert,
  Drawer,
  Space,
  Divider,
  message,
  notification,
  ConfigProvider,
  theme,
  defaultTheme,
} from 'modern-components';
import {
  MenuOutlined,
  UserOutlined,
  MailOutlined,
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HeartOutlined,
  StarOutlined,
  BellOutlined,
  EditOutlined,
  DeleteOutlined,
  DownloadOutlined,
  UploadOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import 'modern-components/dist/styles/index.css';
import './App.scss';

// Initialize dayjs plugins
dayjs.extend(weekOfYear);

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Step } = Steps;

// Custom hook for responsive detection
const useResponsive = () => {
  const [screenInfo, setScreenInfo] = useState(() => {
    const width = window.innerWidth;
    return {
      width,
      isMobile: width <= 576,
      isTablet: width > 576 && width <= 768,
      isIpad: width > 768 && width <= 1024,
      isLaptop: width > 1024 && width <= 1200,
      isDesktop: width > 1200,
      screenType:
        width <= 576
          ? 'mobile'
          : width <= 768
            ? 'tablet'
            : width <= 1024
              ? 'ipad'
              : width <= 1200
                ? 'laptop'
                : 'desktop',
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenInfo({
        width,
        isMobile: width <= 576,
        isTablet: width > 576 && width <= 768,
        isIpad: width > 768 && width <= 1024,
        isLaptop: width > 1024 && width <= 1200,
        isDesktop: width > 1200,
        screenType:
          width <= 576
            ? 'mobile'
            : width <= 768
              ? 'tablet'
              : width <= 1024
                ? 'ipad'
                : width <= 1200
                  ? 'laptop'
                  : 'desktop',
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenInfo;
};

// Responsive theme configuration
const getResponsiveTheme = screenInfo => {
  const { isMobile, isTablet, isIpad, isLaptop } = screenInfo;

  return {
    ...defaultTheme,
    token: {
      ...defaultTheme.token,
      // Base typography tokens - responsive
      fontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 15 : isLaptop ? 15 : 16,
      fontSizeLG: isMobile ? 16 : isTablet ? 16 : isIpad ? 17 : isLaptop ? 18 : 18,
      fontSizeXL: isMobile ? 18 : isTablet ? 18 : isIpad ? 19 : isLaptop ? 20 : 20,
      fontSizeSM: isMobile ? 12 : isTablet ? 12 : isIpad ? 13 : isLaptop ? 13 : 14,

      // Control height tokens - mobile-friendly touch targets
      controlHeight: isMobile ? 44 : isTablet ? 40 : isIpad ? 36 : isLaptop ? 34 : 32,
      controlHeightLG: isMobile ? 48 : isTablet ? 44 : isIpad ? 42 : isLaptop ? 40 : 40,
      controlHeightSM: isMobile ? 40 : isTablet ? 36 : isIpad ? 32 : isLaptop ? 30 : 28,

      // Spacing tokens - responsive padding and margins
      padding: isMobile ? 16 : isTablet ? 15 : isIpad ? 14 : isLaptop ? 13 : 12,
      paddingLG: isMobile ? 20 : isTablet ? 19 : isIpad ? 18 : isLaptop ? 17 : 16,
      paddingXL: isMobile ? 24 : isTablet ? 23 : isIpad ? 22 : isLaptop ? 21 : 20,
      paddingSM: isMobile ? 12 : isTablet ? 11 : isIpad ? 10 : isLaptop ? 9 : 8,

      margin: isMobile ? 12 : isTablet ? 11 : isIpad ? 10 : isLaptop ? 9 : 8,
      marginLG: isMobile ? 16 : isTablet ? 15 : isIpad ? 14 : isLaptop ? 13 : 12,
      marginXL: isMobile ? 20 : isTablet ? 19 : isIpad ? 18 : isLaptop ? 17 : 16,
      marginSM: isMobile ? 8 : isTablet ? 7 : isIpad ? 6 : isLaptop ? 5 : 4,

      // Border radius tokens
      borderRadius: isMobile ? 6 : isTablet ? 6 : isIpad ? 5 : isLaptop ? 4 : 4,
      borderRadiusLG: isMobile ? 8 : isTablet ? 7 : isIpad ? 6 : isLaptop ? 6 : 6,
      borderRadiusSM: isMobile ? 4 : isTablet ? 4 : isIpad ? 4 : isLaptop ? 3 : 3,

      // Line height for better readability
      lineHeight: isMobile ? 1.4 : isTablet ? 1.45 : isIpad ? 1.5 : isLaptop ? 1.55 : 1.6,
      lineHeightLG: isMobile ? 1.5 : isTablet ? 1.55 : isIpad ? 1.6 : isLaptop ? 1.65 : 1.7,
    },
    components: {
      ...defaultTheme.components,
      // Button responsive configuration - Enhanced for iPad
      Button: {
        fontSize: isMobile ? 15 : isTablet ? 15 : isIpad ? 15 : isLaptop ? 14 : 14,
        fontWeight: 500,
        controlHeight: isMobile ? 44 : isTablet ? 40 : isIpad ? 36 : isLaptop ? 34 : 32,
        paddingInlineLG: isMobile ? 20 : isTablet ? 18 : isIpad ? 16 : isLaptop ? 15 : 15,
        paddingInline: isMobile ? 16 : isTablet ? 14 : isIpad ? 12 : isLaptop ? 11 : 11,
        paddingInlineSM: isMobile ? 12 : isTablet ? 10 : isIpad ? 8 : isLaptop ? 7 : 7,
        borderRadius: isMobile ? 6 : isTablet ? 5 : isIpad ? 5 : isLaptop ? 4 : 4,
        controlHeightLG: isMobile ? 48 : isTablet ? 44 : isIpad ? 42 : isLaptop ? 40 : 40,
        controlHeightSM: isMobile ? 40 : isTablet ? 36 : isIpad ? 32 : isLaptop ? 30 : 24,
        fontSizeLG: isMobile ? 16 : isTablet ? 16 : isIpad ? 16 : isLaptop ? 16 : 16,
        fontSizeSM: isMobile ? 14 : isTablet ? 14 : isIpad ? 14 : isLaptop ? 14 : 14,
      },

      // Input responsive configuration - Enhanced for iPad
      Input: {
        fontSize: isMobile ? 16 : isTablet ? 15 : isIpad ? 15 : isLaptop ? 14 : 14, // 16px prevents zoom on iOS
        paddingBlock: isMobile ? 12 : isTablet ? 11 : isIpad ? 10 : isLaptop ? 9 : 8,
        paddingInline: isMobile ? 16 : isTablet ? 14 : isIpad ? 12 : isLaptop ? 11 : 11,
        borderRadius: isMobile ? 6 : isTablet ? 6 : isIpad ? 5 : isLaptop ? 4 : 4,
        controlHeight: isMobile ? 44 : isTablet ? 40 : isIpad ? 36 : isLaptop ? 34 : 32,
      },

      // Select responsive configuration - Enhanced for iPad
      Select: {
        fontSize: isMobile ? 16 : isTablet ? 15 : isIpad ? 15 : isLaptop ? 14 : 14,
        controlHeight: isMobile ? 44 : isTablet ? 40 : isIpad ? 36 : isLaptop ? 34 : 32,
        borderRadius: isMobile ? 6 : isTablet ? 6 : isIpad ? 5 : isLaptop ? 4 : 4,
      },

      // Card responsive configuration - Enhanced for iPad
      Card: {
        fontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 15 : isLaptop ? 15 : 14,
        fontSizeLG: isMobile ? 16 : isTablet ? 16 : isIpad ? 17 : isLaptop ? 17 : 16,
        paddingLG: isMobile ? 20 : isTablet ? 18 : isIpad ? 20 : isLaptop ? 22 : 16,
        borderRadius: isMobile ? 8 : isTablet ? 7 : isIpad ? 6 : isLaptop ? 6 : 6,
        boxShadowTertiary: isMobile
          ? '0 2px 8px rgba(0,0,0,0.08)'
          : isTablet
            ? '0 2px 8px rgba(0,0,0,0.07)'
            : '0 2px 8px rgba(0,0,0,0.06)',
      },

      // Table responsive configuration - Enhanced for iPad
      Table: {
        fontSize: isMobile ? 13 : isTablet ? 13 : isIpad ? 14 : isLaptop ? 14 : 14,
        cellPaddingBlock: isMobile ? 12 : isTablet ? 12 : isIpad ? 14 : isLaptop ? 15 : 16,
        cellPaddingInline: isMobile ? 12 : isTablet ? 12 : isIpad ? 14 : isLaptop ? 15 : 16,
        headerBg: '#fafafa',
        headerColor: 'rgba(0, 0, 0, 0.88)',
        borderRadius: isMobile ? 6 : isTablet ? 6 : isIpad ? 6 : isLaptop ? 7 : 8,
      },

      // Modal responsive configuration - Enhanced for iPad
      Modal: {
        fontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 15 : isLaptop ? 15 : 14,
        titleFontSize: isMobile ? 16 : isTablet ? 16 : isIpad ? 17 : isLaptop ? 17 : 16,
        borderRadius: isMobile ? 8 : isTablet ? 7 : isIpad ? 6 : isLaptop ? 6 : 6,
        paddingLG: isMobile ? 20 : isTablet ? 18 : isIpad ? 20 : isLaptop ? 22 : 16,
      },

      // Form responsive configuration - Enhanced for iPad
      Form: {
        fontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 15 : isLaptop ? 15 : 14,
        labelFontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 15 : isLaptop ? 15 : 14,
        marginLG: isMobile ? 16 : isTablet ? 16 : isIpad ? 16 : isLaptop ? 16 : 16,
        itemMarginBottom: isMobile ? 20 : isTablet ? 18 : isIpad ? 18 : isLaptop ? 17 : 16,
      },

      // Tabs responsive configuration - Enhanced for iPad
      Tabs: {
        fontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 15 : isLaptop ? 15 : 14,
        cardPadding: isMobile
          ? '12px 16px'
          : isTablet
            ? '11px 15px'
            : isIpad
              ? '10px 14px'
              : isLaptop
                ? '9px 13px'
                : '8px 12px',
        horizontalMargin: isMobile
          ? '0 20px 0 0'
          : isTablet
            ? '0 18px 0 0'
            : isIpad
              ? '0 16px 0 0'
              : isLaptop
                ? '0 14px 0 0'
                : '0 12px 0 0',
      },

      // Menu responsive configuration - Enhanced for iPad
      Menu: {
        fontSize: isMobile ? 15 : isTablet ? 15 : isIpad ? 15 : isLaptop ? 14 : 14,
        itemHeight: isMobile ? 48 : isTablet ? 44 : isIpad ? 42 : isLaptop ? 40 : 40,
        itemPadding: isMobile
          ? '0 20px'
          : isTablet
            ? '0 18px'
            : isIpad
              ? '0 16px'
              : isLaptop
                ? '0 14px'
                : '0 12px',
        iconMarginInlineEnd: isMobile ? 12 : isTablet ? 11 : isIpad ? 10 : isLaptop ? 9 : 8,
      },

      // Pagination responsive configuration - Enhanced for iPad
      Pagination: {
        fontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 14 : isLaptop ? 14 : 14,
        itemSize: isMobile ? 40 : isTablet ? 36 : isIpad ? 34 : isLaptop ? 32 : 32,
        itemActiveBg: '#1677ff',
        borderRadius: isMobile ? 6 : isTablet ? 5 : isIpad ? 4 : isLaptop ? 4 : 4,
      },

      // Alert responsive configuration - Enhanced for iPad
      Alert: {
        fontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 14 : isLaptop ? 14 : 14,
        paddingBlock: isMobile ? 16 : isTablet ? 14 : isIpad ? 12 : isLaptop ? 10 : 8,
        paddingInline: isMobile ? 20 : isTablet ? 18 : isIpad ? 16 : isLaptop ? 14 : 12,
        borderRadius: isMobile ? 8 : isTablet ? 7 : isIpad ? 6 : isLaptop ? 6 : 6,
      },

      // Tag responsive configuration - Enhanced for iPad
      Tag: {
        fontSize: isMobile ? 13 : isTablet ? 13 : isIpad ? 13 : isLaptop ? 12 : 12,
        paddingInline: isMobile ? 12 : isTablet ? 11 : isIpad ? 10 : isLaptop ? 9 : 8,
        borderRadius: isMobile ? 12 : isTablet ? 11 : isIpad ? 10 : isLaptop ? 9 : 8,
      },

      // Progress responsive configuration - Enhanced for iPad
      Progress: {
        fontSize: isMobile ? 13 : isTablet ? 13 : isIpad ? 13 : isLaptop ? 12 : 12,
        lineBorderRadius: isMobile ? 6 : isTablet ? 5 : isIpad ? 4 : isLaptop ? 4 : 4,
      },

      // Drawer responsive configuration - Enhanced for iPad
      Drawer: {
        fontSize: isMobile ? 15 : isTablet ? 15 : isIpad ? 15 : isLaptop ? 14 : 14,
        paddingLG: isMobile ? 20 : isTablet ? 18 : isIpad ? 18 : isLaptop ? 17 : 16,
        borderRadius: 0, // Full screen on mobile
      },

      // DatePicker responsive configuration - Enhanced for iPad
      DatePicker: {
        fontSize: isMobile ? 16 : isTablet ? 15 : isIpad ? 15 : isLaptop ? 14 : 15,
        controlHeight: isMobile ? 44 : isTablet ? 40 : isIpad ? 36 : isLaptop ? 34 : 32,
        borderRadius: isMobile ? 6 : isTablet ? 6 : isIpad ? 5 : isLaptop ? 4 : 4,
        paddingInline: isMobile ? 16 : isTablet ? 14 : isIpad ? 12 : isLaptop ? 11 : 11,
      },

      // TimePicker responsive configuration - Enhanced for iPad
      TimePicker: {
        fontSize: isMobile ? 16 : isTablet ? 15 : isIpad ? 15 : isLaptop ? 14 : 15,
        controlHeight: isMobile ? 44 : isTablet ? 40 : isIpad ? 36 : isLaptop ? 34 : 32,
        borderRadius: isMobile ? 6 : isTablet ? 6 : isIpad ? 5 : isLaptop ? 4 : 4,
        paddingInline: isMobile ? 16 : isTablet ? 14 : isIpad ? 12 : isLaptop ? 11 : 11,
      },

      // Calendar responsive configuration - Enhanced for iPad
      Calendar: {
        fontSize: isMobile ? 14 : isTablet ? 14 : isIpad ? 14 : isLaptop ? 14 : 14,
        yearMonthCellWidth: isMobile ? 60 : isTablet ? 70 : isIpad ? 80 : isLaptop ? 80 : 80,
        itemActiveBg: '#1677ff',
        colorBgContainer: '#ffffff',
        controlHeight: isMobile ? 40 : isTablet ? 38 : isIpad ? 36 : isLaptop ? 34 : 32,
        borderRadius: isMobile ? 6 : isTablet ? 5 : isIpad ? 4 : isLaptop ? 4 : 4,
      },
    },
  };
};

// Main App Component with Responsive Theme
function App() {
  const screenInfo = useResponsive();
  const { isMobile, isTablet, isIpad, isLaptop, screenType } = screenInfo;

  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Initialize message and notification hooks
  const [messageApi, messageContextHolder] = message.useMessage();
  const [notificationApi, notificationContextHolder] = notification.useNotification();

  // Calendar and DateTime state
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([]);
  const [calendarValue, setCalendarValue] = useState(dayjs());

  // Add state for tracking picker dropdown visibility
  const [pickerDropdownOpen, setPickerDropdownOpen] = useState(false);

  // Handle body scroll lock when picker is open on mobile/tablet
  useEffect(() => {
    if ((isMobile || isTablet) && pickerDropdownOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';

      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.position = '';
        document.body.style.width = '';
      };
    }
  }, [isMobile, isTablet, pickerDropdownOpen]);

  // Responsive theme configuration
  const responsiveTheme = useMemo(() => getResponsiveTheme(screenInfo), [screenInfo]);

  // Component size based on screen type
  const componentSize = isMobile ? 'large' : isTablet ? 'large' : isIpad ? 'middle' : 'middle';

  // Enhanced picker configuration for mobile/tablet
  const getPickerProps = (extraProps = {}) => ({
    size: isMobile ? 'large' : isTablet ? 'large' : isIpad ? 'middle' : 'middle',
    getPopupContainer: isMobile || isTablet ? () => document.body : undefined,
    placement: isMobile || isTablet ? 'bottomLeft' : 'bottomLeft',
    onOpenChange: open => {
      setPickerDropdownOpen(open);
      if (extraProps.onOpenChange) {
        extraProps.onOpenChange(open);
      }
    },
    dropdownClassName: isMobile || isTablet ? 'mobile-picker-dropdown' : '',
    ...extraProps,
  });

  // Sample data for table
  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      email: 'john@example.com',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      email: 'jim@example.com',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      email: 'joe@example.com',
    },
  ];

  // Responsive table configuration
  const getTableConfig = () => ({
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        responsive: ['xs'],
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        responsive: ['sm'],
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        responsive: ['md'],
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        responsive: ['lg'],
      },
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <Space size="middle">
            <Button
              type="link"
              icon={<EditOutlined />}
              size={isMobile || isTablet ? 'small' : 'middle'}
            />
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              size={isMobile || isTablet ? 'small' : 'middle'}
            />
          </Space>
        ),
      },
    ],
    size: isMobile ? 'small' : isTablet ? 'small' : 'middle',
    pagination: {
      pageSize: isMobile ? 5 : isTablet ? 6 : isIpad ? 8 : isLaptop ? 10 : 10,
      showSizeChanger: !(isMobile || isTablet),
      showQuickJumper: !(isMobile || isTablet),
      simple: isMobile || isTablet,
      showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    },
    scroll: { x: isMobile ? 400 : isTablet ? 500 : isIpad ? 600 : false },
  });

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Dashboard',
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'Components',
    },
    {
      key: '3',
      icon: <UserOutlined />,
      label: 'Users',
    },
    {
      key: '4',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  const showMessage = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message!',
      duration: 3,
    });
  };

  const showNotification = () => {
    notificationApi.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. It shows a detailed message to the user.',
      icon: <BellOutlined style={{ color: '#108ee9' }} />,
      placement: 'topRight',
      duration: 4.5,
    });
  };

  // Modal functions
  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  // Modal configuration based on screen size
  const modalConfig = {
    width: isMobile ? '95vw' : isTablet ? '90vw' : isIpad ? '80vw' : isLaptop ? '70vw' : 600,
    style: {
      maxWidth: isMobile ? '95vw' : isTablet ? '90vw' : isIpad ? '80vw' : 600,
      margin: isMobile || isTablet ? 16 : 'auto',
    },
    centered: isMobile || isTablet,
  };

  return (
    <ConfigProvider theme={responsiveTheme} componentSize={componentSize}>
      {messageContextHolder}
      {notificationContextHolder}
      <div class="parent" style={{ backgroundColor: 'var(--secondary-color)' }}>
        <div class="child" style={{ backgroundColor: 'var(--primary-color)' }}>
          Short text
        </div>
        <div class="child">A bit longer text goes here</div>
        <div class="child">Very very very very long text that should be truncated if needed</div>
        <div class="child">Another long content example</div>
      </div>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Desktop Sidebar */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            display: 'none',
          }}
          className="desktop-sider"
        >
          <div
            className="logo"
            style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.3)' }}
          />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
        </Sider>

        {/* Mobile Drawer */}
        <Drawer
          title="Navigation"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className="mobile-drawer"
          width={isMobile ? '75vw' : 300}
        >
          <Menu defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
        </Drawer>

        <Layout>
          {/* Header */}
          <Header
            style={{ padding: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <Row justify="space-between" align="middle" style={{ padding: '0 24px' }}>
              <Col flex="auto">
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={() => setDrawerVisible(true)}
                  className="mobile-menu-button"
                />
                <span
                  style={{
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: 'bold',
                    marginLeft: isMobile ? 8 : 16,
                  }}
                >
                  {isMobile ? 'AntD Demo' : `Ant Design Responsive Demo (${screenType})`}
                </span>
              </Col>
              <Col flex="none" className="header-actions">
                <Space size={isMobile ? 'small' : 'middle'}>
                  <Badge count={5} size={isMobile ? 'small' : 'default'}>
                    <Button
                      type="text"
                      icon={<BellOutlined />}
                      size={isMobile ? 'small' : 'middle'}
                    />
                  </Badge>
                  <Avatar icon={<UserOutlined />} size={isMobile ? 'small' : 'default'} />
                </Space>
              </Col>
            </Row>
          </Header>

          {/* Main Content */}
          <Content style={{ margin: isMobile ? '16px' : isTablet ? '20px' : '24px' }}>
            <div style={{ minHeight: 360 }}>
              {/* Welcome Section */}
              <Row
                gutter={[16, 16]}
                style={{ marginBottom: isMobile ? 16 : isTablet ? 18 : isIpad ? 20 : 24 }}
              >
                <Col span={24}>
                  <Alert
                    message={`Welcome to Ant Design Responsive Demo - ${screenType.toUpperCase()} View`}
                    description={`This application showcases responsive design with ConfigProvider theme tokens. Current screen: ${screenInfo.width}px`}
                    type="info"
                    showIcon
                    closable
                  />
                </Col>
              </Row>

              {/* Button Showcase */}
              <Row
                gutter={[16, 16]}
                style={{ marginBottom: isMobile ? 16 : isTablet ? 18 : isIpad ? 20 : 24 }}
              >
                <Col span={24}>
                  <Card title="Responsive Button Components" bordered={false}>
                    <Space
                      wrap
                      size={isMobile ? 'middle' : isTablet ? 'middle' : 'middle'}
                      style={{ width: '100%' }}
                      direction={isMobile || isTablet ? 'vertical' : 'horizontal'}
                    >
                      <Space wrap size="small">
                        <Button type="primary" block={isMobile || isTablet}>
                          Primary Button
                        </Button>
                        <Button block={isMobile || isTablet}>Default Button</Button>
                        <Button type="dashed" block={isMobile || isTablet}>
                          Dashed Button
                        </Button>
                      </Space>
                      <Space wrap size="small">
                        <Button type="text" block={isMobile || isTablet}>
                          Text Button
                        </Button>
                        <Button type="link" block={isMobile || isTablet}>
                          Link Button
                        </Button>
                        <Button type="primary" danger block={isMobile || isTablet}>
                          Danger Button
                        </Button>
                      </Space>
                      <Space wrap size="small">
                        <Button disabled block={isMobile || isTablet}>
                          Disabled Button
                        </Button>
                        <Button
                          type="primary"
                          icon={<DownloadOutlined />}
                          size={isMobile || isTablet ? 'small' : 'middle'}
                          block={isMobile || isTablet}
                        >
                          Download
                        </Button>

                        <Button type="primary" icon={<UploadOutlined />} />
                      </Space>
                    </Space>
                  </Card>
                </Col>
              </Row>

              {/* Grid and Cards Showcase */}
              <Row
                gutter={[16, 16]}
                style={{ marginBottom: isMobile ? 16 : isTablet ? 18 : isIpad ? 20 : 24 }}
              >
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    cover={
                      <div
                        style={{
                          height: isMobile ? 120 : isTablet ? 140 : isIpad ? 160 : 160,
                          background: '#f0f2f5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Card 1
                      </div>
                    }
                    actions={[
                      <HeartOutlined key="heart" />,
                      <EditOutlined key="edit" />,
                      <StarOutlined key="star" />,
                    ]}
                  >
                    <Card.Meta
                      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                      title="Card Title 1"
                      description="This is the description for card 1."
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    cover={
                      <div
                        style={{
                          height: isMobile ? 120 : isTablet ? 140 : isIpad ? 160 : 160,
                          background: '#e6f7ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Card 2
                      </div>
                    }
                    actions={[
                      <HeartOutlined key="heart" />,
                      <EditOutlined key="edit" />,
                      <StarOutlined key="star" />,
                    ]}
                  >
                    <Card.Meta
                      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                      title="Card Title 2"
                      description="This is the description for card 2."
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    cover={
                      <div
                        style={{
                          height: isMobile ? 120 : isTablet ? 140 : isIpad ? 160 : 160,
                          background: '#f6ffed',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Card 3
                      </div>
                    }
                    actions={[
                      <HeartOutlined key="heart" />,
                      <EditOutlined key="edit" />,
                      <StarOutlined key="star" />,
                    ]}
                  >
                    <Card.Meta
                      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />}
                      title="Card Title 3"
                      description="This is the description for card 3."
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    cover={
                      <div
                        style={{
                          height: isMobile ? 120 : isTablet ? 140 : isIpad ? 160 : 160,
                          background: '#fff2e8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Card 4
                      </div>
                    }
                    actions={[
                      <HeartOutlined key="heart" />,
                      <EditOutlined key="edit" />,
                      <StarOutlined key="star" />,
                    ]}
                  >
                    <Card.Meta
                      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />}
                      title="Card Title 4"
                      description="This is the description for card 4."
                    />
                  </Card>
                </Col>
              </Row>

              {/* Form Section */}
              <Row
                gutter={[16, 16]}
                style={{ marginBottom: isMobile ? 16 : isTablet ? 18 : isIpad ? 20 : 24 }}
              >
                <Col xs={24} lg={12}>
                  <Card title="Responsive Form" bordered={false}>
                    <Form
                      form={form}
                      layout={isMobile || isTablet ? 'vertical' : 'horizontal'}
                      labelCol={isMobile || isTablet ? { span: 24 } : { span: 8 }}
                      wrapperCol={isMobile || isTablet ? { span: 24 } : { span: 16 }}
                      initialValues={{
                        notifications: false,
                        terms: false,
                        gender: 'male',
                      }}
                      onFinish={values => {
                        console.log('Form values:', values);
                        messageApi.success('Form submitted successfully!');
                      }}
                    >
                      <Row gutter={isMobile || isTablet ? [0, 0] : [16, 16]}>
                        <Col xs={24} sm={isMobile || isTablet ? 24 : 12}>
                          <Form.Item
                            name="name"
                            label="Name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                          >
                            <Input placeholder="Enter your name" />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={isMobile || isTablet ? 24 : 12}>
                          <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                              {
                                required: true,
                                type: 'email',
                                message: 'Please input a valid email!',
                              },
                            ]}
                          >
                            <Input placeholder="Enter your email" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={isMobile || isTablet ? [0, 0] : [16, 16]}>
                        <Col xs={24} sm={isMobile || isTablet ? 24 : 12}>
                          <Form.Item name="category" label="Category">
                            <Select placeholder="Select a category">
                              <Option value="option1">Option 1</Option>
                              <Option value="option2">Option 2</Option>
                              <Option value="option3">Option 3</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={isMobile || isTablet ? 24 : 12}>
                          <Form.Item name="date" label="Date">
                            <DatePicker {...getPickerProps()} style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={isMobile || isTablet ? [0, 0] : [16, 16]}>
                        <Col xs={24} sm={isMobile || isTablet ? 24 : 12}>
                          <Form.Item
                            name="notifications"
                            label="Enable Notifications"
                            valuePropName="checked"
                          >
                            <Switch
                              checkedChildren="ON"
                              unCheckedChildren="OFF"
                              onChange={checked => {
                                console.log('Switch changed:', checked);
                                messageApi.info(
                                  `Notifications ${checked ? 'enabled' : 'disabled'}`
                                );
                              }}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={isMobile || isTablet ? 24 : 12}>
                          <Form.Item name="terms" valuePropName="checked">
                            <Checkbox>I agree to the terms and conditions</Checkbox>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Form.Item name="gender" label="Gender">
                        <Radio.Group>
                          <Radio value="male">Male</Radio>
                          <Radio value="female">Female</Radio>
                          <Radio value="other">Other</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item>
                        <Space
                          direction={isMobile || isTablet ? 'vertical' : 'horizontal'}
                          style={{ width: '100%' }}
                        >
                          <Button type="primary" htmlType="submit" block={isMobile || isTablet}>
                            Submit
                          </Button>
                          <Button onClick={() => form.resetFields()} block={isMobile || isTablet}>
                            Reset
                          </Button>
                        </Space>
                      </Form.Item>
                    </Form>
                  </Card>
                </Col>
                <Col xs={24} lg={12}>
                  <Card title="Interactive Elements" bordered={false}>
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                      {/* Tags and Badges */}
                      <div>
                        <h4>Tags and Badges</h4>
                        <Space wrap>
                          <Tag color="blue">Blue Tag</Tag>
                          <Tag color="green">Green Tag</Tag>
                          <Tag color="red">Red Tag</Tag>
                          <Badge count={99} overflowCount={10}>
                            <Tag>Badge Tag</Tag>
                          </Badge>
                        </Space>
                      </div>

                      {/* Progress */}
                      <div>
                        <h4>Progress</h4>
                        <Progress percent={30} />
                        <Progress percent={50} status="active" />
                        <Progress percent={70} status="exception" />
                        <Progress percent={100} />
                      </div>

                      {/* Actions */}
                      <div>
                        <h4>Actions</h4>
                        <Space
                          wrap
                          direction={isMobile ? 'vertical' : 'horizontal'}
                          style={{ width: '100%' }}
                        >
                          <Button onClick={showMessage} type="primary" block={isMobile}>
                            Show Message
                          </Button>
                          <Button onClick={showNotification} block={isMobile}>
                            Show Notification
                          </Button>
                          <Button onClick={handleModalOpen} type="dashed" block={isMobile}>
                            Open Modal
                          </Button>
                          <Tooltip title="This is a helpful tooltip">
                            <Button block={isMobile}>Tooltip</Button>
                          </Tooltip>
                          <Popover
                            content={
                              <div style={{ maxWidth: 200 }}>
                                <p>This is popover content with more details.</p>
                                <Button size="small" type="link">
                                  Learn More
                                </Button>
                              </div>
                            }
                            title="Popover Title"
                            placement="top"
                          >
                            <Button block={isMobile}>Popover</Button>
                          </Popover>
                        </Space>
                      </div>
                    </Space>
                  </Card>
                </Col>
              </Row>

              {/* Calendar and Date-Time Components Section */}
              <Row
                gutter={[16, 16]}
                style={{ marginBottom: isMobile ? 16 : isTablet ? 18 : isIpad ? 20 : 24 }}
              >
                <Col span={24}>
                  <Card
                    title={
                      <Space>
                        <CalendarOutlined />
                        Calendar & Date-Time Components
                      </Space>
                    }
                    bordered={false}
                  >
                    <Row gutter={[16, 24]}>
                      {/* Date & Time Pickers */}
                      <Col xs={24} lg={12}>
                        <Card
                          type="inner"
                          title="Date & Time Pickers"
                          size={isMobile ? 'small' : 'default'}
                        >
                          <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            {/* Date Picker */}
                            <div>
                              <h4 style={{ marginBottom: 12 }}>Date Picker</h4>
                              <DatePicker
                                {...getPickerProps({
                                  onChange: date => {
                                    setSelectedDate(date);
                                    messageApi.info(
                                      `Selected date: ${date ? date.format('YYYY-MM-DD') : 'None'}`
                                    );
                                  },
                                  format: 'YYYY-MM-DD',
                                })}
                                style={{ width: '100%' }}
                                placeholder="Select date"
                              />
                            </div>

                            {/* Time Picker */}
                            <div>
                              <h4 style={{ marginBottom: 12 }}>Time Picker</h4>
                              <TimePicker
                                {...getPickerProps({
                                  onChange: time => {
                                    setSelectedTime(time);
                                    messageApi.info(
                                      `Selected time: ${time ? time.format('HH:mm:ss') : 'None'}`
                                    );
                                  },
                                  format: 'HH:mm:ss',
                                  use12Hours: false,
                                })}
                                style={{ width: '100%' }}
                                placeholder="Select time"
                              />
                            </div>

                            {/* DateTime Picker */}
                            <div>
                              <h4 style={{ marginBottom: 12 }}>DateTime Picker</h4>
                              <DatePicker
                                {...getPickerProps({
                                  showTime: true,
                                  onChange: datetime => {
                                    messageApi.info(
                                      `Selected datetime: ${datetime ? datetime.format('YYYY-MM-DD HH:mm:ss') : 'None'}`
                                    );
                                  },
                                  format: 'YYYY-MM-DD HH:mm:ss',
                                })}
                                style={{ width: '100%' }}
                                placeholder="Select date and time"
                              />
                            </div>

                            {/* Range Picker */}
                            <div>
                              <h4 style={{ marginBottom: 12 }}>Date Range Picker</h4>
                              <DatePicker.RangePicker
                                {...getPickerProps({
                                  onChange: dates => {
                                    setSelectedDateRange(dates || []);
                                    if (dates && dates.length === 2 && dates[0] && dates[1]) {
                                      messageApi.info(
                                        `Selected range: ${dates[0].format('YYYY-MM-DD')} to ${dates[1].format('YYYY-MM-DD')}`
                                      );
                                    }
                                  },
                                  format: 'YYYY-MM-DD',
                                })}
                                style={{ width: '100%' }}
                                placeholder={['Start date', 'End date']}
                              />
                            </div>

                            {/* Week Picker */}
                            <div>
                              <h4 style={{ marginBottom: 12 }}>Week Picker</h4>
                              <DatePicker
                                {...getPickerProps({
                                  picker: 'week',
                                  onChange: week => {
                                    messageApi.info(
                                      `Selected week: ${week ? week.format('YYYY-wo') : 'None'}`
                                    );
                                  },
                                  format: 'YYYY-wo',
                                })}
                                style={{ width: '100%' }}
                                placeholder="Select week"
                              />
                            </div>

                            {/* Month Picker */}
                            <div>
                              <h4 style={{ marginBottom: 12 }}>Month Picker</h4>
                              <DatePicker
                                {...getPickerProps({
                                  picker: 'month',
                                  onChange: month => {
                                    messageApi.info(
                                      `Selected month: ${month ? month.format('YYYY-MM') : 'None'}`
                                    );
                                  },
                                  format: 'YYYY-MM',
                                })}
                                style={{ width: '100%' }}
                                placeholder="Select month"
                              />
                            </div>

                            {/* Year Picker */}
                            <div>
                              <h4 style={{ marginBottom: 12 }}>Year Picker</h4>
                              <DatePicker
                                {...getPickerProps({
                                  picker: 'year',
                                  onChange: year => {
                                    messageApi.info(
                                      `Selected year: ${year ? year.format('YYYY') : 'None'}`
                                    );
                                  },
                                  format: 'YYYY',
                                })}
                                style={{ width: '100%' }}
                                placeholder="Select year"
                              />
                            </div>
                          </Space>
                        </Card>
                      </Col>

                      {/* Calendar Component */}
                      <Col xs={24} lg={12}>
                        <Card
                          type="inner"
                          title="Interactive Calendar"
                          size={isMobile ? 'small' : 'default'}
                        >
                          <Calendar
                            fullscreen={!isMobile}
                            value={calendarValue}
                            mode={isMobile ? 'month' : 'month'}
                            onChange={date => {
                              setCalendarValue(date);
                              messageApi.success(
                                `Calendar date selected: ${date.format('YYYY-MM-DD')}`
                              );
                            }}
                            onSelect={date => {
                              setCalendarValue(date);
                              notificationApi.open({
                                message: 'Calendar Date Selected',
                                description: `You selected: ${date.format('dddd, MMMM Do YYYY')}`,
                                icon: <CalendarOutlined style={{ color: '#52c41a' }} />,
                                placement: 'topRight',
                                duration: 3,
                              });
                            }}
                            onPanelChange={(date, mode) => {
                              console.log('Panel changed:', date.format('YYYY-MM-DD'), mode);
                            }}
                            dateCellRender={date => {
                              const isToday = date.isSame(dayjs(), 'day');
                              const isSelected = date.isSame(calendarValue, 'day');

                              return (
                                <div
                                  style={{
                                    position: 'relative',
                                    height: '100%',
                                    padding: isMobile ? '2px' : '4px',
                                  }}
                                >
                                  {isToday && (
                                    <Badge
                                      dot
                                      color="#52c41a"
                                      style={{
                                        position: 'absolute',
                                        top: isMobile ? 0 : 2,
                                        right: isMobile ? 0 : 2,
                                      }}
                                    />
                                  )}
                                  {isSelected && (
                                    <div
                                      style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: '#1677ff',
                                        borderRadius: '1px',
                                      }}
                                    />
                                  )}
                                </div>
                              );
                            }}
                            headerRender={({ value, type, onChange, onTypeChange }) => {
                              const start = 0;
                              const end = 12;
                              const monthOptions = [];

                              for (let i = start; i < end; i++) {
                                monthOptions.push(
                                  <Select.Option key={i} value={i}>
                                    {value.clone().month(i).format('MMM')}
                                  </Select.Option>
                                );
                              }

                              const year = value.year();
                              const month = value.month();
                              const options = [];
                              for (let i = year - 10; i < year + 10; i += 1) {
                                options.push(
                                  <Select.Option key={i} value={i}>
                                    {i}
                                  </Select.Option>
                                );
                              }

                              return (
                                <div
                                  style={{
                                    padding: isMobile ? '8px' : '16px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                                    gap: isMobile ? '8px' : '16px',
                                  }}
                                >
                                  <Space size={isMobile ? 'small' : 'middle'}>
                                    <Select
                                      size={isMobile ? 'small' : 'middle'}
                                      value={month}
                                      onChange={selectedMonth => {
                                        const newValue = value.clone().month(selectedMonth);
                                        onChange(newValue);
                                      }}
                                      style={{ minWidth: isMobile ? 60 : 80 }}
                                    >
                                      {monthOptions}
                                    </Select>
                                    <Select
                                      size={isMobile ? 'small' : 'middle'}
                                      value={year}
                                      onChange={selectedYear => {
                                        const newValue = value.clone().year(selectedYear);
                                        onChange(newValue);
                                      }}
                                      style={{ minWidth: isMobile ? 70 : 80 }}
                                    >
                                      {options}
                                    </Select>
                                  </Space>
                                  <Space size={isMobile ? 'small' : 'middle'}>
                                    <Button
                                      size={isMobile ? 'small' : 'middle'}
                                      type={type === 'month' ? 'primary' : 'default'}
                                      onClick={() => onTypeChange('month')}
                                    >
                                      Month
                                    </Button>
                                    <Button
                                      size={isMobile ? 'small' : 'middle'}
                                      type={type === 'year' ? 'primary' : 'default'}
                                      onClick={() => onTypeChange('year')}
                                    >
                                      Year
                                    </Button>
                                  </Space>
                                </div>
                              );
                            }}
                          />
                        </Card>
                      </Col>
                    </Row>

                    {/* Selected Values Display */}
                    <Divider />
                    <Card
                      type="inner"
                      title="Selected Values"
                      size={isMobile ? 'small' : 'default'}
                    >
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} lg={6}>
                          <Alert
                            message="Selected Date"
                            description={selectedDate ? selectedDate.format('YYYY-MM-DD') : 'None'}
                            type="info"
                            showIcon
                            icon={<CalendarOutlined />}
                          />
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Alert
                            message="Selected Time"
                            description={selectedTime ? selectedTime.format('HH:mm:ss') : 'None'}
                            type="info"
                            showIcon
                            icon={<ClockCircleOutlined />}
                          />
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Alert
                            message="Calendar Value"
                            description={
                              calendarValue ? calendarValue.format('YYYY-MM-DD') : 'None'
                            }
                            type="success"
                            showIcon
                            icon={<CalendarOutlined />}
                          />
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Alert
                            message="Date Range"
                            description={
                              selectedDateRange.length === 2 &&
                              selectedDateRange[0] &&
                              selectedDateRange[1]
                                ? `${selectedDateRange[0].format('YYYY-MM-DD')} - ${selectedDateRange[1].format('YYYY-MM-DD')}`
                                : 'None selected'
                            }
                            type="warning"
                            showIcon
                            icon={<CalendarOutlined />}
                          />
                        </Col>
                      </Row>
                    </Card>
                  </Card>
                </Col>
              </Row>

              {/* Tabs Section */}
              <Row
                gutter={[16, 16]}
                style={{ marginBottom: isMobile ? 16 : isTablet ? 18 : isIpad ? 20 : 24 }}
              >
                <Col span={24}>
                  <Card title="Responsive Tabs Component" bordered={false}>
                    <Tabs defaultActiveKey="1" type="card" size={isMobile ? 'small' : 'middle'}>
                      <TabPane tab="Tab 1" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>
                          This tab shows responsive content that adapts to different screen sizes.
                        </p>
                      </TabPane>
                      <TabPane tab="Tab 2" key="2">
                        <p>Content of Tab Pane 2</p>
                        <Steps current={1} size={isMobile ? 'small' : 'default'}>
                          <Step title="Finished" description="This is a description." />
                          <Step title="In Progress" description="This is a description." />
                          <Step title="Waiting" description="This is a description." />
                        </Steps>
                      </TabPane>
                      <TabPane tab="Tab 3" key="3">
                        <p>Content of Tab Pane 3</p>
                        <Collapse defaultActiveKey={['1']} size={isMobile ? 'small' : 'middle'}>
                          <Panel header="This is panel header 1" key="1">
                            <p>Panel content 1</p>
                          </Panel>
                          <Panel header="This is panel header 2" key="2">
                            <p>Panel content 2</p>
                          </Panel>
                          <Panel header="This is panel header 3" key="3">
                            <p>Panel content 3</p>
                          </Panel>
                        </Collapse>
                      </TabPane>
                    </Tabs>
                  </Card>
                </Col>
              </Row>

              {/* Table Section */}
              <Row
                gutter={[16, 16]}
                style={{ marginBottom: isMobile ? 16 : isTablet ? 18 : isIpad ? 20 : 24 }}
              >
                <Col span={24}>
                  <Card title="Responsive Table" bordered={false}>
                    <Table dataSource={tableData} {...getTableConfig()} />
                  </Card>
                </Col>
              </Row>

              {/* Pagination */}
              <Row
                gutter={[16, 16]}
                style={{ marginBottom: isMobile ? 16 : isTablet ? 18 : isIpad ? 20 : 24 }}
              >
                <Col span={24}>
                  <Card title="Responsive Pagination Component" bordered={false}>
                    <Pagination
                      defaultCurrent={1}
                      total={500}
                      showSizeChanger={!isMobile}
                      showQuickJumper={!isMobile}
                      simple={isMobile}
                      size={isMobile ? 'small' : 'default'}
                      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>

          {/* Footer */}
          <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>
            Ant Design Responsive Demo ©2024 Created with ❤️ | Current View: {screenType}
          </Footer>
        </Layout>

        {/* Modal - Enhanced */}
        <Modal
          title="Responsive Modal Demo"
          open={modalVisible}
          onOk={handleModalClose}
          onCancel={handleModalClose}
          {...modalConfig}
          footer={[
            <Button key="cancel" onClick={handleModalClose}>
              Cancel
            </Button>,
            <Button key="ok" type="primary" onClick={handleModalClose}>
              OK
            </Button>,
          ]}
        >
          <div>
            <p>
              This modal is responsive and adapts to different screen sizes using ConfigProvider
              theme tokens.
            </p>
            <p>
              Current screen type: <strong>{screenType}</strong> ({screenInfo.width}px)
            </p>
            <Divider />
            <Space direction="vertical" style={{ width: '100%' }}>
              <Alert message="Modal is working perfectly!" type="success" showIcon closable />
              <Progress percent={75} strokeColor="#52c41a" />
              <Space wrap>
                <Avatar icon={<UserOutlined />} />
                <Tag color="processing">Processing</Tag>
                <Badge count={1} dot>
                  <MailOutlined style={{ fontSize: 16 }} />
                </Badge>
              </Space>
              <div>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => messageApi.success('Button in modal clicked!')}
                  style={{ marginRight: 8 }}
                >
                  Test Message
                </Button>
                <Button
                  size="small"
                  onClick={() =>
                    notificationApi.info({
                      message: 'From Modal',
                      description: 'This notification was triggered from inside the modal!',
                    })
                  }
                >
                  Test Notification
                </Button>
              </div>
            </Space>
          </div>
        </Modal>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
