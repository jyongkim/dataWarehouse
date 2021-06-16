import React from 'react';

function ModalConfirm(props) {
    return (
        <Modal show={showConfirm} onHide={handleCloseConfirm}>
                <Modal.Header closeButton>
                <Modal.Title>Atencion!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Esta seguro que desea borrar el usuario?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseConfirm}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                    Confirmar
                </Button>
                </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirm;