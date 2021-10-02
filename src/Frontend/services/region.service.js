import { API_URL, fetchData } from './common.service'


const getRegions = () => {
    return fetchData(`${API_URL}region`, {}, 'GET')
}


const RegionService = {
    getRegions
}

export default RegionService;