import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CargoLoad = ({ id }) => {
    const { list, contList, loadGood, setRoute } = useContext(Global);
    const cargoItem = list.find(good => (good.id) === id);
    const [containerId, setContainerId] = useState(0);

    console.log('containerId: ', containerId);
    console.log('cargoItem.id: ', cargoItem.id);

    const load = (e) => {
        e.preventDefault();
        loadGood({
            id: cargoItem.id,
            container_id: containerId,
        });
        setRoute('cargos-list-page');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-7 col-lg-6 col-xl-5 col-xxl-5">
                    <div className="card mt-4">
                        <div className="card-header text-center">Load a cargo</div>
                        <div className="card-body">
                            <p className="form-label"><span className="text-muted">title: </span>{cargoItem.title}</p>
                            <p className="form-label"><span className="text-muted">weight: </span>{cargoItem.weight}<span className="text-muted"> kg</span></p>
                            <p className="form-label"><span className="text-muted">container: </span>{cargoItem.container_id}<span className="text-muted"></span></p>
                            <p className="form-label">Choose your container:
                                <select
                                    className="form-select my-1"
                                    aria-label="Default select example"
                                    name="category list"
                                    value={containerId}
                                    onChange={(e) => { setContainerId(e.target.value) }}
                                >
                                    {
                                        contList?.data?.length ?
                                            contList?.data?.map((cont) => (
                                                <option
                                                    key={cont.cont_id}
                                                    value={cont.cont_id}
                                                >
                                                    {cont.cont_title}
                                                </option>
                                            )
                                            ) : null

                                    }
                                </select>
                            </p>
                            <div className="flex flex-row items-center justify-between">
                                <button
                                    className="btn btn-outline-primary mt-2"
                                    onClick={load}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="nav-item text-center cursor-pointer mt-4" role="button" onClick={_ => setRoute('cargos-list-page')}>
                        Back to Cargos Page
                    </p>
                </div>
            </div >
        </div >
    );
};

export default CargoLoad;