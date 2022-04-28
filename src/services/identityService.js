import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl.apiUrl + "identity/user/";

// Point # 3
export function getIdentityUser() {
  return http.get(apiEndpoint + "me");
}

// Point # 4
export function updateUserIdentity(data) {
  return http.put(apiEndpoint + "update", data);
}
