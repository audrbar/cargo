import { useContext } from 'react';
import { Global } from './GlobalContext';

const Totals = () => {
    const { list, listContainers } = useContext(Global);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-md-5 col-lg-4 col-xxl-3">
                    <div className="card shadow mb-4">
                        <p className="card-header">Cargos Totals</p>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className="text-muted">Cargos Total: </span>
                                    {/* {list === null ? null : list.length} */}
                                    {listContainers === null ? null : listContainers.data.length}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Weight Total: </span>
                                    {list
                                        ?.map((item) => item.weight)
                                        .reduce((acc, curr) => acc + curr, 0)}
                                    {' kg'}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Weight Average: </span>
                                    {(
                                        listContainers?.data
                                            ?.map((item) => item.weight)
                                            .reduce((acc, curr) => acc + curr, 0) /
                                        listContainers?.data.length
                                    ).toFixed(1) ?? 0}
                                    {' kg'}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Flammable Cargos: </span>
                                    {list?.filter((acc) => acc.flammable > 0).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted"> Perishable Cargos: </span>
                                    {list?.filter((acc) => acc.perishable > 0).length ?? 0}
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
                                    {listContainers?.data?.filter((acc) => acc.type !== null).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Plain Containers: </span>
                                    {listContainers?.data?.filter((acc) => acc.type === 1).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Truck Containers: </span>
                                    {listContainers?.data?.filter((acc) => acc.type === 2).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Ship Containers: </span>
                                    {listContainers?.data?.filter((acc) => acc.type === 3).length ?? 0}
                                </li>
                                <li className="list-group-item"><span className="text-muted">Cargos per Container Average: </span>
                                    {(listContainers === null ? null : listContainers.data.length / listContainers?.data?.filter((acc) => acc.type !== null).length) ?? 0}
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