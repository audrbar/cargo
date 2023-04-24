import React from 'react'
import Footer from '../Components/Footer';
import CargosList from '../Components/CargosList';
import Navbar from '../Components/Navbar';
import Messages from '../Components/Messages';

const CargosListPage = () => {
    return (
        <>
            <Navbar />
            <Messages />
            <CargosList />
            <Footer />
        </>
    )
}

export default CargosListPage;