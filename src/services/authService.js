import jwtDecode from "jwt-decode";
import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl.apiUrl + "identity/";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(username, password) {
  const response = await http.post(apiEndpoint + "registration/signIn", {
    username,
    password,
  });
  localStorage.setItem(tokenKey, response.data.Response.AccessToken);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
