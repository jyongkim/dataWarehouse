import {API_URL, fetchData} from './common.service'
import AuthService from './auth.service'


const getCities = (idCountry) =>{
  console.info(idCountry)
  return fetchData(`${API_URL}city/${idCountry}`, {},'GET')
}


const CityService = {
  getCities
}

export default CityService;