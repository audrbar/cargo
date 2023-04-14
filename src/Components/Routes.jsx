import { useContext } from "react";
import { Global } from "./GlobalContext";
import Home from "./Home";
import Login from "./Login";
import Cargos from "./Cargos";

function Routes() {

    const { route } = useContext(Global);

    switch (route) {
        case 'home': return <Home />
        case 'cargos': return <Cargos />
        case 'login': return <Login />
        default: return null
    }
}

export default Routes;