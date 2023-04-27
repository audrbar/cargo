import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CreateCargo = () => {
    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState(0);
    const [containerId, setContainerId] = useState(0);
    const [flammable, setFlammable] = useState(0);
    const { createGood, contList, setRoute } = useContext(Global);

    const create = (e) => {
        e.preventDefault();
        createGood({
            title,
            weight: parseInt(weight),
            flammable: parseInt(flammable),
            container_id: containerId,
        });
        setTitle('');
        setWeight(0);
        setFlammable(0);
        setRoute('cargos-list-page');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                    <div className="card mt-4">
                        <div className="card-header text-center">Create a cargo</div>
                        <div className="card-body">
                            <label className="form-label">Cargo title</label>
                            <input
                                className="form-control"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label className="form-label">Cargo weight</label>
                            <input
                                className="form-control"
                                type="number"
                                name="amount"
                                min="0"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                            />
                            <label className="form-label">Is flammable?</label>
                            <input
                                className="form-control"
                                type="number"
                                name="amount"
                                min="0"
                                max="1"
                                value={flammable}
                                onChange={e => setFlammable(e.target.value)}
                            />
                            <p className="form-label mt-1">Choose your container:
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
                                    onClick={create}
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

export default CreateCargo;