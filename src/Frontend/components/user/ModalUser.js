import React, {useState} from 'react';
import {  Form, Button, Modal, OverlayTr } from 'react-bootstrap';
const { forwardRef, useImperativeHandle } = React;

function ModalUser(props) {
    const {showModalUser, handleClose,handleSaveChanges,user, setUser} = props
    //const [mode, setMode] = useState("")
    

    const handleShowEdit = (id) => {
        //setMode("Edición ")
        //setUser({...users.find(u => u.Id == id)})
        //setShowModalUser(true)
        return false
    }

    const handleChangeFirstName = (e) => setUser({
        ...user,
        FirstName: e.target.value
    })

    const handleChangeLastname = (e) => setUser({
        ...user,
        LastName: e.target.value
    })

    const handleChangeUsername = (e) => setUser({
        ...user,
        Username: e.target.value
    })

    const handleChangeEmail = (e) => setUser({
        ...user,
        Email: e.target.value
    })

    const handleChangeProfile = (e) => setUser({
        ...user,
        Profile: e.target.value
    })

    const handleChangePassword = (e) => setUser({
        ...user,
        Password: e.target.value
    })
    

    return (
        <Modal show={showModalUser} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>ABM de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                        <Form.Group controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control value={user.FirstName} type="text" name="name" placeholder="Por favor ingrese nombre"  onChange={(e) => handleChangeFirstName(e)} />
                            <Form.Text  className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control value={user.LastName} name="lastname" type="text" onChange={(e) => handleChangeLastname(e)} placeholder="Por favor ingrese apellido" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Control value={user.Username} name="username" type="text" onChange={(e) => handleChangeUsername(e)} placeholder="Por favor ingrese nombre de usuario" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control value={user.Email} name="email" type="email" onChange={(e) => handleChangeEmail(e)} placeholder="Por favor ingrese correo electrónico" />
                            <Form.Text className="text-muted">
                                Por favor ingrese un correo electrónico válido (@)
                    </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicProfile">
                            <Form.Label>Perfil</Form.Label>
                            <Form.Control value={user.Profile} name="profile" type="text" onChange={(e) => handleChangeProfile(e)} placeholder="Por favor ingrese correo electrónico" />
                            <Form.Text className="text-muted">
                                Por favor ingrese un correo electrónico válido (@)
                    </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="password" value={user.Password} type="password" onChange={(e) => handleChangePassword(e)}  placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Reingrese Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button type="button" variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
    )
}

export default ModalUser