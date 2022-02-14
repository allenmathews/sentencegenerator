const largestCountries = ["China", "India", "USA"]
const bestFruits = ["Apples", "Bananas"]

function generateSentence(desc, arr) {
    if (largestCountries) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`The 3 largest countries are ${arr[i]}`)
        } else {
            for (let i = 0; i < arr.length; i++) {
                console.log(`The 2 best fruits are ${arr[i]}`)
            }
        }
    }
}

generateSentece()