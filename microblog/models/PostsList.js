import viewUpdatePostsCount from '../views/viewPostsCount.js';
import { viewUpdatedPostPoints, viewNewPost} from '../views/viewPost.js'
import { viewPostConfirmation} from '../views/viewHelpers.js';

class PostsList {
    constructor(postsUrl) {
        this.postsUrl = postsUrl
    }

    getPosts = async function () {
        const result = await fetch(this.postsUrl)
        const posts = await result.json()
        this.posts = posts
        return posts
    }


    addPost = (title, text, author) => {

        const post = {
            id: `${Date.now()}`,
            title,
            author,
            text,
            points: 0,
        }

        fetch(this.postsUrl, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(post)
        })

        this.posts.push(post)

        viewNewPost(post)
        viewUpdatePostsCount(this.posts.length)
        viewPostConfirmation(post.id)
    }


    updatePostPoints = (id, description) => {
        const posts = [...this.posts]
        const indexUpdatePost = posts.findIndex(el => el.id === id)
        const updatedPost = posts[indexUpdatePost]

        switch (description) {
            case 'plus-btn':
                updatedPost.points += 10
                break
            case 'minus-btn':
                updatedPost.points -=5
                break
        }

        posts[indexUpdatePost] = updatedPost
        this.posts = posts

        fetch(`${this.postsUrl}/${id}`, { 
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PATCH',
            body: JSON.stringify({
                points: updatedPost.points
            })

         })

        viewUpdatedPostPoints(id, updatedPost.points)
    }


    deletePost = (id) => {
        let posts = [...this.posts]
        const indexRemovePost = posts.findIndex(el => el.id === id)
        posts.splice(indexRemovePost, 1)
        this.posts = posts

        const postToRemove = document.getElementById(id)
        postToRemove.remove()

        fetch(`${this.postsUrl}/${id}`, { method: 'DELETE' })

        viewUpdatePostsCount(this.posts.length)
    }


}

export default PostsList;