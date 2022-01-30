import React from "react";
import { Layout } from "antd";

//importacion para poder enrutar
import { Route } from "react-router-dom";
//estiloss
import "./LayoutSales.scss";

export default function LayoutBasic(props) {
    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <h2>Menu Sider</h2>
            <Layout>
                <Header>
                    HEADER.....
                </Header>
                <Content>
                    <LoadRouters routes={routes} />
                </Content>
                <Footer>
                    Ricars
                </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRouters({ routes }) {
    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}

        />
    ));
}