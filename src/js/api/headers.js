import { API_KEY } from "./constants";

export function headers() {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  const userJSON = localStorage.getItem('user');
  if (userJSON) {
    const user = JSON.parse(userJSON);
    if (user.accessToken) {
      headers.append("Authorization", `Bearer ${user.accessToken}`);
    } else {
      console.error("No access token found in local storage");
    }
  } else {
    console.error("User not logged in");
  }

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  return headers;
}
