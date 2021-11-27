import { API_URL, fetchData } from './common.service'


const getRegions = () => {
    return fetchData(`${API_URL}region`, {}, 'GET')
}

const getTreeRegions = () => {
    return fetchData(`${API_URL}region/tree`, {}, 'GET')
}

const createRegion = () => {
    return fetchData(`${API_URL}region/create`, {}, 'POST')
}

const RegionService = {
    getRegions,
    getTreeRegions,
    createRegion
}

export default RegionService;