let text = prompt("Enter Text:")
let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
function VowelCounter() {
    let sum = 0
    for (i = 0; i < text; i++) {
        if (i == vowels) {
            sum++
        }

    }
    console.log(sum)
}
VowelCounter()