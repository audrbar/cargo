import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CargoEdit = ({ id }) => {
    const { list, editGood, setRoute } = useContext(Global);
    const cargoItem = list.find(good => (good.id) === id);
    const [title, setTitle] = useState(cargoItem.title);
    const [weight, setWeight] = useState(cargoItem.weight);
    const [flammable, setFlammable] = useState(cargoItem.flammable);
    const [perishable, setPerishable] = useState(cargoItem.perishable);

    const edit = (e) => {
        e.preventDefault();
        editGood({
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
        <div className="card mx-auto col-8 mt-4">
            <div className="card-header text-center">Edit a cargo</div>
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
                    name="flammable"
                    min="0"
                    max="1"
                    value={flammable}
                    onChange={e => setFlammable(e.target.value)}
                />
                <label className="form-label">Is perishable</label>
                <input
                    className="form-control"
                    type="number"
                    name="perishable"
                    min="0"
                    max="1"
                    value={perishable}
                    onChange={e => setPerishable(e.target.value)}
                />
                <div className="flex flex-row items-center justify-between">
                    <button
                        className="btn btn-outline-primary mt-2"
                        onClick={edit}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CargoEdit;