const colors = ['black', 'red', 'yellow', 'orange', 'blue','white', 'gray', 'marron', 'green', 'aqua']

const form = document.getElementById('form')
const input = document.getElementById('input')
const pageTitle = document.getElementById('page-title')
const colorPickList = document.querySelector('.color-pick')
const inputClearButton = document.getElementById('input-clearing')
const chosenColorText = document.getElementById('chosen-color')

colorsList = colors.map(el => `<li> ${el} </li>`).join('')
colorPickList.insertAdjacentHTML('afterbegin', colorsList)

let isColorChanged = false

function search(e) {
    e.preventDefault()
    if (colors.includes(input.value)) {
        pageTitle.textContent = input.value
        chosenColorText.textContent = input.value
        isColorChanged = true
    }
}

function clearInput(e) {
    input.value = ''
    pageTitle.textContent = 'Searchbox'
    chosenColorText.textContent = 'nothing so far.'
    chosenColorText.style.color = 'black'
}

function changeColorToGreen() {
	if (isColorChanged) {
        chosenColorText.style.color = 'green'
        isColorChanged = false
    }
}


form.addEventListener('submit', search)
inputClearButton.addEventListener('click', clearInput)
chosenColorText.addEventListener('click', changeColorToGreen)





/* TODO 
# 3. Searchbox
Create a simple searchbox for a example list of 10 colors names.

## TODO:
1. Create an input to allow user to type a search query
2. Display a list of colors.
3. Display the most accurate color in the page title of the browser's tab
4. Add a button to clear the searchbox
5. After clicking a search result color, change the color of it to green.
*/