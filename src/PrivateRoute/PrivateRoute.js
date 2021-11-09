import React from 'react';
import UseAuth from "../Hooks/UseAuth";
import {CircularProgress} from "@mui/material";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=UseAuth();
    if(isLoading){return <CircularProgress/>}
    return (

       <Route
    {...rest}
    render={({ location }) =>
    user.email ? (
        children
    ) : (
        <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
        />
    )
}
    />
    );
};

export default PrivateRoute;