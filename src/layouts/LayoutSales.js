import React, { useState } from "react";
import { Layout } from "antd";

//importacion para poder enrutar
import { Route, Switch, Redirect } from "react-router-dom";
//estiloss
import "./LayoutSales.scss";


//importacion de otros componentes y funciones
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import SalesSignIn from "../pages/Sales/SignIn";
import useAuth from "../hooks/useAuth";

//import { getAccessToken, getRefreshToken } from "../api/auth";

export default function LayoutSales(props) {
    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const { Header, Content, Footer } = Layout;
    const { user, isLoading } = useAuth;



    /*const accessToken = getAccessToken();
    console.log("accessToken " + accessToken);

    const refreshToken = getRefreshToken();
    console.log("refreshToken " + refreshToken);*/

    console.log(useAuth());



    if (!user) {
        return (
            <>
                <Route path="/sales/login" component={SalesSignIn} />
                <Redirect to="/sales/login" />
            </>
        );
    }

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