import { useContext } from "react";
import { Global } from "./GlobalContext";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import CargosListPage from "../Pages/CargosListPage";
import CreateCargoPage from "../Pages/CreateCargoPage";

function Routes() {

    const { route } = useContext(Global);

    switch (route) {
        case 'home': return <Home />
        case 'cargos-list-page': return <CargosListPage />
        case 'create-cargo-page': return <CreateCargoPage />
        case 'login': return <Login />
        case 'register': return <Register />
        default: return null
    }
}

export default Routes;