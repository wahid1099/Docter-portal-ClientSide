import React, {useState} from 'react';
import loginbg from '../../images/login.png';
import {Alert, CircularProgress, Container, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
const LogIn = () => {
   const [logindata,setLogindata]=useState({});
   const {  user, isLoading, autherror, registerUser, loginUser, signInwithGoogle, logout}=UseAuth();
   const location=useLocation();
   const history=useHistory();


   const handleOnChange=(e)=>{
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...logindata};
       newLoginData[field] = value;
       console.log(field,value,newLoginData);

       setLogindata(newLoginData);

   }
   const  handleLoginSubmit=(e)=>{
      loginUser(logindata.email,logindata.password,location,history);
       e.preventDefault();
   }

   const handleGoogleSignIn=()=>{
       signInwithGoogle(location,history);
   }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid  xs={12} md={6}>
                    <Typography variant="body1" sx={{mt:6}} gutterBottom>Login</Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login SuccesFully!</Alert> }
                        {autherror &&<Alert severity="error">{autherror}</Alert> }


                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn}  variant="contained">Google Sign In</Button>


                </Grid>



                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={loginbg} alt="" />

                </Grid>
            </Grid>
            
        </Container>
    );
};

export default LogIn;