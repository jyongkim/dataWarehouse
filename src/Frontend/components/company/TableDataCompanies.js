import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { PencilSquare, ArrowDownUp, X } from 'react-bootstrap-icons';


function TableDataCompanies(props) {

    const { companies, setCompanies, showModal, handleDelete } = props
    const [orderByName, setOrderByName] = useState(false)
    const [orderByCountry, setOrderByCountry] = useState(false)
    const [orderByAddress, setOrderByAddress] = useState(false)
    const [orderByPhone, setOrderByPhone] = useState(false)
    const [orderByEmail, setOrderByEmail] = useState(false)


    const sortByName = () => {
        setCompanies([
            ...companies.sort((a, b) => {
                setOrderByName(!orderByName)
                if (a.Name < b.Name)
                    return orderByName ? -1 : 1
                else if (a.Name > b.Name)
                    return orderByName ? 1 : -1
                return 0
            })])
    }

    const sortByCountry = () => {
        setCompanies([
            ...companies.sort((a, b) => {
                setOrderByCountry(!orderByCountry)
                if (a.Country < b.Country)
                    return orderByCountry ? -1 : 1
                else if (a.Country > b.Country)
                    return orderByCountry ? 1 : -1
                return 0
            })])
    }

    const sortByAddress = () => {
        setCompanies([
            ...companies.sort((a, b) => {
                setOrderByAddress(!orderByAddress)
                if (a.Address < b.Address)
                    return orderByAddress ? -1 : 1
                else if (a.Address > b.Address)
                    return orderByAddress ? 1 : -1
                return 0
            })])
    }

    const sortByPhone = () => {
        setCompanies([
            ...companies.sort((a, b) => {
                setOrderByPhone(!orderByPhone)
                if (a.Phone < b.Phone)
                    return orderByPhone ? -1 : 1
                else if (a.Phone > b.Phone)
                    return orderByPhone ? 1 : -1
                return 0
            })])
    }

    const sortByEmail = () => {
        setCompanies([
            ...companies.sort((a, b) => {
                setOrderByEmail(!orderByEmail)
                if (a.Email < b.Email)
                    return orderByEmail ? -1 : 1
                else if (a.Email > b.Email)
                    return orderByEmail ? 1 : -1
                return 0
            })])
    }
    return (
        <>
            <Table striped bordered hover className="companies">
                <thead>
                    <tr>
                        <th>Nombre <ArrowDownUp onClick={() => sortByName()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>País <ArrowDownUp onClick={() => sortByCountry()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Dirección <ArrowDownUp onClick={() => sortByAddress()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Correo electrónico <ArrowDownUp onClick={() => sortByEmail()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Teléfono <ArrowDownUp onClick={() => sortByPhone()} style={{ cursor: 'pointer' }}></ArrowDownUp></th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies && companies.map(c => (
                            <tr>
                                <td>
                                    {c.Name}
                                </td>
                                <td>
                                    {c.Country}
                                </td>
                                <td>
                                    {c.Address}
                                </td>
                                <td>
                                    {c.Email}
                                </td>
                                <td>
                                    {c.Phone}
                                </td>
                                <td>
                                    <PencilSquare style={{ cursor: 'pointer' }} onClick={(e) => {
                                        showModal(c.Id)
                                    }}></PencilSquare>
                                    <X style={{ cursor: 'pointer', fontStyle: 'bold', fontSize: '20pt' }} onClick={() => handleDelete(c.Id)}></X>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}

export default TableDataCompanies;