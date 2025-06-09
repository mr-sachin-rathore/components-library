// Sample todo data for demonstration
export const sampleTodos = [
  {
    id: 1,
    text: 'Welcome to Modern Todo App!',
    description:
      'This is a sample todo to show you how the app works. You can edit, delete, or mark it as complete.',
    completed: false,
    priority: 'high',
    dueDate: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    text: 'Try different themes',
    description:
      'Use the theme selector in the header to try different color schemes and dark mode.',
    completed: false,
    priority: 'medium',
    dueDate: null,
    createdAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
  },
  {
    id: 3,
    text: 'Test custom buttons',
    description:
      'Notice how the app uses both regular Ant Design buttons and custom gradient/glow buttons.',
    completed: true,
    priority: 'low',
    dueDate: null,
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
  },
  {
    id: 4,
    text: 'Add your own todos',
    description:
      'Use the quick add input or detailed add button to create your own tasks with priorities and due dates.',
    completed: false,
    priority: 'medium',
    dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
  },
  {
    id: 5,
    text: 'Explore filtering options',
    description:
      "Use the filter buttons to view all, active, or completed tasks. Try the 'Complete All' button too!",
    completed: false,
    priority: 'low',
    dueDate: null,
    createdAt: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
  },
];

// Function to load sample data (only if no existing data)
export const loadSampleData = () => {
  const existingTodos = localStorage.getItem('todos');
  if (!existingTodos || JSON.parse(existingTodos).length === 0) {
    localStorage.setItem('todos', JSON.stringify(sampleTodos));
    return sampleTodos;
  }
  return JSON.parse(existingTodos);
};
