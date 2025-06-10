import { useState } from 'react';
import { Layout, Form, Typography, Space, Select, Switch, Row, Col } from 'modern-components';
import { Navbar } from 'modern-components';
import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  SunOutlined,
  MoonOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

// Import components
import {
  StatsDashboard,
  QuickAdd,
  FilterSection,
  TodoList,
  TodoModal,
  ThemeProvider,
  useThemeContext,
} from './components';

// Import hooks
import { useTodos } from './hooks';

import './App.css';

const { Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

// Main app content component
const AppContent = () => {
  // Hooks
  const {
    todos,
    setTodos,
    inputValue,
    setInputValue,
    filter,
    setFilter,
    filteredTodos,
    totalTodos,
    completedTodos,
    activeTodos,
    completionRate,
    addTodo,
    quickAddTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
  } = useTodos();

  const { isDarkMode, setIsDarkMode, selectedTheme, setSelectedTheme } = useThemeContext();

  // Navigation state
  const [currentView, setCurrentView] = useState('todos');
  const [selectedNavItem, setSelectedNavItem] = useState('todos');

  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [form] = Form.useForm();

  // Modal handlers
  const editTodo = todo => {
    setEditingTodo(todo);
    form.setFieldsValue({
      title: todo.text,
      description: todo.description,
      priority: todo.priority,
      dueDate: todo.dueDate ? dayjs(todo.dueDate) : null,
    });
    setIsModalVisible(true);
  };

  const handleModalSubmit = values => {
    if (editingTodo) {
      updateTodo(editingTodo.id, values);
    } else {
      addTodo(values);
    }
    setIsModalVisible(false);
    setEditingTodo(null);
    form.resetFields();
  };

  // Navigation handler with selection management
  const handleNavigation = (view, key) => {
    setCurrentView(view);
    setSelectedNavItem(key);
  };

  // Theme controls component for settings page
  const SettingsPage = () => (
    <div>
      <div className="page-header">
        <Title level={2}>Settings</Title>
      </div>
      <div className="settings-page-card">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={4} style={{ marginBottom: '16px' }}>
              Theme Preferences
            </Title>

            <Space direction="vertical" size="medium" style={{ width: '100%' }}>
              <div>
                <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                  Color Theme
                </Text>
                <Select
                  value={selectedTheme}
                  onChange={setSelectedTheme}
                  style={{ width: '200px' }}
                  size="middle"
                >
                  <Option value="default">🎨 Default</Option>
                  <Option value="green">🟢 Green</Option>
                  <Option value="purple">🟣 Purple</Option>
                  <Option value="orange">🟠 Orange</Option>
                  <Option value="dark">🌚 Dark</Option>
                </Select>
              </div>

              <div>
                <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                  Display Mode
                </Text>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Switch
                    checked={isDarkMode}
                    onChange={setIsDarkMode}
                    checkedChildren={<MoonOutlined />}
                    unCheckedChildren={<SunOutlined />}
                    size="default"
                  />
                  <Text>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
                </div>
              </div>
            </Space>
          </div>

          <div className="settings-info-card">
            <Text style={{ fontSize: '14px', color: '#64748b', fontStyle: 'italic' }}>
              💡 Theme changes are applied instantly across the entire application.
            </Text>
          </div>
        </Space>
      </div>
    </div>
  );

  // Updated navbar configuration with selection state
  const topItems = [
    {
      key: 'todos',
      icon: <HomeOutlined />,
      title: 'Todo List',
      action: () => handleNavigation('todos', 'todos'),
      selected: selectedNavItem === 'todos',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      title: 'Settings',
      action: () => handleNavigation('settings', 'settings'),
      selected: selectedNavItem === 'settings',
    },
  ];

  const bottomItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      title: 'Profile',
      action: () => handleNavigation('profile', 'profile'),
      selected: selectedNavItem === 'profile',
    },
  ];

  // Logo components with proper centering and inline layout
  const Logo = () => (
    <div className="navbar-logo-content">
      <div className="navbar-logo-icon">📝</div>
      <span className="navbar-logo-title">Todo App</span>
    </div>
  );

  const LogoCollapsed = () => <div className="navbar-logo-icon-collapsed">📝</div>;

  // Render content based on current view
  const renderContent = () => {
    switch (currentView) {
      case 'todos':
        return (
          <div>
            <div className="page-header">
              <Title level={2}>Todo List</Title>
            </div>

            {/* Statistics Dashboard */}
            <div className="stats-dashboard-full-width">
              <StatsDashboard
                totalTodos={totalTodos}
                activeTodos={activeTodos}
                completedTodos={completedTodos}
                completionRate={completionRate}
              />
            </div>

            {/* Quick Add Section */}
            <div className="quick-add-section">
              <QuickAdd
                inputValue={inputValue}
                setInputValue={setInputValue}
                quickAddTodo={quickAddTodo}
                setIsModalVisible={setIsModalVisible}
              />
            </div>

            {/* Filter Section */}
            <div className="filter-section">
              <FilterSection
                filter={filter}
                setFilter={setFilter}
                totalTodos={totalTodos}
                activeTodos={activeTodos}
                completedTodos={completedTodos}
                todos={todos}
                setTodos={setTodos}
              />
            </div>

            {/* Todo List */}
            <div className="todo-list-full-width">
              <TodoList
                filteredTodos={filteredTodos}
                filter={filter}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            </div>
          </div>
        );

      case 'profile':
        return (
          <div>
            <div className="page-header">
              <Title level={2}>Profile</Title>
            </div>
            <div className="profile-page-card">
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="profile-avatar">👤</div>
                  <Title level={4} style={{ margin: 0 }}>
                    John Doe
                  </Title>
                  <Text type="secondary">Productivity Enthusiast</Text>
                </div>

                <div className="profile-stats-card">
                  <Row gutter={[16, 16]}>
                    <Col span={8} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: '600', color: '#1890ff' }}>
                        {totalTodos}
                      </div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        Total Tasks
                      </Text>
                    </Col>
                    <Col span={8} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: '600', color: '#52c41a' }}>
                        {completedTodos}
                      </div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        Completed
                      </Text>
                    </Col>
                    <Col span={8} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: '600', color: '#faad14' }}>
                        {Math.round(completionRate)}%
                      </div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        Success Rate
                      </Text>
                    </Col>
                  </Row>
                </div>

                <Text className="profile-quote">
                  "Stay organized, stay productive. Every completed task is a step closer to your
                  goals."
                </Text>
              </Space>
            </div>
          </div>
        );

      case 'settings':
        return <SettingsPage />;

      default:
        return (
          <div>
            <div className="page-header">
              <Title level={2}>Todo List</Title>
            </div>
            <div className="stats-dashboard-full-width">
              <StatsDashboard
                totalTodos={totalTodos}
                activeTodos={activeTodos}
                completedTodos={completedTodos}
                completionRate={completionRate}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar
        logo={<Logo />}
        logoCollapsed={<LogoCollapsed />}
        topItems={topItems}
        bottomItems={bottomItems}
        theme="dark"
        defaultCollapsed={true}
        showLockItem={true}
        selectedKeys={[selectedNavItem]}
        onSelect={key => {
          // Find the item and call its action
          const allItems = [...topItems, ...bottomItems];
          const item = allItems.find(item => item.key === key);
          if (item && item.action) {
            item.action();
          }
        }}
      />

      <div className="todo-main-content">
        <Content style={{ padding: 0, background: 'transparent', minHeight: '100vh' }}>
          <div className="todo-content-wrapper">{renderContent()}</div>
        </Content>

        <Footer className="todo-footer">
          <Text type="secondary" style={{ fontSize: '14px' }}>
            Modern Todo App ©2024 - Built with Modern Components & Ant Design
          </Text>
        </Footer>
      </div>

      <TodoModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        editingTodo={editingTodo}
        setEditingTodo={setEditingTodo}
        form={form}
        onFinish={handleModalSubmit}
      />
    </Layout>
  );
};

// Main App component with ThemeProvider wrapper
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
