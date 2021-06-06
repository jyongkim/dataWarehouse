import React from 'react';
import './User.css';
import { Table, Form, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';


import { useState, useEffect } from 'react';
import { PencilSquare, ArrowDownUp, X, PersonPlus } from 'react-bootstrap-icons';

export default function User() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        setUsuarios([{
            Id:1,
            Nombre: 'Juan',
            Apellido: 'Perez',
            Email: 'juanperez@email.com',
            Perfil: 'Administrador'
        },
        {
            id:2,
            Nombre: 'Alan',
            Apellido: 'Martinez',
            Email: 'alanmartinez@email.com',
            Perfil: 'Manager'
        }
        ])

    }, [])
    const [directionName, setDirectionName] = useState(false)
    const sortByName = () => {
        setUsuarios([
            ...usuarios.sort((a, b) => {
                setDirectionName(!directionName)
                if (a.Nombre < b.Nombre)
                    return directionName ? -1 : 1
                else if (a.Nombre > b.Nombre)
                    return directionName ? 1 : -1
                return 0
            })])
    }
    const [directionLastName, setDirectionLastName] = useState(false)
    const sortByLastName = () => {
        setUsuarios([
            ...usuarios.sort((a, b) => {
                setDirectionLastName(!directionLastName)
                if (a.Apellido < b.Apellido)
                    return directionLastName ? -1 : 1
                else if (a.Apellido > b.Apellido)
                    return directionLastName ? 1 : -1
                return 0
            })])
    }
    const [directionEmail, setDirectionEmail] = useState(false)
    const sortByEmail = () => {
        setUsuarios([
            ...usuarios.sort((a, b) => {
                setDirectionEmail(!directionEmail)
                if (a.Email < b.Email)
                    return directionEmail ? -1 : 1
                else if (a.Email > b.Email)
                    return directionEmail ? 1 : -1
                return 0
            })])
    }
    const [directionPerfil, setDirectionPerfil] = useState(false)
    const sortByPerfil = () => {
        setUsuarios([
            ...usuarios.sort((a, b) => {
                setDirectionPerfil(!directionPerfil)
                if (a.Perfil < b.Perfil)
                    return directionPerfil ? -1 : 1
                else if (a.Perfil > b.Perfil)
                    return directionPerfil ? 1 : -1
                return 0
            })])
    }
    /** Modal  */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /** End Modal  */
    /** Modal  */
    const [showConfirm, setShowConfirm] = useState(false);
    const handleCloseConfirm = () => setShowConfirm(false);
    const handleShowConfirm = () => setShowConfirm(true);
    /** End Modal  */
    const handleDelete = (id) => {
        setShowConfirm(true);
        
        //setUsuarios([...usuarios.filter(e=> e.Id != id)])
    };
    console.log(show)
;    return (
        <div>
            <Table striped bordered hover className="users">
                <thead>
                    <tr>
                        <th>Nombre <ArrowDownUp onClick={() => sortByName()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Apellido <ArrowDownUp onClick={() => sortByLastName()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Email <ArrowDownUp onClick={() => sortByEmail()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Perfil <ArrowDownUp onClick={() => sortByPerfil()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(u => (
                            <tr>
                                <td>
                                    {u.Nombre}
                                </td>
                                <td>
                                    {u.Apellido}
                                </td>
                                <td>
                                    {u.Email}
                                </td>
                                <td>
                                    {u.Perfil}
                                </td>
                                <td>
                                    <PencilSquare style={{ cursor: 'pointer' }} onClick={() =>handleShow()}></PencilSquare>
                                    <X style={{ cursor: 'pointer', fontStyle: 'bold', fontSize: '20pt' }} onClick={()=> handleDelete(u.Id)}></X>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <OverlayTrigger
            key="right"
            placement="right"
            overlay={
                <Tooltip id={`tooltip-right`}>
                    Agregar Nuevo
                </Tooltip>
            }
            >
            <PersonPlus style={{ cursor: 'pointer', marginLeft:'10px' }} onClick={() =>handleShow()}></PersonPlus>
            </OverlayTrigger>
            
             <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Alta de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                        <Form.Group controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Por favor ingrese nombre" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Por favor ingrese apellido" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Por favor ingrese correo electrónico" />
                            <Form.Text className="text-muted">
                                Por favor ingrese un correo electrónico válido (@)
                    </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseñá</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Reingrese Contraseñá</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showConfirm} onHide={handleCloseConfirm}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseConfirm}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseConfirm}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
