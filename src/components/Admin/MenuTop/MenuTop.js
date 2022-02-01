import React from "react";
import Logo from "../../../assets/img/png/logo.png";

//importacion de elementos de antd
import { MenuOutlined, PoweroffOutlined, ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

//importando los estilos que le daremos al proyecto
import "./MenuTop.scss";

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={Logo}
                    alt="Logo de la pagina"
                />
                <Button type="Link" onClick={() => setMenuCollapsed(!menuCollapsed)}>{menuCollapsed ? <MenuOutlined /> : <CloseOutlined />}</Button>
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