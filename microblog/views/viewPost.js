export function viewNewPost(post){
    const container = document.querySelector('.posts-container')
    container.insertAdjacentHTML('beforeend',viewPost(post))
}


export function viewUpdatedPostPoints(id, points){
    const postToUpdate = document.getElementById(id)
    const pointsElement = postToUpdate.getElementsByClassName('points')[0]
    pointsElement.textContent = `Points: ${points}`
}



function viewPost(post) {
    const markUp = ` <div id="${post.id}" class="post">
                        <p><span class="title-span">${post.title}</span> by <span class="author-span">${post.author}</span></p>
                        <p>${post.text}</p>
                        <p class="points">Points: ${post.points}</p>
                        <button class="plus-btn">+10 pts</button>
                        <button class="minus-btn">-5 pts</button>
                        <button class="delete-btn">delete</button>
                    </div>`
    return markUp
}

export default viewPost;

