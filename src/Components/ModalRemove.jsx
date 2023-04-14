import { useContext, useEffect, useState } from 'react';
import { Global } from './GlobalContext';

function ModalRemove() {

    const { remModal, setRemModal, setEdit } = useContext(Global);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (null === remModal) {
            return;
        }
        setAmount(0);
    }, [remModal]);

    const rem = _ => {
        setEdit({
            amount: parseInt(amount),
            id: remModal.id,
            action: 'rem'
        });
        setRemModal(null);
    }

    if (null === remModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <p className="text-xl p-1 text-gray-500">Withdraw from account?</p>
                <div className="modal-content" type="number" max={remModal.amount} name="amount" min="0" value={amount} onChange={e => setAmount(e.target.value)} />
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-socondary" onClick={() => setRemModal(null)}>Cancel</button>
                    <button type="button" className="btn btn-outline-danger" onClick={rem}>WITHDRAW</button>
                </div>
            </div>
        </div>
    );
}

export default ModalRemove;