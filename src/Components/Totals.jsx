import { useContext } from 'react';
import { Global } from './GlobalContext';

const Totals = () => {
    const { list } = useContext(Global);

    return (
        <div className="card shadow mt-5">
            <p className="card-header">Cargos Totals:</p>
            <ul className="list-group-item">
                <li className="list-group-item m-2">
                    Cargo Items Total: {list === null ? null : list.length}
                </li>
                <li className="list-group-item m-2">
                    Weight Total:{' '}
                    {list
                        ?.map((item) => item.weight)
                        .reduce((acc, curr) => acc + curr, 0)}
                    {' kg'}
                </li>
                <p className="list-group-item m-2">
                    Weight Average:{' '}
                    {(
                        list
                            ?.map((item) => item.weight)
                            .reduce((acc, curr) => acc + curr, 0) /
                        list?.length
                    ).toFixed(2) ?? 0}
                    {' kg'}
                </p>
                <p className="list-group-item m-2">
                    Flammable Cargos:{' '}
                    {list?.filter((acc) => acc.flammable > 0).length ?? 0}
                </p>
                <p className="list-group-item m-2">
                    Perishable Cargos:{' '}
                    {list?.filter((acc) => acc.perishable > 0).length ?? 0}
                </p>
            </ul>
        </div>
    );
};

export default Totals;