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
        <div className="container mx-auto flex flex-col items-center justify-between p-4 rounded-xl shadow-md mb-2 md:flex-row">
            <p className="text-xl mb-3 md:mb-0">Create an account</p>
            <form className="flex flex-col items-center justify-between gap-y-2 md:flex-row md:gap-x-4">
                <label className="relative block">
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Your Name..."
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <input
                    className="bg-white border border-slate-300 rounded-md p-2 shadow-sm text-center focus:outline-none w-full focus:border-sky-500 focus:ring-sky-500"
                    type="number"
                    name="amount"
                    min="0"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />
                <input
                    className="bg-white border border-slate-300 rounded-md p-2 shadow-sm text-center focus:outline-none w-full focus:border-sky-500 focus:ring-sky-500"
                    type="number"
                    name="amount"
                    min="0"
                    max="1"
                    value={flammable}
                    onChange={e => setFlammable(e.target.value)}
                />
                <input
                    className="bg-white border border-slate-300 rounded-md p-2 shadow-sm text-center focus:outline-none w-full focus:border-sky-500 focus:ring-sky-500"
                    type="number"
                    name="amount"
                    min="0"
                    max="1"
                    value={perishable}
                    onChange={e => setPerishable(e.target.value)}
                />
                <div className="flex flex-row items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                        onClick={create}
                    >
                        CREATE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateCargo;