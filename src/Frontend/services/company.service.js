import {API_URL, fetchData} from './common.service'
import AuthService from './auth.service'


const createCompany = (idUser,name, country, address) => {
  console.log('name:',name)
  return fetchData(`${API_URL}company/${idUser}`, { name: name,
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
  const user = AuthService.getCurrentUser()
  return fetchData(`${API_URL}company/${user.id}`, {},'GET')
}


const CompanyService = {
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanies
}

export default CompanyService;