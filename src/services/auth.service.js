//import { response } from "express";


const API_URL = "http://localhost:3200/auth/";

const register = (username, email, password) => {
  return fetch(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return fetch(API_URL + "signin", {
      method:"POST",
      mode: 'cors',
      credentials: 'same-origin', 
      body:{
        username,
        password,
      }
    })
    .then(response=>response.json()
    )
    .then((data) => {
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