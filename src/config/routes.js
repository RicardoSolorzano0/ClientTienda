//añadimos los layout que necesitemos
import LayoutSales from "../layouts/LayoutSales";
import LayoutBasic from "../layouts/LayoutBasic";

//sales pages
import AdminSales from "../pages/Sales";
import AdminSingIn from "../pages/Sales/SignIn";

//importacion de paginas 
import Home from "../pages/Home";
import Contact from "../pages/Contact";

//otros
import Error404 from "../pages/Error404";

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
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;