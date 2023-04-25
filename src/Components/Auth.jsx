import { useContext } from 'react';
import Login from "./Login";
import { Global } from './GlobalContext';
import RoleError from './RoleError';
import Loader from './Loader';

function Auth({ children, role }) {

    const { logged, authRole } = useContext(Global);

    if (null === logged) {
        return <Loader />
    }

    if (false === logged) {
        return <Login />
    }

    if (role.includes(authRole)) {
        return children
    }

    if (role !== authRole) {
        return (
            <RoleError />
        )
    }
}

export default Auth;