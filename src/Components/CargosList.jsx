import { useContext, useState } from 'react';
import { Global } from './GlobalContext';
import Footer from './Footer';

const CargosList = () => {
    const { list, setDeleteModal, setAddModal, setRemModal, setEdit } =
        useContext(Global);

    return (
        <div className="card mx-auto col-10 mt-5">
            <p className="card-header">Goods Cargo List</p>
            {list?.length ? (
                list?.map((good) => (
                    <ul key={good.id} className="list-group-item">
                        <li className="list-group-item">
                            {good.title}{': '}{good.weight}{' kg, '}
                            {good.flammable ? 'flammable, ' : 'not flammable, '}
                            {good.perishable ? 'perishable, ' : 'not perishable; '}
                        </li>
                    </ul>
                ))
            ) : (
                <h2>Nothing to show!</h2>
            )}
        </div>
    );
};

export default CargosList;