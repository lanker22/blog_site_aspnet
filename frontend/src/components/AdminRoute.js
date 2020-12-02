import React, { Component } from 'react';
import { Route } from "react-router-dom";

var AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            component={(props) => (<Component {...props} />)}
        />
    );
}

export default AdminRoute