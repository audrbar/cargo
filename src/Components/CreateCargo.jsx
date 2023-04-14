import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CreateCargo = () => {
    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState(0);
    const [flammable, setFlammable] = useState(0);
    const [perishable, setPerishable] = useState(0);
    const { setCreate } = useContext(Global);

    const create = (e) => {
        e.preventDefault();
        setCreate({
            title,
            weight: parseInt(weight),
            flammable: parseInt(flammable),
            perishable: parseInt(perishable),
        });
        setTitle('');
        setWeight(0);
        setFlammable(0);
        setPerishable(0);
    };

    return (
        <div className="card mt-4">
            <div className="card-header">Create a cargo</div>
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
                <div className="flex flex-row items-center justify-between">
                    <button
                        className="btn btn-outline-primary mt-2"
                        onClick={create}
                    >
                        CREATE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCargo;