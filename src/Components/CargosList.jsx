import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CargosList = () => {
    const { list, setDeleteModal, setAddModal, setRemModal, setEdit } =
        useContext(Global);

    return (
        <div className="card mx-auto col-12 mt-5">
            <p className="card-header">Goods Cargo List</p>
            {list?.length ? (
                list?.map((good) => (
                    <ul key={good.id} className="list-group-item">
                        <li className="list-group-item mx-3">
                            {good.title}{': '}{good.weight}{' kg, '}
                            {good.flammable ? 'flammable, ' : 'not flammable, '}
                            {good.perishable ? 'perishable; ' : 'not perishable; '}
                            <button type="button" className="btn btn-outline-primary m-1" onClick={() => setAddModal(good)}>ADD</button>
                            <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRemModal(good)}>REM</button>
                            <button type="button" className="btn btn-outline-danger m-1" onClick={() => setDeleteModal(good)}>DELETE</button>
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