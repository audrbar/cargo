import React from 'react'
import Footer from '../Components/Footer';
import CargoLoad from '../Components/CargoLoad';
import Navbar from '../Components/Navbar';

const CargoEditPage = ({ id }) => {
    return (
        <>
            <Navbar />
            <CargoLoad id={id} />
            <Footer />
        </>
    )
}

export default CargoEditPage;