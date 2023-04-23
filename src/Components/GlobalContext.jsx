import { createContext, useEffect, useState } from 'react';
import { useMessages } from '../Use/useMessages';
import { useModal } from '../Use/useModal';
import axios from 'axios';

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
    const [
        deleteModal,
        setDeleteModal,
        addModal,
        setAddModal,
        remModal,
        setRemModal,
    ] = useModal();
    const [messages, setMessage] = useMessages([]);
    const [route, setRoute] = useState('home');
    const [logged, setLogged] = useState(null);
    const [authName, setAuthName] = useState(null);
    const [list, setList] = useState(null);
    const [response, setResponse] = useState();

    // useEffect(() => {
    //     if (null !== response) {
    //         setMessage({
    //             text: response.message.text,
    //             type: response.message.type,
    //         });
    //     }
    // }, [response, setMessage]);

    const after = (response) => {
        setResponse(response);
        getGoods();
    }

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

    const logOut = (_) => {
        axios.post('http://localhost:3003/logout', {}, { withCredentials: true })
            .then((_) => {
                setAuthName(false);
                setLogged(2);
                setRoute('home');
            });
    };

    useEffect(() => {
        axios
            .get('http://localhost:3003/login', { withCredentials: true })
            .then((res) => {
                if (res.data.status === 'ok') {
                    setRoute('cargos-list-page');
                    setLogged(true);
                    setAuthName(res.data.name);
                }
            });
    }, []);

    useEffect(() => {
        setLogged(null);
    }, [route]);

    return (
        <Global.Provider
            value={{
                list,
                editGood,
                deleteGood,
                createGood,
                deleteModal,
                setDeleteModal,
                addModal,
                setAddModal,
                remModal,
                setRemModal,
                messages,
                route,
                setRoute,
                authName,
                setAuthName,
                logOut,
                logged,
                setLogged
            }}
        >
            {children}
        </Global.Provider>
    );
};