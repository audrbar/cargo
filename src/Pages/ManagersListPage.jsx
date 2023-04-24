import React from 'react'
import Footer from '../Components/Footer';
import ManagersList from '../Components/ManagersList';
import Navbar from '../Components/Navbar';

const ManagersListPage = () => {
    return (
        <>
            <Navbar />
            <ManagersList />
            <Footer />
        </>
    )
}

export default ManagersListPage;