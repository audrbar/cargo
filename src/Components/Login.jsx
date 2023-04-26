import { useState, useContext } from 'react';
import { Global } from './GlobalContext';

function Login() {
    const [userName, setUserName] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [psw, setPsw] = useState('');

    const { login, setRoute } = useContext(Global);

    const handleLogin = (e) => {
        e.preventDefault();
        login(name, psw)
            .then((res) => {
                if (res.data.status === 'ok') {
                    setUserName(res.data.name)
                } else {
                    setError(true);
                    setUserName(null);
                }
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-7 col-lg-5 col-xl-4 col-xxl-4">
                    <div className="card mt-4">
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
                                type="password"
                                className="form-control mt-3"
                                placeholder="Your Password..."
                                value={psw}
                                onChange={(e) => setPsw(e.target.value)}
                            />
                            <button
                                className="btn btn-outline-primary mt-2"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                    <p className="nav-item text-center mt-4" role="button" onClick={_ => setRoute('home')}>
                        Back to home
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;