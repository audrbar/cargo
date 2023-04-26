import React from 'react'
import Footer from '../Components/Footer';
import ContainerEdit from '../Components/ContainerEdit';
import Navbar from '../Components/Navbar';

const CargoEditPage = ({ id }) => {
    return (
        <>
            <Navbar />
            <ContainerEdit id={id} />
            <Footer />
        </>
    )
}

export default CargoEditPage;