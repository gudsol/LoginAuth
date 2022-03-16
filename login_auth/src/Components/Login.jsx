import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd/lib'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(e) {
    const [username, setname] = useState('');
    const [password, setPassword] = useState();

    const navigate = useNavigate();


    const login = async () => {

        if (username === '' && password === '') {
            alert("* fields are required")
        } else {

            await axios.post(`http://3.108.104.128:8001/api/account/login/`, {
                username: username,
                password: password,
            }).then((response) => {
                alert(response.data.message)
                localStorage.setItem("token", JSON.stringify(response.data.token));
                navigate('/Home')

            })

        }
    }




    return (
        <div className="form_Overall_Contain">
            <Form
                name="basic"
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 10,
                }}
                autoComplete="off"
            >

                <p className="login_tittle">Login</p>


                <div className="form_inner_contain">
                    <Form.Item
                        className="form_item"
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder="username" className="UserName" onChange={(e) => { setname(e.target.value); }} />
                    </Form.Item>

                    <Form.Item
                        className="form_item"
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password type='Password' placeholder="password" className="password" onChange={(e) => { setPassword(e.target.value); }} />
                    </Form.Item>
                </div>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 1,
                    }}
                >
                    <Button className="btn" onClick={login}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};


