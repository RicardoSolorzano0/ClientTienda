//añadimos los layout que necesitemos
import LayoutSales from "../layouts/LayoutSales";

//sales pages
import AdminSales from "../pages/Sales";
import AdminSingIn from "../pages/Sales/SignIn";

//rutas
const routes = [
    {
        path: "/sales",
        component: LayoutSales,
        exact: false,
        routes: [
            {
                path: "/sales",
                component: AdminSales,
                exact: true
            },
            {
                path: "/sales/login",
                component: AdminSingIn,
                exact: true
            }
        ]
    }
];

export default routes;