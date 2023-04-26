import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const Global = createContext();

export const GlobalProvider = ({ children }) => {

    const [messages, setMessages] = useState([]);
    const [route, setRoute] = useState('home');
    const [logged, setLogged] = useState(null);
    const [authName, setAuthName] = useState(null);
    const [authRole, setAuthRole] = useState(3);
    const [list, setList] = useState(null);
    const [listContainers, setListContainers] = useState(null);
    const [managersList, setManagersList] = useState(null);
    const [response, setResponse] = useState();
    const uuid = uuidv4();

    const after = (response) => {
        setResponse(response);
        getGoods();
        getManagers();
        setMessages(m => [...m, { ...response.data.message, id: uuid }]);
        setTimeout(() => {
            setMessages(m => m.filter(m => uuid !== m.id));
        }, 4000);
    }

    // ******************* Get, Create, Update, Delete Goods **********************
    const getGoods = () => {
        axios.get('http://localhost:3003/goods', { withCredentials: true })
            .then(res => setList(res.data));
    };

    useEffect(() => {
        getGoods();
    }, []);

    const createGood = (create) => {
        axios.post('http://localhost:3003/goods', create, { withCredentials: true })
            .then(after);
    }

    const deleteGood = (id) => {
        axios.delete('http://localhost:3003/goods/' + id, { withCredentials: true })
            .then(after);
    };

    const editGood = (good) => {
        axios.put('http://localhost:3003/goods/' + good.id, good, { withCredentials: true })
            .then(after);
    };

    // **************** Get, Create, Update, Delete CONTAINERS AND GOODS *****************

    const getContainers = () => {
        axios.get('http://localhost:3003/containers', { withCredentials: true })
            .then(res => setListContainers(res.data));
    };

    useEffect(() => {
        getContainers();
    }, []);

    const editContainer = (id) => {

    };

    const deleteContainer = (cont_id) => {
        axios.delete('http://localhost:3003/container/' + cont_id, { withCredentials: true })
            .then(after);
    };

    // ******************* Get, Create, Update, Delete MANAGERS **********************

    const getManagers = () => {
        axios.get('http://localhost:3003/managers', { withCredentials: true })
            .then(res => setManagersList(res.data));
    };

    const editManager = (manager) => {
        axios.put('http://localhost:3003/manager/' + manager.id, manager, { withCredentials: true })
            .then(after);
    };

    useEffect(() => {
        getManagers();
    }, []);

    const deleteManager = (id) => {
        axios.delete('http://localhost:3003/manager/' + id, { withCredentials: true })
            .then(after);
    };

    // ******************* Post, Get Loged User, Logout User **********************
    // getting loged user
    const getUser = () => {
        axios
            .get('http://localhost:3003/login', { withCredentials: true })
            .then((res) => {
                if (res.data.status === 'ok') {
                    setRoute('home');
                    setLogged(true);
                    setAuthName(res.data.name);
                    setAuthRole(res.data.role);
                } else {
                    setLogged(false);
                }
            });
    }

    const login = (name, psw) => {
        return axios.post('http://localhost:3003/login', { name, psw }, { withCredentials: true })
            .then((res) => {
                getUser();
                return res;
            })
    };

    const logOut = (_) => {
        axios.post('http://localhost:3003/logout', {}, { withCredentials: true })
            .then((_) => {
                setAuthName(false);
                setLogged(2);
                setRoute('home');
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Global.Provider
            value={{
                list,
                listContainers,
                editGood,
                deleteGood,
                createGood,
                managersList,
                setManagersList,
                getManagers,
                editManager,
                deleteManager,
                messages,
                response,
                route,
                setRoute,
                getUser,
                authName,
                authRole,
                setAuthName,
                logOut,
                logged,
                setLogged,
                editContainer,
                deleteContainer,
                login
            }}
        >
            {children}
        </Global.Provider>
    );
};