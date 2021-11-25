import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Provider from "./components/Context/Provider";

import Home from "./pages/home";
import Login from "./pages/Login";
import RoutesPrivate from "./components/Routes/Private/Private";

function Routes(){
    return(
        <BrowserRouter>
            <Provider>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <RoutesPrivate path="/home" exact component={Home} />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default Routes;