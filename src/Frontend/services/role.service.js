import { API_URL, fetchData } from './common.service'



const getRoles = () => {
    return fetchData(`${API_URL}role`, {}, 'GET')
}


const RoleService = {
    getRoles
}

export default RoleService;