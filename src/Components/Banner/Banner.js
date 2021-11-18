import React from 'react';
import bg from '../../images/bg.png';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import chair from '../../images/chair.png';
import Bounce from 'react-reveal/Bounce';
const bannerBg={
    background:`url(${bg})`,

}
const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:400
}
const Banner = () => {
    return (
        <Bounce left>
        <Container style={bannerBg} sx={{flexGrow:1,mt:6}}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED',marginTop:8 }}>Get Appointment</Button>

                    </Box>


                </Grid>

                <Grid item xs={12} md={6} style={verticalCenter}>

                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>


            </Grid>
            
        </Container>
        </Bounce>
    );
};

export default Banner;