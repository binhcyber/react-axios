import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Form, Input, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { themsinhvienAction } from "../Axios_QLSV/redux/quanlysinhvienSlice";
export default function ModelSinhVien() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(themsinhvienAction(values));
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="id"
            name="id"
            rules={[
              {
                required: true,
                message: "Please input your id!",
              },
              { pattern: new RegExp(/^[0-9]+$/), message: "id is invalid" },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "email is invalid!",
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
              },
              { pattern: new RegExp(/^[0-9]+$/), message: "phone is invalid" },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
