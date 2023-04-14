import { useContext } from 'react';
import { Global } from './GlobalContext';

const Navbar = () => {

    const { route, setRoute, authName, logOut } = useContext(Global);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="nav-top">
                    <div className="navbar-brand">CargoInt</div>
                    <div className="">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span onClick={_ => setRoute('home')} className={
                                    'nav-link' + (route === 'home' ? ' active' : '')
                                }>Home</span>
                            </li>
                            <li className="nav-item">
                                <span onClick={_ => setRoute('cargos')} className={
                                    'nav-link' + (route === 'cargos' ? ' active' : '')
                                }>Cargos</span>
                            </li>
                            <li className="nav-item">
                                <span onClick={_ => setRoute('create-cargo')} className={
                                    'nav-link' + (route === 'create-cargo' ? ' active' : '')
                                }>Create Cargo</span>
                            </li>
                        </ul>
                    </div>
                    <>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link"><b>{authName}</b></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={logOut}>Logout</span>
                            </li>
                        </ul>
                    </>

                    <div className="nav-item cursor-pointer">
                        <span onClick={_ => setRoute('login')} className="nav-link">Login</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;