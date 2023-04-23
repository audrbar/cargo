import { useContext } from 'react';
import { Global } from './GlobalContext';

const CargosList = () => {
    const { list, setDeleteModal, setAddModal, setRemModal, setEdit } =
        useContext(Global);

    return (
        <div className="card mt-5">
            <p className="card-header text-center">Goods Cargo List</p>
            {list?.length ? (
                list?.map((good) => (
                    <ul key={good.id} className="list-group-item">
                        <li className="list-group-item mx-2 d-flex justify-content-between">
                            <div>
                                {good.title}{': '}{good.weight}{' kg, '}
                                {good.flammable ? 'flammable, ' : 'not flammable, '}
                                {good.perishable ? 'perishable; ' : 'not perishable; '}
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setAddModal(good)}>ADD</button>
                                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRemModal(good)}>REM</button>
                                <button type="button" className="btn btn-outline-danger m-1" onClick={() => setDeleteModal(good)}>DELETE</button>
                            </div>
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