import { useContext } from "react";
import { Global } from "./GlobalContext";
import Home from "../Pages/Home";
import Login from "./Login";
import Register from "./Register";
import Auth from "./Auth";
import CargosListPage from "../Pages/CargosListPage";
import ContainersListPage from "../Pages/ContainersListPage";
import ManagersListPage from "../Pages/ManagersListPage";
import CargoEditPage from "../Pages/CargoEditPage";
import CargoLoadPage from "../Pages/CargoLoadPage";
import ContainerEditPage from "../Pages/ContainerEditPage";
import ManagerEditPage from "../Pages/ManagerEditPage";
import CreateCargoPage from "../Pages/CreateCargoPage";
import CreateContainerPage from "../Pages/CreateContainerPage";

function Routes() {

    const { route } = useContext(Global);
    const path = typeof route === 'string' ? route : route.path;
    const data = route?.data;

    switch (path) {
        case 'home': return <Home />
        case 'cargos-list-page': return <Auth role={[0, 1]}><CargosListPage /></Auth >
        case 'containers-list-page': return <Auth role={[0, 1]}><ContainersListPage /></Auth >
        case 'managers-list-page': return <Auth role={[1]}><ManagersListPage /></Auth>
        case 'cargo-edit-page': return <CargoEditPage id={data.id} />
        case 'cargo-load-page': return <CargoLoadPage id={data.id} />
        case 'container-edit-page': return <ContainerEditPage id={data.id} />
        case 'manager-edit-page': return <ManagerEditPage id={data.id} />
        case 'create-cargo-page': return <Auth role={[0, 1]}><CreateCargoPage /></Auth >
        case 'create-container-page': return <Auth role={[0, 1]}><CreateContainerPage /></Auth >
        case 'login': return <Login />
        case 'register': return <Register />
        default: return null
    }
}

export default Routes;