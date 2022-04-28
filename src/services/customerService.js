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

// export function getMovie(movieId) {
//   return http.get(movieUrl(movieId));
// }
