import { createPost } from "../../api/post/create.js";

export async function onCreatePost(event) {
    const form = document.querySelector("#createForm");

    if (form) {
        form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());

        createPost(post);
        })
    }
    
}
