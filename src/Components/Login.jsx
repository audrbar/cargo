import { useState, useContext } from 'react';
import axios from 'axios';
import { Global } from './GlobalContext';

function Login() {
    const [userName, setUserName] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [psw, setPsw] = useState('');

    const { setLogged, setAuthName, setRoute } = useContext(Global);

    const login = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:3003/login',
                { name, psw },
                { withCredentials: true }
            )
            .then((res) => {
                if (res.data.status === 'ok') {
                    setUserName(res.data.name);
                    setName('');
                    setPsw('');
                    setError(null);
                    setRoute('cargos-list-page');
                    setLogged(true);
                    setAuthName(res.data.name);
                } else {
                    setError(true);
                    setUserName(null);
                }
            });
    };

    return (
        <div className="card mx-auto col-8 mt-4">
            <div className="card-header">
                {error ? (
                    <span style={{ color: 'crimson' }}>Login Error</span>
                ) : (
                    <span>Login</span>
                )}
            </div>
            <div className="card-body">
                <label className="form-label">
                    {userName ? (
                        <span>Hello, {userName}!</span>
                    ) : (
                        <span>Hello, quest! </span>
                    )}
                </label>
                <input
                    className="form-control mt-2"
                    type="text"
                    placeholder="Your Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="form-control mt-3"
                    placeholder="Your Password..."
                    value={psw}
                    onChange={(e) => setPsw(e.target.value)}
                />
                <button
                    className="btn btn-outline-primary mt-2"
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;