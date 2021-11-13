import { API_URL, fetchData } from './common.service'


const createUser = (firstName, lastName, username, email, role_id, password) => {
  return fetchData(`${API_URL}user`, {
    first_name: firstName,
    last_name: lastName,
    username: username,
    email: email,
    role_id: role_id,
    password: password
  }, 'POST')
}

const updateUser = (id, firstName, lastName, username, email, role_id, password) => {
  return fetchData(`${API_URL}user/${id}`, {
    first_name: firstName,
    last_name: lastName,
    username: username,
    email: email,
    role_id: role_id,
    password: password
  }, 'PUT')
}

const deleteUser = (id, firstName, lastName, username, email, role_id, password) => {
  return fetchData(`${API_URL}user/${id}`, {
    first_name: firstName,
    last_name: lastName,
    username: username,
    email: email,
    role_id: role_id,
    password: password
  }, 'DELETE')
}

const getUsers = () => {
  return fetchData(`${API_URL}user`, {}, 'GET')
}


const UserService = {
  createUser,
  updateUser,
  deleteUser,
  getUsers
}

export default UserService