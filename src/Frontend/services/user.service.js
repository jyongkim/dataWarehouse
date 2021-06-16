import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/";

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


const getPublicContent = () => {
  return fetch(API_URL + "all");
};

const getUserBoard = () => {
  return fetch(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return fetch(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return fetch(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};