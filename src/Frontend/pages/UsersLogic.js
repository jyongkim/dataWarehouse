import { useState } from 'react'

const UsersLogic = () => {

    const initialStateUser = {
        user_id: -1,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        role_id: ''
    }

    const [user, setUser] = useState(initialStateUser)
    const [users, setUsers] = useState([])

    /** Modal  */
    // const [showConfirm, setShowConfirm] = useState(false)

    // const handleShowConfirm = () => setShowConfirm(true)


    // const handleCloseConfirm = () => {
    //     setIdToDelete(-1);
    //     setShowConfirm(false);
    // }
    /** End Modal  */


    return { user, setUser, initialStateUser, users, setUsers }
}

export default UsersLogic