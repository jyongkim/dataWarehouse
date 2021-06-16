import React,{useState} from 'react';
import { Table } from 'react-bootstrap';
import { PencilSquare, ArrowDownUp, X } from 'react-bootstrap-icons';


function TableDataUsers(props) {

    const {users,setUsers} = props
    const [orderByName, setOrderByName] = useState(false)
    const [orderByLastName, setOrderByLastName] = useState(false)
    const [orderByEmail, setOrderByEmail] = useState(false)
    const [orderByProfile, setOrderByProfile] = useState(false)
    

    const sortByName = () => {
        setUsers([
            ...users.sort((a, b) => {
                setOrderByName(!orderByName)
                if (a.Name < b.Name)
                    return orderByName ? -1 : 1
                else if (a.Name > b.Name)
                    return orderByName ? 1 : -1
                return 0
            })])
    }
        
    const sortByLastName = () => {
        setUsers([
            ...users.sort((a, b) => {
                setOrderByLastName(!orderByLastName)
                if (a.LastName < b.LastName)
                    return orderByLastName ? -1 : 1
                else if (a.LastName > b.LastName)
                    return orderByLastName ? 1 : -1
                return 0
            })])
    }

    const sortByEmail = () => {
        setUsers([
            ...users.sort((a, b) => {
                setOrderByEmail(!orderByEmail)
                if (a.Email < b.Email)
                    return orderByEmail ? -1 : 1
                else if (a.Email > b.Email)
                    return orderByEmail ? 1 : -1
                return 0
            })])
    }

    const sortByProfile = () => {
        setUsers([
            ...users.sort((a, b) => {
                setOrderByProfile(!orderByProfile)
                if (a.Profile < b.Profile)
                    return orderByProfile ? -1 : 1
                else if (a.Profile > b.Profile)
                    return orderByProfile ? 1 : -1
                return 0
            })])
    }

    return (
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
                        users && users.map(u => (
                            <tr>
                                <td>
                                    {u.FirstName}
                                </td>
                                <td>
                                    {u.LastName}
                                </td>
                                <td>
                                    {u.Email}
                                </td>
                                <td>
                                    {u.Role}
                                </td>
                                <td>
                                    {/* <PencilSquare style={{ cursor: 'pointer' }} onClick={(e) =>{
                                        e.preventDefault();
                                        handleShowEdit(u.Id)
                                        }}></PencilSquare>
                                    <X style={{ cursor: 'pointer', fontStyle: 'bold', fontSize: '20pt' }} onClick={()=> handleDelete(u.Id)}></X> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
    );
}

export default TableDataUsers;