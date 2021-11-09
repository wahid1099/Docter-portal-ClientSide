import React from 'react';
import {Container, Grid} from "@mui/material";
import chair from '../../images/chair.png';
import Calender from "../Calender/Calender";
const AppoinmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid  container spacing={2}>
                <Grid item xs={12} md={6}>

                    <Calender date={date} setDate={setDate}></Calender>

                </Grid>
                <Grid item xs={12} md={6}>



                    <img style={{ width: '100%', marginTop:26 }} src={chair} alt="" />

                </Grid>

            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;