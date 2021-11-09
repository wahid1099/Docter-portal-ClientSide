import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Fade, TextField} from "@mui/material";
import UseAuth from "../../Hooks/UseAuth";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({date,booking,openBooking,handleBookingClose,setBookingSuccess}) => {

    const {name,time}=booking;
    const {user}=UseAuth();
    const initalInfo={patientName:user.displayName,email:user.email,phone:''}
    const[bookingInfo,setBookingInfo]=useState(initalInfo);
    const handleOnBlur=e=>{
        const feild=e.target.name;
        const value=e.target.value;
        const newInfo={...bookingInfo};
        newInfo[feild]=value;
        setBookingInfo(newInfo);

    }

    const handleBookingSubmit=e=>{
       const appoinment={
           ...bookingInfo,
           time,
           serviceName:name,
           date:date.toLocaleDateString()

       }

       fetch('https://infinite-beyond-40219.herokuapp.com/appointments',{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(appoinment)
       }).then(res=>res.json())
           .then(data=>{
               if(data.insertedId){
                   setBookingSuccess(true);
                   handleBookingClose();

               }
           });
       e.preventDefault();
    }
    return (

        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            name="email"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;