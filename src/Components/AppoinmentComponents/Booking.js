import React from 'react';
import {Button, Grid} from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@material-ui/core/Typography";
import Modal from '@mui/material/Modal';
import BookingModal from "./Booking Modal";

const Booking = ({booking,date,setBookingsuccess}) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>

            </Paper>

            </Grid>
            <BookingModal
            date={date}
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            setBookingSuccess={setBookingsuccess}
            ></BookingModal>
            
        </>
    );
};

export default Booking;