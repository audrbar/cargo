import React from 'react'
import Footer from '../Components/Footer';
import ContainersList from '../Components/ContainersList';
import Navbar from '../Components/Navbar';
import Messages from '../Components/Messages';

const CargosListPage = () => {
    return (
        <>
            <Navbar />
            <Messages />
            <ContainersList />
            <Footer />
        </>
    )
}

export default CargosListPage;