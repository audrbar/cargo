import { useContext, useState } from "react";
import { Global } from "./GlobalContext";

const ManagerEdit = ({ id }) => {

    const { managersList, editManager, setRoute } = useContext(Global);
    const managerData = managersList.find(manager => (manager.id) === id);
    const [error, setError] = useState(null);
    const [name, setName] = useState(managerData.name);
    const [role, setRole] = useState(managerData.role);

    const edit = (e) => {
        e.preventDefault();
        editManager({
            id: id,
            name,
            role: parseInt(role)
        });
        setName('');
        setRole(0);
        setError(null);
        setRoute('managers-list-page');
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-7 col-lg-6 col-xl-5 col-xxl-5">
                    <div className="card mt-4">
                        <p className="card-header text-center">Edit Manager's Data</p>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    value={name} onChange={e => setName(e.target.value)}
                                />
                                <label htmlFor="role" className="form-label">Role</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="role"
                                    name="role"
                                    min="0"
                                    max="1"
                                    value={role}
                                    onChange={e => setRole(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-outline-primary m-1" onClick={edit}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
                <p className="nav-item text-center cursor-pointer mt-4" role="button" onClick={_ => setRoute('managers-list-page')}>
                    Back to Managers Page
                </p>
            </div>
        </div>
    )
}

export default ManagerEdit;