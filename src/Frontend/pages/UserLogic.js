import {useState} from 'react'

const UserLogic = () => {
    
    const initialStateUser = {
        Id:-1,
        FirstName:'',
        LastName:'',
        Email:'',
        Profile:''
    }
    const [user, setUser] = useState(initialStateUser)
    const [users, setUsers] = useState([])
    const [idToDelete,setIdToDelete] = useState(-1)
    const [fetchData, setFetchData] = useState(false)
    const [orderByName, setOrderByName] = useState(false)
    const [orderByLastName, setOrderByLastName] = useState(false)
    const [orderByEmail, setOrderByEmail] = useState(false)
    const [orderByProfile, setOrderByProfile] = useState(false)
    
    
    
    
    /** Modal  */
    const [showConfirm, setShowConfirm] = useState(false)
    
    const handleShowConfirm = () => setShowConfirm(true)

    const handleConfirm = () => {
        const deleteUser = ()=> {return fetch("http://localhost:3200/user/" + idToDelete, {method: "DELETE"}).then(
            response => response.json()
        )}
        deleteUser().then(data =>{
            setFetchData(true)
            setShowConfirm(false)
        })
       
    }
    const handleCloseConfirm = () => {
        setIdToDelete(-1);
        setShowConfirm(false);
    }
    /** End Modal  */
    
    const handleDelete = (id) => {
        setIdToDelete(id);
        setShowConfirm(true);
    }
    
    
    

    const sortByName = () => {
        setUsers([
            ...users.sort((a, b) => {
                setOrderByName(!orderByName)
                if (a.Name < b.Name)
                    return orderByName ? -1 : 1
                else if (a.Name > b.Name)
                    return orderByName ? 1 : -1
                return 0
            })])
    }
        
    const sortByLastName = () => {
        setUsers([
            ...users.sort((a, b) => {
                setOrderByLastName(!orderByLastName)
                if (a.LastName < b.LastName)
                    return orderByLastName ? -1 : 1
                else if (a.LastName > b.LastName)
                    return orderByLastName ? 1 : -1
                return 0
            })])
    }

    const sortByEmail = () => {
        setUsers([
            ...users.sort((a, b) => {
                setOrderByEmail(!orderByEmail)
                if (a.Email < b.Email)
                    return orderByEmail ? -1 : 1
                else if (a.Email > b.Email)
                    return orderByEmail ? 1 : -1
                return 0
            })])
    }

    const sortByProfile = () => {
        setUsers([
            ...users.sort((a, b) => {
                setOrderByProfile(!orderByProfile)
                if (a.Profile < b.Profile)
                    return orderByProfile ? -1 : 1
                else if (a.Profile > b.Profile)
                    return orderByProfile ? 1 : -1
                return 0
            })])
    }

    return {user, setUser, initialStateUser, users, setUsers}
} 

export default UserLogic