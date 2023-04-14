import { useContext, useEffect, useState } from 'react';
import { Global } from './GlobalContext';

function ModalAdd() {

    const { addModal, setAddModal, setEdit } = useContext(Global);
    const [weight, setWeight] = useState(0);

    useEffect(() => {
        if (null === addModal) {
            return;
        }
        setWeight(0);
    }, [addModal]);

    const add = _ => {
        setEdit({
            weight: parseInt(weight),
            id: addModal.id,
            action: 'add'
        });
        setAddModal(null);
    }

    if (null === addModal) {
        return null;
    }

    return (
        <div className="modal cust-modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <p className="modal-header">Add Cargo?</p>
                    <div className="modal-title">
                        <input className="form-control" type="number" name="cargo" min="0" value={weight} onChange={e => setWeight(e.target.value)} />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" onClick={add}>EDIT</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={() => setAddModal(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAdd;