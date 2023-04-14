import { useContext } from 'react';
import { Global } from './GlobalContext';
import Footer from './Footer';

const List = () => {
    const { list, setDeleteModal, setAddModal, setRemModal, setEdit } =
        useContext(Global);

    return (
        <div className="container mx-auto flex flex-col items-center justify-between p-4 rounded-xl shadow-md">
            <div className="flex flex-col w-full items-center justify-between md:flex-row">
                <div>
                    <p className="text-xl">Goods List</p>
                </div>
            </div>
            {list?.length ? (
                list?.map((good) => (
                    <div
                        key={good.id}
                        className="flex flex-col items-center justify-between w-full shadow-md rounded-x md:flex-row"
                    >
                        <ul className="flex flex-row items-center justify-between w-full p-1">
                            <li className="p-2">
                                <h2>
                                    <span className="text-slate-400">
                                        Title:{' '}
                                    </span>
                                    {good.title}
                                </h2>
                            </li>
                            <li className="p-2">
                                <h2>
                                    <span className="text-slate-400">
                                        Weight:{' '}
                                    </span>
                                    {good.weight}
                                </h2>
                            </li>
                            <li className="p-2">
                                <h2>
                                    <span className="text-slate-400">
                                        Flammable:{' '}
                                    </span>
                                    {good.flammable}
                                    <span className="text-slate-400"> $</span>
                                </h2>
                            </li>
                            <li className="p-2">
                                <h2>
                                    <span className="text-slate-400">
                                        Perishable:{' '}
                                    </span>
                                    {good.perishable}
                                    <span className="text-slate-400"> $</span>
                                </h2>
                            </li>
                        </ul>
                        <div className="flex flex-row justify-between p-1">

                        </div>
                    </div>
                ))
            ) : (
                <p className="pt-2 text-xl text-red-600">Nothing to show!</p>
            )}
            <Footer />
        </div>
    );
};

export default List;