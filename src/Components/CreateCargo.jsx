import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CreateCargo = () => {
    const { createGood, contList, setRoute } = useContext(Global);
    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState(0);
    const [containerId, setContainerId] = useState(0);
    const [flammable, setFlammable] = useState(0);
    const [file, setFile] = useState();

    const create = (e) => {
        e.preventDefault();
        createGood({
            title,
            weight: parseInt(weight),
            flammable: parseInt(flammable),
            container_id: containerId,
            file
        });
        setRoute('cargos-list-page');
    };

    const fileReader = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = _ => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const readFile = e => {
        fileReader(e.target.files[0])
            .then(f => setFile(f))
            .catch(_ => {
                //error
            })
    }

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
                            <label htmlFor="formFileSm" className="form-label mt-1">Cargo image</label>
                            <input
                                className="form-control form-control-sm"
                                id="formFileSm"
                                type="file"
                                onChange={readFile}
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