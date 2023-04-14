import { useContext } from 'react';
import { Global } from './GlobalContext';

const Navbar = () => {

    const { route, setRoute, authName, logOut } = useContext(Global);

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">CargoInt</div>
                <div className="nav-top">
                    <ul className="navbar-nav">
                        <li className="nav-item cursor-pointer">
                            <span onClick={_ => setRoute('home')} className={
                                'nav-link' + (route === 'home' ? ' active' : '')
                            }>Home</span>
                        </li>
                        {
                            authName ?
                                (
                                    <li className="nav-item cursor-pointer">
                                        <span onClick={_ => setRoute('cargos-list-page')} className={
                                            'nav-link' + (route === 'cargos-list-page' ? ' active' : '')
                                        }>Cargos</span>
                                    </li>
                                ) : null
                        }
                        {
                            authName ?
                                (
                                    <li className="nav-item cursor-pointer">
                                        <span onClick={_ => setRoute('create-cargo-page')} className={
                                            'nav-link' + (route === 'create-cargo-page' ? ' active' : '')
                                        }>Create Cargo</span>
                                    </li>
                                ) : null
                        }
                    </ul>
                </div>
                <ul className="navbar-nav">
                    {
                        authName ?
                            (
                                <>
                                    <li className="nav-item cursor-pointer">
                                        <span className="nav-link"><b>{authName}</b></span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link" onClick={logOut}>Logout</span>
                                    </li>
                                </>
                            ) :
                            (
                                <li className="nav-item cursor-pointer">
                                    <span onClick={_ => setRoute('login')} className="nav-link">Login</span>
                                </li>
                            )

                    }

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;