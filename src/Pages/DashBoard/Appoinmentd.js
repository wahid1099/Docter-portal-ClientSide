import React, {useEffect, useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const Appoinmentd = ({date}) => {
    const {user}=UseAuth();
    const[appointment,setappointment]=useState([]);

    useEffect(()=>{
        const url = `https://infinite-beyond-40219.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        console.log(url);
        fetch(url)
            .then(res=>res.json())
            .then(data=>setappointment(data));

    },[date])
    console.log(appointment);

    return (
        <div>
            <h2>Appoinments : {appointment.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointment.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appoinmentd;