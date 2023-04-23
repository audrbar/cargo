import { useContext } from "react";
import { Global } from "./GlobalContext";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import CargosListPage from "../Pages/CargosListPage";
import CargoEditPage from "../Pages/CargoEditPage";
import CreateCargoPage from "../Pages/CreateCargoPage";

function Routes() {

    const { route } = useContext(Global);
    const path = typeof route === 'string' ? route : route.path;
    const data = route?.data;

    switch (path) {
        case 'home': return <Home />
        case 'cargos-list-page': return <CargosListPage />
        case 'cargo-edit-page': return <CargoEditPage id={data.id} />
        case 'create-cargo-page': return <CreateCargoPage />
        case 'login': return <Login />
        case 'register': return <Register />
        default: return null
    }
}

export default Routes;