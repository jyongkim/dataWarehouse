import React from 'react'
import './Users.css'
// import { Table, Form, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState, useEffect } from 'react'
//import { PencilSquare, ArrowDownUp, X, PersonPlus } from 'react-bootstrap-icons';
import { PersonPlus } from 'react-bootstrap-icons'
import IconWithTooltip from '../components/IconWithTooltip'
import ModalConfirm from '../components/ModalConfirm'
import CompanyLogic from './CompanyLogic'
import ModalCompany from '../components/company/ModalCompany'
import TableDataCompanies from '../components/company/TableDataCompanies'
import CompanyService from "../services/company.service"
import AuthService from "../services/auth.service";
import { Button } from 'react-bootstrap'



export default function Companies() {
    
    const {company,setCompany,initialStateCompany, companies, setCompanies} = CompanyLogic()    
    const [showModalCompany, setShowModalCompany] = useState(false)
    const [fetchData, setFetchData] = useState(false)
    const [idToDelete,setIdToDelete] = useState(-1)
    const [showModalConfirm,setShowModalConfirm] = useState(false)

    useEffect(() => {
        console.info('paso por aca');
        CompanyService.getCompanies().then(data =>{
            console.info('data',data)
                setCompanies(data)
                setFetchData(!setFetchData)
            }).catch((err)=>{
                console.log('error:',err);
            })
        setFetchData(true)
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
        console.log('commpany:',company)
        let data;
        if(company.Id>0){
            data = CompanyService.updateCompany(company.Id,company.Name,company.Country, company.Address)
        }else{
            data = CompanyService.createCompany(company.Name,company.Country, company.Address)
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
            <div style={{display:"flex", flexDirection:"row",margin:"2rem"}}>
            <h4 style={{flex:"10"}}>Compañías</h4>
            <Button onClick={showModal} style={{flex:"2", height:"2.25rem", with:"5rem", justifyContent:"flex-end"}}>Agregar Nuevo</Button>
            </div>
            <TableDataCompanies companies={companies} setCompanies={setCompanies} showModal={showModal} handleDelete={handleDeleteCompany}></TableDataCompanies>
            {/* <IconWithTooltip Icon={PersonPlus} text="Agregar Nuevo" action={showModal}></IconWithTooltip> */}
            <ModalCompany showModalCompany={showModalCompany} handleClose={handleClose} handleSaveChanges={handleSaveChanges.bind(this)} company={company} setCompany={setCompany} initialStateCompany={initialStateCompany} >
            </ModalCompany>
            <ModalConfirm show={showModalConfirm} handleCloseConfirm={handleCloseConfirm} title="Atención!" message="¿Desea borrar la compañía?"></ModalConfirm>
        </div>
    )
}
