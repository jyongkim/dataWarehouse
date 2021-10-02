import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormCompany from './FormCompany';
import AuthService from "../../services/auth.service";
import CompanyService from "../../services/company.service";


function ModalCompany(props) {
    const { showModalCompany, handleClose, handleSaveChanges, company, setCompany, countries, cities } = props

    // const handleRegister = () => {
    //     return CompanyService.createCompany(company.Name,company.Country,company.Address)
    // }

    return (
        <Modal show={showModalCompany} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>ABM de Compañía</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormCompany onSubmit={handleSaveChanges} company={company} setCompany={setCompany} isModal={true} countries={countries} cities={cities}></FormCompany>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCompany