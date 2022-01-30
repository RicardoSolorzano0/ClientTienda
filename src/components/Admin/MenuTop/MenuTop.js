import React from "react";
import Logo from "../../../assets/img/png/logo.png";

//importacion de elementos de antd
import { MenuOutlined, PoweroffOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

//importando los estilos que le daremos al proyecto
import "./MenuTop.scss";

export default function MenuTop() {
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={Logo}
                    alt="Logo de la pagina"
                />
                <Button type="Link" onClick={() => console.log('me hgas')}><MenuOutlined /></Button>
            </div>
            <div className="menu-top__right">
                <Button type="Link">
                    <PoweroffOutlined />
                </Button>
                <Button type="Link">
                    <ShoppingCartOutlined />
                </Button>

            </div>
        </div>

    );
}