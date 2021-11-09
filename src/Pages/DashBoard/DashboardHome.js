import React from 'react';
import {Grid} from "@mui/material";
import Calender from "../../Components/Calender/Calender";
import Appoinmentd from "./Appoinmentd";

const DashboardHome = () => {
    const [date,setDate]=React.useState(new Date());

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12}  md={7}>
                    <Appoinmentd date={date}></Appoinmentd>

                </Grid>
            </Grid>
            
        </div>
    );
};

export default DashboardHome;