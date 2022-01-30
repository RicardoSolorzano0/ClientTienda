import React from "react";
import { Layout } from "antd";

//importacion para poder enrutar
import { Route, Switch } from "react-router-dom";
//estiloss
import "./LayoutSales.scss";


//importacion de otros componentes
import MenuTop from "../components/Admin/MenuTop";

export default function LayoutSales(props) {
    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            {/*to do: Menu Sider     revisar si la clase contenedor la necesitaremos*/}
            <div className="contenedor">
                <Layout className="layout-sales">
                    <Header className="layout-sales__header">
                        <MenuTop />
                    </Header>
                    <Content className="layout-sales__content">
                        <LoadRouters routes={routes} />
                    </Content>
                    <Footer className="layout-sales__footer">
                        © 2022 Ricardo Alberto Solórzano Romero
                    </Footer>
                </Layout>
            </div>
        </Layout>
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