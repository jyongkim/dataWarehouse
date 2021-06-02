import React from 'react';
import './User.css';
import { Table, Form, Button,Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { PencilSquare, ArrowDownUp, X } from 'react-bootstrap-icons';

export default function User() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        setUsuarios([{
            Nombre: 'Juan',
            Apellido: 'Perez',
            Email: 'juanperez@email.com',
            Perfil: 'Administrador'
        },
        {
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
    return (
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
                                    <PencilSquare style={{ cursor: 'pointer' }}></PencilSquare>
                                    <X style={{ cursor: 'pointer', fontStyle: 'bold', fontSize: '20pt' }}></X>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Modal.Dialog show={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form container>
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

                        <Button variant="primary" type="submit">
                            Guardar
                </Button>
                        <Button variant="secondary" type="button">
                            Cancelar
                </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    )
}
