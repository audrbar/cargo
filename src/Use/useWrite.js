import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/goods';


export const useWrite = _ => {

    const [response, setResponse] = useState(null);
    const [create, setCreate] = useState(null);
    const [destroy, setDelete] = useState(null);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        if (null === edit) {
            return;
        }
        axios.put(URL + '/' + edit.id, { title: edit.title, weight: edit.weight, flammable: edit.flammable, perishable: edit.perishable })
            .then(res => setResponse(res.data));
    }, [edit]);

    useEffect(() => {
        if (null === create) {
            return;
        }
        axios.post(URL, create, { withCredentials: true })
            .then(res => setResponse(res.data));

    }, [create]);

    useEffect(() => {
        if (null === destroy) {
            return;
        }
        axios.delete(URL + '/' + destroy.id, { withCredentials: true })
            .then(res => setResponse(res.data));

    }, [destroy]);

    return [destroy, response, setCreate, setEdit, setDelete];
}