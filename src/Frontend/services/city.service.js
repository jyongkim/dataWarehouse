import {API_URL, fetchData} from './common.service'
import AuthService from './auth.service'


const getCities = () =>{
  const user = AuthService.getCurrentUser()
  return fetchData(`${API_URL}city`, {},'GET')
}


const CityService = {
  getCities
}

export default CityService;