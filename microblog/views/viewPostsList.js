import viewPost from './viewPost.js'

function viewPostsList(element, posts) {
    const postsHTMLelements = posts.map( post => viewPost(post))
    const markUp = postsHTMLelements.join('')
    element.insertAdjacentHTML('afterbegin', markUp )
}

export default viewPostsList;