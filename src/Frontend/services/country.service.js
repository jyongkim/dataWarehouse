import { API_URL, fetchData } from './common.service'


const getCountries = (idRegion) => {
  return fetchData(`${API_URL}country/${idRegion}`, {}, 'GET')
}


const CountryService = {
  getCountries
}

export default CountryService;