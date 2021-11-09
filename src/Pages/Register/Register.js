import React, {useState} from 'react';
import {Alert, Button, CircularProgress, Container, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import loginbg from '../../images/login.png';

import {NavLink, useHistory} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";



const Register = () => {
    const [logindata,setLogindata]=useState({});


    const history = useHistory();
    const { user, registerUser, isLoading, autherror } = UseAuth();

    // const =e=>{
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...logindata };
    //     newLoginData[field] = value;
    //     setLogindata(newLoginData);
    // }

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata};
        newLoginData[field]=value;
        setLogindata(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (logindata.password !== logindata.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(logindata.email, logindata.password, logindata.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />


                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text" >Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {autherror && <Alert severity="error">{autherror}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginbg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;