import React from 'react'
import Modal from '@material-ui/core/Modal';

const ErrorModal = ({ open, handleClose }) => {
    return <Modal
        open={open}
        onClose={handleClose}
    >
        <p>
            You have uploaded a wrong file type
        </p>
    </Modal>
}

export default ErrorModal
