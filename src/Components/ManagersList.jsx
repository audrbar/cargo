import { useContext } from 'react';
import { Global } from './GlobalContext';

const ManagersList = () => {
    const { managersList, deleteManager, setRoute } =
        useContext(Global);
    return (
        <div className="card mt-5">
            <p className="card-header text-center">Cargo Managers List</p>
            {managersList?.length ? (
                managersList?.map((manager) => (
                    <ul key={manager.id} className="list-group-item">
                        <li className="list-group-item mx-2 d-flex justify-content-between">
                            <div>
                                {manager.id}
                                {manager.name}
                                {manager.role ? 'user ' : 'admin; '}
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'manager-edit-page', data: { id: manager.id } })}>EDIT</button>
                                <button type="button" className="btn btn-outline-danger m-1" onClick={() => deleteManager(manager.id)}>DELETE</button>
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

export default ManagersList;