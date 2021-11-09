import React from 'react';
import {Redirect, Route} from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import {CircularProgress} from "@mui/material";

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = UseAuth();
    if (isLoading) { return <CircularProgress /> }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;