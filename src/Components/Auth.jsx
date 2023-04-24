import { useContext } from 'react';
import Login from "./Login";
import { Global } from './GlobalContext';
import RoleError from './RoleError';

function Auth({ children, role }) {

    const { authRole } = useContext(Global);

    if (null === authRole) {
        return <Login />
    }

    if (role === authRole) {
        return (
            <>
                {children}
            </>
        )
    }
    if (role === authRole) {
        return (
            <RoleError />
        )
    }
}

export default Auth;