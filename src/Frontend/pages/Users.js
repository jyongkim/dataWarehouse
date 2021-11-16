import React from 'react'
import './Users.css'
// import { Table, Form, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState, useEffect } from 'react'
//import { PencilSquare, ArrowDownUp, X, PersonPlus } from 'react-bootstrap-icons';
import { PersonPlus } from 'react-bootstrap-icons'
import IconWithTooltip from '../components/IconWithTooltip'
import ModalConfirm from '../components/ModalConfirm'
import UserLogic from './UsersLogic'
import ModalUser from '../components/user/ModalUser'
import TableDataUsers from '../components/user/TableDataUsers'
import UserService from "../services/user.service"
import AuthService from "../services/auth.service";
import RoleService from "../services/role.service";



export default function Users() {

    const { user, setUser, initialStateUser, users, setUsers } = UserLogic()
    const [showModalUser, setShowModalUser] = useState(false)
    const [fetchData, setFetchData] = useState(false)
    const [idToDelete, setIdToDelete] = useState(-1)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const [roles, setRoles] = useState([])

    useEffect(() => {

        UserService.getUsers().then(data => {
            setUsers(data)
            setFetchData(!setFetchData)
        }).catch((err) => {
            console.log('error:', err);
        })

        return () => {

        }
    }, [fetchData])

    useEffect(() => {

        RoleService.getRoles().then(data => {
            console.log(data)
            setRoles(data)
        }).catch((err) => {
            console.log('error:', err);
        })

        return () => {

        }
    }, [])

    const showModal = (id) => {
        console.log('user_id:', id)
        if (id > 0) {
            const userToUpdate = {
                ...users.find(u => u.id_user === id)
            }
            setUser({ ...userToUpdate, password: '' })
        } else {
            setUser(initialStateUser)
        }
        setShowModalUser(true)
    }

    const handleDeleteUser = (id) => {
        setIdToDelete(id)
        setShowModalConfirm(true)
    }

    const handleClose = () => setShowModalUser(false)

    const handleSaveChanges = () => {
        let data;
        if (user.user_id > 0) {
            data = UserService.updateUser(user.id_user, user.first_name, user.last_name, user.username, user.email, user.role_id, user.password)
        } else {
            data = AuthService.register(user.first_name, user.last_name, user.username, user.email, user.role_id, user.password)
        }

        setShowModalUser(false)
        setFetchData(true)
        return data

    }

    const handleCloseConfirm = (confirm) => {

        if (confirm) {
            const data = UserService.deleteUser(idToDelete)
            setFetchData(true)
        }
        setShowModalConfirm(false)

    }


    return (
        <div>
            <TableDataUsers users={users} setUsers={setUsers} showModal={showModal} handleDelete={handleDeleteUser}></TableDataUsers>
            <IconWithTooltip Icon={PersonPlus} text="Agregar Nuevo" action={showModal}></IconWithTooltip>
            <ModalUser showModalUser={showModalUser} handleClose={handleClose} handleSaveChanges={handleSaveChanges.bind(this)} user={user} setUser={setUser} initialStateUser={initialStateUser} roles={roles}>
            </ModalUser>
            <ModalConfirm show={showModalConfirm} handleCloseConfirm={handleCloseConfirm} title="Atención!" message="¿Desea borrar el usuario?"></ModalConfirm>
        </div>
    )
}
