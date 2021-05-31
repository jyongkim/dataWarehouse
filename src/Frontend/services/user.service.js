import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/";

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