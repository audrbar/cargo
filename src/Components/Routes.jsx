import { useContext } from "react";
import { Global } from "./GlobalContext";
import Home from "../Pages/Home";
import Login from "./Login";
import Register from "./Register";
import CargosListPage from "../Pages/CargosListPage";
import ManagersListPage from "../Pages/ManagersListPage";
import CargoEditPage from "../Pages/CargoEditPage";
import ManagerEditPage from "../Pages/ManagerEditPage";
import CreateCargoPage from "../Pages/CreateCargoPage";

function Routes() {

    const { route } = useContext(Global);
    const path = typeof route === 'string' ? route : route.path;
    const data = route?.data;

    switch (path) {
        case 'home': return <Home />
        case 'cargos-list-page': return <CargosListPage />
        case 'managers-list-page': return <ManagersListPage />
        case 'cargo-edit-page': return <CargoEditPage id={data.id} />
        case 'manager-edit-page': return <ManagerEditPage id={data.id} />
        case 'create-cargo-page': return <CreateCargoPage />
        case 'login': return <Login />
        case 'register': return <Register />
        default: return null
    }
}

export default Routes;