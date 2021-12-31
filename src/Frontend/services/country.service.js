import { API_URL, fetchData } from './common.service'


const getCountries = (idRegion) => {
  return fetchData(`${API_URL}country/${idRegion}`, {}, 'GET')
}


const updateCountry = (country) => {
  return fetchData(`${API_URL}country/edit`, country, 'PUT')
}

const CountryService = {
  getCountries,
  updateCountry
}

export default CountryService;