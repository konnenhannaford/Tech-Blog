const editForm = document.querySelector(".edit-post-form");
const deleteBtn = document.querySelector(".deleteBtn");

const getUid = async () => {
  const response = await fetch("/api/user/uid");
  const uid = await response.json();
  return uid;
};

const editPostHandler = async (event) => {
  event.preventDefault();
  const user_id = await getUid();
  const title = document.querySelector("#title-input").value.trim();
  const body = document.querySelector("#body-input").value.trim();
  const post_id = window.location.href.toString().split("/").pop();
  if ((title || body) && user_id) {
    const response = await fetch(`/api/post/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Post Edited Successfully");
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post.");
    }
  }
};

const deletePostHandler = async () => {
  const post_id = window.location.href.toString().split("/").pop();
  const response = await fetch(`/api/post/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    alert("Post has been deleted!");
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update post.");
  }
};

deleteBtn.addEventListener("click", deletePostHandler);
editForm.addEventListener("submit", editPostHandler);