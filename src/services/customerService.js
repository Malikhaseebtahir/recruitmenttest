import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl.apiUrl + "customer/";

// function movieUrl(id) {
//   return `${apiEndpoint}/${id}`;
// }

// Point # 2
export function getCustomer() {
  return http.get(apiEndpoint + "me");
}

// Point # 5
export function getCustomerAddresses(data) {
  return http.post(apiEndpoint + "address/search", {});
}

export function updateCustomerAddress(data) {
  return http.post(apiEndpoint + "address/add", data);
}

export function deleteCustomerAddress(data) {
  return http.post(apiEndpoint + "address/delete", data);
}

// export function getMovie(movieId) {
//   return http.get(movieUrl(movieId));
// }
