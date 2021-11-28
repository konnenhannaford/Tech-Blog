const newPostForm = document.querySelector(".new-post-form");

const getUid = async () => {
  const response = await fetch("/api/user/uid");
  const uid = await response.json();
  return uid;
};

const newPostHandler = async (event) => {
  event.preventDefault();
  const user_id = await getUid();
  const title = document.querySelector("#title-input").value.trim();
  const body = document.querySelector("#body-input").value.trim();
  if (title && body && user_id) {
    const response = await fetch("/api/post/", {
      method: "POST",
      body: JSON.stringify({ title, body, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("New Post Submitted Successfully");
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post.");
    }
  }
};

newPostForm.addEventListener("submit", newPostHandler);