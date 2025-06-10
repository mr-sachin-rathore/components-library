import React from 'react';
import { Row, Col, Space, Button, CustomButton, Typography, message } from 'modern-components';
import { FilterOutlined, CheckCircleOutlined, TrophyOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const FilterSection = ({
  filter,
  setFilter,
  totalTodos,
  activeTodos,
  completedTodos,
  todos,
  setTodos,
}) => {
  const handleCompleteAll = () => {
    const incompleteTodos = todos.filter(todo => !todo.completed);
    if (incompleteTodos.length > 0) {
      setTodos(todos.map(todo => ({ ...todo, completed: true })));
      message.success('All tasks completed! 🎉');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <Title level={4} style={{ color: '#667eea', marginBottom: '8px' }}>
          <FilterOutlined style={{ marginRight: '8px' }} />
          Filter & Manage Tasks
        </Title>
        <Text type="secondary">Filter your tasks by status and manage them efficiently</Text>
      </div>

      <Row justify="space-between" align="middle" gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <Space wrap>
            <Text strong style={{ color: '#64748b' }}>
              Filter by status:
            </Text>
            <Space size={8}>
              <Button
                type={filter === 'all' ? 'primary' : 'default'}
                onClick={() => setFilter('all')}
                style={{ borderRadius: '8px 0 0 8px' }}
              >
                All ({totalTodos})
              </Button>
              <Button
                type={filter === 'active' ? 'primary' : 'default'}
                onClick={() => setFilter('active')}
                style={{ borderRadius: '0' }}
              >
                Active ({activeTodos})
              </Button>
              <Button
                type={filter === 'completed' ? 'primary' : 'default'}
                onClick={() => setFilter('completed')}
                style={{ borderRadius: '0 8px 8px 0' }}
              >
                <CheckCircleOutlined style={{ marginRight: '4px' }} />
                Completed ({completedTodos})
              </Button>
            </Space>
          </Space>
        </Col>

        {totalTodos > 0 && (
          <Col xs={24} md={8} style={{ textAlign: 'right' }}>
            <CustomButton
              customVariant="glow"
              colorScheme="green"
              customSize="md"
              onClick={handleCompleteAll}
              disabled={activeTodos === 0}
              icon={<TrophyOutlined />}
              style={{ minWidth: '140px' }}
            >
              Complete All
            </CustomButton>
          </Col>
        )}
      </Row>

      {totalTodos > 0 && (
        <div
          style={{
            marginTop: '24px',
            padding: '16px',
            background: 'rgba(102, 126, 234, 0.05)',
            borderRadius: '8px',
            border: '1px solid rgba(102, 126, 234, 0.1)',
          }}
        >
          <Row gutter={[16, 8]}>
            <Col span={8}>
              <Text
                type="secondary"
                style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                Total Tasks
              </Text>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#1890ff' }}>
                {totalTodos}
              </div>
            </Col>
            <Col span={8}>
              <Text
                type="secondary"
                style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                Active
              </Text>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#faad14' }}>
                {activeTodos}
              </div>
            </Col>
            <Col span={8}>
              <Text
                type="secondary"
                style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                Completed
              </Text>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#52c41a' }}>
                {completedTodos}
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
