document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postsSection = document.getElementById('posts');

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        addPost(title, content);
        postForm.reset();
    });

    function addPost(title, content) {
        const post = document.createElement('article');
        post.classList.add('post');
        post.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <div class="post-controls">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        postsSection.appendChild(post);

        const editBtn = post.querySelector('.edit-btn');
        const deleteBtn = post.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => editPost(post, title, content));
        deleteBtn.addEventListener('click', () => deletePost(post));
    }

    function editPost(post, oldTitle, oldContent) {
        const newTitle = prompt('Edit Title:', oldTitle);
        const newContent = prompt('Edit Content:', oldContent);
        if (newTitle && newContent) {
            post.querySelector('h2').textContent = newTitle;
            post.querySelector('p').textContent = newContent;
        }
    }

    function deletePost(post) {
        postsSection.removeChild(post);
    }
});
