import { headers } from "../api/headers";

export async function authFetch(url, options = {}) {
    return fetch(url, {...options, headers: headers()
    });
}