import { useContext } from 'react';
import { Global } from './GlobalContext';

const CargosList = () => {
    const { listContainers, deleteContainer, setRoute } =
        useContext(Global);

    const filteredContainers = listContainers?.data?.filter((acc) => acc.cont_title !== null);

    return (
        <div className="row justify-content-center">
            <div className="col-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                <div className="card shadow mt-5">
                    <p className="card-header text-center">Available Containers List</p>
                    {filteredContainers?.length ? (
                        filteredContainers?.map((cont) => (
                            <ul key={cont.cont_id} className="list-group-item">
                                <li className="list-group-item mx-2 d-flex border-bottom p-1">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            {cont.cont_title} {'     '}
                                            {cont.type} {'     '}
                                            {cont.cont_id}
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-outline-danger m-1" onClick={() => deleteContainer(cont.cont_id)}>DELETE</button>
                                            <button type="button" className="btn btn-outline-primary m-1" onClick={() => setRoute({ path: 'containers-edit-page', data: { id: cont.cont_id } })}>EDIT</button>
                                        </div>
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