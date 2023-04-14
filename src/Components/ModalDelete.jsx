import { useContext } from 'react';
import { Global } from './GlobalContext';

function ModalDelete() {

    const { deleteModal, setDeleteModal, setDelete } = useContext(Global);

    const del = _ => {
        setDelete(deleteModal);
        setDeleteModal(null);
    }

    if (null === deleteModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <p>Do you really want to delete this container?</p>
                <div className="modal-content">
                    <button type="button" className="btn btn-outline-socondary" onClick={() => setDeleteModal(null)}>CANCEL</button>
                    <button type="button" className="btn btn-outline-danger" onClick={del}>DELETE</button>
                </div>
            </div>
        </div >
    );
}

export default ModalDelete;