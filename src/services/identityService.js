import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl.apiUrl + "identity/user/";

export function getIdentityUser() {
  return http.get(apiEndpoint + "me");
}

export function updateUserIdentity(data) {
  return http.put(apiEndpoint + "update", data);
}
