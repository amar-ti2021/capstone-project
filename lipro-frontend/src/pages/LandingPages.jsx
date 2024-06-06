/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Product from "../components/Product"
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer"

const LandingPages = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Product />
            <OurTeam />
            <Footer />
        </>
    );
};

export default LandingPages;
