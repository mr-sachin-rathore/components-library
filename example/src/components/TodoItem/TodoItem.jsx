import React from 'react';
import { List, Checkbox, Button, Tag, Tooltip, Typography } from 'modern-components';
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const TodoItem = ({ todo, toggleTodo, editTodo, deleteTodo }) => {
  const getPriorityColor = priority => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'default';
    }
  };

  const getPriorityIcon = priority => {
    switch (priority) {
      case 'high':
        return <ExclamationCircleOutlined />;
      case 'medium':
        return <ClockCircleOutlined />;
      case 'low':
        return <CheckCircleOutlined />;
      default:
        return null;
    }
  };

  return (
    <List.Item
      className="todo-item"
      style={{
        padding: '16px 0',
        opacity: todo.completed ? 0.7 : 1,
        transition: 'all 0.3s ease',
      }}
      actions={[
        <Tooltip title="Edit" key="edit">
          <Button type="text" icon={<EditOutlined />} onClick={() => editTodo(todo)} size="small" />
        </Tooltip>,
        <Tooltip title="Delete" key="delete">
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => deleteTodo(todo.id)}
            size="small"
          />
        </Tooltip>,
      ]}
    >
      <List.Item.Meta
        avatar={<Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />}
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Text delete={todo.completed} strong={!todo.completed} style={{ fontSize: 16 }}>
              {todo.text}
            </Text>
            <Tag color={getPriorityColor(todo.priority)} icon={getPriorityIcon(todo.priority)}>
              {todo.priority}
            </Tag>
            {todo.dueDate && (
              <Tag icon={<CalendarOutlined />} color="blue">
                {todo.dueDate}
              </Tag>
            )}
          </div>
        }
        description={
          <div>
            {todo.description && <Text type="secondary">{todo.description}</Text>}
            <br />
            <Text type="secondary" style={{ fontSize: 12 }}>
              Created: {new Date(todo.createdAt).toLocaleDateString()}
            </Text>
          </div>
        }
      />
    </List.Item>
  );
};

export default TodoItem;
