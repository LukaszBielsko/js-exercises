export const elements = {
    container: document.querySelector('.posts-container'),
    postsCountElement: document.getElementById('number-articles'),
    form: document.getElementById('post-form'),
    inputTitle: document.getElementById('add-post-title'),
    inputText: document.getElementById('add-post-text'),
    inputAuthor: document.getElementById('add-post-author')
}


export function renderLoader(element) {
    const loading = document.createElement('div')
    loading.id = 'loader'
    loading.innerText = 'posts are loading'
    element.appendChild(loading)
}

export function clearLoader() {
    const loader = document.getElementById('loader')
    loader.remove()
}

export function clearInput() {
    document.querySelectorAll('input').forEach(el => el.value = '')
}

export function viewPostConfirmation(postId) {
    const post = document.getElementById(postId)

    const confirmationInfo = `<h3 class="highlight" 
        id="confirmation">Post added. You've done well!</h3`
    post.insertAdjacentHTML('afterbegin', confirmationInfo)
    const confirmationElement = document.getElementById('confirmation')

    post.classList.add('highlight')
    setTimeout(() => {
        document.getElementById(postId)
            .classList.add('no-highlight'),
            confirmationElement.remove()
    },
        2 * 1000)

}