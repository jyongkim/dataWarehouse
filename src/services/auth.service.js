//import { response } from "express";


const API_URL = "http://localhost:3200/auth/";

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
  });
  return response.json();
}

const register = (name,username, email, password) => {
  return postData(API_URL+'signup', { name:name,
                                      username: username,
                                      email: email,
                                      password: password});
};

const login = (username, password) => {
   return postData(API_URL+'signin', {
    username: username,
    password: password})
    .then((data) => {
      console.log('data:',data);
      if (data.accessToken) {
        localStorage.setItem("user", JSON.stringify(data));
      }

      return data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;