import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalConfirm(props) {
    const {show, handleCloseConfirm, title, message} = props
    return (
        <Modal show={show} onHide={handleCloseConfirm}>
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => handleCloseConfirm(false)}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={() => handleCloseConfirm(true)}>
                    Confirmar
                </Button>
                </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirm;