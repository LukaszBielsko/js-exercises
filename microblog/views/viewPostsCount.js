
const postsCountElement = document.getElementById('number-articles')

function viewUpdatePostsCount(postsCount) {
	postsCountElement.innerText = postsCount
}

export default viewUpdatePostsCount;