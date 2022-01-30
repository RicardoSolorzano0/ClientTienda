//importacion de componentes
import React from "react";
//importacion para el sistema de rutas
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//importamos el archivo routes para todo el tema de rutas
import routes from "./config/routes";

//importacion de scss
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  //console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
