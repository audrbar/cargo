import React from 'react'
import Footer from '../Components/Footer';
import ManagersList from '../Components/ManagersList';
import Navbar from '../Components/Navbar';
import Messages from '../Components/Messages';

const ManagersListPage = () => {
    return (
        <>
            <Navbar />
            <Messages />
            <ManagersList />
            <Footer />
        </>
    )
}

export default ManagersListPage;