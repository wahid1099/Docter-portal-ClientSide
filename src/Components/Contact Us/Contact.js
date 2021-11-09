import React from 'react';
import bg from "../../images/appointment-bg.png";
import {Box, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";



const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const Contact = () => {
    return (
        <div style={appointmentBanner}>
            <Typography variant="h6" sx={{ pt:8}} style={{ color: '#5CE7ED' }}>Contact us</Typography>
            <Typography variant="h4" sx={{ mb: 3 ,pt:1}} style={{ color: '#ffffff' }}>Always Contact with us</Typography>
            <Box>
                <TextField
                    sx={{ width: '50%', m: 1,background:'white' }}
                    id="outlined-size-small"
                    size="small"
                    defaultValue="Your Name"

                />
                <TextField
                    sx={{ width: '50%', m: 1,background:'white' }}
                    id="outlined-size-small"
                    size="small"
                    defaultValue="Subject"

                />
                <TextField
                    sx={{ width: '50%', m: 1,background:'white' ,height:150}}

                    size="small"
                    defaultValue="Your Massage"

                />
            </Box>
            <Button type="submit" variant="contained" sx={{mb:10,mt:2}}>Submit</Button>

        </div>
    );
};

export default Contact;