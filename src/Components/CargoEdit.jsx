import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CargoEdit = ({ id }) => {
    const { list, editGood, setRoute } = useContext(Global);
    const cargoItem = list.find(good => (good.id) === id);
    const [title, setTitle] = useState(cargoItem.title);
    const [weight, setWeight] = useState(cargoItem.weight);
    const [flammable, setFlammable] = useState(cargoItem.flammable);

    const edit = (e) => {
        e.preventDefault();
        editGood({
            id: id,
            title,
            weight: parseInt(weight),
            flammable: parseInt(flammable),
        });
        setTitle('');
        setWeight(0);
        setFlammable(0);
        setRoute('cargos-list-page');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-7 col-lg-6 col-xl-5 col-xxl-5">
                    <div className="card mt-4">
                        <div className="card-header text-center">Edit a cargo</div>
                        <div className="card-body">
                            <label htmlFor="title" className="form-label">Cargo title</label>
                            <input
                                id="title"
                                className="form-control"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label htmlFor="weight" className="form-label">Cargo weight</label>
                            <input
                                id="weight"
                                className="form-control"
                                type="number"
                                name="weight"
                                min="0"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                            />
                            <label htmlFor="flammable" className="form-label">Is flammable?</label>
                            <input
                                id="flammable"
                                className="form-control"
                                type="number"
                                name="flammable"
                                min="0"
                                max="1"
                                value={flammable}
                                onChange={e => setFlammable(e.target.value)}
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
                        Back to Cargos Page
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CargoEdit;