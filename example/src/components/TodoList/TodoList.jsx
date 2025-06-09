import React from 'react';
import { Card, List, Typography } from 'modern-components';
import TodoItem from '../TodoItem/TodoItem';

const { Text } = Typography;

const TodoList = ({ filteredTodos, filter, toggleTodo, editTodo, deleteTodo }) => {
  return (
    <Card title={`${filteredTodos.length} ${filter} task${filteredTodos.length !== 1 ? 's' : ''}`}>
      {filteredTodos.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <Text type="secondary" style={{ fontSize: 16 }}>
            {filter === 'all'
              ? 'No tasks yet. Add your first task!'
              : filter === 'active'
                ? 'No active tasks. Great job!'
                : 'No completed tasks yet.'}
          </Text>
        </div>
      ) : (
        <List
          dataSource={filteredTodos}
          renderItem={todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          )}
        />
      )}
    </Card>
  );
};

export default TodoList;
