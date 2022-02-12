import React from 'react'
import './Contact.css'
import { Search } from 'react-bootstrap-icons';

const Contact = () => {
    return (
        <>
            <h3>Contactos</h3>
            <div className="searchForm">
                <div className="form-group d-flex flex-nowrap">
                    <select className="form-control" name="search" >
                        <option> </option>
                    </select>
                    <Search style={{ cursor: 'pointer', fontStyle: 'bold', fontSize: '20pt', margin: '20px' }}></Search>
                </div>
            </div>

            <div className="filterForm">
                <div className="form-group d-flex flex-nowrap">
                    <label className="fs-6">Nombre del contacto:</label>
                    <input type="text" className="form-control" placeholder="Introduce el Nombre del contacto"></input>
                </div>
                <div className="form-group d-flex flex-nowrap">
                    <label className="fs-6">Cargo:</label>
                    <input type="text" className="form-control" placeholder="Introduce el Cargo del contacto"></input>
                </div>
                <div className="form-group d-flex flex-nowrap">
                    <label className="fs-6">Pais/Región:</label>
                    <input type="text" className="form-control" placeholder="Introduce el Cargo del contacto"></input>
                </div>
                <div className="form-group d-flex flex-nowrap">
                    <label className="fs-6">Compañía:</label>
                    <input type="text" className="form-control" placeholder="Introduce el Cargo del contacto"></input>
                </div>
                <div className="form-group d-flex flex-nowrap">
                    <label className="fs-6">Canal Favorito:</label>
                    <input type="text" className="form-control" placeholder="Introduce el Cargo del contacto"></input>
                </div>
                <div className="form-group d-flex flex-nowrap">
                    <label className="fs-6">Interés:</label>
                    <input type="text" className="form-control" placeholder="Introduce el Cargo del contacto"></input>
                </div>
            </div>
        </>
    )

}

export default Contact