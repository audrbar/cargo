import { useContext } from 'react';
import { Global } from './GlobalContext';

const IMG = 'http://localhost:3003/';

const CargosList = () => {
    const { list, deleteGood, setRoute } =
        useContext(Global);

    return (
        <div className="row justify-content-center">
            <div className="col-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                <button
                    type="button"
                    className="btn btn-outline-secondary mt-2"
                    onClick={_ => setRoute('create-cargo-page')}
                >
                    Create New Cargo
                </button>
                <div className="card shadow mt-3">
                    <p className="card-header text-center">Active Cargos List</p>
                    {list?.length ? (
                        list?.map((good) => (
                            <ul key={good.id} className="list-group-item">
                                <li className="list-group-item mx-2 d-flex border-bottom justify-content-between p-1">
                                    <div className="d-flex align-items-start w-25 justify-content-center">
                                        {
                                            good.photo
                                                ? <img className="list-image w-50" alt="" src={IMG + good.photo} />
                                                : <img className="list-image w-50" alt="" src={IMG + 'picture.png'} />
                                        }
                                    </div>
                                    <div className="d-flex flex-column align-items-start justify-content-center">
                                        <h4>{good.title}</h4>
                                        <p>{good.weight}{' kg '}</p>
                                        <p>{good.flammable ? <span style={{ color: 'crimson' }}>flammable</span> : (<span style={{ color: 'green' }}>not flammable</span>)}</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-end justify-content-center">
                                        <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'cargo-edit-page', data: { id: good.id } })}>EDIT</button>
                                        <button type="button" className="btn btn-outline-danger m-1" onClick={() => deleteGood(good.id)}>DELETE</button>
                                    </div>
                                    <div className="d-flex flex-column align-items-end justify-content-center">
                                        <p>{good.container_id ? (<span style={{ color: 'green' }}>The cargo is loaded</span>) : (
                                            <span style={{ color: 'crimson' }}>The cargo is not loaded</span>
                                        )}</p>
                                        {
                                            good.container_id ?
                                                (
                                                    <button type="button" className="btn btn-outline-danger m-1" onClick={() => setRoute({ path: 'cargo-load-page', data: { id: good.id } })}>CHANGE</button>
                                                ) : (
                                                    <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'cargo-load-page', data: { id: good.id } })}>LOAD</button>
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