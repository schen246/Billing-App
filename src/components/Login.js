import React, {Component} from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { API_ROOT } from '../constants';

import axios from "axios";

class NormalLoginForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {
                        getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        )
                    }
                </Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>Or <Link to="/register">register now!</Link>
            </Form>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post(`${API_ROOT}/login`, {
                    user_id: values.username,
                    password: values.password
                })
                .then(response => {
                    console.log(response);
                    if(response.data.status === 'OK'){
                        return response.data.token;
                    }
                    throw new Error(response.stateText)
                })
                .then(token => {
                    console.log(token);
                    this.props.handleLoginSucceed(token)
                    message.success("Login Success")
                })
                .catch(err => {
                    console.log(err);
                    message.error("Login Fail")
                })
            }
        });
    };
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;
