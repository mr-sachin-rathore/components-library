import React, { useState } from 'react';
import { Layout, Form, Typography } from 'modern-components';
import dayjs from 'dayjs';

// Import components
import {
  Header,
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
const { Text } = Typography;

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

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <Content style={{ padding: '24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <StatsDashboard
            totalTodos={totalTodos}
            activeTodos={activeTodos}
            completedTodos={completedTodos}
            completionRate={completionRate}
          />

          <QuickAdd
            inputValue={inputValue}
            setInputValue={setInputValue}
            quickAddTodo={quickAddTodo}
            setIsModalVisible={setIsModalVisible}
          />

          <FilterSection
            filter={filter}
            setFilter={setFilter}
            totalTodos={totalTodos}
            activeTodos={activeTodos}
            completedTodos={completedTodos}
            todos={todos}
            setTodos={setTodos}
          />

          <TodoList
            filteredTodos={filteredTodos}
            filter={filter}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Text type="secondary">
          Modern Todo App ©2024 - Built with Modern Components & Ant Design
        </Text>
      </Footer>

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
