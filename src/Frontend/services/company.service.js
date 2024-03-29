import { API_URL, fetchData } from './common.service'
import AuthService from './auth.service'


const createCompany = (idUser, name, idCity, address, phone, email) => {
  const company = {
    company: name,
    id_city: idCity,
    address: address,
    phone: phone,
    email: email
  }
  let formBody = []
  console.log(company)
  console.log(idUser)

  for (var property in company) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(company[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  formBody = formBody.join("&");
  return fetch(`${API_URL}company/${idUser}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody
  })
}


const updateCompany = (id, name, idCity, address, phone, email) => {
  const company = {
    company: name,
    id_city: idCity,
    address: address,
    phone: phone,
    email: email
  }
  let formBody = []

  for (var property in company) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(company[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  formBody = formBody.join("&");
  return fetch(`${API_URL}company/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody
  })
}

const deleteCompany = (id) => {
  return fetchData(`${API_URL}company/${id}`, {}, 'DELETE')
}

const getCompanies = () => {
  const user = AuthService.getCurrentUser()
  return fetchData(`${API_URL}company/${user.id}`, {}, 'GET')
}


const CompanyService = {
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanies
}

export default CompanyService;