import {API_URL, fetchData} from './common.service'


const createCompany = (name, country, address) => {
  return fetchData(`${API_URL}user`, { name: name,
                                       country: country,
                                       address: address
                                      }, 'POST')
}

const updateCompany = (id,name,country, address) => {
  return fetchData(`${API_URL}user/${id}`, { name: name, country: country, address: address }, 'PUT')
}

const deleteCompany = (id) => {
  return fetchData(`${API_URL}user/${id}`,'DELETE')
}

const getCompanies = () =>{
  return fetchData(`${API_URL}user`, {},'GET')
}


const CompanyService = {
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanies
}

export default CompanyService;