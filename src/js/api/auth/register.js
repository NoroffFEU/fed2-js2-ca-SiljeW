import { authFetch } from "../../utilities/authFetch";
import { API_AUTH_REGISTER } from "../constants";

/**
 * Sending a registration request to the server to register a user with the specified user data.
 */

export async function register(profile) {
  const response = await authFetch(API_AUTH_REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });

  const result = await response.json()
  alert("You have registered successfully")
  return result
}


