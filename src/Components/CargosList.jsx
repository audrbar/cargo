import { useContext } from 'react';
import { Global } from './GlobalContext';

const CargosList = () => {
    const { list, deleteGood, setRoute } =
        useContext(Global);

    return (
        <div className="row justify-content-center">
            <div className="col-10 mt-5">
                <div className="card shadow mt-3">
                    <p className="card-header text-center">Active Cargos List</p>
                    {list?.length ? (
                        list?.map((good) => (
                            <ul key={good.id} className="list-group-item">
                                <li className="list-group-item mx-2 d-flex border-bottom justify-content-between">
                                    <div className="d-flex align-items-center">
                                        {good.title}{': '}{good.weight}{' kg; '}
                                        {good.flammable ? 'flammable; ' : ''}
                                        {good.perishable ? 'perishable; ' : ''}
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'cargo-edit-page', data: { id: good.id } })}>EDIT</button>
                                        <button type="button" className="btn btn-outline-danger m-1" onClick={() => deleteGood(good.id)}>DELETE</button>
                                    </div>
                                </li>
                            </ul>
                        ))
                    ) : (
                        <h2>Nothing to show!</h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CargosList;