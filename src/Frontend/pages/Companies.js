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



export default function Companies() {
    
    const {company,setCompany,initialStateCompany, companies, setCompanies} = CompanyLogic()    
    const [showModalCompany, setShowModalCompany] = useState(false)
    const [fetchData, setFetchData] = useState(false)
    const [idToDelete,setIdToDelete] = useState(-1)
    const [showModalConfirm,setShowModalConfirm] = useState(false)

    useEffect(() => {
        
        CompanyService.getCompanies().then(data =>{
                setCompanies(data)
                setFetchData(!setFetchData)
            }).catch((err)=>{
                console.log('error:',err);
            })
        
        return () => {
           
        }
    }, [fetchData])

    const showModal = (id) => {
           if(id>0){
                setCompany({...companies.find(u => u.Id == id)})
           }else{
               setCompany(initialStateCompany)
           }
           setShowModalCompany(true)
    }

    const handleDeleteCompany = (id) => {
        setIdToDelete(id)
        setShowModalConfirm(true)
    }

    const handleClose = () => setShowModalCompany(false)

    const handleSaveChanges = () =>{
        let data;
        if(user.Id>0){
            data = CompanyService.updateCompany(company.Id,company.FirstName,company.LastName,company.Username, company.Email, company.Password)
        }else{
            data = CompanyService.createCompany(company.FirstName,company.LastName,company.Username, company.Email, company.Password)
        }

        setShowModalCompany(false)
        setFetchData(true)
        return data

    }

    const handleCloseConfirm = (confirm) => {

        if(confirm){
            const data = CompanyService.deleteCompany(idToDelete)
            setFetchData(true)
        }
        setShowModalConfirm(false)
       
    }


   return (
        <div>
            <TableDataCompanies companies={companies} setCompanies={setCompanies} showModal={showModal} handleDelete={handleDeleteCompany}></TableDataCompanies>
            <IconWithTooltip Icon={PersonPlus} text="Agregar Nuevo" action={showModal}></IconWithTooltip>
            <ModalCompany showModalCompany={showModalCompany} handleClose={handleClose} handleSaveChanges={handleSaveChanges.bind(this)} company={company} setCompany={setCompany} initialStateCompany={initialStateCompany} >
            </ModalCompany>
            <ModalConfirm show={showModalConfirm} handleCloseConfirm={handleCloseConfirm} title="Atención!" message="¿Desea borrar la compañía?"></ModalConfirm>
        </div>
    )
}
