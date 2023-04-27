import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CreateContainer = () => {

    const { createCont, setRoute } = useContext(Global);
    const [contTitle, setContTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    function handleCategoryChange(e) {
        setSelectedCategory(e.target.value);
    }
    const createC = (e) => {
        e.preventDefault();
        createCont({
            cont_title: contTitle,
            cont_type: parseInt(selectedCategory),
        });
        setRoute('containers-list-page');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                    <div className="card mt-4">
                        <div className="card-header text-center">Create a container</div>
                        <div className="card-body">
                            <label className="form-label">Container title</label>
                            <input
                                className="form-control"
                                type="text"
                                value={contTitle}
                                onChange={(e) => setContTitle(e.target.value)}
                            />
                            <label htmlFor="category list" className="form-label">Choose container type:</label>
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
                                    onClick={createC}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateContainer;