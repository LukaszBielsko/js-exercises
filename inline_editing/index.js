const container = document.getElementById('container')
const paragraphToEdit = document.getElementById('textToEdit')

let inputField = document.createElement('input')
inputField.id = 'input'

paragraphToEdit.addEventListener('click', (e) => changeTextToInput(e))  

inputField.addEventListener('focusout', changeInputToText)
inputField.addEventListener('click', changeInputToText)
inputField.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) changeInputToText()
})

function changeTextToInput() {
    const textToEdit = event.target.innerHTML
    inputField.value = textToEdit
    paragraphToEdit.remove()
    container.appendChild(inputField)
    inputField.focus()
}


function changeInputToText() {
    const editedText = event.target.value
    paragraphToEdit.innerHTML = editedText
    container.appendChild(paragraphToEdit)
    inputField.remove()
}




/* TODO
# 1. Inline Editing
Create a component for live writing(inline input).


1. Create a placeholder text.
2. After clicking the placeholder, change it to the input.
3. After click, enter or focus out on input, change it to normal text and display typed value
*/
