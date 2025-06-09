import React from 'react';
import { Card, Row, Col, Space, Button, CustomButton, Typography, message } from 'modern-components';
import { FilterOutlined } from '@ant-design/icons';

const { Text } = Typography;

const FilterSection = ({ 
  filter, 
  setFilter, 
  totalTodos, 
  activeTodos, 
  completedTodos, 
  todos,
  setTodos 
}) => {
  const handleCompleteAll = () => {
    const incompleteTodos = todos.filter(todo => !todo.completed);
    if (incompleteTodos.length > 0) {
      setTodos(todos.map(todo => ({ ...todo, completed: true })));
      message.success('All tasks completed! 🎉');
    }
  };

  return (
    <Card style={{ marginBottom: 24 }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Space>
            <FilterOutlined />
            <Text strong>Filter Tasks:</Text>
            <Button.Group>
              <Button 
                type={filter === 'all' ? 'primary' : 'default'}
                onClick={() => setFilter('all')}
              >
                All ({totalTodos})
              </Button>
              <Button 
                type={filter === 'active' ? 'primary' : 'default'}
                onClick={() => setFilter('active')}
              >
                Active ({activeTodos})
              </Button>
              <Button 
                type={filter === 'completed' ? 'primary' : 'default'}
                onClick={() => setFilter('completed')}
              >
                Completed ({completedTodos})
              </Button>
            </Button.Group>
          </Space>
        </Col>
        
        {totalTodos > 0 && (
          <Col>
            <CustomButton
              customVariant="glow"
              colorScheme="green"
              customSize="sm"
              onClick={handleCompleteAll}
              disabled={activeTodos === 0}
            >
              Complete All
            </CustomButton>
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default FilterSection; 