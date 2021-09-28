import {API_URL, fetchData} from './common.service'


const getCountries = () =>{
  return fetchData(`${API_URL}country`, {},'GET')
}


const CountryService = {
  getCountries
}

export default CountryService;