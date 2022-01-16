import { API_URL, fetchData } from './common.service'
import AuthService from './auth.service'


const getCities = (idCountry) => {
  console.info(idCountry)
  return fetchData(`${API_URL}city/${idCountry}`, {}, 'GET')
}

const updateCity = (city) => {
  return fetchData(`${API_URL}city/edit`, city, 'PUT')
}

const createCity = (city) => {
  return fetchData(`${API_URL}city/create`, city, 'POST')
}

const deleteCity = (id) => {
  return fetchData(`${API_URL}city/delete/${id}`, {}, 'DELETE')
}

const CityService = {
  getCities,
  createCity,
  updateCity,
  deleteCity
}

export default CityService;