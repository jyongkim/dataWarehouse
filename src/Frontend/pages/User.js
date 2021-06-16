import React from 'react'
import './User.css'
// import { Table, Form, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState, useEffect } from 'react'
//import { PencilSquare, ArrowDownUp, X, PersonPlus } from 'react-bootstrap-icons';
import { PersonPlus } from 'react-bootstrap-icons'
import IconWithTooltip from '../components/IconWithTooltip'
import UserLogic from './UserLogic'
import ModalUser from '../components/user/ModalUser'
import TableDataUsers from '../components/user/TableDataUsers'

export default function User() {
    
    const {user,setUser,initialStateUser, users, setUsers} = UserLogic()    
    const [showModalUser, setShowModalUser] = useState(false)
    const [fetchData, setFetchData] = useState(false)

    useEffect(() => {
        
        fetch("http://localhost:3200/user").then(
            (response) => response.json()
            ).then(data =>{
                setUsers(data)
                setFetchData(!setFetchData)
            }).catch((err)=>{
                console.log('error:',err);
            })
        
        return () => {
           
        }
    }, [fetchData])

    const showModal = () => {
            setShowModalUser(true)
            setUser(initialStateUser)
    }

    const handleClose = () => setShowModalUser(false)

    const handleSaveChanges = () =>{
        if(user.Id>0){
            const userToUpdate = users.find(u=> u.Id == user.Id)
        }else{
            console.log(user);
            const addUser = ()=> {return fetch("http://localhost:3200/user/", {method: "POST"},user).then(
            response => response.json()
        )}
        addUser().then(data =>{
            setShowModalUser(false)
        })
        }
    }

   return (
        <div>
            <TableDataUsers users={users} setUsers={setUsers}></TableDataUsers>
            <IconWithTooltip Icon={PersonPlus} text="Agregar Nuevo" action={showModal}></IconWithTooltip>
            <ModalUser showModalUser={showModalUser} handleClose={handleClose} handleSaveChanges={handleSaveChanges} user={user} setUser={setUser} initialStateUser={initialStateUser}>
            </ModalUser>
        </div>
    )
}
