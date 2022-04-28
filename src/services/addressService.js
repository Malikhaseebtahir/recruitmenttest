import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl.apiUrl + "address/";

export function getAddress(id) {
  return http.get(`${apiEndpoint} Get?id=${id}`);
}

export function addAddress(data) {
  return http.post(apiEndpoint + "add", data);
}

export function getCustomerAddress(addressId) {
  return http.get(`${apiEndpoint}get?id=${addressId}`);
}

export function updateAddress(data) {
  return http.post(apiEndpoint + "update", data);
}

export function getCountries() {
  return http.post(apiEndpoint + "Country/Search", {});
}

export function getProvinces() {
  return http.post(apiEndpoint + "Province/Search", {});
}

export function getCities() {
  return http.post(apiEndpoint + "City/Search", {});
}
