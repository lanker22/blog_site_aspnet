import React, { Component } from 'react';
import { Route } from "react-router-dom";
import NavBar from "./NavBar";

var PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            <div>
                <NavBar />
                <Component {...props} />
            </div>
        )}
        />
    );
}

export default PublicRoute;