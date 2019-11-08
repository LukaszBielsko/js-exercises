const body = document.querySelector('body')
const header = document.querySelector('h1')

const secretCode = 'injects3crets'
let enteredCode = ''
let timeoutID;


body.addEventListener('keydown', e => {
    clearTimeout(timeoutID)
    if (e.key === 'Escape') {
        enteredCode = ''
    } else if (isValidChar(e.keyCode)) {
        enteredCode += e.key
        if (secretCode.length === enteredCode.length &&
            secretCode.includes(enteredCode)) {
                fetchSecretMessages()
        }
        timeoutID = setTimeout(() => {
            enteredCode = ''
        }, 5 * 1000)
    }
})


const fetchSecretMessages = async () => {
    const response = await fetch('https://api.github.com/repos/elixir-lang/elixir/issues')
    const json = await response.json()
    const issues = json.slice(4)
    const issuesHTML = issues.map(issue =>
        `<div class="issue">
            <p>Author: ${issue.user.login}</p> 
            <p>Issue: ${issue.body}</p>
        </div>` )
    header.insertAdjacentHTML('afterend', issuesHTML.join(''))
    const issuesElements = document.querySelectorAll('.issue')
    setTimeout(() => issuesElements.forEach(el => el.remove()), 15 * 1000)
}


const isValidChar = (keyCode) => (
    (keyCode > 47 && keyCode < 58) ||    //numbers
    (keyCode > 64 && keyCode < 91)       //letters
)






// CODE LEFT FOR FUTURE REFRENCE 

// let cancelCode;
// window.cancelCode = cancelCode

// const callCancelCode = () => {
//     setTimeout(() => {
//         code = ''
//         console.log('time out')
//     }, 5 * 1000)
// }

// const removeCancelCode = func => {
//     console.log('clear time out')
//     console.log()
//     clearTimeout(func)
// }


// const callCancelCode = () => cancelCode
// const cancelCode = setTimeout(() => {
//         code = ''
//         console.log('time out')
//     }, 5 * 1000)



// keydown registers all keys pressed
// keypress will not register escape key as it is non character
// body.addEventListener('keypress', e => {
//     console.log(e.key)
//     if (e.key === "Escape") console.log('aha')
//     lettersArray += e.key
// } )


