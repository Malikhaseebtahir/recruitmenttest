import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl.apiUrl + "customer/";

export function getCustomer() {
  return http.get(apiEndpoint + "me");
}

export function getCustomerAddresses(data) {
  return http.post(apiEndpoint + "address/search", {});
}

export function updateCustomerAddress(data) {
  return http.post(apiEndpoint + "address/add", data);
}

export function deleteCustomerAddress(data) {
  return http.post(apiEndpoint + "address/delete", data);
}
