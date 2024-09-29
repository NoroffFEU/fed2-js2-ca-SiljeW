import { authFetch } from "../../utilities/authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function readPost(id) {
    if (!id) {
        throw new Error("Post ID is required");
    }
    
    const updatePostURL = `${API_SOCIAL_POSTS}/${postData.id}`;

    const response = await authFetch(updatePostURL)

    return await response.json();
}

export async function readPosts(limit = 12, page = 1, tag) {
    const response = await authFetch(API_SOCIAL_POSTS)

    return await response.json();
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
