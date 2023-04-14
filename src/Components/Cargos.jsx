import React from 'react'
import CreateCargo from './CreateCargo';
import List from './List';
import Navbar from './Navbar';

const Cargos = () => {
    return (
        <>
            <Navbar />
            <CreateCargo />
            <List />
        </>
    )
}

export default Cargos;