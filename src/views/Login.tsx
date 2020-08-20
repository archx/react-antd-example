import React from 'react';

import { Form, Button, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../styles/Login.scss';

const Login: React.FC<{ history?: any }> = (props) => {

  const [form] = Form.useForm();

  const handleSumbit = (values: any) => {
    const { username, password } = values;
    if (username !== 'admin' || password !== 'admin123') {
      message.error('用户名或密码错误');
    } else {
      props.history?.push('/home');
    }
  }

  return (
    <div className="LoginPage">
      <Form
        name="basic"
        form={form}
        onFinish={handleSumbit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="登录密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" style={{ width: '100%' }} htmlType="submit">登录系统</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;