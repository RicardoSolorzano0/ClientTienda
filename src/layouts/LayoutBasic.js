import React from "react";
import { Layout } from "antd";
//Importacion necesaria para hacer las rutas
import { Route, Switch } from "react-router-dom";

//importacion de los estilos
import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
    const { routes } = props;
    const { Content, Footer } = Layout;
    return (
        <Layout>
            <h2>Menu Sider BASIC</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>
                    aSSSSSSSSS
                </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({ routes }) {
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