import React from 'react';
import AppoinmentHeader from "../../Components/AppoinmentComponents/AppoinmentHeader";
import NavigationHeader from "../../Components/Navigation/Navigation";
import AvailableAppoinments from "../../Components/AppoinmentComponents/AvailableAppoinments";

const AppoinmentPage = () => {
    const [date,setDate]=React.useState(new Date());
    return (
        <div>

            <AppoinmentHeader
            date={date} setDate={setDate}
            ></AppoinmentHeader>
            <AvailableAppoinments date={date}></AvailableAppoinments>
        </div>
    );
};

export default AppoinmentPage;