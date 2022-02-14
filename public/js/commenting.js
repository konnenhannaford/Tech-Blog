
const newCommentHandler = async (event) => {
    event.preventDefault();
    // console.log(newCommentHandler);
    const newComment = document.querySelector("#comment").value.trim();
    const postId = document.querySelector("#postId").value;
  
    if (newComment) {
      const response = await fetch("/api/commentingRoutes", {
        method: "POST",
        body: JSON.stringify({ newComment, postId }),
        // body: JSON.stringify({ comment }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // location.reload();
        // need to verify
      } else {
        alert("Comment nada added");
      }
    }
  };
  
  
  const delCommentHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
             // location.reload();
        // need to verify
      } else {
        alert("Comment nada deleted");
      }
    }
  };
  

  
  document
    .querySelector(".new-comment")
    .addEventListener("submit", newCommentHandler);
  
  
  var buttons = document.querySelectorAll(".delete-comment");
  
  buttons.forEach(function (button) {
    button.addEventListener("click", delCommentHandler);
  });
  
