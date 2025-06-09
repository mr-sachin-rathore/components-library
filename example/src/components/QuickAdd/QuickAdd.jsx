import React from 'react';
import { Card, Row, Col, Input, Button, CustomButton, Space } from 'modern-components';
import { PlusOutlined } from '@ant-design/icons';

const QuickAdd = ({ inputValue, setInputValue, quickAddTodo, setIsModalVisible }) => {
  return (
    <Card style={{ marginBottom: 24 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <Input
            placeholder="Quick add a todo..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onPressEnter={quickAddTodo}
            size="large"
          />
        </Col>
        <Col xs={24} md={8}>
          <Space style={{ width: '100%' }}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={quickAddTodo}
              size="large"
              disabled={!inputValue.trim()}
            >
              Quick Add
            </Button>
            <CustomButton
              customVariant="gradient"
              colorScheme="purple"
              customSize="lg"
              icon={<PlusOutlined />}
              onClick={() => setIsModalVisible(true)}
            >
              Detailed Add
            </CustomButton>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default QuickAdd;
