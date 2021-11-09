import React from 'react';
import footerbg from '../../images/footer-bg.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Button, Container, Typography} from "@mui/material";
import { BsFacebook ,BsGoogle,BsTwitter} from "react-icons/bs";

const footerbgstyle={
    background:`url(${footerbg})`,
    backgroundSize:'cover',

}

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={footerbgstyle}>
            <Container>
            <Grid container spacing={2} sx={{pt:12}}>
                <Grid item xs={6} md={3} sx={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',

                }}>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1,pt:10}}style={{ color: '#848586' }}>Emergency Dental Care</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1}} style={{ color: '#848586' }}>Treatment for personal Diseases</Typography>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1}}style={{ color: '#848586' }}>Tooth Extraction</Typography>

                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>

                </Grid>
                <Grid item xs={6} md={3}
                      sx={{
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          textAlign: 'left',

                      }}>
                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}} style={{ color: '#5CE7ED' }}>Services</Typography>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1}}style={{ color: '#848586' }}>Emergency Dental Care</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1}} style={{ color: '#848586' }}>Treatment for personal Diseases</Typography>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1}}style={{ color: '#848586' }}>Tooth Extraction</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>

                </Grid>
                <Grid item xs={6} md={3}
                      sx={{
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          textAlign: 'left',

                      }}>
                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}} style={{ color: '#5CE7ED' }}>Oral Health</Typography>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1}}style={{ color: '#848586' }}>Emergency Dental Care</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1}} style={{ color: '#848586' }}>Treatment for personal Diseases</Typography>
                    <Typography variant="h6" sx={{ mb: 1 ,mt:1}}style={{ color: '#848586' }}>Tooth Extraction</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>Check Up</Typography>


                </Grid>
                <Grid item xs={6} md={3}
                      sx={{
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          textAlign: 'left',

                      }}>
                    <Typography variant="h6" sx={{ mb: 3 ,mt:3}} style={{ color: '#5CE7ED' }}>Our Adress</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}>New Yourk-101010 Hudson Yards</Typography>
                    <Typography variant="h6" sx={{ mb:1  ,mt:1}} style={{ color: '#848586' }}><BsFacebook/> <BsGoogle/> <BsTwitter/></Typography>

                    <Typography variant="h6" sx={{ mb:1  ,mt:1,pt:8}} style={{ color: '#848586' }}>Call Now</Typography>
                    <Button variant="contained">+20252525</Button>


                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default Footer;