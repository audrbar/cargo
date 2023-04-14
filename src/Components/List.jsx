import { useContext, useState } from 'react';
import { Global } from './GlobalContext';
import Footer from './Footer';

const List = () => {
    const { list, setDeleteModal, setAddModal, setRemModal, setEdit } =
        useContext(Global);

    return (
        <div className="card">
            <p className="card-header">Goods Cargo List</p>
            {list?.length ? (
                list?.map((good) => (
                    <ul key={good.id} className="list-group-item">
                        <li className="list-group-item">
                            Title:{' '}{good.title}
                            Weight:{' '}{good.weight}
                            Flammable:{' '}{good.flammable}
                            Erishable:{' '}{good.perishable}
                        </li>
                    </ul>
                ))
            ) : (
                <h2>Nothing to show!</h2>
            )}
        </div>
    );
};

export default List;