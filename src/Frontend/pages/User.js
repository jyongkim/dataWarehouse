import React from 'react';
import './User.css';
import { Table, Form, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { PencilSquare, ArrowDownUp, X, PersonPlus } from 'react-bootstrap-icons';

export default function User() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers([{
            Id:1,
            Name: 'Juan',
            LastName: 'Perez',
            Email: 'juanperez@email.com',
            Profile: 'Administrador'
        },
        {
            Id:2,
            Name: 'Alan',
            LastName: 'Martinez',
            Email: 'alanmartinez@email.com',
            Profile: 'Manager'
        }
        ])

    }, [])
    const [directionName, setDirectionName] = useState(false)
    const sortByName = () => {
        setUsers([
            ...users.sort((a, b) => {
                setDirectionName(!directionName)
                if (a.Name < b.Name)
                    return directionName ? -1 : 1
                else if (a.Name > b.Name)
                    return directionName ? 1 : -1
                return 0
            })])
    }
    const [directionLastName, setDirectionLastName] = useState(false)
    const sortByLastName = () => {
        setUsers([
            ...users.sort((a, b) => {
                setDirectionLastName(!directionLastName)
                if (a.LastName < b.LastName)
                    return directionLastName ? -1 : 1
                else if (a.LastName > b.LastName)
                    return directionLastName ? 1 : -1
                return 0
            })])
    }
    const [directionEmail, setDirectionEmail] = useState(false)
    const sortByEmail = () => {
        setUsers([
            ...users.sort((a, b) => {
                setDirectionEmail(!directionEmail)
                if (a.Email < b.Email)
                    return directionEmail ? -1 : 1
                else if (a.Email > b.Email)
                    return directionEmail ? 1 : -1
                return 0
            })])
    }
    const [directionProfile, setDirectionProfile] = useState(false)
    const sortByProfile = () => {
        setUsers([
            ...users.sort((a, b) => {
                setDirectionProfile(!directionProfile)
                if (a.Profile < b.Profile)
                    return directionProfile ? -1 : 1
                else if (a.Profile > b.Profile)
                    return directionProfile ? 1 : -1
                return 0
            })])
    }
    /** Modal  */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowEdit = (id) => {
        const user = users.find(u => u.id == id);
        setUser({...user});
        setShow(true);
    };
    /** End Modal  */
    /** Modal  */
    const [showConfirm, setShowConfirm] = useState(false);
    const handleShowConfirm = () => setShowConfirm(true);
    const [idToDelete,setIdToDelete] = useState(-1);
    const handleConfirm = () => {
        setUsers([...users.filter(e=> e.Id != idToDelete)]);
        setShowConfirm(false);
    };
    const handleCloseConfirm = () => {
        setIdToDelete(-1);
        setShowConfirm(false);
    };
    /** End Modal  */
    const handleDelete = (id) => {
        setIdToDelete(id);
        setShowConfirm(true);
    };
    const [user, setUser] = useState({
        Id:-1,
        Name:'',
        LastName:'',
        Email:'',
        Profile:''
    })
    const handleChangeName = (e) => setUser({
        ...user,
        Name: e.target.value
    });
    const handleChangeLastname = (e) => setUser({
        ...user,
        LastName: e.target.value
    });
    const handleChangeEmail = (e) => setUser({
        ...user,
        Email: e.target.value
    });
    const handleChangeProfile = (e) => setUser({
        ...user,
        Profile: e.target.value
    });
   return (
        <div>
            <Table striped bordered hover className="users">
                <thead>
                    <tr>
                        <th>Nombre <ArrowDownUp onClick={() => sortByName()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Apellido <ArrowDownUp onClick={() => sortByLastName()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Email <ArrowDownUp onClick={() => sortByEmail()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Perfil <ArrowDownUp onClick={() => sortByProfile()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(u => (
                            <tr>
                                <td>
                                    {u.Name}
                                </td>
                                <td>
                                    {u.LastName}
                                </td>
                                <td>
                                    {u.Email}
                                </td>
                                <td>
                                    {u.Profile}
                                </td>
                                <td>
                                    <PencilSquare style={{ cursor: 'pointer' }} onClick={() =>handleShowEdit(u.Id)}></PencilSquare>
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
                            <Form.Control value={user.Name} type="text" placeholder="Por favor ingrese nombre" />
                            <Form.Text name="name" className="text-muted" onChange={(e) => handleChangeName(e)}>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control value={user.LastName} name="lastname" type="text" onChange={(e) => handleChangeLastname(e)} placeholder="Por favor ingrese apellido" />
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
                            <Form.Label>Profile</Form.Label>
                            <Form.Control value={user.Profile} name="profile" type="text" onChange={(e) => handleChangeProfile(e)} placeholder="Por favor ingrese correo electrónico" />
                            <Form.Text className="text-muted">
                                Por favor ingrese un correo electrónico válido (@)
                    </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseñá</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicConfirmPassword">
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

        </div>
    )
}
