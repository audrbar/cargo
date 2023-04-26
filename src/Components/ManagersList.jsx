import { useContext } from 'react';
import { Global } from './GlobalContext';

const ManagersList = () => {
    const { managersList, deleteManager, setRoute } =
        useContext(Global);
    return (
        <div className="container">
            <div className="row">
                <p className="text-center py-3">Cargo Managers List</p>
                {managersList?.length ? (
                    managersList?.map((manager) => (
                        <div key={manager.id} className="col-sm-6 col-lg-4 col-xxl-3">
                            <div className="card shadow mb-4">
                                <img
                                    className="img-thumbnail m-3"
                                    src="/user.png"
                                    alt="Manager"
                                />
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><span className="text-muted">Manager name: </span>{manager.name}</li>
                                        <li className="list-group-item"><span className="text-muted">Manager id: </span>{manager.id}</li>
                                        <li className="list-group-item"><span className="text-muted">Manager role: </span>{manager.role ? 'admin' : 'user'}</li>
                                    </ul>
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-outline-danger shadow-sm m-1" onClick={() => deleteManager(manager.id)}>DELETE</button>
                                        <button type="button" className="btn btn-outline-primary shadow-sm m-1" onClick={() => setRoute({ path: 'manager-edit-page', data: { id: manager.id } })}>EDIT</button>

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

export default ManagersList;