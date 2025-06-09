import React from 'react';
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
  Space,
  Button,
  CustomButton,
} from 'modern-components';

const { TextArea } = Input;
const { Option } = Select;

const TodoModal = ({
  isModalVisible,
  setIsModalVisible,
  editingTodo,
  setEditingTodo,
  form,
  onFinish,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingTodo(null);
    form.resetFields();
  };

  return (
    <Modal
      title={editingTodo ? 'Edit Todo' : 'Add New Todo'}
      open={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width={600}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input placeholder="Enter todo title" />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <TextArea rows={3} placeholder="Enter todo description (optional)" />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="priority" label="Priority" initialValue="medium">
              <Select>
                <Option value="low">🟢 Low</Option>
                <Option value="medium">🟡 Medium</Option>
                <Option value="high">🔴 High</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="dueDate" label="Due Date">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
          <Space>
            <Button onClick={handleCancel}>Cancel</Button>
            <CustomButton customVariant="gradient" colorScheme="blue" htmlType="submit">
              {editingTodo ? 'Update Todo' : 'Add Todo'}
            </CustomButton>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TodoModal;
