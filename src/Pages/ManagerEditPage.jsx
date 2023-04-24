import React from 'react'
import Footer from '../Components/Footer';
import ManagerEdit from '../Components/ManagerEdit';
import Navbar from '../Components/Navbar';

const CargoEditPage = ({ id }) => {
    return (
        <>
            <Navbar />
            <ManagerEdit id={id} />
            <Footer />
        </>
    )
}

export default CargoEditPage;