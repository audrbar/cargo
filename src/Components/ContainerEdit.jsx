import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const ContainerEdit = ({ id }) => {
    const { contList, editContainer, setRoute } = useContext(Global);
    const containerItem = contList.data.find(c => (c.cont_id) === id);
    const [type, setType] = useState(containerItem.type);
    const [selectedCategory, setSelectedCategory] = useState('');

    function handleCategoryChange(e) {
        setSelectedCategory(e.target.value);
    }

    const editCont = (e) => {
        e.preventDefault();
        editContainer({
            id: id,
            cont_id: id,
            cont_type: parseInt(selectedCategory),
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
                            <p className="form-label"><span className="text-muted">title: </span>{containerItem.cont_title}</p>
                            <p><span className="text-muted">type: </span>{containerItem.cont_type === 1 ? 'Aircraft container' : containerItem.cont_type === 2 ? 'Truck container' : 'Ship container'}</p>
                            <label htmlFor="category list" className="form-label">Choose different container type:</label>
                            <select
                                className="form-select my-1"
                                name="category list"
                                id="category list"
                                onChange={handleCategoryChange}
                            >
                                <option value="">Not selected</option>
                                <option value="1">Aircraft</option>
                                <option value="2">Truck</option>
                                <option value="3">Ship</option>
                            </select>
                            <div className="flex flex-row items-center justify-between">
                                <button
                                    className="btn btn-outline-primary mt-2"
                                    onClick={editCont}
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