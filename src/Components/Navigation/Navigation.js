import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, NavLink} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import {Box} from "@mui/material";


const NavigationHeader = () => {
    const{logout,user}=UseAuth();

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                      Doctors Portal
                    </Typography>

                    <NavLink
                        style={{ textDecoration: 'none', color: 'white' }}
                        to="/home">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink
                        style={{ textDecoration: 'none', color: 'white' }}
                        to="/appoinment">
                        <Button color="inherit">Appoinment</Button>
                    </NavLink>

                    {
                        user?.email?

                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Log Out</Button>
                                <Button  color="inherit">  {user.displayName}</Button>

                            </Box>
                            :   <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button color="inherit">Login</Button>
                                 </NavLink>
                    }



                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavigationHeader;