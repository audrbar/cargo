import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CreateCargo = () => {
    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState(0);
    const [flammable, setFlammable] = useState(0);
    const [perishable, setPerishable] = useState(0);
    const { createGood, setRoute } = useContext(Global);

    const create = (e) => {
        e.preventDefault();
        createGood({
            title,
            weight: parseInt(weight),
            flammable: parseInt(flammable),
            perishable: parseInt(perishable),
        });
        setTitle('');
        setWeight(0);
        setFlammable(0);
        setPerishable(0);
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
                            <label className="form-label">Is perishable</label>
                            <input
                                className="form-control"
                                type="number"
                                name="amount"
                                min="0"
                                max="1"
                                value={perishable}
                                onChange={e => setPerishable(e.target.value)}
                            />
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={flammable}
                                    onChange={e => setPerishable(e.target.value)}
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">Is flammable</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={perishable}
                                    id="flexCheckChecked"
                                    onChange={e => setPerishable(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="flexCheckChecked">Is perishable</label>
                            </div>
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