import {useState} from 'react'

const CompanyLogic = () => {
    
    const initialStateCompany = {
        Id:-1,
        Name:'',
        Country:'',
        Address: ''
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
    

    return {company, setCompany, initialStateCompany, companies, setCompanies}
} 

export default CompanyLogic