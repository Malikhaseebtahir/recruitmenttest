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
  return http.put(apiEndpoint + "update", data);
}
