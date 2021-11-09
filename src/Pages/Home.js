import React from 'react';
import NavigationHeader from "../Components/Navigation/Navigation";
import Banner from "../Components/Banner/Banner";
import Services from "../Components/Services/Services";
import AppoinmentBanner from "../Components/AppoinmentBanner/AppoinmentBanner";
import Ourdoctors from "../Components/OurDoctors/Ourdoctors";
import Footer from "../Components/Foooter/Footer";
import Contact from "../Components/Contact Us/Contact";
import Blogs from "../Components/Our Blogs/Blogs";
import Dentalcare from "../Components/DentalCare/Dentalcare";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <AppoinmentBanner></AppoinmentBanner>
            <Ourdoctors></Ourdoctors>
            <Dentalcare></Dentalcare>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;