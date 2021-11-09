import React from 'react';
import dentalbg from '../../images/treatment.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Button, Container, Typography} from "@mui/material";
const Dentalcare = () => {
    return (
       <Container>
           <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
                   <Grid item xs={12} md={6}>
                    <img src={dentalbg} style={{width:"90%",height:'80%',float:"right"}}/>
                   </Grid>
                   <Grid item xs={12} md={6}>

                       <Typography variant="h2" sx={{ mb: 3 ,mt:3}} style={{textAlign:'left'}}>Exceptional Dental
                           Care, on Your Terms</Typography>
                       <Typography variant="h6" sx={{ mb: 3 ,mt:3}} style={{textAlign:'left'}}>
                           It is a long established fact that a reader will be distracted
                           by the readable content of a page when looking at its
                           layout. The point of using Lorem Ipsumis that it has
                           a more-or-less normal distribution of letters,as opposed
                           to using ‘Content here, content here’, making it look like
                           readable English. Many desktop publishing packages
                           and web page
                       </Typography>
                       <Button variant="contained">LEARN MORE</Button>


                   </Grid>

               </Grid>
           </Box>
       </Container>
    );
};

export default Dentalcare;