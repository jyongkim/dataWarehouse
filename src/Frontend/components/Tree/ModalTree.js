import React, { useState, useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';



function ModalTree(props) {
    const { showModalTree, handleClose, handleSaveChanges, item, setItem } = props

    const onChangeName = (e) => {
        setItem({ ...item, name: e.target.value })
    }

    return (
        <Modal show={showModalTree} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSaveChanges}>
                    <Form.Group className="mb-3" controlId="formBasicRegion">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese nombre" onChange={onChangeName} value={item.name} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTree