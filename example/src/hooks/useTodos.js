import { useState, useEffect } from 'react';
import { Modal, message } from 'modern-components';
import dayjs from 'dayjs';
import { loadSampleData } from '../data/sampleTodos';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const loadedTodos = loadSampleData();
    setTodos(loadedTodos);
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (values) => {
    const newTodo = {
      id: Date.now(),
      text: values.title,
      description: values.description || '',
      completed: false,
      priority: values.priority || 'medium',
      dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : null,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
    message.success('Todo added successfully!');
  };

  const quickAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        description: '',
        completed: false,
        priority: 'medium',
        dueDate: null,
        createdAt: new Date().toISOString(),
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
      message.success('Todo added!');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  const deleteTodo = (id) => {
    Modal.confirm({
      title: 'Delete Todo',
      content: 'Are you sure you want to delete this todo?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setTodos(todos.filter(todo => todo.id !== id));
        message.success('Todo deleted!');
      },
    });
  };

  const updateTodo = (id, values) => {
    setTodos(todos.map(todo => 
      todo.id === id
        ? {
            ...todo,
            text: values.title,
            description: values.description || '',
            priority: values.priority || 'medium',
            dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : null,
          }
        : todo
    ));
    message.success('Todo updated successfully!');
  };

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active': return !todo.completed;
      case 'completed': return todo.completed;
      default: return true;
    }
  });

  // Statistics
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;
  const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  return {
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
  };
}; 