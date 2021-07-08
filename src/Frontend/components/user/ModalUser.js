import React, {useState,useRef} from 'react';
import { Button, Modal} from 'react-bootstrap';
import FormUser from './FormUser';
import AuthService from "../../services/auth.service";


function ModalUser(props) {
    const {showModalUser, handleClose,handleSaveChanges,user, setUser} = props
    
    const handleRegister = () => {
        return AuthService.register(user.FirstName,user.LastName,user.Username, user.Email, user.Password)
    }

    return (
        <Modal show={showModalUser} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>ABM de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUser onSubmit={handleSaveChanges} user={user} setUser={setUser} isModal={true}></FormUser>
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