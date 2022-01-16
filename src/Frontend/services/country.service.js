import { API_URL, fetchData } from './common.service'


const getCountries = (idRegion) => {
  return fetchData(`${API_URL}country/${idRegion}`, {}, 'GET')
}


const updateCountry = (country) => {
  return fetchData(`${API_URL}country/edit`, country, 'PUT')
}

const deleteCountry = (id) => {
  return fetchData(`${API_URL}country/delete/${id}`, {}, 'DELETE')
}

const createCountry = (country) => {
  return fetchData(`${API_URL}country/create`, country, 'POST')
}

const CountryService = {
  getCountries,
  createCountry,
  updateCountry,
  deleteCountry
}

export default CountryService;