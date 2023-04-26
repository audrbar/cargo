import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CargoEdit = ({ id }) => {
    const { listContainers, editContainer, setRoute } = useContext(Global);
    const cargoItem = listContainers.find(good => (good.id) === id);
    const [type, setType] = useState(cargoItem.type);

    const edit = (e) => {
        e.preventDefault();
        editContainer({
            id: id,
            type: parseInt(type),
        });
        setType('');
        setRoute('containers-list-page');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-7 col-lg-6 col-xl-5 col-xxl-5">
                    <div className="card mt-4">
                        <div className="card-header text-center">Edit a container</div>
                        <div className="card-body">
                            <label htmlFor="title" className="form-label">Containers title</label>
                            <input
                                id="title"
                                className="form-control"
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <div className="flex flex-row items-center justify-between">
                                <button
                                    className="btn btn-outline-primary mt-2"
                                    onClick={edit}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="nav-item text-center cursor-pointer mt-4" role="button" onClick={_ => setRoute('cargos-list-page')}>
                        Back to Containers Page
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CargoEdit;