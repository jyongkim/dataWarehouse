import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormCompany from './FormCompany';
import AuthService from "../../services/auth.service";
import CompanyService from "../../services/company.service";


function ModalCompany({ showModalCompany, handleClose, handleSaveChanges, company, setCompany, regions, countries, cities }) {

    return (
        <Modal show={showModalCompany} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>ABM de Compañía</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormCompany onSubmit={handleSaveChanges} company={company} setCompany={setCompany} isModal={true} regions={regions} countries={countries} cities={cities}></FormCompany>
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