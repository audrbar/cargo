import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const ContainerEdit = ({ id }) => {
    const { listContainers, editContainer, setRoute } = useContext(Global);
    console.log(listContainers);
    const filteredContainersList = listContainers.data.filter((acc) => acc.type !== null);
    const containerItem = filteredContainersList.find(c => (c.cont_id) === id);
    const [type, setType] = useState(containerItem.type);

    console.log(filteredContainersList);



    const edit = (e) => {
        e.preventDefault();
        editContainer({
            cont_id: id,
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
                        {containerItem.cont_title}
                        {containerItem.type}
                        <div className="card-body">
                            <label htmlFor="type" className="form-label">Container type</label>
                            <input
                                id="type"
                                className="form-control"
                                name="type"
                                type="number"
                                min="0"
                                max="3"
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
                    <p className="nav-item text-center cursor-pointer mt-4" role="button" onClick={_ => setRoute('containers-list-page')}>
                        Back to Containers Page
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContainerEdit;