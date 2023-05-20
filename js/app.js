let $ = document

const inputBtn = $.getElementById('input-field')
const listNote = $.getElementById('listed')
const saveElem = $.getElementById('btn-save')
const deleteElem = $.getElementById('btn-delete')
const colorBox = $.querySelectorAll('.color-box')

let mainColor

listNote.addEventListener('click', function (event) {

    if (event.target.tagName === 'P') {
        event.target.parentElement.remove()
    }
})

colorBox.forEach(function (colorBox) {
    colorBox.addEventListener('click', function () {
        mainColor = colorBox.style.backgroundColor
        inputBtn.style.background = mainColor
    })
})

function resetStylesInput() {
    inputBtn.value = ''
    inputBtn.style.background = '#fff'
}

function removeDiv(event) {
    event.target.parentElement.remove()
}

function generateNewDiv() {
    let newDiv = $.createElement('div')
    newDiv.classList = 'card shadow-sm rounded'
    newDiv.style.backgroundColor = mainColor

    let newPara = $.createElement('p')
    newPara.classList = 'card-text p-3'
    newPara.innerHTML = inputBtn.value

    newDiv.append(newPara)

    listNote.append(newDiv)

    resetStylesInput()
}

inputBtn.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        generateNewDiv()
    }
})

saveElem.addEventListener('click', generateNewDiv)

deleteElem.addEventListener('click', resetStylesInput)