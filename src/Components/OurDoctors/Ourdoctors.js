import React from 'react';
import {Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import doctorimg from '../../images/doctor-small.png';
import { BsFillTelephoneFill ,BsPhoneFill} from "react-icons/bs";
import Zoom from 'react-reveal/Zoom';

const Ourdoctors = () => {
    return (
        <div>
            <Zoom>

            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 ,mt:3}}>Our Doctors</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <img src={doctorimg}  style={{ width: 300}}/>
                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}}>Dr. Caudi</Typography>
                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}}> <BsPhoneFill /> +698-1254-9658</Typography>



                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={doctorimg}  style={{ width: 300}}/>
                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}}>Dr. Caudi</Typography>

                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}}> <BsPhoneFill /> +698-1254-9658</Typography>

                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={doctorimg}  style={{ width: 300}}/>
                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}}>Dr. Caudi</Typography>

                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}}> <BsPhoneFill /> +698-1254-9658</Typography>

                </Grid>

            </Grid>

            </Zoom>
        </div>
    );
};

export default Ourdoctors;