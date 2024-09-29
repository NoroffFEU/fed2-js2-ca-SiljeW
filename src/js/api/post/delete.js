import { API_SOCIAL_POSTS } from "../constants.js";
import { authFetch } from "../../utilities/authFetch.js";

export async function deletePost(id) {
    if (!id) {
        throw new Error("Post ID is required");
    }

    const deletePostURL = `${API_SOCIAL_POSTS}/${id}`;

    const response = await authFetch(deletePostURL, {
        method: "DELETE",
    })

    return await response.json();
}
