import React from 'react'
import Footer from '../Components/Footer';
import CargoEdit from '../Components/CargoEdit';
import Navbar from '../Components/Navbar';

const CargoEditPage = ({ id }) => {
    return (
        <>
            <Navbar />
            <CargoEdit id={id} />
            <Footer />
        </>
    )
}

export default CargoEditPage;