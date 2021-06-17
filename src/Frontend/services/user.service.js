import authHeader from "./auth.header"

const API_URL = "http://localhost:3200/"

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data) 
  })
  return response.json()
}

const createUser = (firstName,lastName,username, email, password) => {
  return postData(API_URL+'user', { first_name: firstName,
                                      last_name: lastName,
                                      username: username,
                                      email: email,
                                      password: password})
}

const getPublicContent = () => {
  return fetch(API_URL + "all")
}

const getUserBoard = () => {
  return fetch(API_URL + "user", { headers: authHeader() })
}

const getModeratorBoard = () => {
  return fetch(API_URL + "mod", { headers: authHeader() })
}

const getAdminBoard = () => {
  return fetch(API_URL + "admin", { headers: authHeader() })
}

const UserService = {
  createUser,
}

export default UserService