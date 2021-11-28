const commentForm = document.querySelector(".comment-form");

const getUid = async () => {
  const response = await fetch("/api/user/uid");
  const uid = await response.json();
  return uid;
};

const commentFormHandler = async (event) => {
  event.preventDefault();
  const user_id = await getUid();
  const comment = document.querySelector("#leave-comment").value.trim();
  const post_id = window.location.href.toString().split("/").pop();
  if (comment) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ body: comment, user_id, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to leave a comment.");
    }
  }
};

commentForm.addEventListener("submit", commentFormHandler);