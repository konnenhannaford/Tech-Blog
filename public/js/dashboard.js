const { post } = require("../../controllers");
const { create } = require("../../models/Users");

// commrnt     commrnt      comment
// join    
// login       login        login           login
// logout      logout       logout          logout
// post        createpost                   create
//                                          delete
//             update post  update post
//             dashboard    dashboard       dash
    


    const newPostHandler = async (event) => {
        event.preventDefault();
      
        const title = document.querySelector('#post-title').value.trim();
        const content = document.querySelector('#post-content').value.trim();
      
        if (title && content) {
          const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            console.log('post has been made');
            document.location.replace('/profile');
          } else {
            alert('Create post didnt work');
          }
        }
      };
      
      const delPostHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
      
          const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            console.log('post has been deleted');
            document.location.replace('/profile');
          } else {
            console.log('Delete post didnt work');
          }
        }
      };
      document
        .querySelector('.new-blog-form')
        .addEventListener('submit', newPostHandler);
      
        document
        .querySelector('.new-blog-form')
        .addEventListener('submit', delPostHandler);
      