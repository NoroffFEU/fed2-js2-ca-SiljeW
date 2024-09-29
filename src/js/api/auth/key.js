import { API_AUTH_KEY } from "../constants";
import { headers } from "../headers";

/**
 * Get the API key associated with this application
 * Store the API key in the database and return it in the response
 */
export async function getKey(name) {
    try {
        const response = await fetch(API_AUTH_KEY, {
            headers: headers(),
            method: "POST",
            body: JSON.stringify({ name }),
        });

        if (response.ok) {
            const key = response.json();
            localStorage.setItem("Api Key", JSON.stringify(key));
        }
    } catch (error) {
        alert("Error fetching API");
    }
}
