import React from 'react';
import './User.css';
import {Table} from 'react-bootstrap';
import {useState,useEffect} from 'react';

export default function User() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        setUsuarios([{
            Nombre:'Juan',
            Apellido:'Perez',
            Email:'juanperez@email.com',
            Password:'xxx'
        },
        {
            Nombre:'Alan',
            Apellido:'Perez',
            Email:'juanperez@email.com',
            Password:'xxx'
        }
        ])
        
    }, [])
    const [directionName, setDirectionName] = useState(false)
    const sortByName = () => {
        setUsuarios([
        ...usuarios.sort((a,b)=>
        {
            setDirectionName(!directionName)
            if(a.Nombre<b.Nombre)
                return directionName?-1:1
            else if (a.Nombre>b.Nombre)
                return directionName?1:-1
            return 0
        })])

        
    }    
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={()=>sortByName()}>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Perfil</th>
                        <th>Contraseña</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       usuarios.map(u=> (
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
                                {u.Password}
                            </td>
                            <td>...</td>
                        </tr>   
                           ))
                   }
                </tbody>
            </Table>
        </div>
    )
}
