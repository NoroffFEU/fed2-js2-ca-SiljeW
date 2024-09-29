import { authFetch } from "../../utilities/authFetch.js"
import { API_SOCIAL_POSTS } from "../constants.js"

export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Post ID is required");
    }

    const updatePostURL = `${API_SOCIAL_POSTS}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method: "PUT",
        body: JSON.stringify(postData),
    })

    return await response.json();
    
}
