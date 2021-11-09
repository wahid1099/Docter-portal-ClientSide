import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

const Blogs = () => {
    return (
        <div>
            <Typography variant="h6" sx={{ mb: 3 ,mt:3}} style={{ color: '#19cad2' }}>OUR BLOG</Typography>
            <Typography variant="h3" sx={{ mb: 3 ,mt:3}} >FROM OUR BLOG NEWS</Typography>
          <Container>
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                              <CardHeader
                                  avatar={
                                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                          R
                                      </Avatar>
                                  }
                                  action={
                                      <IconButton aria-label="settings">
                                      </IconButton>
                                  }
                                  title="Shrimp and Chorizo Paella"
                                  subheader="September 14, 2016"
                              />

                              <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                      This impressive paella is a perfect party dish and a fun meal to cook
                                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                                      if you like.
                                  </Typography>
                              </CardContent>


                          </Card>
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                              <CardHeader
                                  avatar={
                                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                         S
                                      </Avatar>
                                  }
                                  action={
                                      <IconButton aria-label="settings">
                                      </IconButton>
                                  }
                                  title="Shrimp and Chorizo Paella"
                                  subheader="September 14, 2016"
                              />

                              <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                      This impressive paella is a perfect party dish and a fun meal to cook
                                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                                      if you like.
                                  </Typography>
                              </CardContent>


                          </Card>
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                              <CardHeader
                                  avatar={
                                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                          W
                                      </Avatar>
                                  }
                                  action={
                                      <IconButton aria-label="settings">
                                      </IconButton>
                                  }
                                  title="Shrimp and Chorizo Paella"
                                  subheader="September 14, 2016"
                              />

                              <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                      This impressive paella is a perfect party dish and a fun meal to cook
                                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                                      if you like.
                                  </Typography>
                              </CardContent>


                          </Card>
                      </Grid>

                  </Grid>
              </Box>
          </Container>
        </div>
    );
};

export default Blogs;