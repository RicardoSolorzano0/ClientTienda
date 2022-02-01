import React, { useState } from "react";
import { Layout } from "antd";

//importacion para poder enrutar
import { Route, Switch } from "react-router-dom";
//estiloss
import "./LayoutSales.scss";


//importacion de otros componentes
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";

export default function LayoutSales(props) {
    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-sales" >
                <Header className="layout-sales__header">
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                </Header>
                <Content className="layout-sales__content" style={{ marginLeft: menuCollapsed ? "0" : "200px" }}>
                    <LoadRouters routes={routes} />
                </Content>
                <Footer className="layout-sales__footer" style={{ marginLeft: menuCollapsed ? "0" : "200px" }}>
                    © 2022 Ricardo Alberto Solórzano Romero
                </Footer>
            </Layout>
        </Layout >
    );
}

function LoadRouters({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}