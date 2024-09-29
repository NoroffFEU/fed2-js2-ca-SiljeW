import { authFetch } from "../../utilities/authFetch.js"
import { API_SOCIAL_POSTS } from "../constants.js"


export async function createPost(postData) {
    const response = await authFetch(API_SOCIAL_POSTS, {
        method: "POST",
        body: JSON.stringify(postData),
    })

    return await response.json();

}
