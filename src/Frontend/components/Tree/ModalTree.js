import React, { useState, useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import FormUser from './FormUser';
import AuthService from "../../services/auth.service";


function ModalUser(props) {
    const { showModalUser, handleClose, handleSaveChanges, user, setUser, roles } = props

    // const handleRegister = () => {
    //     return AuthService.register(user.FirstName, user.LastName, user.Username, user.Email, user.Password)
    // }

    return (
        <Modal show={showModalUser} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicRegion">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese nombre" />
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

export default ModalUser