import React, {useEffect, useState} from 'react';
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import {useParams} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";



 const stripePromise = loadStripe('pk_test_51JvTmwKKPIXU1Tgx8SiIyxMFYTIyOKZFEBJQhEUaFN444MPUgsn6zscUL43IVaWtVmJueXwhyPsNeThjc4Pu2RtN00ZO7uUvaI')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://infinite-beyond-40219.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);
    console.log(appointment);
    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for the  {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;