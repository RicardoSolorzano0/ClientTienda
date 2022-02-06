import React, { useState } from "react";

import "./LoginForm.scss";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Form, Input, Button, notification } from "antd";

//funciones y componentens
import { singInApi } from "../../../api/user";

export default function LoginForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        singInApi(inputs);
    };
    return (
        <div>
            <Form className="login-form" onChange={changeForm} onSubmitCapture={login}>
                <Form.Item>
                    <Input prefix={<UserOutlined />} type="email" name="email" placeholder="Correo electronico" className="login-form__input" />
                </Form.Item>
                <Form.Item>
                    <Input prefix={<LockOutlined />} type="password" name="password" placeholder="Contraseña" className="login-form__input" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="login-form__button">
                        Entrar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}