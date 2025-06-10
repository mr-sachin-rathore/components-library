import React from 'react';
import { Row, Col, Input, Button, CustomButton, Space, Typography } from 'modern-components';
import { PlusOutlined, RocketOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const QuickAdd = ({ inputValue, setInputValue, quickAddTodo, setIsModalVisible }) => {
  return (
    <div>
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <Title level={4} style={{ color: '#667eea', marginBottom: '8px' }}>
          ⚡ Quick Add Todo
        </Title>
        <Text type="secondary">
          Add a new task quickly or click "Detailed Add" for more options
        </Text>
      </div>

      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={16}>
          <Input
            placeholder="What needs to be done today?"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onPressEnter={quickAddTodo}
            size="large"
            style={{ fontSize: '16px' }}
          />
        </Col>
        <Col xs={24} md={8}>
          <Space style={{ width: '100%', justifyContent: 'flex-end' }} wrap>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={quickAddTodo}
              size="large"
              disabled={!inputValue.trim()}
              style={{ minWidth: '120px' }}
            >
              Quick Add
            </Button>
            <CustomButton
              customVariant="gradient"
              colorScheme="purple"
              customSize="lg"
              icon={<RocketOutlined />}
              onClick={() => setIsModalVisible(true)}
              style={{ minWidth: '140px' }}
            >
              Detailed Add
            </CustomButton>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default QuickAdd;
