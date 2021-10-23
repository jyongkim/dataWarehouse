import { API_URL, fetchData } from './common.service'


const getRegions = () => {
    return fetchData(`${API_URL}region`, {}, 'GET')
}

const getTreeRegions = () => {
    return fetchData(`${API_URL}region/tree`, {}, 'GET')
}

const RegionService = {
    getRegions,
    getTreeRegions,
}

export default RegionService;