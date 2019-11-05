import PostsList from './models/PostsList.js';
import viewPostsList from './views/viewPostsList.js'
import {renderLoader, clearLoader, clearInput, elements } from './views/viewHelpers.js'


// render post list 
const postList = new PostsList('http://localhost:3000/posts')
postList.getPosts().then(posts => {

    renderLoader(elements.container)

    viewPostsList(elements.container, posts)

    clearLoader()

    const buttonsDelete = document.querySelectorAll('.delete-btn')
    const buttonsUpdate = document.querySelectorAll('.plus-btn, .minus-btn')

    buttonsDelete.forEach(btn =>
        btn.addEventListener('click', (event) =>
            postList.deletePost(event.target.parentNode.id))
    )
    buttonsUpdate.forEach(btn =>
        btn.addEventListener('click', (event) => {
            postList.updatePostPoints
                (event.target.parentNode.id, event.target.className)
        }))

    elements.postsCountElement.innerText = postList.posts.length
})

// create new post 

elements.form.addEventListener('submit', (e) => {
    e.preventDefault()
    postList.addPost(
        elements.inputTitle.value,
        elements.inputText.value,
        elements.inputAuthor.value)
    clearInput()
})









/* TODO

# 2. Microblog
Create a simple microblog with list of posts and form to adding a new one.

## TODO:
1. Display mocked posts list
5. Import from external file(JSON) 3 default articles
6. Do not forget about possibility to remove posts
7. Display current count of articles
4. Create a simple voting system for each post.(5)+|(10)-
2. Create a form to adding a new post.
3. Add a notifications to inform a creator that post was added.


 */