import {API_URL, fetchData} from './common.service'

const register = (firstName,lastName,username, email, password) => {
  return fetchData(API_URL+'auth/signup', { first_name: firstName,
                                      last_name: lastName,
                                      user_name: username,
                                      email: email,
                                      password: password},'POST')
}

const login = (username, password) => {
   return fetchData(API_URL+'auth/signin', {
    username: username,
    password: password},'POST')
    
}

const logout = () => {
  localStorage.removeItem("user")
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService