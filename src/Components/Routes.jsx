import { useContext } from "react";
import { Global } from "./GlobalContext";
import Home from "./Home";
import Login from "./Login";
import CargosListPage from "./CargosListPage";
import CreateCargoPage from "./CreateCargoPage";

function Routes() {

    const { route } = useContext(Global);

    switch (route) {
        case 'home': return <Home />
        case 'cargos-list-page': return <CargosListPage />
        case 'create-cargo-page': return <CreateCargoPage />
        case 'login': return <Login />
        default: return null
    }
}

export default Routes;