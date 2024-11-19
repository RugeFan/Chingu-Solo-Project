import React, { useState, useEffect, useCallback } from "react";
import { Modal, Form, Input, Select, Button, Row, Col } from "antd";
import axios from 'axios';
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderInfo } from "../store/features/order";
import { showServiceSelection, hideAllForms } from "../store/features/formVisible";

const { Option } = Select;

const QuoteForm = ({ open }) => {
  const [selectedService, setSelectedService] = useState("basic");
  const [form] = Form.useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleFieldsChange = useCallback(
    debounce(async () => {
      try {
        await form.validateFields();
        setIsButtonDisabled(false);
      } catch (error) {
        setIsButtonDisabled(true);
      }
    }, 300),
    [form]
  );

  const handleNextClick = () => {
    form.validateFields().then((values) => {
      const { name, phone, email, street, suburb, postcode } = values;

      const orderInfo = {
        name,
        email,
        contactNumber: phone,
        address: {
          street,
          suburb,
          postalCode: postcode
        },
        services: {
          type: selectedService
        }
      };

      dispatch(updateOrderInfo(orderInfo)); // 更新 Redux 中的 orderInfo

      // 根据环境动态设置 API URL
      const apiUrl = process.env.NODE_ENV === 'production'
        ? 'https://pureglim.fly.dev/user'  // 生产环境的实际后端地址
        : 'http://localhost:3000/user';    // 本地开发环境使用的地址
      console.log("API URL:", apiUrl);
      axios.post(apiUrl, orderInfo)
        .then(response => {
          console.log('Data sent successfully:', response.data);
          dispatch(showServiceSelection()); // 显示 ServiceSelection 表单
        })
        .catch(error => {
          console.error('Error sending data:', error);
        });
    });
  };

  return (
    <Modal
      title="Get a Quote"
      open={open}
      onCancel={() => dispatch(hideAllForms())} // 点击取消按钮或蒙版时关闭表单
      footer={null}
      style={{ padding: "20px" }}
      maskClosable={true} // 允许点击蒙版关闭表单
    >
      <Form
        form={form}
        layout="vertical"
        onFieldsChange={handleFieldsChange}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input
                placeholder="Full Name*"
                className="rounded-full h-12 pl-5"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input
                placeholder="Contact Number*"
                type="tel"
                className="rounded-full h-12 pl-5"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input
            placeholder="Email*"
            type="email"
            className="rounded-full h-12 pl-5"
          />
        </Form.Item>
        <Form.Item
          name="street"
          rules={[{ required: true, message: 'Please enter your street address' }]}
        >
          <Input
            placeholder="Street Address*"
            className="rounded-full h-12 pl-5"
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="suburb"
              rules={[{ required: true, message: 'Please enter your suburb' }]}
            >
              <Input
                placeholder="Suburb*"
                className="rounded-full h-12 pl-5"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="postcode"
              rules={[{ required: true, message: 'Please enter your postcode' }]}
            >
              <Input
                placeholder="Postal Code*"
                className="rounded-full h-12 pl-5"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="serviceType"
          rules={[{ required: true, message: 'Please select a service' }]}
        >
          <Select
            value={selectedService}
            onChange={(value) => setSelectedService(value)}
            placeholder="Desired Service*"
            className="rounded-full h-12"
            popupClassName="rounded-lg"
          >
            <Option value="oneTime">One Time Cleaning - $105</Option>
            <Option value="regular">Regular Cleaning - $125</Option>
            <Option value="move">Move In/Out Cleaning - $360</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <div className="flex justify-end">
            <Button
              onClick={() => dispatch(hideAllForms())}
              className="mr-2 rounded-full h-12"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleNextClick}
              disabled={isButtonDisabled} // 当表单未完成时禁用按钮
              className={`rounded-full h-12 ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'themeColor border-none cursor-pointer'}`}
              style={{
                backgroundColor: isButtonDisabled ? '#d3d3d3' : '#6D8552',
                borderColor: isButtonDisabled ? '#d3d3d3' : '#6D8552',
                color: '#fff',
              }}
            >
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default QuoteForm;
