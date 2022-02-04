import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { emailValidation, minLengthValidation } from "../../../utils/formValidation";

import "./RegisterForm.scss";

export default function RegisterForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });

    const changeForm = e => {
        if (e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            });
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        }
    };

    const inputValidation = e => {
        const { type, name } = e.target;

        if (type === "email") {
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            });
        }

        if (type === "checkbox") {
            setFormValid({
                ...formValid,
                [name]: e.target.checked
            });
        }

        if (type === "password") {
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 6)
            });
        }
    };

    const register = e => {
        e.preventDefault();
        console.log(formValid);
    };

    return (
        <Form className="register-form" onSubmitCapture={register} onChange={changeForm}>
            <Form.Item>
                <Input type="email" name="email" placeholder="Correo electronico" className="register-form__input" prefix={<UserOutlined />} onChange={inputValidation} value={inputs.email} />
            </Form.Item>
            <Form.Item>
                <Input type="password" name="password" placeholder="Contraseña" className="register-form__input" prefix={<LockOutlined />} onChange={inputValidation} value={inputs.password} />
            </Form.Item>
            <Form.Item>
                <Input type="password" name="repeatPassword" placeholder="Repetir contraseña" className="register-form__input" prefix={<LockOutlined />} onChange={inputValidation} value={inputs.repeatPassword} />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" onChange={inputValidation} checked={inputs.privacyPolicy}>
                    He leido la politica de privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form_button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>

    );
}