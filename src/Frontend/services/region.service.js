import { API_URL, fetchData } from './common.service'


const getRegions = () => {
    return fetchData(`${API_URL}region`, {}, 'GET')
}

const getTreeRegions = () => {
    return fetchData(`${API_URL}region/tree`, {}, 'GET')
}

const createRegion = (region) => {
    return fetchData(`${API_URL}region/create`, region, 'POST')
}

const updateRegion = (region) => {
    return fetchData(`${API_URL}region/edit`, region, 'PUT')
}

const deleteRegion = (id) => {
    return fetchData(`${API_URL}region/delete/${id}`, {}, 'DELETE')
}

const RegionService = {
    getRegions,
    getTreeRegions,
    createRegion,
    updateRegion,
    deleteRegion
}

export default RegionService;