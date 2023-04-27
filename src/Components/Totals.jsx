import { useContext } from 'react';
import { Global } from './GlobalContext';

const Totals = () => {
    const { list, contList } = useContext(Global);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-5 col-lg-4 col-xxl-3">
                    <div className="card shadow mb-4">
                        <p className="card-header">Cargos Totals</p>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className="text-muted">Cargos Total: </span>
                                    {list === null ? null : list.length}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Weight Total: </span>
                                    {list
                                        ?.map((item) => item.weight)
                                        .reduce((acc, curr) => acc + curr, 0)}
                                    {' kg'}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Weight Average: </span>
                                    {(
                                        list?.map((item) => item.weight)
                                            .reduce((acc, curr) => acc + curr, 0) /
                                        list?.length
                                    ).toFixed(1) ?? 0}
                                    {' kg'}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Flammable Cargos: </span>
                                    {list?.filter((acc) => acc.flammable > 0).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Not Flammable Cargos: </span>
                                    {list?.filter((acc) => acc.flammable === 0).length ?? 0}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 col-xxl-3">
                    <div className="card shadow mb-4">
                        <p className="card-header">Containers Totals</p>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className="text-muted">Containers Total: </span>
                                    {contList?.data?.filter((acc) => acc.cont_type !== null).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Aircraft Containers: </span>
                                    {contList?.data?.filter((acc) => acc.cont_type === 1).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Truck Containers: </span>
                                    {contList?.data?.filter((acc) => acc.cont_type === 2).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Ship Containers: </span>
                                    {contList?.data?.filter((acc) => acc.cont_type === 3).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Cargos per Container: </span>
                                    {(contList === null ? null : contList.data.length / contList?.data?.filter((acc) => acc.cont_type !== null).length) ?? 0}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Totals;