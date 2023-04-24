import { useContext } from 'react';
import { Global } from './GlobalContext';

const ManagersList = () => {
    const { managersList, deleteManager, setRoute } =
        useContext(Global);
    return (
        <div className="container">
            <div className="row">
                <h5 className="text-center py-4">Cargo Managers List</h5>
                {managersList?.length ? (
                    managersList?.map((manager) => (
                        <div key={manager.id} className="col-sm-6 col-lg-4 col-xxl-3">
                            <div className="card mb-4">
                                <img
                                    className="img-thumbnail m-3"
                                    src="/user.png"
                                    alt="Manager"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Cargo manager</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Name: {manager.name}</li>
                                        <li className="list-group-item">id: {manager.id}</li>
                                        <li className="list-group-item">Role: {manager.role ? 'user' : 'admin'}</li>
                                    </ul>
                                    <div className="d-flex text-end">
                                        <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'manager-edit-page', data: { id: manager.id } })}>EDIT</button>
                                        <button type="button" className="btn btn-outline-danger m-1" onClick={() => deleteManager(manager.id)}>DELETE</button>
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