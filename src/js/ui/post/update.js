import { updatePost } from "../../api/post/update.js";

export async function onUpdatePost(event) {
    const form = document.querySelector("#updateForm");

    if (form) {
        form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());

        updatePost(post);
        })
    }
}
