import React from 'react';
import {Grid, Typography} from "@mui/material";

const Doctor = ({doctor}) => {
    const { name, image } = doctor;

    return (

            <Grid item xs={12} sm={6} md={4} sx={{textAlign:'start'}}>
                <img
                    style={{ width: '300px', height: '200px',float:'start' }}
                    src={`data:image/png;base64,${image}`} alt="" />
                <Typography variant="h6" >{name}</Typography>

            </Grid>

    );
};

export default Doctor;