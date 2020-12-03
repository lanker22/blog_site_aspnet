import React from 'react';
import { Route } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";

var AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            component={(props) => (
            <div>
                <AdminNavBar /> 
                <Component {...props} />
                </div>
                )}
        />
    );
}

export default AdminRoute