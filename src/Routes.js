import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StoreProvider from "./components/Context/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";

import Home from "./pages/home";
import Login from "./pages/Login";


function Routes(){
    return(
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <RoutesPrivate path="/home" exact component={Home} />
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    );
}

export default Routes;