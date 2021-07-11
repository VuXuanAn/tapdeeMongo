import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { createNewAccount } from '../../../../Actions/Account.action'
import { useDispatch } from 'react-redux';
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};
const AddUser = () => {
    const [pass, setpass] = useState('tapdee12345');
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(createNewAccount(values.id, values.userPassword, token.token))
    };

    const token = localStorage.getItem('ADMIN') ? JSON.parse(localStorage.getItem('ADMIN')) : {};
    const onFinishFailed = (errorInfo) => {

    };

    return (
        <div>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="id"
                    name="id"
                    rules={[{ required: true, message: 'id không được để trống' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="userPassword"
                    name="userPassword"
                    rules={[{ required: true, message: 'Mật khẩu không được bỏ trống' }]}
                >
                    <Input defaultValue={pass} value={pass} />
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddUser;
