import { useContext } from 'react';
import { Global } from './GlobalContext';

const CargosList = () => {
    const { listContainers, deleteGood, setRoute } =
        useContext(Global);

    return (
        <div className="row justify-content-center">
            <div className="col-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                <div className="card shadow mt-3">
                    <p className="card-header text-center">Active Cargos List</p>
                    {listContainers?.data?.length ? (
                        listContainers?.data?.map((good) => (
                            <ul key={good.id} className="list-group-item">
                                <li className="list-group-item mx-2 d-flex border-bottom justify-content-between p-1">
                                    <div className="d-flex flex-column align-items-start justify-content-center">
                                        <p>{good.title}</p>
                                        <p>{good.weight}{' kg '}</p>
                                        <p>{good.flammable ? 'flammable ' : ''}</p>
                                        <p>{good.perishable ? 'perishable ' : ''}</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                        <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'cargo-edit-page', data: { id: good.id } })}>EDIT CARGO</button>
                                        <button type="button" className="btn btn-outline-danger m-1" onClick={() => deleteGood(good.id)}>DELETE CARGO</button>
                                    </div>
                                    <div className="d-flex flex-column align-items-start justify-content-center">
                                        <p>{good.type ? 'The cargo is loaded ' : ''}</p>
                                        <p>{good.type && good.type === 1 ? 'On plain container.' : good.type && good.type === 2 ? 'On truck container.' : good.type && good.type === 3 ? 'On ship container' : (
                                            <span style={{ color: 'crimson' }}>The cargo is not loaded</span>
                                        )}</p>
                                        {
                                            good.type ?
                                                (
                                                    <button type="button" className="btn btn-outline-danger m-1" onClick={() => deleteGood(good.id)}>UNLOAD CARGO</button>
                                                ) : (
                                                    <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'cargo-edit-page', data: { id: good.id } })}>LOAD CARGO</button>
                                                )
                                        }
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