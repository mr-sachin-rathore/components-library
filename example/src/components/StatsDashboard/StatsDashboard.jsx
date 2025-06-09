import React from 'react';
import { Row, Col, Card, Statistic, Progress, Typography } from 'modern-components';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const StatsDashboard = ({ totalTodos, activeTodos, completedTodos, completionRate }) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      <Col xs={24} sm={6}>
        <Card>
          <Statistic
            title="Total Tasks"
            value={totalTodos}
            prefix={<CheckCircleOutlined />}
            valueStyle={{ color: '#1890ff' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={6}>
        <Card>
          <Statistic
            title="Active Tasks"
            value={activeTodos}
            prefix={<ClockCircleOutlined />}
            valueStyle={{ color: '#faad14' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={6}>
        <Card>
          <Statistic
            title="Completed"
            value={completedTodos}
            prefix={<CheckCircleOutlined />}
            valueStyle={{ color: '#52c41a' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={6}>
        <Card>
          <div>
            <Text type="secondary" style={{ fontSize: 14 }}>
              Completion Rate
            </Text>
            <Progress
              percent={completionRate}
              size="small"
              status={completionRate === 100 ? 'success' : 'active'}
              style={{ marginTop: 8 }}
            />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsDashboard;
