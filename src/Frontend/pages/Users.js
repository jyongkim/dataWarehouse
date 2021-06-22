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



export default function Users() {
    
    const {user,setUser,initialStateUser, users, setUsers} = UserLogic()    
    const [showModalUser, setShowModalUser] = useState(false)
    const [fetchData, setFetchData] = useState(false)
    const [idToDelete,setIdToDelete] = useState(-1)
    const [showModalConfirm,setShowModalConfirm] = useState(false)

    useEffect(() => {
        
        UserService.getUsers().then(data =>{
                setUsers(data)
                setFetchData(!setFetchData)
            }).catch((err)=>{
                console.log('error:',err);
            })
        
        return () => {
           
        }
    }, [fetchData])

    const showModal = (id) => {
           if(id>0){
                setUser({...users.find(u => u.Id == id)})
           }else{
               setUser(initialStateUser)
           }
           setShowModalUser(true)
    }

    const handleDeleteUser = (id) => {
        setIdToDelete(id)
        setShowModalConfirm(true)
    }

    const handleClose = () => setShowModalUser(false)

    const handleSaveChanges = () =>{
        
        if(user.Id>0){
            const userToUpdate = users.find(u=> u.Id == user.Id)
            const data = UserService.updateUser(user.Id,user.FirstName,user.LastName,user.Username, user.Email, user.Password)
        }else{
            const data = AuthService.register(user.FirstName,user.LastName,user.Username, user.Email, user.Password)
        }

        setShowModalUser(false)
        setFetchData(true)

    }

    const handleConfirm = () => {
        
        const data = UserService.deleteUser(idToDelete)
        setFetchData(true)
        setShowModalConfirm(false)
       
    }

   return (
        <div>
            <TableDataUsers users={users} setUsers={setUsers} showModal={showModal} handleDelete={handleDeleteUser}></TableDataUsers>
            <IconWithTooltip Icon={PersonPlus} text="Agregar Nuevo" action={showModal}></IconWithTooltip>
            <ModalUser showModalUser={showModalUser} handleClose={handleClose} handleSaveChanges={handleSaveChanges} user={user} setUser={setUser} initialStateUser={initialStateUser} >
            </ModalUser>
            <ModalConfirm show={showModalConfirm} handleCloseConfirm={handleConfirm} title="Atención!" message="¿Desea borrar el usuario?"></ModalConfirm>
        </div>
    )
}
