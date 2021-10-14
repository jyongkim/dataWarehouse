import { useState } from 'react'

const CompanyLogic = () => {

    const initialStateCompany = {
        Id: -1,
        Company: '',
        IdCity: 0,
        Address: '',
        IdCountry: 0,
        IdRegion: 0,
        Phone: '',
        Email: '',

    }

    const [company, setCompany] = useState(initialStateCompany)
    const [companies, setCompanies] = useState([])

    /** Modal  */
    // const [showConfirm, setShowConfirm] = useState(false)

    // const handleShowConfirm = () => setShowConfirm(true)


    // const handleCloseConfirm = () => {
    //     setIdToDelete(-1);
    //     setShowConfirm(false);
    // }
    /** End Modal  */


    return { company, setCompany, initialStateCompany, companies, setCompanies }
}

export default CompanyLogic