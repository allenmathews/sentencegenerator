function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString;
}


let sentence = generateSentence("best fruits", ["apples", "oranges"])
console.log("hello")
let mySentence = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function() {
    mySentence.push(inputEl.value)
    console.log(mySentence)
    renderSentence()
})

function renderSentence() {
    let listSentence = ""
    for (let i = 0; i < mySentence.length; i++) {
        listSentence += "<li>" + mySentence[i] + "</li>"
    }
    ulEl.innerHTML = listSentence
}