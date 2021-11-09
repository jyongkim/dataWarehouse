import React from 'react'
import './Users.css'
// import { Table, Form, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react'
//import { PencilSquare, ArrowDownUp, X, PersonPlus } from 'react-bootstrap-icons';
import { PersonPlus } from 'react-bootstrap-icons'
import IconWithTooltip from '../components/IconWithTooltip'
import ModalConfirm from '../components/ModalConfirm'
import CompanyLogic from './CompanyLogic'
import ModalCompany from '../components/company/ModalCompany'
import TableDataCompanies from '../components/company/TableDataCompanies'
import CompanyService from "../services/company.service"
import CountryService from "../services/country.service"
import RegionService from "../services/region.service"
import CityService from "../services/city.service"
import AuthService from "../services/auth.service";
import { Button } from 'react-bootstrap'



export default function Companies() {

    const { company, setCompany, initialStateCompany, companies, setCompanies } = CompanyLogic()
    const [showModalCompany, setShowModalCompany] = useState(false)
    const [fetchData, setFetchData] = useState(false)
    const [idToDelete, setIdToDelete] = useState(-1)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const [regions, setRegions] = useState([])
    const [countries, setCountries] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        CompanyService.getCompanies().then(data => {
            console.log(data)
            setCompanies(data)
            setFetchData(!setFetchData)
        }).catch((err) => {
            console.log('error:', err);
        })
        return () => {

        }
    }, [fetchData])

    const getRegions = useCallback(() => {
        RegionService.getRegions().then(data => {
            setRegions(data)
        }).catch((err) => {
            console.log('error:', err);
        })

    }, [])

    const getCountries = useCallback(() => {
        CountryService.getCountries(company.IdRegion).then(data => {
            setCountries(data)
        }).catch((err) => {
            console.log('error:', err);
        })

    }, [company.IdRegion])

    const getCities = useCallback(() => {
        CityService.getCities(company.IdCountry).then(data => {
            setCities(data)
        }).catch((err) => {
            console.log('error:', err);
        })

    }, [company.IdCountry])

    useEffect(() => {
        getRegions()
    }, [getRegions])

    useEffect(() => {
        getCountries()
    }, [getCountries])

    useEffect(() => {
        getCities()
    }, [getCities])




    const showModal = (id) => {
        console.log(id)
        if (id > 0) {
            let companyToUpdate = companies.find(c => c.id_company === id)
            setCompany({
                ID: companyToUpdate.id_company,
                Name: companyToUpdate.company,
                IdCity: companyToUpdate.id_city,
                Address: companyToUpdate.address,
                IdCountry: companyToUpdate.city.id_country,
                IdRegion: companyToUpdate.city.country.id_region,
                Phone: companyToUpdate.phone,
                Email: companyToUpdate.email,
            })

        } else {
            setCompany(initialStateCompany)
        }
        setShowModalCompany(true)
    }

    const handleDeleteCompany = (id) => {
        setIdToDelete(id)
        setShowModalConfirm(true)
    }

    const handleClose = () => setShowModalCompany(false)

    const handleSaveChanges = () => {
        let user = AuthService.getCurrentUser()
        let data;
        if (company.ID > 0) {
            data = CompanyService.updateCompany(company.ID, company.Name, company.IdCity, company.Address, company.Phone, company.Email)
        } else {
            data = CompanyService.createCompany(user.id, company.Name, company.IdCity, company.Address, company.Phone, company.Email)
        }

        setShowModalCompany(false)
        setFetchData(true)
        return data

    }

    const handleCloseConfirm = (confirm) => {

        if (confirm) {
            const data = CompanyService.deleteCompany(idToDelete)
            setFetchData(true)
        }
        setShowModalConfirm(false)
    }


    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", margin: "2rem" }}>
                <h4 style={{ flex: "10" }}>Compañías</h4>
                <Button onClick={showModal} style={{ flex: "2", height: "2.25rem", with: "5rem", justifyContent: "flex-end" }}>Agregar Nuevo</Button>
            </div>
            <TableDataCompanies companies={companies} setCompanies={setCompanies} showModal={showModal} handleDelete={handleDeleteCompany}></TableDataCompanies>
            {/* <IconWithTooltip Icon={PersonPlus} text="Agregar Nuevo" action={showModal}></IconWithTooltip> */}
            <ModalCompany showModalCompany={showModalCompany} handleClose={handleClose} handleSaveChanges={handleSaveChanges.bind(this)} company={company} setCompany={setCompany} initialStateCompany={initialStateCompany} regions={regions} countries={countries} cities={cities}>
            </ModalCompany>
            <ModalConfirm show={showModalConfirm} handleCloseConfirm={handleCloseConfirm} title="Atención!" message="¿Desea borrar la compañía?"></ModalConfirm>
        </div>
    )
}
