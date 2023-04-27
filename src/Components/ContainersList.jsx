import { useContext } from 'react';
import { Global } from './GlobalContext';

const CargosList = () => {
    const { contList, deleteContainer, setRoute } =
        useContext(Global);

    return (
        <div className="container">
            <div className="row">
                <button
                    type="button"
                    className="btn btn-outline-secondary w-25 mt-2 mx-2"
                    onClick={_ => setRoute('create-container-page')}
                >
                    New Container
                </button>
                <h5 className="text-center py-3">Available Containers List</h5>
                {contList?.data.length ? (
                    contList?.data.map((cont) => (
                        <div key={cont.cont_id} className="col-sm-6 col-lg-4 col-xxl-3">
                            <div className="card shadow mb-4">
                                <div className="card-header">
                                    Container Features
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <h4><span className="text-muted">name: </span>{cont.cont_title}</h4>
                                        <p><span className="text-muted">id: </span>{cont.cont_id}</p>
                                        <p><span className="text-muted">type: </span>{cont.cont_type === 1 ? 'Aircraft container' : cont.cont_type === 2 ? 'Truck container' : 'Ship container'}</p>
                                    </ul>
                                    <div>
                                        <button type="button" className="btn btn-outline-danger m-1" onClick={() => deleteContainer(cont.cont_id)}>DELETE</button>
                                        <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'container-edit-page', data: { id: cont.cont_id } })}>EDIT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>Nothing to show!</h2>
                )}
            </div>
        </div>
    );
};

export default CargosList;